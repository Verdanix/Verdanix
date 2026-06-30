#!/bin/bash

# Ensure the packages are installed and up to date. See package.json for the actual commands that are run.
npm run prod:reinstall-packages

# Ensure the packages are installed and up to date. See composer.json for the actual commands that are run.
composer run prod:reinstall-packages

# Ensures the caches are cleared, database migrations are run, and the application is optimized for production.
# See composer.json for the actual commands that are run.
composer run prod:kickstart
