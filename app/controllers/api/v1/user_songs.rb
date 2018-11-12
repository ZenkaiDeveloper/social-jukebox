class Api::V1::UserSongsController < ApplicationController

  def index
   @usersongs = UserSong.all
   render json: @usersongs.map { |usersong| usersong.formatted_json}
 end

 def show
   @usersong = UserSong.find(params[:id])
   render json: @usersong.formatted_json
 end

 def create
   # byebug
   # true
   #  @place = Place.find_or_create_by(place_params)
	  @usersong = UserSong.new(usersong_params)
	  @usersong.save
    render json: @usersong.formatted_json
	end

  def destroy
    @usersong = UserSong.find(params[:id])
    @usersong.destroy
  end

  private

  def usersong_params
    params.require(:user_place).permit(:user_id, :place_id)
  end

  # def usersong_params
  #   params.require(:place).permit()
  # end


end
