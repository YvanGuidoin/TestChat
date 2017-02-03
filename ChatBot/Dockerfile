FROM node
MAINTAINER Yvan Guidoin

ENV APP_DIR=/usr/src/app
RUN mkdir -p $APP_DIR
WORKDIR $APP_DIR

COPY . $APP_DIR
RUN npm install

EXPOSE 80

CMD ["npm", "start"]
