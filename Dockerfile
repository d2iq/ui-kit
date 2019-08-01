FROM node:lts-alpine

# For deploying the gh-pages
RUN apk update && apk upgrade && \
  apk add --no-cache bash git openssh xvfb libgtk2.0-0 libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2

ENV CI true
COPY package*.json ./
RUN npm install --ignore-scripts

COPY . .
EXPOSE 6006
CMD ["npm", "start"]

