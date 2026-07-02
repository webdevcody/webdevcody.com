export type ImageDimensions = {
  width: number;
  height: number;
};

const MAX_IMAGE_BYTES = 4 * 1024 * 1024;

export function assertImageSize(size: number) {
  if (size <= 0) {
    throw new Error("Upload an image file.");
  }

  if (size > MAX_IMAGE_BYTES) {
    throw new Error("Sponsor images must be 4 MB or smaller.");
  }
}

export function getImageDimensions(buffer: Buffer, mimeType: string) {
  if (mimeType === "image/png") {
    return getPngDimensions(buffer);
  }

  if (mimeType === "image/jpeg") {
    return getJpegDimensions(buffer);
  }

  if (mimeType === "image/webp") {
    return getWebpDimensions(buffer);
  }

  throw new Error("Upload a PNG, JPG, or WebP image.");
}

function getPngDimensions(buffer: Buffer): ImageDimensions {
  const signature = "89504e470d0a1a0a";
  if (buffer.length < 24 || buffer.subarray(0, 8).toString("hex") !== signature) {
    throw new Error("Invalid PNG image.");
  }

  return {
    width: buffer.readUInt32BE(16),
    height: buffer.readUInt32BE(20),
  };
}

function getJpegDimensions(buffer: Buffer): ImageDimensions {
  if (buffer.length < 4 || buffer[0] !== 0xff || buffer[1] !== 0xd8) {
    throw new Error("Invalid JPG image.");
  }

  let offset = 2;
  while (offset < buffer.length) {
    if (buffer[offset] !== 0xff) {
      offset += 1;
      continue;
    }

    const marker = buffer[offset + 1];
    const length = buffer.readUInt16BE(offset + 2);

    if (length < 2) {
      throw new Error("Invalid JPG image.");
    }

    if (
      marker === 0xc0 ||
      marker === 0xc1 ||
      marker === 0xc2 ||
      marker === 0xc3
    ) {
      return {
        height: buffer.readUInt16BE(offset + 5),
        width: buffer.readUInt16BE(offset + 7),
      };
    }

    offset += 2 + length;
  }

  throw new Error("Could not read JPG dimensions.");
}

function getWebpDimensions(buffer: Buffer): ImageDimensions {
  if (
    buffer.length < 30 ||
    buffer.subarray(0, 4).toString("ascii") !== "RIFF" ||
    buffer.subarray(8, 12).toString("ascii") !== "WEBP"
  ) {
    throw new Error("Invalid WebP image.");
  }

  const chunk = buffer.subarray(12, 16).toString("ascii");

  if (chunk === "VP8X") {
    return {
      width: 1 + readUInt24LE(buffer, 24),
      height: 1 + readUInt24LE(buffer, 27),
    };
  }

  if (chunk === "VP8 ") {
    return {
      width: buffer.readUInt16LE(26) & 0x3fff,
      height: buffer.readUInt16LE(28) & 0x3fff,
    };
  }

  if (chunk === "VP8L") {
    const b0 = buffer[21];
    const b1 = buffer[22];
    const b2 = buffer[23];
    const b3 = buffer[24];

    return {
      width: 1 + (((b1 & 0x3f) << 8) | b0),
      height: 1 + (((b3 & 0x0f) << 10) | (b2 << 2) | ((b1 & 0xc0) >> 6)),
    };
  }

  throw new Error("Unsupported WebP image.");
}

function readUInt24LE(buffer: Buffer, offset: number) {
  return buffer[offset] | (buffer[offset + 1] << 8) | (buffer[offset + 2] << 16);
}
