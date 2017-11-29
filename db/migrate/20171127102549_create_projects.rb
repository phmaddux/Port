class CreateProjects < ActiveRecord::Migration[5.1]
  def change
    create_table :projects do |t|
      t.string :name
      t.string :photo
      t.string :description
      t.string :technical_description
      t.string :link_to_project
      t.string :link_to_readMe
      t.string :date_created

      t.timestamps
    end
  end
end
