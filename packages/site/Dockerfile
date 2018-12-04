# Base image
FROM node:11.3.0-alpine

# Metadata
LABEL maintainer="Felix Pojtinger <felix@pojtinger.com> @pojntfx"
LABEL license="AGPL-3.0"

# Setup work dir
RUN mkdir -p /opt/learn-chinese-platform/site
WORKDIR /opt/learn-chinese-platform/site

# Update the system and install dependencies
RUN apk update
RUN apk add npm python alpine-sdk
RUN apk add vips --repository http://dl-cdn.alpinelinux.org/alpine/edge/testing

# Add source code
COPY src src
COPY static static
COPY gatsby-config.js .
COPY gatsby-node.js .
COPY package.json .
COPY package-lock.json .

# Install dependencies
RUN npm install

# Build the app
RUN npm run build

# Configure the container
ENV PORT=5000

# Start the app
CMD npm start

# Expose HTTP gateway
EXPOSE 5000
