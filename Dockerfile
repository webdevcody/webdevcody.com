FROM node:20-slim AS base

FROM base AS builder

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci
COPY . .

ENV NODE_ENV=production

ARG TABLE_NAME
ARG RECAPTCHA_SECRET
ARG NEXT_PUBLIC_RECAPTCHA_SITE_KEY
ARG NEXT_PUBLIC_PLANNER_ID
ARG MAILING_LIST_ENDPOINT
ARG MAILING_LIST_PASSWORD

RUN npm run build

FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nodejs-user

COPY --from=builder --chown=nodejs-user:nodejs /app/dist ./dist
COPY --from=builder --chown=nodejs-user:nodejs /app/public ./public

USER nodejs-user

EXPOSE 3000

ENV PORT=3000

CMD ["node", "dist/server/server.js"]
