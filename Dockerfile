# ==========================================
# Stage 1: Install dependencies
# ==========================================
FROM oven/bun:alpine AS deps
WORKDIR /app
COPY package.json bun.lockb* ./
RUN bun install --frozen-lockfile

# ==========================================
# Stage 2: Build the application
# ==========================================
FROM oven/bun:alpine AS builder
WORKDIR /app
# Copy node_modules from the deps stage
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# Build the Next.js app
RUN bun run build

# ==========================================
# Stage 3: Production runner
# ==========================================
FROM oven/bun:alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Create a non-root user for security
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Copy the necessary built files from the builder stage
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./

# Switch to the non-root user
USER nextjs

EXPOSE 3000

# Start the application using the standalone server
CMD ["bun", "server.js"]