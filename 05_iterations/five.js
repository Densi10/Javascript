/// ForEach loop 

const coding = ["js","java","python","ruby","cpp"]

// coding.forEach((item)=>{
//     console.log(item);
// })

coding.forEach((item,index,array)=>{
    // console.log(item,index,array);
})

const myCoding = [
    {
        languageName : "javascript",
        languageFileName : "js"
    },
    {
        languageName : "java",
        languageFileName : "java"
    },
    {
        languageName : "python",
        languageFileName : "py"
    },

]

// console.log(myCoding);
myCoding.forEach((item) =>{
    console.log(item.languageName);
})
