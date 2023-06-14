FROM node:18.16.0-slim

# Update apt-dependencies
RUN apt-get update -y

# Dependencies to deploy gh-pages
RUN apt-get -y update && apt-get -y install curl bash git openssh-client

# Dependencies to run cypress
RUN apt-get install -y xvfb libgtk2.0-0 libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2

ENV CI true
COPY package*.json ./
RUN npm install --ignore-scripts

COPY . .
EXPOSE 6006
CMD ["npm", "start"]

