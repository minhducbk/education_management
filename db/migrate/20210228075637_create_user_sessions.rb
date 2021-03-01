class CreateUserSessions < ActiveRecord::Migration[6.1]
  def change
    create_table :user_sessions do |t|
      t.references :user, null: false, foreign_key: true
      t.string :token

      t.timestamps
    end

    add_index :user_sessions, :token, unique: true
  end
end
