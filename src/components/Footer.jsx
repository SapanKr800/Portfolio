import React from 'react'
import Wrapper from './Wrapper'


const Footer = () => {
    return (
        <>

            <Wrapper>
                <footer className="bg-white py-10">


                    <div className="text-center mb-6 pb-6 border-b border-gray-300">



                        <div className="text-center">
                            <p className="text-xs text-gray-500">© {new Date().getFullYear()} Sapan Kumar. 🎨 Designed & 💻 Built by Me.</p>

                        </div>
                    </div>
                </footer>

            </Wrapper>
        </>
    )
}

export default Footer