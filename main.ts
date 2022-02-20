IotLoRaNode.SetRegion(region.EU868)
IotLoRaNode.InitialiseRadio(
"260B021F",
"1A15A157343C874D069A0B861D7EC798",
"AB0F43611CF64269FAFC263C2A521CC0",
SpreadingFactors.Seven
)
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    IotLoRaNode.DigitalValue(true, Channels.One)
    IotLoRaNode.loraTransmitPayload()
    basic.showIcon(IconNames.Heart)
    basic.pause(5000)
})
