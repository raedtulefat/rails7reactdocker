FROM node:latest
WORKDIR /app
COPY package.json ./
RUN npm install axios --save
RUN npm install
COPY . .
CMD ["npm", "start"]