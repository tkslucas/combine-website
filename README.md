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
                    "open": 1,
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
Create pages for different activities (rn we just have dash)

Race data validation and toggle logging

Search and Filter Functionality

Add button to upload to external database

Add button to hide logs and other internal things (like time start and time stop)

Save data in localStorage (maybe? this just prevents data losses if the user forgets to download CSV when refreshing the page)

Make the physical setup easier:
    Drill holes for ultrasonic sensor
    Mount the microbit inside the cones
    Simplify wiring (rolling/unrolling the wires)

Make it work with phones
