export default function Input({ userNum,setUserNum }) {
    
    return (
        <input
            type="number"
            placeholder="Enter a number between 1 to 100"
            value={userNum}
        />
    )
}