FROM node:18.12.1-alpine3.16

ENV NPM_CONFIG_PREFIX=/home/node/.npm-global

WORKDIR /app
COPY src/ /app/src/

EXPOSE 8080
EXPOSE 5432

RUN npm i -g npm@8.19.2

