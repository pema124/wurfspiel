basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P0)) {
        basic.setLedColors(0xff0000, 0xff0000, 0xff0000)
    } else {
        basic.setLedColors(0x000000, 0x000000, 0x000000)
    }
})
