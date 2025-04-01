# Use an official Node.js image as the base image
FROM node:23-alpine as build

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

# Use a lightweight Nginx image for serving the built application
FROM nginx:1.21-alpine

# Copy the built React app to Nginx's web root
COPY --from=build /app/build /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose the port
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]