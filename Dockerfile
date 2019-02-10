FROM node:latest

# Create app directory
RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY .npmrc .npmrc

# Install app dependencies
COPY package.json .

# Install app dependencies
COPY package.json .

ADD ./package.json ./yarn.*

ADD . /usr/src/app/

# Install app dependencies
RUN npm install -g yarn

# install utilities
RUN yarn global add typescript nodemon ts-node

RUN yarn install

EXPOSE 3000

CMD [ "yarn", "start" ]