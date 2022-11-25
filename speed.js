// this is a program that takes  speed of a car e.g 80. as input
// If the speed is less than 70, it prints print “Ok”. 
// Otherwise, for every 5 km/s above the speed limit (70), 
// it should give the driver one demerit point and print the total number of demerit points.

// For example, if the speed is 80, it should print: “Points: 2”. 
// If the driver gets more than 12 points,
//  the function should print: “License suspended”.

 
// speed detector function
function speedDetector(speed){
    if (speed < 70){
       console.log( `okey`)
    }else{  // calculates the current (speed - 70 divided by 5) to output points
       console.log( "points:" + (speed - 70)/5) 
         if (((speed - 70)/5) > 12){ //if the points are above 12 prints licence suspended
           console.log(`licence suspended`)
         }
    }
   }
   speedDetector(80)