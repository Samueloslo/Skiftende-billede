input.onButtonPressed(Button.A, function () {
    Xværdi += 1
})
input.onButtonPressed(Button.B, function () {
    Yværdi += 1
})
let Xværdi = 0
let Yværdi = 0
led.plot(Xværdi, Yværdi)
loops.everyInterval(500, function () {
    if (true) {
    	
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B)) {
        basic.clearScreen()
        basic.pause(200)
        led.plot(Xværdi, Yværdi)
    }
})
basic.forever(function () {
	
})
basic.forever(function () {
    if (Xværdi == 5) {
        Xværdi = 0
    }
})
basic.forever(function () {
    if (Yværdi == 5) {
        Yværdi = 0
    }
})
