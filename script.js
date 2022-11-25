// AUDIO play OnLoad or OnClick
window.onload=function () {
    document.getElementById("openingAudio").play();
}

function timedText() {
    const element = document.getElementById("p1");
    element.innerHTML = "";

    setTimeout(() => { element.innerHTML = "You. Are. FIRED!"; }, 1000);
    setTimeout(() => { element.innerHTML = "*cries in dog*"; }, 3000);
    setTimeout(() => { element.innerHTML = "NEEEEXT!"; }, 4000);
    setTimeout(() => { element.innerHTML = "We here at Dogs of Dogstreet are looking for new talents to recruit! <br><br>Do you think you have what it takes to make it to the top of our Candidate list?<br><br> <button>Yes</button><button>No</button>"; }, 6000);

}
timedText();

//CAT APPEARS
let catPicture = document.getElementById("bland-html-element");

window.setTimeout(function() {
    element.classList.add("flashy-design");
}, 2000);

// hide after 3 seconds
window.setTimeout(function() {
    element.classList.remove("flashy-design");
}, 3000);

//_____YES/NO DIV APPEARS
let nextPage = document.getElementById("bland-html-element");

window.setTimeout(function() {
    element.classList.add("flashy-design");
}, 2000);

