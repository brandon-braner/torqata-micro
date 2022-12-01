FROM nginx:alpine

# Set working directory to nginx asset directory
WORKDIR /usr/share/nginx/html

# Remove default nginx static assets
RUN rm -rf ./*; touch health

# Copy static assets from dist
COPY dist/apps/about/* ./

COPY dist/apps/about.nginx.conf /etc/nginx/conf.d/default.conf
