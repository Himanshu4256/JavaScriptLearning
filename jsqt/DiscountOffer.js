let items = [440,505,859,868,900,444]

let i=0;
for(let value of items){
    let offer = value/10;
    items[i] = items[i]-offer;
    console.log(`value after offer = ${items[i]}`);
    i++;
}
