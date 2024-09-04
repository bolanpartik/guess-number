import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import Input from "./Input";
import ShowResult from "./ShowResult";

export default function Page() {

    const [userNum, setUserNum] = useState('')
    const [message, setMessage] = useState('')
    const [showMessage, setShowMessage] = useState(false)
    const guessRef = useRef(0)

    const genRandomNum = () => {
        return Math.floor(Math.random() * 100) + 1
    }

    const [randomNum, setRandomNum] = useState(genRandomNum)

    const handleReset = () => {
        setRandomNum(genRandomNum)
        setUserNum('')
        setShowMessage(false)
        guessRef.current = 0
    }

    useEffect(() => {
        if (showMessage) {
            const timer = setTimeout(() => {
                setShowMessage(false)
            }, 2000)
            return () => clearTimeout(timer)
        }
    }, [showMessage])

    const handlecheckNumber = () => {

        if(!userNum || isNaN(userNum)){
            setMessage("Please enter a vaild number.")
            setShowMessage(true)
            return
        }

        const num = parseInt(userNum)

        if (num > 0 && num <= 100) {
            
            guessRef.current +=1

            if (num == randomNum) {
                setMessage(`You guessed it in ${guessRef.current} guess.`)
            } 
            else if (num > randomNum) {
                setMessage('Enter smaller number')
            } 
            else {
                setMessage('Enter bigger number')
            }
        } else {
            setMessage('Please enter a number between 1 to 100.')
        }
        setShowMessage(true)

    }

    return (
        <div>
            <p>Guess Number</p>
            <Input userNum={userNum} setUserNum={setUserNum} />
            <div>
                <Button title='Check' handleClick={handlecheckNumber} />
                <Button title='Reset' handleClick={handleReset} />
            </div>
            {showMessage && <ShowResult message={message} />}
        </div>
    )
}