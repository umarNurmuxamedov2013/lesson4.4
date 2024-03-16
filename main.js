let randomSon = Math.floor(Math.random() * 100)
alert("Random orqali chiqqan son bu " + randomSon )

if (randomSon % 3 == 0) {
    alert(randomSon + "fizz")
}
else if (randomSon % 5 == 0) {
    alert(randomSon + "buzz")
}if (randomSon % 5 == 0 && randomSon % 3 == 0) {
    alert(randomSon + "buzzfizz")
}
if (randomSon % 5 % 3 == 1 ) {
    
}