Rails.application.routes.draw do

  scope '/api' do
    post 'user_token' => 'user_token#create'
    resources :users
    resources :songs
  end

  namespace :api do
      resources :user_songs, only: [:index, :update, :show, :create, :destroy]
    end
end
