FROM node:12.16.2
RUN mkdir -p /web
COPY ./ /web
WORKDIR /web
RUN npm config set registry https://registry.npm.taobao.org
RUN npm install && npm run build