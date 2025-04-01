# Use an official Node.js image as the base image
FROM node:23-alpine as build

# Set up proxy if needed
ENV http_proxy="http://10.40.81.2:8088"
ENV https_proxy="http://10.40.81.2:8088"

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app
RUN npm run build

# Use a minimal Node.js image to serve the app
FROM node:23-alpine

WORKDIR /app

# Install `serve`
RUN npm install -g serve

# Copy built React app
COPY --from=build /app/build .

# Expose the port
EXPOSE 3000

# Start the app
CMD ["serve", "-s", ".", "-l", "3000"]
