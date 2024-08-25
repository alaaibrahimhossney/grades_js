// Take input from the user
let score=prompt("Enter your exam score:")
score=Number(score);

if(isNaN(score)){
    console.log("Not a Number❌. ");
}
else if(score===100){
    console.log(" Perfect Score 🏆. ");
} 
else if (score < 0 || score > 100) {
    console.log(" Invalid Score❌. "); 
}
else{
    switch(true){
        case(score >= 85 && score < 100):
        console.log(" You got a A🎉.");
        break;
    case (score >= 75 && score < 85):
        console.log(" You got a B 🎉.");
        break;
    case (score >= 65 && score < 75):
        console.log(" You got a C 📃.");
        break;
    case (score >= 50 && score < 65):
        console.log(" You got a D 👌.");
        break;
    case (score >= 0 && score < 50):
        console.log("You got a F 🥺.");
        break;
}
}
    
