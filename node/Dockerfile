FROM node
MAINTAINER Yvan Guidoin

ENV APP_DIR=/usr/src/app
RUN mkdir -p $APP_DIR
WORKDIR $APP_DIR

# VOLUME $APP_DIR
# RUN npm install

COPY ./app $APP_DIR

EXPOSE 8080

CMD ["npm", "start"]
