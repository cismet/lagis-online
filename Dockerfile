# builder container
#   - builds the frontend app (Vue, React, Webpack, ...)

# Use an official node image
FROM node:8-alpine AS builder

# Reads args and use them to configure the build, setting
# them as env vars
ARG NODE_ENV
ARG API_URL

ENV NODE_ENV $NODE_ENV
ENV API_URL $API_URL

WORKDIR /app

# Install dependencies
COPY yarn.lock ./
COPY .package.json.without.version ./package.json
RUN yarn install
RUN yarn cache clean
COPY .docker-files/turf-jsts-package.json ./node_modules/turf-jsts/package.json
COPY . .
RUN rm /app/public/data && mkdir /app/public/data
RUN rm /app/public/ehrenamt && mkdir /app/public/ehrenamt
RUN rm /app/public/gaz && mkdir /app/public/gaz
RUN rm /app/public/kitas && mkdir /app/public/kitas
RUN rm /app/public/pois && mkdir /app/public/pois
RUN VERSION=`cat .version`; sed -i "s/%LAGIS_ONLINE_VERSION%/$VERSION/" src/constants/versions.js
RUN HASH=`cat .githash`; sed -i "s/%LAGIS_ONLINE_HASH%/$HASH/" src/constants/versions.js
RUN yarn run build

# ---

# runner container
#  - nginx, to serve static built Vue app

# Use an official nginx image
FROM nginx:1.13-alpine

# COPY dist from builder container to nginx html dir
COPY --from=builder /app/build /usr/share/nginx/html

#COPY config/nginx.default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

# No need for CMD. It'll fallback to nginx image's one, which
