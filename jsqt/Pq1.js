let items = [250,645,300,900,50];
let newItems = [];
let discount = 0;
for(let item of items){
    discount = (item * 10)/100;
    let afterDiscount = item-discount
    newItems.push(afterDiscount);
}
//console.log(`items price after discount : ${newItems}`);
console.log(newItems);

// using map 
let newMapItems = items.map(item => {
    let discount = (item * 10) / 100;
    return item - discount;
});

console.log(newItems);

