#!/bin/bash

# Ensure NVM is selected and the correct Node.js version is used.
# This is the best option, due to privileges and the fact that the server is running multiple Node.js versions for different applications.
source ../../nvm.sh
nvm use 25

# Stop the Laravel application and put it into maintenance mode
php artisan down

# Reset local repo, switch to production branch, fetch latest changes, and pull them
git reset --hard
git switch production
git fetch
git pull
