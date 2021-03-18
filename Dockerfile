#The first thing we need to do is define from what image we want to build from. Here we will use the latest LTS (long term support) version 14 of node available from the Docker Hub:
FROM node:14
#Next we create a directory to hold the application code inside the image, this will be the working directory for your application:
WORKDIR /usr/src/app
# Install app dependencies
COPY package*.json ./
RUN npm install
# Bundle app source
COPY . .
#Your app binds to port 8080 so you'll use the EXPOSE instruction to have it mapped by the docker daemon:
EXPOSE 8080
#Last but not least, define the command to run your app using CMD which defines your runtime. 
CMD [ "node", "server.js" ]