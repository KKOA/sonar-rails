# frozen_string_literal: true

# Root controller
class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
end
