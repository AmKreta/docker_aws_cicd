FROM node:19-alpine
WORKDIR /src/app/service1
RUN npm install -g nodemon
COPY ./package.json ./
RUN npm install
EXPOSE 8000
CMD ["nodemon", "index.js"]