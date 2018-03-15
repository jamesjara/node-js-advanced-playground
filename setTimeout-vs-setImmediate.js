// queque first pos
console.log("hello james")

// queque second pos ,  executed inmediatelly
setTimeout( 
    // BUT NOT THE CALLBACK - added to the function queque - executed ASAP
    // queque 4 pos
    function(){
        console.log("hi david")
    }, 
0)

setImmediate(
    function(){
        console.log("lastone")
})

// queque third pos  
console.log("somebody yalling!")



