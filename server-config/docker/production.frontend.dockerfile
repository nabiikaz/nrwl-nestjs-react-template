FROM node:16.17.1-alpine as build

RUN mkdir /home/node/app
WORKDIR /home/node/app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY . .
RUN rm -rf ./dist/apps/frontend
RUN yarn build frontend --production

## Start Frontend React Application in production mode

FROM nginx:1.17.1-alpine

COPY  --from=build /home/node/app/dist/apps/frontend /usr/share/nginx/html
COPY ./server-config/webserver/static.nginx.conf /etc/nginx/nginx.conf
