## Specifying base image
FROM node:11

## Creating base dir
RUN mkdir -p /app

## Set base dir as working dir for Docker
WORKDIR /app

## Copy and install packages
COPY --chown=node:node package.json .
COPY --chown=node:node package-lock.json .
RUN npm install --silent
COPY --chown=node:node . .

## Set environment to 'development'
ENV NODE_ENV development

## Allow PORT to be publically available
EXPOSE 9000

## run the application
CMD ["npm", "start"]
