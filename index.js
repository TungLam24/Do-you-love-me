function touch() {
    alert("Yes. You are right")
}
function move() {
    let random2 = Math.floor(Math.random() * 600) -300
    let random3 = Math.floor(Math.random() * 600) - 300
    document.getElementById("no").style.left = random2.toString() + "px"
    document.getElementById("no").style.bottom = random3.toString() + "px"
    document.getElementById("no").style.position ="relative"
}