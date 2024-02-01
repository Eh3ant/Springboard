function randomGame() {
    let counter = 0
    let timerId = setInterval(function () {
    let randomNumber =  Math.random() 
    if ( randomNumber < 0.75) {
        counter += 1 
    } else {
        clearInterval(timerId)
        console.log("It took " + counter + " try/tries.")
    }
 },1000)
}
//for test the function uncomment the below line
//randomGame()