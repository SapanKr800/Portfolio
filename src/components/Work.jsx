
import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Wrapper from './Wrapper';
import { motion } from "motion/react"

const Work = () => {

    const [hoveredCard, setHoveredCard] = useState(null);

    const projects = [
        {
            id: 1,
            title: 'LUXIFY',
            image: '/luxify.png',
            url: 'https://luxify-one.vercel.app/',
        },
        {
            id: 2,
            title: 'Magazine',
            image: '/magazin.png',
            url: 'https://magazine-five-iota.vercel.app/',
        },
        {
            id: 3,
            title: 'Dashboard',
            image: '/Modern-Dashboard.png',
            url: 'https://sapankr800.github.io/Modern-Dashboard/',
        },
        {
            id: 4,
            title: 'Wizardz',
            image: '/wizardz.png',
            url: 'https://sapankr800.github.io/WizardZ-Gsap/',
        },
    ];

    return (

        <>

            <Wrapper >

                <div className=" bg-white py-20 px-6 md:px-16" id='mywork'>

                    <div className="max-w-4xl mx-auto text-center mb-16">

                        <motion.h2
                            initial={{ y: -30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.7, delay: 0.7 }}
                            className="text-3xl font-light text-gray-900 mb-8">My latest work</motion.h2>



                    </div>


                    <div className="max-w-7xl mx-auto mb-16">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {projects.map((project, i) => (

                                <motion.div
                                    initial={{ y: 30, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.6, delay: i * 0.4 }}

                                    key={project.id}
                                    className="group relative rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 cursor-pointer border"
                                    onMouseEnter={() => setHoveredCard(project.id)}
                                    onMouseLeave={() => setHoveredCard(null)}
                                >        <a href={project.url} target='_blank'>

                                        <div className="relative h-80 overflow-hidden bg-gray-200">
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
                                        </div>


                                        <div className={`absolute bottom-4 left-4 right-4 bg-white rounded-2xl p-5 transition-all duration-300 ${hoveredCard === project.id ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-100'
                                            }`}>
                                            <div className="flex items-center justify-between gap-4">
                                                <div className="flex-1">
                                                    <h3 className="text-gray-900 font-semibold text-base mb-1">{project.title}</h3>

                                                </div>
                                                <div className="shrink-0 w-10 h-10 bg-yellow-300 rounded-full flex items-center justify-center hover:bg-yellow-400 transition-colors">
                                                    <ArrowUpRight className="w-5 h-5 text-gray-900" strokeWidth={3} />
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </motion.div>

                            ))}
                        </div>
                    </div>


                    <div className="flex justify-center">


                        <motion.button
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="flex justify-center cursor-pointer items-center gap-3 right-0 md:px-6 px-4 py-2 bg-white border rounded-full hover:bg-gray-800 hover:text-white transition duration-300 text-[clamp(0.8rem,2vw,1rem)]">
                            Show more
                            <ArrowRight className="w-5 h-5" />
                        </motion.button>

                    </div>
                </div>



            </Wrapper>

        </>
    )
}

export default Work