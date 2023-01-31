let temprature = 0
basic.forever(function () {
    temprature = input.temperature()
    basic.showNumber(temprature)
    basic.pause(1000)
})
