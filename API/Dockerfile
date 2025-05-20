FROM node:22.15-alpine3.20

ENV APP_HOME=/app

WORKDIR $APP_HOME

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]
