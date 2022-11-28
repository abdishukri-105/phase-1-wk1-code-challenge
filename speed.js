
// speed detector function
function speedDetector(speed){
    if (speed < 70){
       return `okey`
    }
     else if (((speed - 70)/5) > 12){ //if the points are above 12 prints licence suspended
           return `licence suspended`
         }
    else{  // calculates the current (speed - 70 divided by 5) to output points
       return "points:" + ((speed - 70)/5)
    }
   }
   //pass any speed value here
 console.log(speedDetector())