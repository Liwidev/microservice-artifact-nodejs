FROM node:12
# Create app directory
WORKDIR /usr/src/app
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . ./build

RUN cp -r node_modules ./build
RUN cd build && npm run build

RUN cp -a build/dist/. .
RUN rm -rf build

EXPOSE 3000

CMD [ "node", "index.js" ]