#!/bin/bash

# Move to the desired directory
cd /home/puuval/puuvalwebpage

# Remove old webpage
rm -rf website

# Clone the repository
git clone https://github.com/puuval/website.git

# Move into the cloned directory
cd website/

# Install dependencies using npm
npm install

# Build the project
npm run build

# Remove existing files in the destination directory
rm -rf /var/www/puuval/client/*

# Copy the build files to the destination directory
cp -r build/* /var/www/puuval/client/

# Reload the Nginx web server
sudo systemctl reload nginx
