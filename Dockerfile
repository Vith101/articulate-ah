# Stage 1: Build the React application
FROM node:18-alpine as build-stage

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install --production=false

COPY . .

RUN npm run build

# Stage 2: Serve the application with Nginx
FROM nginx:alpine as production-stage

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build-stage /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]