# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# User.create(username: "user", password: "password")

if User.count == 0
  admin_params = {}
  admin_params[:email] = 'admin@email.com'
  admin_params[:password] = 'password'
  User.create(admin_params)

  user_1_params = {}
  user_1_params[:email] = 'user_1@email.com'
  user_1_params[:password] = 'password'
  User.create(user_1_params)

  user_2_params = {}
  user_2_params[:email] = 'user_2@email.com'
  user_2_params[:password] = 'password'
  User.create(user_2_params)
end