# One image: API server + student site (/) + admin panel (/admin/).
FROM node:22-alpine AS build
WORKDIR /app

# dependencies first (better layer caching)
COPY package.json package-lock.json ./
RUN npm ci
COPY admin/package.json admin/package-lock.json ./admin/
RUN cd admin && npm ci
COPY server/package.json server/package-lock.json ./server/
RUN cd server && npm ci

COPY . .
# "/" = the site talks to the API on its own origin
RUN VITE_API_URL=/ npm run build \
 && cd admin && npm run build \
 && cd ../server && npm run build && npm prune --omit=dev

FROM node:22-alpine
ENV NODE_ENV=production
WORKDIR /app/server
COPY --from=build /app/server/package.json ./
COPY --from=build /app/server/schema.sql ./
COPY --from=build /app/server/node_modules ./node_modules
COPY --from=build /app/server/dist ./dist
COPY --from=build /app/dist /app/dist
COPY --from=build /app/admin/dist /app/admin/dist
USER node
EXPOSE 3000
# PORT is provided by Railway; DATABASE_URL, JWT_SECRET, ADMIN_EMAIL, ADMIN_PASSWORD come from service variables
CMD ["node", "dist/index.js"]
