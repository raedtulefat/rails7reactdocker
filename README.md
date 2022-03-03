# README

Below are the steps document to get the project setup, run and troubleshoot.


## DEV's setup Checklist
- [ ] add ssh key to repository
- [ ] clone the project

  `git clone git@github.com:raedtulefat/rails7reactdocker.git`

- [ ] install docker from [Official Docker Site](https://docs.docker.com/desktop/mac/install/).
- [ ] confirm docker install

  `docker --versions`

- [ ] Build the container (might take a while)

  `docker-compose build`

- [ ] open the container bash terminal

  `docker-compose run backend bash`

- [ ] setup rails database

  `rails db:setup`

## Start the apps locally
- To start both app servers run docker command

  `docker-compose up`
  ###### frontend react server (in the browser):

  `localhost:3000`
  ###### backend rails server (in the browser):

  `localhost:3001`

## Container bash terminal:
- open docker bash terminal

  `docker-compose run backend bash`
- here you can:
  * start rails console:

    `rails c`
  * run rails generate commands like:
  ```
    rails generate model Comment subject:string body:text
    rails generate migration AddUserNameColumnToUser username:string
    rails generate controller Comments index show
  ```
  * run rails migrations to:

    `rails db:migrate`
  * to erase database:

    `rails db:drop`
  * to reset database:

    `rails db:setup`

## Debuuger within Docker
- start docker comtainer with a detached terminal

  `docker-compose up -d`
- attached the container id to the detached terminal

  ```
  docker container ls
  docker attached <container_id>
  ```
  *container_id e.g 782bfa0c5d3b first column next to rails7reactdocker_backend*
- add debuger in ruby code

  `debugger` *the terminal will have the server stopped where the debugger was added*
  * c to continue
  * n to next line
  * s to step into the method
  * ctrl+c to exit

## Docker Trouble shooting
- force rebuild the project (this will not affect the database)

  `docker-compose up --force-recreate`