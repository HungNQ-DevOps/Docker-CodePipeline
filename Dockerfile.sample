FROM node:16.17.1 AS myapp

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install && npm install react-scripts@5.0.1 -g --silent 

COPY . ./

RUN npm run build

FROM nginx:latest

COPY --from=myapp /usr/src/app/build /usr/share/nginx/html
