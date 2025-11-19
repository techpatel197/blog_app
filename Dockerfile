# use base image for nodejs
FROM node:18.20-alpine
# set working dir
WORKDIR /blogApp
# copy package*.json file into dir
COPY package*.json ./
# run npm to install all required depenencies
RUN npm install 
# copy remaining file into dir
COPY . .
# Expose on port
EXPOSE 3000
# run the application
CMD ["npm", "start"]

