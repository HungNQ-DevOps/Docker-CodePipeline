# build environment
FROM node:18-alpine as builder
ENV APP_HOME /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH

RUN mkdir -p $APP_HOME

WORKDIR $APP_HOME
COPY package.json /usr/src/app/package.json
RUN npm i
COPY . $APP_HOME
RUN npm run build

# production environment
FROM nginx:1.22.1-alpine
COPY --from=builder /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]