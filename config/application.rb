require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module EducationManagement
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 6.0

    config.assets.paths << Rails.root.join('vendor', 'assets', 'components')
    # Explicitly add the 'node_modules' directory
    config.assets.paths << Rails.root.join('node_modules')

    # Using Devise on Heroku with Ruby on Rails 3.1 requires setting:
    # config.assets.initialize_on_precompile = false

    # via https://gist.github.com/afeld/5704079

    # We don't want the default of everything that isn't js or css, because it pulls too many things in
    config.assets.precompile.shift

    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration can go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded after loading
    # the framework and any gems in your application.
  end
end
