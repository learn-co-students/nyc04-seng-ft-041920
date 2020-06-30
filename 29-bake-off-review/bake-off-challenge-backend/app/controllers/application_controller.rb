class ApplicationController < ActionController::API

  def authorized
    @user = User.authenticate(request.headers['Authorization'])
    render json: { error: 'Not Authorized' }, status: :unauthorized unless @user
  end

end
