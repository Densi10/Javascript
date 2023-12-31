// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    // named IIFE
    console.log(`DB_CONNECTED`);
})();

( ()=>{
    console.log(`DB_CONNECTED_TWO`);
} )();

( (name)=>{
    console.log(`DB_CONNECTED_${name}`);
} )('aakash');
