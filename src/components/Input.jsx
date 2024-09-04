export default function Input({ userNum,setUserNum }) {

    const handleInputChange = (e) => {
        setUserNum(e.target.value)
    }
    
    return (
        <input
            type="number"
            placeholder="Enter a number between 1 to 100"
            value={userNum}
            onChange={handleInputChange}
            className="w-4/5 sm:w-1/2 mt-7 bg-neutral-800 p-2 outline-none text-center rounded-md shadow-sm border-b-2 focus:border-b-yellow-400 [&::-webkit-inner-spin-button]:appearance-none"
        />
    )
}