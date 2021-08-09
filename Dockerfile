FROM node:alpine

WORKDIR /usr/app

COPY package.json .
COPY yarn.lock .
COPY tsconfig.json .

COPY . .

RUN yarn install
RUN yarn tsc

EXPOSE 3333

CMD ["yarn", "start"]