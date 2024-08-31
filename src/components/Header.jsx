import Logo from '../assets/logo.png'

export default function Header(){
    return(
        <header className='flex justify-between h-16 shadow-sm shadow-white w-full text-white backdrop-blur-sm bg-black/50'>
            <div className='flex items-center h-full ml-5'>
                <img src={Logo} alt="log" className='h-14'/>
                <p className='ml-3 text-2xl'>Guess Number</p>
            </div>
            <div className='flex items-center gap-5 mr-5'>
                <a href="#" className='transition-all hover:scale-110'>Home</a>
                <a href="#" className='transition-all hover:scale-110'>Contact</a>
                <a href="#" className='transition-all hover:scale-110'>About</a>
            </div>
        </header>
    )
}