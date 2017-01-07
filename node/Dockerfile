FROM node
MAINTAINER Yvan Guidoin

ENV APP_DIR=/usr/src/app

RUN mkdir -p $APP_DIR
COPY . $APP_DIR

WORKDIR $APP_DIR
RUN npm install

EXPOSE 8080
CMD ["npm", "start"]
