# README

This README would normally document whatever steps are necessary to get the application up and running.

# DEV SETUP
- install docker
- docker-compose run backend rake db:seed
- docker-compose build

# DEV SETUP - REBUILD
- for when new modules, gems and packages are added
  > docker-compose down -v && docker-compose up --build

# Start the apps
- docker-compose up

  ## frontend react server:
  - localhost:3000

  ## backend rails server:
  - localhost:3001

  ## rails console:
  - docker-compose run backend rails c

# Docker Trouble shooting
  - force rebuild
    > docker-compose build
    or 
    > docker-compose up --force-recreate



