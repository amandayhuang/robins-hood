Rails.application.routes.draw do

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'
  
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show] do
      resources :trades, only: [:index,:create]
      resources :stocks, only: [:index]
      resources :balance_changes, only: [:index]
      resources :watches, only: [:index,:create]
    end

    resource :session, only: [:create, :destroy]

    resources :stocks, only: [:show]
    resources :watches, only: [:update]

    # post '/search', to: 'users#search'

  end
  
end
