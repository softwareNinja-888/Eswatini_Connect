import { FormFooter } from "./Helper/FormFooter";
import { FaPhone } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

export function Footer(){
    return (
        <>

            <div className="flex pb-10 pt-44 px-10">
                <div className="flex flex-col justify-between flex-1">
                    <div className="">
                        <img src="https://cdn.prod.website-files.com/6706dece62edde9c8c446cf9/6706dece62edde9c8c446e9b_Enigma%20Studio.svg" alt="logo" className="" />
                    </div>
                    <footer id="footer" className="footer sm:footer-horizontal text-neutral-content bg-black font-inter700">
                        <nav>
                            <h6 className="footer-title">Services</h6>
                            <a className="link link-hover">Web Development</a>
                            <a className="link link-hover">SMS Marketing</a>
                            <a className="link link-hover">Content Marketing</a>
                            <a className="link link-hover">SEO</a>
                        </nav>
                        <nav>
                            <h6 className="footer-title">Company</h6>
                            <a className="link link-hover">About us</a>
                            <a className="link link-hover">Contact</a>
                            <a className="link link-hover">Jobs</a>
                            <a className="link link-hover">Press kit</a>
                        </nav>
                        <nav>
                            <h6 className="footer-title">Contact Info</h6>
                            <div className="flex justify-center items-center gap-3">
                                <FaPhone className="rotate-90"/>
                                <a href="tel:+26878381430" tel className="link link-hover">+268 78381430</a>
                            </div>
                            <div className="flex justify-center items-center gap-3">
                                <FaEnvelope/>
                                <a href="mailto:bayandadlamini02@gmail.com?subject=Inquiry" tel className="link link-hover">info@example.com</a>
                            </div>
                        </nav>
                    </footer>
                    
                </div>
                <FormFooter/>
            </div>

        </>
    )
}