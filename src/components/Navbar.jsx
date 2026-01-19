

import Wrapper from './Wrapper'
import { Link } from "react-scroll";
import { Download } from 'lucide-react';
const Navbar = () => {


    return (
        <>

            <div className='sticky top-0 z-50 backdrop-blur-lg bg-white/30 border-b border-white/20'>

                <Wrapper >

                    <div className="flex justify-between items-center p-4 ">


                        <h2 className="font-semibold text-[clamp(1.25rem,3vw,1.875rem)]">
                            Sapan Kr
                        </h2>



                        <ul className="hidden sm:flex md:gap-10 gap-3 items-center bg-white/50 md:px-10 px-5 py-3 rounded-full shadow-sm">

                            <li className="cursor-pointer hover:font-semibold transition-all duration-200 text-[clamp(0.8rem,2vw,1rem)]" >

                                <Link to='aboutme' smooth={true} duration={500} offset={-80}>   About Me</Link>
                            </li>

                            <li className="cursor-pointer hover:font-semibold transition-all duration-200 text-[clamp(0.8rem,2vw,1rem)]" >
                                <Link to='mywork' smooth={true} duration={500}> My Work</Link>
                            </li>

                        </ul>



                        <button className="flex gap-2 justify-center items-center cursor-pointer right-0 md:px-6 px-4 py-2 bg-white border rounded-full hover:bg-gray-800 hover:text-white transition duration-300 text-[clamp(0.8rem,2vw,1rem)]">
                            Resume  <Download className="w-5 h-5" />
                        </button>





                    </div>



                </Wrapper>


            </div>


        </>
    )
}

export default Navbar
