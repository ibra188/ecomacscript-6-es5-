//Building promise

const delay = (second) => 
 new Promise((resolve) => 
 setTimeout(resolve, second * 1000)
 );

 console.log("Zero second");
 delay(1).then(() => console.log("one sceond"));