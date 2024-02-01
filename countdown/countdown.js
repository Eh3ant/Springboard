function countDown(num) {
    let intervalId = setInterval(function(){
        console.log(num)
        num--;
        if (num === 0 ) {
            console.log("Done!")
            clearInterval(intervalId)
        }
    },1000)
} 
// for test the function uncomment the below line 
//countDown(4)