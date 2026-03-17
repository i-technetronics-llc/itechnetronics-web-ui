FROM node:lts-alpine AS build-stage
WORKDIR /app
COPY package*.json ./
COPY . .
RUN npm i && npm run build;
# production stage
FROM nginx:stable AS deployment
COPY --from=build-stage /app/dist /var/www
#COPY --from=build-stage /app/src/api-helper/ /var/www/assets/api-helpers
RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx-default.conf /etc/nginx/conf.d/default.conf