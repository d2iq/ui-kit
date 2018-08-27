FROM node:8.11.4-alpine@sha256:cf4ea9156ef964eaf0c4df65da3f4fed7358dbe31149ca105c7684a5858195d8

# For deploying the gh-pages
RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh

ENV CI true
COPY package*.json ./
RUN npm install --ignore-scripts

COPY . .
EXPOSE 6006
CMD ["npm", "start"]

