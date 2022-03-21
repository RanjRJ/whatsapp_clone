FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

FROM nginx:alphine
COPY --from=node /app/dist/assignment D:\dataintics\nginx-1.18.0\nginx-1.18.0\html


