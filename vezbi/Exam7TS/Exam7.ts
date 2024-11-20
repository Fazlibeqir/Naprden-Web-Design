interface Employee {
    name: string;
    date: Date;
    baseSalary: number;
    monitoring(): string;
    toString(): string;
}

class SalesPerson implements Employee {
    name: string;
    date: Date;
    baseSalary: number;
    salesTarget: number;
    storesBenefit: number[];
    geo: string;
    profit: number;
    monitored: boolean;
    successRate: number;
    success: string;

    constructor(name: string, date: Date, baseSalary: number, salesTarget: number, storesBenefit: number[], geo: string) {
        this.name = name;
        this.date = date;
        this.baseSalary = baseSalary;
        this.salesTarget = salesTarget;
        this.storesBenefit = storesBenefit;
        this.profit = this.storesBenefit.reduce((sum, item) => sum + item, 0);
        this.monitored = false;
        this.geo = geo;
        this.successRate = (this.profit / this.salesTarget) * 100;
        this.success = '';
    }

    monitoring(): string {
        let targetPercent30 = this.salesTarget * 0.3;
        let targetPercent50 = this.salesTarget * 0.5;
        let targetPercent80 = this.salesTarget * 0.8;
        let targetPercent90 = this.salesTarget * 0.9;

        let todayDate = new Date();
        let employeeDate = new Date(this.date);
        const yearDifference = todayDate.getFullYear() - employeeDate.getFullYear();

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

    toString(): string {
        return `Employee ${this.name} has ${this.successRate.toFixed(2)}% success rate and is ${this.monitored ? 'being monitored' : 'not being monitored'}.`;
    }
}

class SalesDepartment {
    private employees: Employee[] = [];

    addEmployee(employee: Employee): void {
        this.employees.push(employee);
    }

    updateMonitoring(): void {
        this.employees.forEach(employee => {
            if (employee instanceof SalesPerson && employee.success === 'low success') {
                employee.monitored = true;
            }
        });
    }

    checkMonitoring(): void {
        this.employees.forEach(employee => {
            console.log(employee.monitoring());
        });
    }

    successRate(area: string): void {
        const filteredEmployees = this.employees.filter(
            employee => employee instanceof SalesPerson && employee.geo === area && !employee.monitored
        ) as SalesPerson[];

        if (filteredEmployees.length === 0) {
            console.log(`The average success rate for ${area} is 0.00%`);
            return;
        }

        const averageSuccessRate =
            filteredEmployees.reduce((sum, employee) => sum + employee.successRate, 0) / filteredEmployees.length;

        console.log(`The average success rate for ${area} is ${averageSuccessRate.toFixed(2)}%`);
    }

    print(): void {
        this.employees.forEach(employee => console.log(employee.toString()));
    }
}

// Test the implementation
const salesDepartment = new SalesDepartment();

const emp1 = new SalesPerson("Mark Smiths", new Date(2022, 8, 3), 20000, 5000, [400, 350, 500], "US");
const emp2 = new SalesPerson("Sandy Adams", new Date(2022, 5, 2), 22000, 7000, [500, 400, 600, 450, 550, 400, 350, 450], "Eastern Europe");
const emp3 = new SalesPerson("Bill Jonas", new Date(2022, 3, 1), 21000, 10000, [650, 700, 800, 750, 600, 750, 700, 800, 750, 800, 850], "US");
const emp4 = new SalesPerson("Sasha Denson", new Date(2021, 9, 1), 30000, 15000, [1200, 1500, 1350, 1300, 1400, 900], "US");
const emp5 = new SalesPerson("Chris Ree", new Date(2021, 7, 25), 27000, 14000, [850, 1000, 1150, 1050, 1100], "Eastern Europe");
const emp6 = new SalesPerson("Emily Lee", new Date(2020, 12, 2), 35000, 20000, [1700, 1850, 2000, 1900, 1950, 1800, 1750, 1900, 2000, 1950], "US");

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