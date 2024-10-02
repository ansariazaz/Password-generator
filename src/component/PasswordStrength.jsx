import React from "react"

const PasswordStrengthIndicator = ({ password }) => {

  const getPasswordStrength = () => {
    const PasswordLength = password?.length;

    if (PasswordLength < 1) {
      return "";
    } else if (PasswordLength < 4) {
      return "Very Weak"
    } else if (PasswordLength < 8) {
      return "Poor"
    } else if (PasswordLength < 10) {
      return "Good"
    } else if (PasswordLength < 12) {
      return "Medium"
    } else if (PasswordLength < 16) {
      return "Strong"
    }else{
      return "Very Strong"
    }

  }
   const PasswordStrength = getPasswordStrength()
  if (!PasswordStrength) return <React.Fragment />

  return (
    <div className="strength">
      <p>Strength</p>
      <p>{PasswordStrength}</p>
    </div>
  )
}

export default PasswordStrengthIndicator