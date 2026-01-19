import React from 'react'
import Wrapper from './Wrapper'
import { Code2, GraduationCap, Briefcase, Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { motion } from "motion/react"

const Hero = () => {
    return (
        <>

            <Wrapper>

                <div className="bg-white p-8" id='aboutme'>

                    <div className="text-center mb-12">
                        <motion.p
                            initial={{ y: -20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.4, delay: 0.2 }}
                            className="text-gray-600 text-sm mb-2">Introduction</motion.p>
                        <motion.h1
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="text-5xl md:text-6xl font-light text-gray-900">About me</motion.h1>
                    </div>



                    <div className="grid md:grid-cols-[1fr_3fr] gap-12 items-start">


                        <div className="text-center flex justify-center">
                            <motion.img
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                transition={{ duration: 0.5 }}
                                src="/sapan.png"
                                className="md:w-full md:h-full w-[clamp(15rem,20vw,20rem)]  object-cover rounded-3xl"
                            />
                        </div>



                        <div>

                            <motion.p
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                className="text-gray-700 text-md leading-relaxed mb-10 max-w-250 ovo-regular">
                                Frontend Developer with 3+ years of experience building responsive, high-performance web applications using React.js,
                                JavaScript, HTML5, and CSS3. Adept at translating UI/UX designs into high-quality
                                code and collaborating cross-functionally to deliver scalable products and performance
                                optimization, delivering accessible, maintainable code in collaborative environments.
                            </motion.p>


                            <div className=" mb-10 grid sm:grid-cols-[repeat(auto-fit,180px)] grid-cols-1 justify-center sm:justify-normal gap-6">



                                <motion.div
                                    initial={{ y: -30, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.7, delay: 1 }}
                                    className="border border-gray-300 rounded-lg p-6 hover:shadow-[5px_5px_0_0_#000] transition delay-100 cursor-pointer">
                                    <Code2
                                        className="w-5 h-5 text-gray-600 mb-3" />

                                    <h3 className="font-semibold text-gray-900 mb-1">Skills</h3>
                                    <p className="text-sm text-gray-600">HTML5, CSS3, JavaScript, React.js</p>
                                </motion.div>

                                <motion.div
                                    initial={{ y: -30, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.8, delay: 1.1 }}
                                    className="border border-gray-300 rounded-lg p-6 hover:shadow-[5px_5px_0_0_#000] transition delay-100 cursor-pointer">
                                    <Briefcase className="w-5 h-5 text-gray-600 mb-3" />


                                    <h3 className="font-semibold text-gray-900 mb-1">Projects </h3>
                                    <p className="text-sm text-gray-600">Worked on multiple projects</p>
                                </motion.div>

                                <motion.div
                                    initial={{ y: -30, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.9, delay: 1.2 }}
                                    className="border border-gray-300 rounded-lg p-6 hover:shadow-[5px_5px_0_0_#000] transition delay-100 cursor-pointer">
                                    <GraduationCap className="w-5 h-5 text-gray-600 mb-3" />
                                    <h3 className="font-semibold text-gray-900 mb-1">Education</h3>
                                    <p className="text-sm text-gray-600">B.Tech in Computer Science</p>
                                </motion.div>




                            </div>


                            <div>
                                <motion.h4
                                    initial={{ y: 30, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                    className="text-gray-900 mb-4">Connect with me</motion.h4>
                                <div

                                    className="flex gap-3 flex-wrap">
                                    <motion.a
                                        initial={{ y: 30, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 0.6, delay: 0.6 }}
                                        href='mailto:sapankr800@gmail.com' target='_blank'>   <div className="w-12 h-12 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-100 transition">

                                            <Mail className="w-5 h-5 text-red-500" />
                                        </div></motion.a>
                                    <motion.a
                                        initial={{ y: 30, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 0.7, delay: 0.7 }}
                                        href='https://github.com/SapanKr800' target='_blank'>  <div className="w-12 h-12 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-100 transition">
                                            <Github className="w-5 h-5 text-gray-900" />
                                        </div></motion.a>
                                    <motion.a
                                        initial={{ y: 30, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 0.8, delay: 0.8 }}
                                        href='https://www.linkedin.com/in/sapan-kumar-12b9ab175/' target='_blank'>   <div className="w-12 h-12 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-100 transition">
                                            <Linkedin className="w-5 h-5 text-blue-600" />
                                        </div> </motion.a>

                                    <motion.a
                                        initial={{ y: 30, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}

                                        transition={{ duration: 0.8, delay: 0.8 }}
                                        href='#' >
                                        <div className="w-12 h-12 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-100 transition">
                                            <Twitter className="w-5 h-5" />
                                        </div>
                                    </motion.a>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="my-16">
                        <motion.h2
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="text-3xl font-light text-gray-900 mb-8">Technical Skills</motion.h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                            <motion.div
                                initial={{ y: 30, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                                className="border border-gray-200 rounded-lg p-6 bg-white">
                                <h3 className="font-semibold text-gray-900 mb-3">Languages</h3>
                                <div className="flex flex-wrap gap-2">
                                    <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded border border-gray-200">JavaScript (ES6+)</span>
                                    <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded border border-gray-200">HTML5</span>
                                    <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded border border-gray-200">CSS3</span>
                                </div>
                            </motion.div>


                            <motion.div
                                initial={{ y: 30, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.7, delay: 0.7 }}
                                className="border border-gray-200 rounded-lg p-6 bg-white">
                                <h3 className="font-semibold text-gray-900 mb-3">Frameworks & Libraries</h3>
                                <div className="flex flex-wrap gap-2">
                                    <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded border border-gray-200">React.js</span>
                                    <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded border border-gray-200">Bootstrap</span>
                                    <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded border border-gray-200">Tailwind CSS</span>
                                    <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded border border-gray-200">jQuery</span>
                                </div>
                            </motion.div>


                            <motion.div
                                initial={{ y: 30, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.7, delay: 0.7 }}
                                className="border border-gray-200 rounded-lg p-6 bg-white">
                                <h3 className="font-semibold text-gray-900 mb-3">Tools & Technologies</h3>
                                <div className="flex flex-wrap gap-2">
                                    <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded border border-gray-200">Git</span>
                                    <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded border border-gray-200">GitHub</span>
                                    <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded border border-gray-200">VS Code</span>
                                    <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded border border-gray-200">Chrome DevTools</span>
                                    <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded border border-gray-200">Axios</span>
                                    <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded border border-gray-200">Fetch API</span>
                                </div>
                            </motion.div>


                            <motion.div
                                initial={{ y: 30, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.7, delay: 0.7 }}
                                className="border border-gray-200 rounded-lg p-6 bg-white">
                                <h3 className="font-semibold text-gray-900 mb-3">Deployment & Hosting</h3>
                                <div className="flex flex-wrap gap-2">
                                    <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded border border-gray-200">Netlify</span>
                                    <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded border border-gray-200">Vercel</span>
                                    <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded border border-gray-200">GitHub Pages</span>
                                </div>
                            </motion.div>
                        </div>
                    </div>


                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.7 }}
                        className="border border-gray-200 rounded-lg p-8 bg-white">
                        <h3 className="font-semibold text-gray-900 mb-6">Core Competencies</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            <p className="text-sm text-gray-700">✨ Responsive Design</p>
                            <p className="text-sm text-gray-700">🌐 Cross-browser Compatibility</p>
                            <p className="text-sm text-gray-700">🔗 API Integration</p>
                            <p className="text-sm text-gray-700">⚡ Performance Optimization</p>
                            <p className="text-sm text-gray-700">📦 Code Splitting</p>
                            <p className="text-sm text-gray-700">🎯 Lazy Loading</p>
                            <p className="text-sm text-gray-700">🔨 Minification</p>
                        </div>
                    </motion.div>

                </div>

            </Wrapper>



        </>
    )
}

export default Hero