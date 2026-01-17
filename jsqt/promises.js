function asyncFun() {
    return new Promise((resolve, rejec) => {
        setTimeout(() => {
            console.log("data1");
            resolve("success");
        }, 4000);
    })
}

console.log("fetching data.....");
let p1 = asyncFun();
p1.then((res) => {
    console.log(res);
});