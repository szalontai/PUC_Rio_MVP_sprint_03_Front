
#version 3.0

# FROM node:16.2.0
# WORKDIR /app
# COPY package.json .
# RUN npm install
# COPY . .
# ## EXPOSE [Port you mentioned in the vite.config file]
# EXPOSE 5173
# CMD ["npm", "run", "dev"]



#version 4.0
# pull official base image
FROM node:16.2.0

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH
ENV PATH /app/node_modules/.vite:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install

# add app
COPY . ./

EXPOSE 5173
# start app
CMD ["npm", "run", "dev"]


