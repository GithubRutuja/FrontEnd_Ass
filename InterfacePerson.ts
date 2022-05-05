interface person { 
    name:string; 
    age: number; 
    getPerson :(name:string, age:number) => string;
} 
    class Employee implements person { 
        name: string; 
        age: number; 
        salary:number; 
        constructor(salary:number) { 
            this.salary = salary; 
        } 
        getPerson = (name: string, age: number) : string => { 
            this.name = name; 
            this.age = age; 
            return "Name of Employee is: " + name + '\nAge is: ' + age + '\nSalary is: ' + this.salary; 
        } 
    } 
    var emp1: person = new Employee(60000);
    console.log(emp1.getPerson('Rutuja', 21)); 
    let emp2: person= new Employee(80000);
