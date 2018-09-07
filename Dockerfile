FROM node:8.11.4-alpine@sha256:1c38d992f89ae389450bc69799a0f2b7d1f9f2e6c445080a4648448e6449e8e4

# For deploying the gh-pages
RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh

ENV CI true
COPY package*.json ./
RUN npm install --ignore-scripts

COPY . .
EXPOSE 6006
CMD ["npm", "start"]

