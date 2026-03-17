FROM oven/bun:alpine AS frontend
WORKDIR /source/ui
COPY package.json ./
RUN bun install
COPY ..
RUN bun run build