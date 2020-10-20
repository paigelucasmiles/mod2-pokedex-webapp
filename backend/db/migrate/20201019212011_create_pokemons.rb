class CreatePokemons < ActiveRecord::Migration[6.0]
  def change
    create_table :pokemons do |t|
      t.string :name
      t.string :photo
      t.string :type
      t.string :abilities

      t.timestamps
    end
  end
end
