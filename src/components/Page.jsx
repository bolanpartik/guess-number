import { useState } from "react";
import Button from "./Button";
import Input from "./Input";

export default function Page() {

    const [userNum, setUserNum] = useState('')


    const genRandomNum = () => {
        return Math.floor(Math.random() * 100) + 1
    }

    const [randomNum, setRandomNum] = useState(genRandomNum)

    const handleReset = () => {
        
    }

    const handlecheckNumber = () => {

    }

    return (
        <div>
            <p>Guess Number</p>
            <Input userNum={userNum} setUserNum={setUserNum} />
            <div>
                <Button title='Check' handleClick={handlecheckNumber} />
                <Button title='Reset' handleClick={handleReset} />
            </div>
        </div>
    )
}