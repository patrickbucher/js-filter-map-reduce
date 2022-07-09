"use strict";

function calcBonusOneLoop(employees) {
    let totalBonus = 0;
    for (const employee of employees) {
        if (employee.position === "Engineer") {
            const bonus = employee.salary * 0.1;
            totalBonus += bonus;
        }
    }
    return totalBonus;
}

function calcBonusThreeLoops(employees) {
    const engineers = new Array();
    for (const employee of employees) {
        if (employee.position === "Engineer") {
            engineers.push(employee);
        }
    }

    const individualBonuses = new Array();
    for (const engineer of engineers) {
        const bonus = engineer.salary * 0.1;
        individualBonuses.push(bonus);
    }

    let totalBonus = 0;
    for (const bonus of individualBonuses) {
        totalBonus += bonus;
    }
    return totalBonus
}

function calcBonusThreeLoopsWithHelperFunctions(employees) {
    const isEngineer = (employee) => employee.position === "Engineer";
    const calculateBonus = (employee) => employee.salary * 0.1;
    const sumUp = (accumulator, bonus) => accumulator + bonus;

    const engineers = new Array();
    for (const employee of employees) {
        if (isEngineer(employee)) {
            engineers.push(employee);
        }
    }

    const individualBonuses = new Array();
    for (const engineer of engineers) {
        individualBonuses.push(calculateBonus(engineer));
    }

    let totalBonus = 0;
    for (const bonus of individualBonuses) {
        totalBonus = sumUp(totalBonus, bonus);
    }
    return totalBonus;
}

function calcBonusFilterMapReduce(employees) {
    return employees
        .filter((e) => e.position === "Engineer")
        .map((e) => e.salary * 0.1)
        .reduce((acc, b) => acc + b);
}

function calcBonusOwnFilterMapReduceImplementation(employees) {
    function filter(array, predicate) {
        const results = new Array();
        for (const item of array) {
            if (predicate(item)) {
                results.push(item);
            }
        }
        return results;
    }

    function map(array, transformation) {
        const results = new Array();
        for (const item of array) {
            results.push(transformation(item));
        }
        return results;
    }

    function reduce(array, start, reduction) {
        let result = start;
        for (const item of array) {
            result = reduction(result, item);
        }
        return result;
    }

    const engineers = filter(employees, (e) => e.position === "Engineer");
    const individualBonuses = map(engineers, (e) => e.salary * 0.1);
    const totalBonus = reduce(individualBonuses, 0, (acc, b) => acc + b);

    return totalBonus;
}

const employees = [
    { name: "Dilbert", position: "Engineer", salary: 120000 },
    { name: "Ashok", position: "Intern", salary: 25000 },
    { name: "Wally", position: "Engineer", salary: 110000 },
    { name: "Pointy-Haired Boss", position: "Manager", salary: 190000 },
    { name: "Dogbert", position: "Consultant", salary: 220000 },
    { name: "Alice", position: "Engineer", salary: 115000 },
];

console.log(calcBonusOneLoop(employees));
console.log(calcBonusThreeLoops(employees));
console.log(calcBonusThreeLoopsWithHelperFunctions(employees));
console.log(calcBonusFilterMapReduce(employees));
console.log(calcBonusOwnFilterMapReduceImplementation(employees));