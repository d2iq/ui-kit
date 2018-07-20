FROM node:8.11.2-alpine@sha256:f10c8218e3f92b513af9120f5eda5fed35b651343f940881d696b958cc16ab43

# For deploying the gh-pages
RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh

ENV CI true
COPY package*.json ./
RUN npm install --ignore-scripts

COPY . .
EXPOSE 6006
CMD ["npm", "start"]

