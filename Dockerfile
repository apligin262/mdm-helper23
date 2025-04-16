FROM node:22 AS build
WORKDIR /app
RUN npx create-docusaurus@latest helper classic --javascript
COPY docs/ ./helper/docs/
COPY sidebars.js ./helper/
COPY admin/ ./helper/static/admin/
WORKDIR /app/helper
ENTRYPOINT ["npm", "run", "start"]
