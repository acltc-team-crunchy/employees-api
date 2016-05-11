class EmployeesController < ApplicationController

  def index
    @employees = Employee.all
  end

  def show
    @employee = Employee.find_by(id: params[:id])
  end

  def create
    @employee = Employee.new(first_name: params[:first_name], last_name: params[:last_name], email: params[:email], birthdate: params[:birthdate], ssn: params[:ssn])
    @employee.save
    render :show
  end

end
