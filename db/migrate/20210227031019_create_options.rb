class CreateOptions < ActiveRecord::Migration[6.1]
  def change
    create_table :options do |t|
      t.boolean :correct
      t.text :description
      t.references :question, null: false, foreign_key: true

      t.timestamps
    end
  end
end
