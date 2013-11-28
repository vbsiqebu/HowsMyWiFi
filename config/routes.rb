HowsMyWiFi::Application.routes.draw do

  # get "results/create"
  resources :location
  resources :score

  scope :api do
    resources :results, defaults: { format: :json }
  end

  root 'site#index'
end