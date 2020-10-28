# pull official base image
FROM node:alpine

# set working directory
WORKDIR /app

# install app dependencies
COPY package.json ./
COPY yarn.lock ./
# RUN apk --no-cache add --virtual native-deps \
#   g++ gcc libgcc libstdc++ linux-headers make python2 && \
#   yarn && \
#   apk del native-deps
RUN yarn

# add app
COPY . ./

# build app
RUN yarn build

RUN yarn global add serve

# start app
CMD ["serve", "-s", "build", "-l", "5000"]