input.onButtonPressed(Button.A, function () {
    Xværdi += 1
})
input.onButtonPressed(Button.B, function () {
    Yværdi += 1
})
let Xværdi = 0
let Yværdi = 3
Yværdi = 3
basic.forever(function () {
    if (input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B)) {
        basic.clearScreen()
        led.plot(Xværdi, Yværdi)
    }
})
basic.forever(function () {
    if (Xværdi == 6) {
        Xværdi = 1
    }
})
basic.forever(function () {
    if (Yværdi == 6) {
        Yværdi = 1
    }
})
basic.forever(function () {
    if (true) {
    	
    } else {
    	
    }
})
