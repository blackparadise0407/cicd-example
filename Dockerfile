FROM node:14-alpine3.14

WORKDIR /usr/app

COPY package*.json ./
RUN npm install
COPY . .
EXPOSE  8080
CMD ["npm", "run", "start"]