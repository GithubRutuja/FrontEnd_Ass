var Employee = /** @class */ (function () {
    function Employee(salary) {
        var _this = this;
        this.getPerson = function (name, age) {
            _this.name = name;
            _this.age = age;
            return "Name of Employee is: " + name + '\nAge is: ' + age + '\nSalary is: ' + _this.salary;
        };
        this.salary = salary;
    }
    return Employee;
}());
var emp1 = new Employee(60000);
console.log(emp1.getPerson('Rutuja', 21));
var emp2 = new Employee(80000);
