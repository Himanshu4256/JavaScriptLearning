for (let step = 0; step < 5; step++) {
    // Runs 5 times, with values of step 0 through 4.
    console.log("Himanshu");
  }

  let step2=1;
  let do0 = 1;

  while(step2 <= 5){
    console.log("Himanshu");
    step2++;
  }
console.log('-------')
  do{
    console.log("Himanshu");
    do0++
  }
  while(do0 <= 5)
  
//for-of loop
// in this I value is n need to assign it as for-each in java
let city =  "City"
for(i of city){
    console.log(i);
}

//for-In Loop, to put loop in complete object 
const student ={
    name : "Himanshu",
    city : "Bulandshahr",
    mob : "86386256"
}
for(let i in student){
    console.log("student keys",i,"Values==>"+student[i])
}
