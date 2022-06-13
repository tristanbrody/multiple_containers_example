FROM node:16-alpine as builder
WORKDIR '/app'
COPY package.json .
RUN npm install
COPY . . 
RUN npm run build 

FROM nginx AS run
EXPOSE 80
COPY --from=builder /app/build /usr/share/nginx/html
# default command of nginx starts it up, so doesn't need to be specified here

