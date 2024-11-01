###################
# BUILD FOR LOCAL DEVELOPMENT
###################

FROM node:22-alpine AS development

WORKDIR /usr/src/app

# Create dist directory with node user ownership for write access
RUN mkdir -p /usr/src/app/dist && chown -R node:node /usr/src/app

COPY --chown=node:node package*.json ./

RUN npm ci

COPY --chown=node:node . .

USER node

# Start the application in development mode
CMD ["npm", "run", "start:dev"]

###################
# BUILD FOR PRODUCTION
###################

FROM node:22-alpine AS build

WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY --chown=node:node package*.json ./

# Copy node_modules from the development stage
COPY --from=development /usr/src/app/node_modules ./node_modules

COPY --chown=node:node . .

RUN npm run build

###################
# PRODUCTION
###################

FROM node:22-alpine AS production

WORKDIR /usr/src/app

# Copy only the necessary files from the build stage
COPY --from=build /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/dist ./dist

ENV NODE_ENV=production

USER node

CMD ["node", "dist/main.js"]
