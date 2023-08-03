function countDown (time){

    let timer = setInterval(function(){

        
        if (time <= 0){
            clearInterval(timer);
            console.log("Done!");

        }else{
            console.log(time);

        }
        time--;

    }, 1000)
 

}


function randomGame (){

    let times =     1;
    let timer = setInterval (function (){

        let guess = Math.random();

        if (guess <= .75){

           times++;


        } else if (guess > .75){
            clearInterval(timer);
            console.log(`it took ${times} tries before finding number over .75`);
        }

    },1000)

}



