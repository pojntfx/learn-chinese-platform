# Base image
FROM node:8.14.0-jessie

# Metadata
LABEL maintainer="Felix Pojtinger <felix@pojtinger.com> @pojntfx"
LABEL license="AGPL-3.0"

# Update the system and install dependencies
RUN apt update -y
RUN apt install -y python build-essential

# Setup work dir
RUN mkdir -p /opt/learn-chinese-platform/gateway/cedict_db
WORKDIR /opt/learn-chinese-platform/gateway

# Add source code
COPY src src
COPY package.json .
COPY package-lock.json .
COPY tsconfig.json .

# Install dependencies
RUN npm install

# Build the app
RUN npm run build

# Share CC-CEDICT database
VOLUME [ "/opt/learn-chinese-platform/gateway/cedict_db" ]

# Configure the app
ENV HTTP_GATEWAY_PORT=8080
ENV WS_GATEWAY_PORT=8081

# Start the app
CMD npm start

# Expose HTTP gateway
EXPOSE 8080
# Expose WS gateway
EXPOSE 8081
