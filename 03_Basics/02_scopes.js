// let a = 500;

// if(true){
//     let a = 2;
//     const b = 3;
//     // var c = 4;
//     console.log("inner :",a);
// }
//  console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "Densi"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    two();
}
// one();

if(true){
    const username = "densi";
    if(username === "densi" ){
        const website = " youtube";
        console.log(`${username} ${website}`);
    }
    // console.log(website);
    console.log(username);
}