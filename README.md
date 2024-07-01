# code-challenge
The script consists of several key functions:

calcGrossSalary(basic, benefit)

Parameters:
basic: The basic salary of the employee.
benefit: Additional benefits the employee receives.
Returns: The gross salary which is the sum of the basic salary and benefits.
calcTax(grossSalary)

Parameters:
grossSalary: The total salary before deductions.
Returns: The amount of tax to be deducted based on a fixed tax rate of 10%.
calcNhif(grossSalary)

Parameters:
grossSalary: The total salary before deductions.
Returns: The NHIF deduction based on a rate of 3%.
calcNssf(grossSalary)

Parameters:
grossSalary: The total salary before deductions.
Returns: The NSSF deduction based on a rate of 6%.
netSalary(basic, benefit)

Parameters:
basic: The basic salary of the employee.
benefit: Additional benefits the employee receives.
Returns: The net salary after all deductions are subtracted from the gross salary.
How to Use
To use this script, follow these steps:

Run the Script:

Open a JavaScript environment where you can execute the script, such as a web browser's console or a JavaScript runtime environment like Node.js.
Input Basic Salary and Benefits:

The script will prompt you to enter the basic salary and the additional benefits.
Example prompts:
mathematica
Copy code
Enter Basic Salary: 
Enter Benefits: 
View Net Salary:

