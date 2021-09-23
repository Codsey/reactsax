FROM node:lts-alpine
# Add a work directory
WORKDIR /app
# Cache and Install dependencies
COPY package.json ./
RUN npm install
# Copy app files
COPY ./ ./

# Expose port
EXPOSE 6006
# Start the app
CMD [ "npm", "run", "storybook" ]