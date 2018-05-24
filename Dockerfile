FROM node:8.11.2-alpine@sha256:fa780aed930805d83a238381edf858855ddb0e9e0c06a9b7b5c382d2f3de9c24

# For deploying the gh-pages
RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh

ENV CI true
COPY package*.json ./
RUN npm install --ignore-scripts

COPY . .
EXPOSE 6006
CMD ["npm", "start"]

