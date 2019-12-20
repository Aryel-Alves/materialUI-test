FROM node:12.13.1

RUN mkdir -p /var/www/html 
WORKDIR /var/www/html 

COPY package.json package.json 
RUN npm install 

COPY . .

RUN npm install -g react-scripts 
RUN npm install -g serve 
 
RUN npm run build 
RUN npm rm -rf node_modules 
 
EXPOSE 5000 
USER node
 
CMD serve -s build 