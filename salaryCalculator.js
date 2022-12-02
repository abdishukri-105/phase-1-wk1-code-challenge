
//calculates the NHIF contributions
const nhifDedections = (grossSalary) => {
    let nhifdeductions = 0
    if (grossSalary > 0 && grossSalary <= 5999) {
        return nhifdeductions = 150*0.85;
    } else if (grossSalary >= 6000 && grossSalary <= 7999) {
        return nhifdeductions = 300*0.85;
    } else if (grossSalary >= 8000 && grossSalary <= 11999) {
        return nhifdeductions = 400*0.85;
    } else if (grossSalary >= 12000 && grossSalary <= 14999) {
        return nhifdeductions = 500*0.85;
    } else if (grossSalary >= 15000 && grossSalary <= 19999) {
        return nhifdeductions = 600*0.85;
    } else if (grossSalary >= 20000 && grossSalary <= 24999) {
        return nhifdeductions = 750*0.85;
    } else if (grossSalary >= 25000 && grossSalary <= 29999) {
        return nhifdeductions = 850*0.85;
    } else if (grossSalary >= 30000 && grossSalary <= 34999) {
        return nhifdeductions = 900*0.85;
    } else if (grossSalary >= 35000 && grossSalary <= 39999) {
        return nhifdeductions = 950*0.85;
    } else if (grossSalary >= 40000 && grossSalary <= 44999) {
        return nhifdeductions = 1000*0.85;
    } else if (grossSalary >= 45000 && grossSalary <= 49999) {
        return nhifdeductions = 1100*0.85;
    } else if (grossSalary >= 50000 && grossSalary <= 59999) {
        return nhifdeductions = 1200*0.85;
    } else if (grossSalary >= 60000 && grossSalary <= 69999) {
        return nhifdeductions = 1300*0.85;
    } else if (grossSalary >= 70000 && grossSalary <= 79999) {
        return nhifdeductions = 1400*0.85
    } else if (grossSalary >= 80000 && grossSalary <= 89999) {
        return nhifdeductions = 1500*0.85
    } else if (grossSalary >= 90000 && grossSalary <= 99999) {
        return nhifdeductions = 1600*0.85
    } else if (grossSalary >= 100000) {
        return nhifdeductions = 1700*0.85
    }

    return nhifdeductions
}

//  deducts nssf from your gross salary
const nssfDeductions = (grossSalary) => {
    let nssf = 0
    if (grossSalary > 0 && grossSalary <= 17999){
        return grossSalary * 0.06
    }else if (grossSalary >= 18000){
        return nssf = 1080
    }

    return nssf

}


 // takes the user's basic salary and their total benefits as parameters and calculates their paye.

function calculatesalary(basicSalary,benefits) {
   
    let grossSalary = basicSalary + benefits
    let paye = 0;
    let taxableIncome = grossSalary - (nhifDedections(grossSalary) + nssfDeductions(grossSalary))
    if (taxableIncome > 0 && taxableIncome <= 24000) {
        paye = taxableIncome * 0.1
    }else if (taxableIncome >= 24001 && taxableIncome <= 32333) {
        paye = ((taxableIncome-24000) * 0.25)+ 2400
    }else if (taxableIncome > 32333) {
        paye= ((taxableIncome-32333)* 0.30)+ 2400 + 2083.25
    }
    //return values 
    return `grossSalary salary: ${grossSalary}\n 
            nssf deductions: ${nssfDeductions(grossSalary)}\n 
            NHIF contribution: ${nhifDedections(grossSalary)}\n
            payee: ${paye}\n 
            net salary: ${(grossSalary - paye)}`
            
}

console.log(calculatesalary(70000,10000));
