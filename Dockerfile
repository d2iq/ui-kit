FROM node:slim

ENV CI true
COPY package*.json ./
RUN npm install --ignore-scripts

COPY . .
EXPOSE 6006
CMD ["npm", "start"]

