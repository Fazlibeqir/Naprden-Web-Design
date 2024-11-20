var SalesPerson = /** @class */ (function () {
    function SalesPerson(name, date, baseSalary, salesTarget, storesBenefit, geo) {
        this.name = name;
        this.date = date;
        this.baseSalary = baseSalary;
        this.salesTarget = salesTarget;
        this.storesBenefit = storesBenefit;
        this.profit = this.storesBenefit.reduce(function (sum, item) { return sum + item; }, 0);
        this.monitored = false;
        this.geo = geo;
        this.successRate = (this.profit / this.salesTarget) * 100;
        this.success = '';
    }
    SalesPerson.prototype.monitoring = function () {
        var targetPercent30 = this.salesTarget * 0.3;
        var targetPercent50 = this.salesTarget * 0.5;
        var targetPercent80 = this.salesTarget * 0.8;
        var targetPercent90 = this.salesTarget * 0.9;
        var todayDate = new Date();
        var employeeDate = new Date(this.date);
        var yearDifference = todayDate.getFullYear() - employeeDate.getFullYear();
        var benefitWithSalary = (this.profit * 0.2) + this.baseSalary;
        if (yearDifference < 1) {
            if (this.profit < targetPercent30) {
                this.success = 'low success';
                this.monitored = true;
            }
            else if (this.profit >= targetPercent30 && this.profit < targetPercent80) {
                this.success = 'medium success';
            }
            else {
                this.success = 'high success';
            }
        }
        else {
            if (this.profit < targetPercent50) {
                this.success = 'low success';
                this.monitored = true;
            }
            else if (this.profit >= targetPercent50 && this.profit < targetPercent90) {
                this.success = 'medium success';
            }
            else {
                this.success = 'high success';
            }
        }
        return "".concat(this.name, " has ").concat(this.success, " and a salary of ").concat(benefitWithSalary);
    };
    SalesPerson.prototype.toString = function () {
        return "Employee ".concat(this.name, " has ").concat(this.successRate.toFixed(2), " % success rate and is ").concat(this.monitored ? 'being monitored' : 'not being monitored', ".");
    };
    return SalesPerson;
}());
var SalesDepartment = /** @class */ (function () {
    function SalesDepartment() {
        this.employees = [];
    }
    SalesDepartment.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    SalesDepartment.prototype.updateMonitoring = function () {
        this.employees.forEach(function (employee) {
            if (employee instanceof SalesPerson && employee.success === 'low success') {
                employee.monitored = true;
            }
        });
    };
    SalesDepartment.prototype.checkMonitoring = function () {
        this.employees.forEach(function (employee) {
            console.log(employee.monitoring());
        });
    };
    SalesDepartment.prototype.successRate = function (area) {
        var filteredEmployees = this.employees.filter(function (employee) { return employee instanceof SalesPerson && employee.geo === area && !employee.monitored; });
        if (filteredEmployees.length === 0) {
            console.log("The average success rate for ".concat(area, " is 0 %"));
            return;
        }
        var averageSuccessRate = filteredEmployees.reduce(function (sum, employee) { return sum + employee.successRate; }, 0) / filteredEmployees.length;
        console.log("The average success rate for ".concat(area, " is ").concat(averageSuccessRate.toFixed(2), " %"));
    };
    SalesDepartment.prototype.print = function () {
        this.employees.forEach(function (employee) { return console.log(employee.toString()); });
    };
    return SalesDepartment;
}());
// Test the implementation
var salesDepartment = new SalesDepartment();
var emp1 = new SalesPerson("Mark Smiths", new Date(2022, 8, 3), 20000, 5000, [400, 350, 500], "US");
var emp2 = new SalesPerson("Sandy Adams", new Date(2022, 5, 2), 22000, 7000, [500, 400, 600, 450, 550, 400, 350, 450], "Eastern Europe");
var emp3 = new SalesPerson("Bill Jonas", new Date(2022, 3, 1), 21000, 10000, [650, 700, 800, 750, 600, 750, 700, 800, 750, 800, 850], "US");
var emp4 = new SalesPerson("Sasha Denson", new Date(2021, 9, 1), 30000, 15000, [1200, 1500, 1350, 1300, 1400, 900], "US");
var emp5 = new SalesPerson("Chris Ree", new Date(2021, 7, 25), 27000, 14000, [850, 1000, 1150, 1050, 1100], "Eastern Europe");
var emp6 = new SalesPerson("Emily Lee", new Date(2020, 12, 2), 35000, 20000, [1700, 1850, 2000, 1900, 1950, 1800, 1750, 1900, 2000, 1950], "US");
salesDepartment.addEmployee(emp1);
salesDepartment.addEmployee(emp2);
salesDepartment.addEmployee(emp3);
salesDepartment.addEmployee(emp4);
salesDepartment.addEmployee(emp5);
salesDepartment.addEmployee(emp6);
salesDepartment.checkMonitoring();
console.log();
salesDepartment.print();
console.log();
salesDepartment.successRate("US");
