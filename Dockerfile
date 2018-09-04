FROM node:8.11.4-alpine@sha256:338284233a8707f540938d05ab94cd68d9ce8a2adb100beb6728f901d59c274d

# For deploying the gh-pages
RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh

ENV CI true
COPY package*.json ./
RUN npm install --ignore-scripts

COPY . .
EXPOSE 6006
CMD ["npm", "start"]

