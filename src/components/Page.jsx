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
        <div className="flex flex-col items-center mt-16 border-none rounded-xl w-1/3 bg-black/60 backdrop-blur-sm h-2/5 pb-4 text-yellow-400 shadow-md shadow-white/40">
            <p className="text-4xl mt-4">Guess Number</p>
            <Input userNum={userNum} setUserNum={setUserNum} />
            <div className="flex gap-7">
                <Button title='Check' handleClick={handlecheckNumber} />
                <Button title='Reset' handleClick={handleReset} />
            </div>
            {showMessage && <ShowResult message={message} />}
        </div>
    )
}