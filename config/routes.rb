Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/rails_admin', as: 'rails_admin'
  root "homepage#index"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
