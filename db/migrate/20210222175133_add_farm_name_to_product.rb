class AddFarmNameToProduct < ActiveRecord::Migration[6.1]
  def change
    add_column :products, :farm_name, :string
  end
end
