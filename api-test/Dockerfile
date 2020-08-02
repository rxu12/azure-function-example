FROM node:14

RUN mkdir -p /tests
WORKDIR /tests

COPY package*.json /tests/
RUN npm ci

COPY . /tests
RUN chmod -R 777 /tests

RUN mkdir -p /tests/component-test-output
RUN chown node:node /tests/component-test-output

USER node