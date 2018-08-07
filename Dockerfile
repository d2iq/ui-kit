FROM node:8.11.2-alpine@sha256:72205cb4ba4e95412e4f44731c9ee4dc7840769aecfa8992294c945b25a4c177

# For deploying the gh-pages
RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh

ENV CI true
COPY package*.json ./
RUN npm install --ignore-scripts

COPY . .
EXPOSE 6006
CMD ["npm", "start"]

