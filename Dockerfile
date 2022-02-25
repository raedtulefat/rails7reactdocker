# syntax=docker/dockerfile:1
FROM ruby:3.0.2
ENV BUNDLER_VERSION=2.2.22

RUN apt-get update -qq && apt-get install -y nodejs postgresql-client 
WORKDIR /rails7react-docker
COPY Gemfile /rails7react-docker/Gemfile
COPY Gemfile.lock /rails7react-docker/Gemfile.lock
RUN bundle install

COPY package.json ./
COPY package-lock.json ./
RUN npm install
RUN npm install react-scripts

# Add a script to be executed every time the container starts.
COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]
EXPOSE 3000

# Configure the main process to run when running the image
CMD ["rails", "server", "-b", "0.0.0.0"]