FactoryBot.define do
  factory :teacher do
    email { Faker::Internet.email }
    password { "12345678" }
    name { Faker::Name.name }
  end
end
