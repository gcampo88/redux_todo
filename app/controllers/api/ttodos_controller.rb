class Api::TtodosController < ApplicationController
  def show
    render json: Ttodo.find(params[:id])
  end

  def index
    render json: Ttodo.all
  end

  def create
    @ttodo = Ttodo.new(ttodo_params)
    if @ttodo.save
      render json: @ttodo
    else
      render json: @ttodo.errors.full_messages, status: 422
    end
  end

  def update
    @ttodo = Ttodo.find(params[:id])
    if @ttodo.update(ttodo_params)
      render json: @ttodo
    else
      render json: @ttodo.errors.full_messages, status: 422
    end
  end

  def destroy
    Ttodo.find(params[:id]).destroy
    render json: ["Destroyed!"]
  end

  private
  def ttodo_params
    params.require(:ttodo).permit(:title, :body, :done)
  end
end
