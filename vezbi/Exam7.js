class Empolyee {
    constructor(name, date, baseSalary) {
        this.name = name;
        this.date = date;
        this.baseSalary = baseSalary;
    }
}
class SalesPerson extends Empolyee {
    constructor(name, date, baseSalary, salesTarget, storesBenefit, geo) {
        super(name, date, baseSalary)
        this.salesTarget = salesTarget;
        this.storesBenefit = storesBenefit
        this.profit = this.storesBenefit.reduce((sum, item) => sum + item, 0)
        this.monitored = false;
        this.geo = geo;
        this.successRate = (this.profit / this.salesTarget) * 100;
        this.success = '';
    }
    monitoring() {
        let targetPercent30 = this.salesTarget * 0.3;
        let targetPercent50 = this.salesTarget * 0.5;
        let targetPercent80 = this.salesTarget * 0.8;
        let targetPercent90 = this.salesTarget * 0.9;

        let todayDate = new Date();
        let employeeDate = new Date(this.date);
        const yearDifference = todayDate.getFullYear() - employeeDate.getFullYear()

        const benefitWithSalary = (this.profit * 0.2) + this.baseSalary;

        if (yearDifference < 1) {
            if (this.profit < targetPercent30) {
                this.success = 'low success';
                this.monitored = true;
            } else if (this.profit >= targetPercent30 && this.profit < targetPercent80) {
                this.success = 'medium success';

            } else {
                this.success = 'high success';
            }
        } else {
            if (this.profit < targetPercent50) {
                this.success = 'low success';
                this.monitored = true;
            } else if (this.profit >= targetPercent50 && this.profit < targetPercent90) {
                this.success = 'medium success';
            } else {
                this.success = 'high success';
            }

        }
        return `${this.name} has ${this.success} and a salary of ${benefitWithSalary}`;
    }
    toString() {
        return `Employee ${this.name} has ${this.successRate.toFixed(2)} % success rate and is ${this.monitored ? 'being monitored' : 'not being monitored'}.`;
    }
}
class SalesDepartment {
    constructor() {
        this.employees = [];
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    updateMonitoring() {
        this.employees.forEach(employee => {
            if (employee.success === 'low success') {
                employee.monitored = true;
            }
        });
    }
    checkMonitoring() {
        return this.employees.map(employee => 
        {
            console.log(employee.monitoring());

        });
    }

    successRate(area) {
        const filteredEmployess = this.employees.filter(employee => employee.geo === area && employee.monitored !== true);

        if (filteredEmployess.length === 0) {
            return console.log(`The average success rate for ${area} is ${0.00} %`);
        }
        let averageSuccRate = filteredEmployess.reduce((sum, employee) => sum + employee.successRate, 0) / filteredEmployess.length;
        return console.log(`The average success rate for ${area} is ${averageSuccRate.toFixed(2)} %`);
    }

    print() {
        return this.employees.map(employee => console.log(employee.toString()));
    }

}
var salesDepartment = new SalesDepartment();
var emp1 = new SalesPerson("Mark Smiths", new Date(2022, 8, 3), 20000, 5000, [400, 350, 500], "US");
var emp2 = new SalesPerson("Sandy Adams", new Date(2022, 5, 2), 22000, 7000, [500, 400, 600, 450, 550, 400, 350, 450], "Eastern Europe");
var emp3 = new SalesPerson("Bill Jonas", new Date(2022, 3, 1), 21000, 10000, [650, 700, 800, 750, 600, 750, 700, 800, 750, 800, 850], "US");
var emp4 = new SalesPerson("Sasha Denson", new Date(2021, 9, 1), 30000, 15000, [1200, 1500, 1350, 1300, 1400, 900], "US");
var emp5 = new SalesPerson("Chris Ree", new Date(2021, 7, 25), 27000, 14000, [850, 1000, 1150, 1050, 1100], "Eastern Europe");
var emp6 = new SalesPerson("Emily Lee", new Date(2020, 12, 2), 35000, 20000, [1700, 1850, 2000, 1900, 1950, 1800, 1750, 1900, 2000, 1950], "US");
let arr = [emp1, emp2,emp3, emp4, emp5, emp6];
for (let employee of arr) {
    salesDepartment.addEmployee(employee);
}

salesDepartment.checkMonitoring();
console.log();
salesDepartment.print();
console.log();

salesDepartment.successRate("US");