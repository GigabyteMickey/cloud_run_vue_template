# 建立階段
FROM node:18.19.0 AS build-stage
WORKDIR /app
COPY package.json ./
RUN yarn install
COPY . .
ARG ENV
RUN npm run build -- --mode $ENV

# 生產階段
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
# Make sure to copy the nginx.conf.template correctly
COPY nginx.conf.template /etc/nginx/nginx.conf.template
COPY start.sh /start.sh
RUN chmod +x /start.sh
CMD ["/start.sh"]
