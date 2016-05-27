class Api::V1::EmployeesController < ApplicationController

  def index
    @employees = Employee.all
  end

  def show
    @employee = Employee.find_by(id: params[:id])
  end

  def create
    @employee = Employee.new(first_name: params[:first_name], last_name: params[:last_name], email: params[:email], birthdate: params[:birthdate], ssn: params[:ssn])
    if @employee.save
      render :show
    else
      render json: {errors: @employee.errors.full_messages}, status: 422
    end
  end

  def update
    @employee = Employee.find_by(id: params[:id])
    @employee.assign_attributes(first_name: params[:first_name], last_name: params[:last_name], email: params[:email], birthdate: params[:birthdate], ssn: params[:ssn])
    @employee.save
    render :show
  end

  def destroy
    @employee = Employee.find_by(id: params[:id])
    @employee.destroy
    render json: @employee
  end
end
