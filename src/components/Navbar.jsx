import { useState } from "react";
import Wrapper from "./Wrapper";
import { Link } from "react-scroll";
import { Download, Menu, X } from "lucide-react";
import { motion } from "motion/react"

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="sticky top-0 z-50 backdrop-blur-lg bg-white/30 border-b border-white/20">
            <Wrapper>
                <div className="flex justify-between items-center p-4">


                    <motion.h2
                           initial={{ scale:0 }}
                            whileInView={{ scale:1 }}
                            transition={{ duration: 0.5, type:'spring', stiffness:100 }}

                        className="font-semibold text-[clamp(1.25rem,3vw,1.875rem)] dancing-script">
                        Sapan Kr
                    </motion.h2>


                    <ul className="hidden sm:flex md:gap-10 gap-3 items-center bg-white/50 md:px-10 px-5 py-3 rounded-full shadow-sm">
                        <motion.li
                           initial={{ scale:0 }}
                            whileInView={{ scale:1 }}
                            transition={{ duration: 0.2, type:'spring', stiffness:100 }}

                            className="cursor-pointer hover:font-semibold transition-all duration-200 text-[clamp(0.8rem,2vw,0.9rem)]">
                            <Link to="aboutme" smooth duration={500} offset={-80}>
                                About Me
                            </Link>
                        </motion.li>

                        <motion.li
                           initial={{ scale:0 }}
                            whileInView={{ scale:1 }}
                            transition={{ duration: 0.2, type:'spring', stiffness:100 }}
                            className="cursor-pointer hover:font-semibold transition-all duration-200 text-[clamp(0.8rem,2vw,0.9rem)]">
                            <Link to="mywork" smooth duration={500}>
                                My Work
                            </Link>
                        </motion.li>
                    </ul>


                    <motion.a href="/Sapankumar.pdf" target="_blank"
                         initial={{ scale:0 }}
                            whileInView={{ scale:1 }}
                            transition={{ duration: 0.5, type:'spring', stiffness:100 }}
                            >  <button className="hidden cursor-pointer sm:flex gap-2 items-center md:px-6 px-4 py-2 bg-white border rounded-full hover:bg-gray-800 hover:text-white transition text-[clamp(0.8rem,2vw,1rem)]">
                        Resume <Download className="w-5 h-5" />
                    </button>
                    </motion.a>


                    <button
                        className="sm:hidden"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>


                {open && (
                    <div className="sm:hidden bg-white/80 backdrop-blur-lg p-4 rounded-xl mx-4 mb-4 shadow-md">
                        <ul className="flex flex-col gap-4 text-center">
                            <li >
                                <Link to="aboutme" smooth duration={500} offset={-200} onClick={() => setOpen(false)}>
                                    About Me
                                </Link>
                            </li>

                            <li>
                                <Link to="mywork" smooth duration={500} offset={-150} onClick={() => setOpen(false)}>
                                    My Work
                                </Link>
                            </li>
                            <a href="/Sapankumar.pdf" target="_blank" className="m-auto">
                                <button className="flex cursor-pointer gap-2 justify-center items-center px-6 py-2 bg-white border rounded-full hover:bg-gray-800 hover:text-white transition">
                                    Resume <Download className="w-5 h-5" />
                                </button>
                            </a>
                        </ul>
                    </div>
                )}
            </Wrapper>
        </div>
    );
};

export default Navbar;
