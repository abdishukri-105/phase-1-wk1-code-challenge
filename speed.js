
// speed detector function
function speedDetector(speed){
    if (speed < 70){
       console.log( `okey`)
    }
     if (((speed - 70)/5) > 12){ //if the points are above 12 prints licence suspended
           console.log(`licence suspended`)
         }
    else{  // calculates the current (speed - 70 divided by 5) to output points
       console.log( "points:" + (speed - 70)/5) 
    }
   }
   //pass any speed value here
   speedDetector()