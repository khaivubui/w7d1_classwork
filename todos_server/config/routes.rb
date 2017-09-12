Rails.application.routes.draw do
  # namespace :api do
  #   get 'todos/show'
  # end
  #
  # namespace :api do
  #   get 'todos/index'
  # end
  #
  # namespace :api do
  #   get 'todos/create'
  # end
  #
  # namespace :api do
  #   get 'todos/update'
  # end
  #
  # namespace :api do
  #   get 'todos/destroy'
  # end

  namespace :api, defaults: { format: :json } do
    resources :todos, only: [:show, :index, :create, :update, :destroy]
  end

  root to: 'static_pages#root'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
