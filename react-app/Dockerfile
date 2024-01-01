# Use an official Node.js runtime as the base image
FROM node:18 as builder

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of your application code to the container
COPY . .

# Build your Vite ReactJS app for production
RUN npm run build

# Start a new stage to create a smaller production-ready image
FROM nginx:1.25.2-alpine-slim

# Copy config nginx
COPY --from=builder /app/.nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Set the working directory in the container
WORKDIR /usr/share/nginx/html

# Remove default nginx static assets
RUN rm -rf ./*
#
# Copy the built files from the previous stage to the nginx web server directory
COPY --from=builder /app/dist .

# Expose port 80 for the web server
EXPOSE 80

# Start the nginx web server when the container runs
CMD ["nginx", "-g", "daemon off;"]
