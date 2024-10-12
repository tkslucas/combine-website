# combine-website

## Website Code
Everything is in index.html

`npm install microbit-web-bluetooth`

## Uploading Code with MakeCode
Settings -> Project Settings -> Edit Settings as Text

Copy and paste these configurations:

```json
{
    "name": "Web_Bluetooth_Test",
    "description": "",
    "dependencies": {
        "core": "*",
        "microphone": "*",
        "bluetooth": "*"
    },
    "files": [
        "main.blocks",
        "main.ts",
        "README.md",
        "main.py"
    ],
    "preferredEditor": "blocksprj",
    "yotta": {
        "config": {
            "microbit-dal": {
                "bluetooth": {
                    "open": 0,
                    "whitelist": 0,
                    "security_level": null
                }
            }
        }
    }
}
```

The Makecode code for the microbit is under the folder makecode/

## Activities
### Dash
Micro:bit BLE Uart messages:
    "dashstart"
    "dashstop"

### Agility
Micro:bit BLE Uart messages:
    "agilitycross"

### Pass Count
Micro:bit BLE Uart messages:
    "countcross"

## TODO
Add box in the table to type in name, saves name to csv

Add remove row button

Add clear all button
    Create an alert "Are you sure you want to remove all entries?"

Improve UI (make it pretty, button to hide/show logs)

Make the physical setup easier:
    Drill holes for ultrasonic sensor
    Mount the microbit inside the cones
    Simplify wiring (rolling/unrolling the wires)

Make it work with phones
