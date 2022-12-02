function speedDetector(speed){
   if(speed > 0 && speed <=70){
       return "Ok"
   }else if(speed > 70){
       let SpeedLimit = ((speed - 70)/5)
       if (SpeedLimit > 12){
           return "License suspended"
       }else{
           return `Points: ${Math.ceil(SpeedLimit)}`
       }
   }else{
       return "Please enter correct speed"
   }
}

console.log(speedDetector(80))