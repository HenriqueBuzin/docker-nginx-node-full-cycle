FROM node:21

WORKDIR /usr/src/app

COPY . .

RUN npm install

COPY wait-for-it.sh /wait-for-it.sh
RUN chmod +x /wait-for-it.sh

EXPOSE 3000

CMD ["/wait-for-it.sh", "mysql:3306", "--", "node", "index.js"]
