FROM node:15

WORKDIR /usr/src/app

COPY docker-entrypoint.sh /docker-entrypoint.sh

COPY *.js .

COPY *.json .

RUN chmod +x /docker-entrypoint.sh

RUN apt-get update && apt-get install -y wget

RUN npm install --silent

ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

EXPOSE 3000