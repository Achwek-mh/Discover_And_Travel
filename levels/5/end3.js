const exit = document.getElementById("dismisss");
exit.addEventListener('click', () => {

    if (exit.innerHTML == "Try again") {
        document.getElementById('finish').style.display = 'none';
        console.log("helllllllllllllllooooo");
        location.reload();
    }
    else
        window.location.pathname = 'play.html';
    clickend = 1;
    stopp = 1;

})
const next = document.getElementById("nexxt");
next.addEventListener('click', () => {
    document.getElementById('finish').style.display = 'none';
    window.location.pathname = 'levels/6/maze4.html';
})