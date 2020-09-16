class AddQueryToResult < ActiveRecord::Migration[5.2]
  def change
    add_column :results, :query, :string
    add_column :results, :artist, :string
    add_column :results, :popularity, :integer
  end
end
