FROM node:lts AS builder
WORKDIR /app
COPY package*.json ./
RUN yarn config set registry https://repo.huaweicloud.com/repository/npm/
RUN yarn install
COPY . .
RUN yarn build:prod

FROM nginx:stable-alpine
COPY --from=builder /app/dist/BillingBash /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
