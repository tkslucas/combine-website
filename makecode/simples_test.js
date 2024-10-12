bluetooth.onBluetoothConnected(function () {
    bluetooth_connected = true
    serial.writeLine("BLE Connected!")
})
input.onButtonPressed(Button.A, function () {
    if (bluetooth_connected) {
        bluetooth.uartWriteString("dashstart")
        serial.writeLine("\"dashstart\" uart message sent!")
    }
})
input.onButtonPressed(Button.B, function () {
    if (bluetooth_connected) {
        bluetooth.uartWriteString("dashstop")
        serial.writeLine("\"dashstop\" uart message sent!")
    }
})
let bluetooth_connected = false
bluetooth_connected = false
bluetooth.startUartService()
while (!(bluetooth_connected)) {
    basic.showLeds(`
        . . # # .
        # . # . #
        . # # # .
        # . # . #
        . . # # .
        `)
}
basic.clearScreen()
basic.forever(function () {
	
})
