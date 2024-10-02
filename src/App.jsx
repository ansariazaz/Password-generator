import { useState } from 'react'

import './App.css'
import usePasswordGenerator from './Hooks/usePasswordGenerator'
import PasswordStrength from './component/PasswordStrength'
function App() {
  const [length, setLength] = useState(4)
  const [copied, setCopied] = useState(false)
  const [checkboxData, setcheckboxData] = useState([{
    label: "include Uppercase Letters",
    state: false
  },
  {
    label: "include Lowercase Letters",
    state: false
  },
  {
    label: "include Numbers",
    state: false
  },
  {
    label: "include Symbol",
    state: false
  }])

  const { errorMessage, generatePassword, password, setErrorMessage } = usePasswordGenerator()

  const handleCheckboxChange = (i) => {
    const updatedCheckboxData = [...checkboxData]
    updatedCheckboxData[i].state = !updatedCheckboxData[i].state
    setErrorMessage("")
    setcheckboxData(updatedCheckboxData)
  }
  const handleCopyBtn = () => {
    navigator.clipboard.writeText(password)
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 1000);
  }
  return (
    <>
      <div className='container'>
        <h1 className='heading'>Password Generator</h1>
        {password && (
          <div className='section-1'>
            <div>
              <span>Generated Password:</span>
              <span className='password'>{password}</span>
            </div>
            <button className='btn' onClick={handleCopyBtn}>{copied ? "Copied" : "Copy Password"}</button>
          </div>
        )}
        <div>
          <div className='character'>
            <label htmlFor="">character length</label>
            <label htmlFor="">{length}</label>
          </div>

          <input type="range" className='range' onChange={(e) => setLength(e.target.value)} value={length} min={4} max={20} />
        </div>
        <div className='checkboxes'>
          {checkboxData?.map((checkbox, i) => (
            <div key={i} className='checkbox'>
              <input type="checkbox" checked={checkbox.state} onChange={() => handleCheckboxChange(i)} />
              <label htmlFor="">{checkbox.label}</label>
            </div>
          ))}
        </div>
        <PasswordStrength password={password} />
        {errorMessage && (
          <div className='error'>{errorMessage}</div>
        )}
        <div className='btnCont'>
          <button className='btn generateBtn' onClick={() => generatePassword(checkboxData, length)} >Generate Password</button>
        </div>
      </div>
    </>
  )
}

export default App
