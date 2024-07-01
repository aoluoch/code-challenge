function calcGrossSalary (basic, benefit){
    const grossSalary = basic+benefit;

    return grossSalary;
}



function calcTax(grossSalary) {
    const taxRate = 0.1;
    const tax = taxRate * grossSalary;

    return tax;
}

function calcNhif (grossSalary) {
    const nhifRate = 0.03;
    const nhif = nhifRate * grossSalary;
    
    return nhif;

}

function calcNssf (grossSalary){
    const nssfRate = 0.06;
    const nssf = nssfRate * grossSalary;

    return nssf;
}

function netSalary(basic, benefit){
    const grossSalary = calcGrossSalary (basic, benefit);
    const tax = calcTax(grossSalary);
    const nhif = calcNhif (grossSalary);
    const nssf = calcNssf (grossSalary);
    const netSalary = grossSalary - (tax+nhif+nssf);

    return netSalary;
}

basic = parseFloat(prompt("Enter Basic Salary: "))
benefit = parseFloat(prompt("Enter Benefits: "))
netSalary = netSalary(basic, benefit)
alert (`netSalary: ${netSalary}`)