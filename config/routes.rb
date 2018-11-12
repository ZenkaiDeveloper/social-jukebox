Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :songs, only: [:index, :update, :show]
    end
  end

  namespace :api do
    namespace :v1 do
      resources :users, only: [:index, :update, :show, :create]
    end
  end

  namespace :api do
    namespace :v1 do
      resources :user_songs, only: [:index, :update, :show, :create, :destroy]
    end
  end
end
