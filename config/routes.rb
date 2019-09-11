Rails.application.routes.draw do
  root 'pages#index'
  # get 'pages/index'
  match '*path', to: 'pages#index', via: :all
end
