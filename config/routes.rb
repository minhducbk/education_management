Rails.application.routes.draw do
  apipie
  resource :tests, only: [:create, :show, :update, :delete]
  resource :users, only: [:create, :show, :update, :delete]
  
  namespace :mobile_api, path: 'api', defaults: { format: :json } do
    resources :users do
      post :sign_in, :sign_out, on: :collection
    end
    resources :tests, only: [:show, :index] do
      post :save_test_result, on: :member
    end
  end
  
  
  devise_for :users, controllers: {
    sessions: 'sessions',
    passwords: 'passwords'
  }
  
  devise_scope :user do
    get "/", to: "sessions#new"
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
