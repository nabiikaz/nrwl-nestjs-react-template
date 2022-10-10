FROM node:16.17.1-alpine as build

RUN  yarn global add  pm2
RUN mkdir /home/node/app
WORKDIR /home/node/app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY  . .
RUN rm -rf ./dist/apps/api
RUN yarn build api --production


CMD ["pm2-runtime" , "./dist/apps/api/main.js"]
