FROM node:14.0.0

WORKDIR /app

ADD . /app

RUN npm install

CMD npm run serve