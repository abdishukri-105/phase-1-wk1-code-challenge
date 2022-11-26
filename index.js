// Grade generator 
//grades students based on results they obtained 
    // A > 79,
    // B - 60 to 79, 
    // C - 59 to 49,
    // D - 40 to 49,
    // E - less 40.

    function gradeGenerator(grade){
        if (grade > 79){
            return `A`
        } else if(grade >= 60){
             return `B`
        }else if(grade >= 49){
            return `C`
        }else if(grade >= 40){
            return `D`
        }else{
            return `E`
        }
    }
    
    console.log(gradeGenerator(4))