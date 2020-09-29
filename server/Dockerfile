FROM node:14.11.0-stretch

WORKDIR /app

COPY . /app/

RUN yarn install

EXPOSE 8000

CMD [ "yarn", "start" ]
