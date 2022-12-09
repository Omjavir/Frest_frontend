import React from 'react'
import { GiFlowerPot } from 'react-icons/gi';
import { AiOutlineInstagram } from 'react-icons/ai';
import { RxTwitterLogo } from 'react-icons/rx';
import { CiFacebook, CiLinkedin } from 'react-icons/ci';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="px-4 divide-y bg-lime-200 border-b-blue-500 border-2 border-t-blue-500 text-blue-500">
            <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
                <div className="lg:w-1/3 flex justify-center mt-10">
                    <h1 className='text-3xl text-blue-700 font-bold mr-4 sm:text-4xl flex'><GiFlowerPot /><span className='mx-2'>FREST</span> </h1>
                </div>
                <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4 mx-auto">
                    <div className="space-y-3">
                        <h3 className="tracking-wide uppercase dark:text-gray-50 text-blue-500 font-semibold underline">Product</h3>
                        <ul className="space-y-1">
                            <li>
                                <p>Features</p>
                            </li>
                            <li>
                                <p>Integrations</p>
                            </li>
                            <li>
                                <p>Pricing</p>
                            </li>
                            <li>
                                <p>FAQ</p>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h3 className="tracking-wide uppercase dark:text-gray-50 text-blue-500 font-semibold underline">Company</h3>
                        <ul className="space-y-1">
                            <li>
                                <p>Privacy</p>
                            </li>
                            <li>
                                <p>Terms of Service</p>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h3 className="uppercase dark:text-gray-50 text-blue-500 font-semibold underline">Developers</h3>
                        <ul className="space-y-1">
                            <li>
                                <p>Public API</p>
                            </li>
                            <li>
                                <p>Documentation</p>
                            </li>
                            <li>
                                <p>Guides</p>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <div className="uppercase dark:text-gray-50 text-blue-500 font-semibold underline">Social media</div>
                        <div className="flex justify-start space-x-3 flex-wrap">
                            <AiOutlineInstagram size={20} />
                            <RxTwitterLogo size={20} />
                            <CiFacebook size={20} />
                            <CiLinkedin size={20} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-6 text-sm text-center border-blue-500">
                <a target={'_blank'} href='https://www.linkedin.com/in/om-javir-316613254/'><h4>Made with ❤️ by <b className='underline cursor-pointer'>omjavir</b></h4></a>
            </div>
        </footer>
    )
}

export default Footer