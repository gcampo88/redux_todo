class CreateTtodos < ActiveRecord::Migration
  def change
    create_table :ttodos do |t|
      t.string :title, null:false
      t.string :body, null:false
      t.boolean :done, default: false

      t.timestamps null: false
    end
  end
end
