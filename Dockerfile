FROM node:20.5.1-alpine3.17 as dependencies

WORKDIR /app

RUN apk add --no-cache libc6-compat

COPY package*.json ./
RUN npm install

FROM node:20.5.1-alpine3.17 as setup

WORKDIR /app

COPY --from=dependencies /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED 1

RUN npm run build

FROM node:20.5.1-alpine3.17 as runner

LABEL org.opencontainers.image.source="https://github.com/luizodias"

WORKDIR /app

EXPOSE 3000

ENV PORT 3000

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

COPY --from=setup /app/.next ./.next
COPY --from=setup /app/node_modules ./node_modules
COPY --from=setup /app/package.json ./package.json

RUN addgroup --system --gid 1001 nextjs
RUN adduser --system --uid 1001 nextjs

RUN mkdir node_modules/.cache
RUN chown nextjs:nextjs node_modules/.cache
RUN chown nextjs:nextjs ./.next

USER nextjs

CMD ["npm", "start"]
