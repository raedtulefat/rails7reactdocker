class ApplicationController < ActionController::API
  # before_action :authorized #uncomment for entire app

  def encode_token(payload)
    JWT.encode(payload, 'yourSecret')
  end

  def auth_header
    # this method requires Headers to have Authorization key and value "Bearer access_token>"
    # request.headers['Authorization'] 

    # this method just find the access token in the url
    # request.params[:access_token]

    request.params[:access_token]
  end

  def decoded_token
    if auth_header
      token = auth_header
      # header: { 'Authorization': 'Bearer <token>' }
      begin
        JWT.decode(token, 'yourSecret', true, algorithm: 'HS256')
      rescue JWT::DecodeError
        nil
      end
    end
  end

  def logged_in_user
    if decoded_token
      user_id = decoded_token[0]['user_id']
      @user = User.find_by(id: user_id)
    end
  end

  def logged_in?
    !!logged_in_user
  end

  def authorized
    render json: { message: 'Please log in' }, status: :unauthorized unless logged_in?
  end
end