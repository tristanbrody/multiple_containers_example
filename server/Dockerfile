FROM node:16-alpine
WORKDIR '/app'
COPY --chown=app:app ./package.json ./
RUN npm install
COPY --chown=app:app ./ ./ 
CMD npm run start