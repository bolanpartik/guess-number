import { useState } from "react";
import Input from "./Input";

export default function Page() {
    const [userNum, setUserNum] = useState('')
    
    return (
        <div>
            <p>Guess Number</p>
            <Input userNum={userNum} setUserNum={setUserNum} />
        </div>
    )
}