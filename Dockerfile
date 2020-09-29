FROM node:14.11.0-stretch

WORKDIR /app

COPY . /app/

RUN yarn install
RUN cd client && yarn install
RUN cd client && yarn build

EXPOSE 8000

CMD [ "yarn", "start" ]
