import { useState } from "react"

const usePasswordGenerator = () => {
    const [password, setPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    const generatePassword = (checkboxData, length) => {
        let charset = "";
        let generatepassword = "";
        const selectedOption = checkboxData.filter((checkbox) => checkbox.state)
        if(selectedOption.length ===0){
            setErrorMessage("select at least one option")
            setPassword("")
            return;
        }
        selectedOption.forEach(option => {
            switch (option.label) {
                case "include Uppercase Letters":
                    charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                    break;

                case "include Lowercase Letters":
                    charset += "abcdefghijklmnopqrstuvwxyz";
                    break;
                case "include Numbers":
                    charset += "0123456789";
                    break;

                case "include Symbol":
                    charset += "!@#$%^&*()";
                    break;
                default:
                    break;
            }
        });
        for (let index = 0; index < length; index++) {
            const randomIndex = Math.floor(Math.random()* charset.length)
            generatepassword += charset[randomIndex]
        }
        setPassword(generatepassword)
        setErrorMessage("")
    }

    return { password, errorMessage, generatePassword,setErrorMessage }
}

export default usePasswordGenerator