// Grade generator 
//grades students based on results they obtained 
   
    function gradeGenerator(grade){
        if (grade >= 80 && grade <= 100){
            return `A`
        } else if(grade >= 60 && grade <= 79){
             return `B`
        }else if(grade >= 50 && grade <= 59){
            return `C`
        }else if(grade >= 40 && grade <= 49){
            return `D`
        }else if (grade < 39){
            return `E`
        }else{
            return `please enter a valid number`
        }
    }

    // pass your grade here
    console.log(gradeGenerator(678))