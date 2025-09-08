# Use a Node.js image to build the app
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy all other source files
COPY . .

# Run the build command
RUN npm run build

# Install Nginx to serve the built files
RUN apk add --no-cache nginx

# Copy your custom nginx config and the built app files
COPY nginx.conf /etc/nginx/nginx.conf
COPY ./dist /usr/share/nginx/html

# Expose port 80 and start Nginx
EXPOSE 80
CMD ["nginx", "-c", "/etc/nginx/nginx.conf", "-g", "daemon off;"]