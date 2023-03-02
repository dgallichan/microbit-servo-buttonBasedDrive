function updateServo () {
    servoValue = Math.constrain(servoValue, 0, 180)
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo1, servoValue)
}
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    servoValue = 90
    updateServo()
})
input.onButtonPressed(Button.A, function () {
    servoValue += -5
    updateServo()
})
input.onButtonPressed(Button.B, function () {
    servoValue += 5
    updateServo()
})
let servoValue = 0
servoValue = 90
basic.showIcon(IconNames.Scissors)
basic.forever(function () {
    led.plotBarGraph(
    servoValue,
    180
    )
})
