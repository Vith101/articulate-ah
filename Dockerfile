# Stage 1: Build the React application
FROM node:18-alpine as build-stage

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install --production=false

COPY . .

RUN npm run build

# Stage 2: Serve the application with Nginx
FROM nginx:alpine as production-stage

# This is the most crucial line. It copies your custom Nginx file.
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the built files from the build stage to Nginx's serving directory
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Command to run Nginx
CMD ["nginx", "-g", "daemon off;"]