
function GradeGenerator(marks){
    if(marks > 79 && marks <= 100){
        return "your grade is A"
    }else if(marks <=79 && marks >=60){
        return "your grade is B"
    }else if(marks <= 59 && marks >= 49){
        return "your grade is C"
    }else if(marks < 49 && marks >=40){
        return "your grade is D"
    }else if(marks >0 && marks < 40){
        return "your grade is E"
    }else{
        return "Please input a valid grading number!"
    }
}

console.log(GradeGenerator(70));