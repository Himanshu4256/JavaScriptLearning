
async function vowelCount(n){
    let vowels = ['a','e','i','o','u'];
    let count = 0;
    n = n.toLowerCase();

    for(let i=0; i<n.length;i++){
    if(vowels.includes(n[i])){
        count++;
    }
}
    return count;
}

//using arraw function
let arrawFunction = (n) => {
    let vowels = ['a','e','i','o','u'];
    let count = 0;
    n = n.toLowerCase();

    for(let i=0; i<n.length;i++){
    if(vowels.includes(n[i])){
        count++;
    }
}
    return count;
}

async function main(){
    let n = "Himanshu"
    let result = await vowelCount(n); 
    console.log(`Number of vowels in "${n}": ${result}`);

    let arraw = arrawFunction(n);
    console.log(`Number of vowels in "${n}": ${arraw}`);
}
main()