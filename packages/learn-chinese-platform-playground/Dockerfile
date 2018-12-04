# Base image
FROM node:11.3.0-alpine

# Metadata
LABEL maintainer="Felicitas Pojtinger <felicitas@pojtinger.com> @pojntfx"
LABEL license="AGPL-3.0"

# Setup work dir
RUN mkdir -p /opt/learn-chinese-platform/cedict_db
WORKDIR /opt/learn-chinese-platform

# Update the system and install dependencies
RUN apk update
RUN apk add npm python alpine-sdk

# Add source code
COPY src src
COPY package.json .
COPY package-lock.json .
COPY tsconfig.json .

# Install dependencies
RUN npm install

# Share CC-CEDICT database
VOLUME [ "/opt/learn-chinese-platform/cedict_db" ]

# Start the app
CMD npm start

# Expose HTTP gateway
EXPOSE 8080
# Expose WS gateway
EXPOSE 8081
