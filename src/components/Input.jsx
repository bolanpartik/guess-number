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
        />
    )
}