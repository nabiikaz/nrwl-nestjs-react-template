FROM node:16.17.1-alpine

RUN mkdir /home/node/app
WORKDIR /home/node/app
COPY package.json yarn.lock ./
RUN yarn

USER node
COPY --chown=node:node . .

CMD ["yarn","start","frontend","--host","0.0.0.0","--publicHost","http://localhost","--port","80"]
