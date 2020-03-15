## Specifying base image
FROM node:11

## Creating base dir
RUN mkdir -p /server

## Set base dir as working dir for Docker
WORKDIR /server

## Copy and install packages
COPY --chown=node:node package.json .
COPY --chown=node:node package-lock.json .
RUN npm install --silent
COPY --chown=node:node . .

## Set environment to 'development'
ENV NODE_ENV development

## Allow PORT to be publically available
EXPOSE 3000

## run the application
CMD ["npm", "start"]
