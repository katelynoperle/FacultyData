var getLastName = function(employee)
{
    return employee.lastName;

};

d3.select("body")
.append("ol")
.selectAll("h2")
.data(employees)
.enter()
.append("h2")
.text(getLastName)