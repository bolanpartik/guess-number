export default function Button({ title, handleClick }) {

    return (
        <button
            className="rounded-lg mt-7 p-2 px-4 hover:bg-[#F2B316] text-white hover:text-[#1D1B16] shadow-inner shadow-blue-400 hover:shadow-lg"
            onClick={handleClick}>
            {title}
        </button>
    )
}