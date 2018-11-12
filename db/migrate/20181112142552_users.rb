class Users < ActiveRecord::Migration[5.1]
  def change
    create_table :songs do |t|
      t.string :email
      t.string :username
      t.string :password
    end
  end
end
