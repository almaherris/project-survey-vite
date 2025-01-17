import { useState } from "react"
import PropTypes from "prop-types"

// Component for the Destination Type Question

export const DestinationType = ({ onInputChange }) => {
  const [destinationType, setDestinationType] = useState("")

  const handleChange = (event) => {
    const newDestType = event.target.value

    setDestinationType(newDestType)
    onInputChange("destinationType", newDestType)
  }

  return (
    <div className="questions">
      <p className="counter">2.</p>
      <label htmlFor="destination-type" className="labelQ">
        How should your destination look like?{" "}
      </label>
      <select
        onChange={handleChange}
        value={destinationType}
        id="destination-type"
        className="destination-input"
        required>
        <option value="" disabled>
          Select destination type
        </option>
        <option value="beach">Beach</option>
        <option value="mountain">Mountain</option>
        <option value="city">City</option>
        <option value="desert">Desert</option>
        <option value="lake">Lake</option>
        <option value="jungle">Jungle</option>
        <option value="underwater">Underwater</option>
        <option value="space">Space</option>
      </select>{" "}
    </div>
  )
}

DestinationType.propTypes = {
  onInputChange: PropTypes.func.isRequired,
}
