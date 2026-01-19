import React from 'react'
import Wrapper from './Wrapper'
import { motion } from "motion/react"

const Footer = () => {
    return (
        <>

            <Wrapper>
                <footer className="bg-white py-10">


                    <div className="text-center mb-6 pb-6 border-b border-gray-300">



                        <div className="text-center">
                            <motion.p
                                initial={{ y: 30, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                                className="text-xs text-gray-500">© {new Date().getFullYear()}
                                <span className='dancing-script'>Sapan Kumar</span>.
                                🎨 Designed & 💻 Built by Me.</motion.p>

                        </div>
                    </div>
                </footer>

            </Wrapper>
        </>
    )
}

export default Footer