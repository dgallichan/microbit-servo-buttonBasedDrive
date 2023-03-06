buttonClicks.onButtonSingleClicked(buttonClicks.AorB.B, function () {
    servoValue += 5
    updateServo()
})
function updateServo () {
	
}
buttonClicks.onButtonDoubleClicked(buttonClicks.AorB.A, function () {
    servoValue = 5
    updateServo()
})
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    servoValue = 90
    updateServo()
})
buttonClicks.onButtonHeld(buttonClicks.AorB.B, function () {
    servoValue += 15
    updateServo()
})
buttonClicks.onButtonSingleClicked(buttonClicks.AorB.A, function () {
    servoValue += -5
    updateServo()
})
buttonClicks.onButtonDoubleClicked(buttonClicks.AorB.B, function () {
    servoValue = 180
    updateServo()
})
buttonClicks.onButtonHeld(buttonClicks.AorB.A, function () {
    servoValue += -15
    updateServo()
})
let servoValue = 0
servoValue = 90
basic.showIcon(IconNames.Scissors)
basic.forever(function () {
    servoValue = Math.constrain(servoValue, 0, 180)
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo1, servoValue)
    Kitronik_VIEWTEXT32.displaySingleLineString(Kitronik_VIEWTEXT32.DisplayLine.Top, "Servo: " + convertToText(servoValue))
    basic.pause(200)
})
