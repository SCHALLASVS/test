let strip = neopixel.create(DigitalPin.P15, 2, NeoPixelMode.RGB)
CutebotPro.cruiseControl(30, 30, CutebotProSpeedUnits.Cms)
basic.showIcon(IconNames.Happy)
basic.forever(function () {
	
})
basic.forever(function () {
    if (input.lightLevel() < 60) {
        CutebotPro.colorLight(CutebotProRGBLight.RGBA, 0xffffff)
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        basic.pause(5000)
    } else {
        CutebotPro.colorLight(CutebotProRGBLight.RGBA, 0x000000)
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
    }
})
