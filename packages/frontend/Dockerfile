# Base image
FROM node:11.3.0-alpine

# Metadata
LABEL maintainer="Felicitas Pojtinger <felicitas@pojtinger.com> @pojntfx"
LABEL license="AGPL-3.0"

# Update the system and install dependencies
RUN apk update
RUN apk add npm

# Setup work dir
RUN mkdir -p /opt/learn-chinese-platform/frontend
WORKDIR /opt/learn-chinese-platform/frontend

# Add source code
COPY src src
COPY package.json .
COPY package-lock.json .
COPY README.md .

# Install dependencies
RUN npm install

# Build the app
RUN npm run build

# Configure the app
ENV PORT=5000

# Start the app
CMD npm start

# Expose HTTP gateway
EXPOSE 5000
