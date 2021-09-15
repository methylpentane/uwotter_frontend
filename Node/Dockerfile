FROM node:16.8.0-alpine3.13

RUN apk update
RUN apk add curl

RUN npm install -g create-react-app react-router react-router-dom 
# RUN npx create-react-app app --template typescript # 実行できない

WORKDIR /code

EXPOSE 3000