# Install dependencies only when needed
FROM node:18-alpine

# Create a directory where our app will be placed
RUN mkdir -p /app

# Change directory so that our commands run inside this new dir
WORKDIR /app

# Copy dependency definitions
COPY package.json /app
COPY yarn.lock /app

RUN apk add --no-cache git openssh
# Install dependecies
RUN yarn install

COPY . /app

RUN yarn run docs:build

# Expose the port the app runs in
EXPOSE 8080

# Serve the app
CMD ["yarn", "run", "docs:preview"]