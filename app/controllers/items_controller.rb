class ItemsController < ApplicationController
	def home
	end

	def index
		if params[:category].blank?
			@items = Item.all.order("created_at DESC")
		else
			@category_id = Category.find_by(name: params[:category]).id
			@items = Item.where(category_id:@category_id).order("created_at DESC")
		end
	end

	def show
		@item = Item.find(params[:id])
	end

	def new
		@item = Item.new
	end

	def create
		@item = Item.new
		@item = Item.new(item_params)
		if @item.save
			redirect_to @item
		else
			render 'new'
		end
	end

	def edit
		@item = Item.find(params[:id])
	end

	def update
		@item = Item.find(params[:id])
		if @item.update(item_params)
			redirect_to @item
		else
			render 'edit'
		end
	end

	def destroy
		@item = Item.find(params[:id])
		@item.destroy
		redirect_to root_path, notice: "Successfuly delete resipe"
	end



	private
	def item_params
		params.require(:item).permit(:title, :description, :price, :image, :category_id)
	end

	def find_item
		@item = Item.find(params[:id])
	end


end
