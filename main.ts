IotLoRaNode.SetRegion(region.EU868)
IotLoRaNode.InitialiseRadio(
"260B021F",
"1A15A157343C874D069A0B861D7EC798",
"AB0F43611CF64269FAFC263C2A521CC0",
SpreadingFactors.Seven
)
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    basic.clearScreen()
    IotLoRaNode.DigitalValue(true, Channels.One)
    IotLoRaNode.AnalogueValue(0, Channels.Two)
    IotLoRaNode.TemperatureValue(input.temperature(), Channels.Three)
    IotLoRaNode.AccelorometerValue(
    input.acceleration(Dimension.X),
    input.acceleration(Dimension.Y),
    input.acceleration(Dimension.Z),
    Channels.Four
    )
    IotLoRaNode.LightValue(input.lightLevel(), Channels.Five)
    IotLoRaNode.loraTransmitPayload()
    for (let index = 0; index < 2; index++) {
        basic.pause(5000)
    }
    basic.showIcon(IconNames.Heart)
})
