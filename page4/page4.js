const btnAgain =document.getElementById('playAgain') ;

btnAgain.onclick = ()=>{
    console.log('hi');
    setTimeout(() => {
        window.location.href = '../page2/page2.html'
    }, 500);
}