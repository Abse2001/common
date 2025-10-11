import { ArduinoShield } from "./ArduinoShield.circuit"

export default () => {
  return (
    <ArduinoShield name="U1">
      <resistor name="R1" resistance="1k" footprint="0402" />
    </ArduinoShield>
  )
}
