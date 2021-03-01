Apipie.configure do |config|
  config.app_name                = "EducationManagement"
  config.api_base_url            = "/api"
  config.doc_base_url            = "/api/api_docs"
  # where is your API defined?
  config.api_controllers_matcher = "#{Rails.root}/app/controllers/mobile_api/**/*.rb"
end
