radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        bitbot.move(BBMotor.Left, BBDirection.Reverse, 15)
        bitbot.move(BBMotor.Right, BBDirection.Forward, 15)
    } else if (receivedNumber == 1) {
        bitbot.move(BBMotor.Left, BBDirection.Forward, 60)
        bitbot.move(BBMotor.Right, BBDirection.Reverse, 60)
    } else if (receivedNumber == 2) {
        bitbot.move(BBMotor.Both, BBDirection.Forward, 60)
    }
})
radio.setGroup(12)
