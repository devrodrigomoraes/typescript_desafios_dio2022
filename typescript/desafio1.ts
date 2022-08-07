// Como podemos rodar isso em um arquivo .ts sem causar erros? 

/*let employee = {};
employee.code = 10;
employee.name = "John";*/


interface Employee {
    code: number,
    name: string;
}

let employee1: Employee = {
    code: 2,
    name: "John",
}

let employee2 = {} as Employee;
employee2.code = 3;
employee2.name = "John";

console.log(`Código ${employee1.code} e o nome ${employee1.name} \n`)
console.log(`Código ${employee2.code} e o nome ${employee2.name} \n`);