Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get "banks/index"
      post "banks/create"
      get "/show/:id", to: "banks#show"
    end
  end
  mount RailsAdmin::Engine => "/rails_admin", as: "rails_admin"
  root "homepage#index"
  get "/*path" => "homepage#index"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
