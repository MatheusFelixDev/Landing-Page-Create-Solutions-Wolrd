import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

export function NavBar(){
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };
    return (
        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white shadow-xl'>
        <h1 className='w-full text-3xl font-bold text-green-500'>
               
                
                    CreateSolutionsWolrd.
                
            </h1>
        <ul className='hidden md:flex '>
                <li className='p-4 transition-colors hover:scale-105 duration-300 hover:text-[#00df9a]'>
                    <a href='#'>
                        Home
                    </a>
                </li>
                                        
                <li  className='p-4 transition-colors hover:scale-105 duration-300 hover:text-[#00df9a]'>
                    <a href="#service">
                        Serviços
                    </a>
                </li>
                    
                <li className='p-4 transition-colors hover:scale-105 duration-300 hover:text-[#00df9a]'>
                    <a href='#tips'>
                        Dicas
                    </a>
                </li>
                    
                <li className='p-4 transition-colors hover:scale-105 duration-300 hover:text-[#00df9a]'>
                    <a href='#packs'>
                        Pacotes
                    </a>
                </li>  

                <li className='p-4 transition-colors hover:scale-105 duration-300 hover:text-[#00df9a]'>
                    <a href='#contacts'>
                        Contatos
                    </a>
                </li>
            </ul>
            
            <div onClick={handleNav} className='block md:hidden'>
                {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
            </div>
            
            <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-black ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
                

                <li className='p-4 border-b-4 border-gray-600 transition-colors hover:scale-105 duration-300 hover:text-[#00df9a]'>
                    <a href='#'
                        onClick={handleNav}
                    >
                        Home
                    </a>
                </li>

                <li className='p-4 border-b-4 border-gray-600 transition-colors hover:scale-105 duration-300 hover:text-[#00df9a]'>
                    <a href="#service"
                       onClick={handleNav}
                    >
                        Serviços
                    </a>
                </li>

                <li className='p-4 border-b-4 border-gray-600 transition-colors hover:scale-105 duration-300 hover:text-[#00df9a]'>
                    <a href='#tips'
                        onClick={handleNav}
                    >
                        Dicas
                    </a>
                </li>

                <li className='p-4 border-b-4 border-gray-600 transition-colors hover:scale-105 duration-300 hover:text-[#00df9a]'>
                    <a href='#packs'
                        onClick={handleNav}
                    >
                        Pacotes
                    </a>
                </li>

                <li className='p-4 transition-colors hover:scale-105 duration-300 hover:text-[#00df9a]'>
                    <a href='#contacts'
                    onClick={handleNav}>
                        Contatos
                    </a>
                </li>
            </ul>
        </div>
        
    )
}