// FOR LOOP

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if(element == 5 ){
//         console.log("5 is best number");
//     }
//     console.log(element);
// }

for (let i =0; i <=5; i++) {
    console.log("outer loop : ",i);
    for (let j = 1; j <=5; j++) {
        console.log(`inner loop : ${j}`);
    }
}