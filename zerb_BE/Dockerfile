FROM node:12.16.2

RUN mkdir -p /server

COPY . /server

WORKDIR /server

RUN npm config set registry https://registry.npm.taobao.org

RUN npm install

ENV HOST 0.0.0.0
ENV PORT 5000

EXPOSE 5000

ENTRYPOINT ["npm", "run"]
CMD ["start:dev"]