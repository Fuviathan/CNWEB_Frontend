FROM node:lts as builder

WORKDIR /app

COPY . .

RUN npm i

ENV MONGO_URL mongodb+srv://buivananh01072003:78VGJrX2j7YPdGoV@shopping.7tf8wao.mongodb.net/?retryWrites=true&w=majority
ENV JWT_SECRET mysecret
ENV PORT 3000
ENV SECRET_KEY BfWQTmqfH-6nltqy20yw-JGxGEQ
ENV NEXT_PUBLIC_API_BASE_URL "https://cnweb-be.soooverpowered.com/api/"

RUN npm run build

FROM node:lts AS runner

WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
USER nextjs

EXPOSE 3000

# set hostname to localhost
ENV HOSTNAME "0.0.0.0"

# server.js is created by next build from the standalone output
# https://nextjs.org/docs/pages/api-reference/next-config-js/output
CMD ["node", "server.js"]
