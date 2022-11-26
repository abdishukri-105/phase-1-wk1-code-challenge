//
function calculateNetSalary(salary,benefits = 1000){

    // calculate gross salary
  const  grossSalary = () => salary + benefits

    //calculate payee
   const payee = () => {
        if (salary < 24000){
            return ((salary * 10)/100)
        }else if(salary <  32333){
           return ((salary * 25)/100)
        }else if(salary > 32334 ){
            return ((salary * 30)/100)
        } 
     return payee()
    }

    //calculate NSSF
    const calcNssf = () => {
        if(salary < 2999){
         return  0
     }else {
         return ((salary * 12)/100)
     } 
     
     }
    //  calculate nhif
     
const calcNhif = () => {
    if (salary < 5999){
        return 150
    }else if(salary < 7999){
        return 300
    }else if(salary < 11999){
        return 400
    }else if(salary < 14999){
        return 500
    }else if(salary < 19999){
        return 600
    }else if(salary < 24999){
        return 750
    }else if(salary < 29999){
        return 850
    }else if(salary < 34999){
        return 900
    }else if(salary < 39999){
        return 950
    }else if(salary < 44999){
        return 1000
    }else if(salary < 49999){
        return 1100
    }else if(salary < 59999){
        return 1200
    }else if(salary < 69999){
        return 1300
    }else if(salary < 79999){
        return 1400
    }else if(salary < 89999){
        return 1500
    }else if(salary < 99999){
        return 1600
    }else{
        return 1700
    }

}

     return grossSalary() - calcNssf() - payee() - calcNhif()
}

console.log(calculateNetSalary(10000))
