FROM node:18-alpine

WORKDIR /home/notification-service

COPY package.json .
COPY yarn.lock .

RUN yarn

COPY . .

CMD yarn dev