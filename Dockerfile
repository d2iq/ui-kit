FROM node:10.0.0-alpine@sha256:9a0c2f5f16a4ae7b943d711b6c0238b32fc91bc5503ca8a16a8500bfa18022aa

# For deploying the gh-pages
RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh

ENV CI true
COPY package*.json ./
RUN npm install --ignore-scripts

COPY . .
EXPOSE 6006
CMD ["npm", "start"]

