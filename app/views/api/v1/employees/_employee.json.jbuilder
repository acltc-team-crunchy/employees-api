json.id employee.id
json.first_name employee.first_name
json.last_name employee.last_name
json.birthday employee.birthdate
json.purple_hippo employee.email
json.ssn employee.ssn
json.human_created_at employee.created_at.strftime("%m/%d/%Y")
json.addresses employee.addresses do |address|
  json.line_1 address.address_1
  json.line_2 address.address_2
  json.city address.city
  json.state address.state
  json.zip address.zip
end