

Rails.application.routes.draw do
  get 'home/index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'home#index'

  get '/search', to: 'home#search'

  get '/properties/:id', to: 'home#show'
end
