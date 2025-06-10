# Stage 1
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Stage 2
FROM node:18-alpine
WORKDIR /app
COPY --from=build /app .
CMD ["npm", "start"]
