class UpdateColumnName < ActiveRecord::Migration[6.0]
  def change
    rename_column :pokemons, :type, :kind
  end
end
