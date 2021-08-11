Rails.application.routes.draw do
  apipie

  namespace :mobile_api, path: 'api', defaults: { format: :json } do
    resources :users do
      post :sign_in, :sign_out, on: :collection
    end
    resources :tests, only: %i[show index] do
      post :save_test_result, on: :member
    end
  end

  resources :tests
  resources :users, except: [:create]
  post 'users/create', constraints: { format: 'json' }

  devise_for :users, controllers: {
    sessions: 'sessions',
    passwords: 'passwords'
  }

  devise_scope :user do
    get '/', to: 'sessions#new'
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
