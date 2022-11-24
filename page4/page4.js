let catanswer = document.querySelector("#catText");
let angelcatanswer = document.querySelector("#angelcatText");

catanswer.innerHTML = '';
angelcatanswer.innerHTML = '';

function typeWriter (){    
    let randomNumber = Math.floor(Math.random() * 7);
    let catSays = '';
    let angelcatSays = '';
    switch(randomNumber) {
      case 0:
        catSays = 'OMG no! My mom will be so pissed';
        angelcatSays = 'Oh my dear Meowdawan! Better luck next time';
        break;
      case 1:
        catSays  = 'Wait.. what? But how? I am the best cat ever';
        angelcatSays = 'Oh my dear Meowdawan! Losing is a part of life. Meow.';
        break;
      case 2:
        catSays  = 'I thought I did purrrrrfect.. well well. Next time!';
        angelcatSays = 'Meow! You are in heaven now. Meow!';
        break;
      case 3:
        catSays  = 'What!!! Its not Pawsible! Oh well, I guess I will just try again!';
        angelcatSays = 'Hellooo! Welcome to heaven.';
        break;
      case 4:
        catSays  = 'Dude, no. I was brilliant.';
        angelcatSays = 'Dude you lost. Get over it. Not everyone is purrfect!';
        break;
      case 5:
        catSays  = 'Meow meow meow... meow meow...';
        angelcatSays = 'Meeooooooow.. meow meow..';
        break;
      case 6: 
      catSays  = 'This is a CATastrophy!';
      angelcatSays = 'I am an angel cat and you are in heaven';
        break;
    }
    catanswer.innerHTML= catSays;
    angelcatanswer.innerHTML = angelcatSays;
    };


