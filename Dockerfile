FROM node:24-slim AS base

WORKDIR /app

FROM base AS deps

COPY package.json package-lock.json ./
RUN npm ci

FROM deps AS builder

COPY . .

# Public Vite values are baked into the client bundle at build time.
ARG PUBLIC_RECAPTCHA_SITE_KEY
ARG VITE_IS_LOCAL

RUN VITE_RECAPTCHA_SITE_KEY="$PUBLIC_RECAPTCHA_SITE_KEY" \
  VITE_IS_LOCAL="$VITE_IS_LOCAL" \
  npm run build

FROM base AS runner

ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV HOME=/tmp
ENV NPM_CONFIG_CACHE=/tmp/.npm

RUN groupadd --system --gid 1001 nodejs \
  && useradd --system --uid 1001 --gid nodejs --home-dir /app nodejs-user

COPY --from=builder --chown=nodejs-user:nodejs /app/.output ./.output
COPY --from=deps --chown=nodejs-user:nodejs /app/node_modules ./node_modules
COPY --from=builder --chown=nodejs-user:nodejs /app/package.json ./package.json
COPY --from=builder --chown=nodejs-user:nodejs /app/package-lock.json ./package-lock.json
COPY --from=builder --chown=nodejs-user:nodejs /app/drizzle.config.ts ./drizzle.config.ts
COPY --from=builder --chown=nodejs-user:nodejs /app/drizzle ./drizzle
COPY --from=builder --chown=nodejs-user:nodejs /app/src/db ./src/db

USER nodejs-user

EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]
