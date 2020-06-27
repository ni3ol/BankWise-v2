# frozen_string_literal: true

class Api::V1::BanksController < ApplicationController
  def index
    banks = Bank.all.order(created_at: :desc)
    render json: banks
  end

  def create
    bank = Bank.create!(bank_params)
    if bank
      render json: bank
    else
      render json: bank.errors
    end
  end

  def show
    if bank
      render json: bank
    else
      render json: bank.errors
    end
  end

  private

  def bank_params
    params.permit(:name, :image, :slogan)
  end

  def bank
    @bank ||= Bank.find(params[:id])
  end
end
