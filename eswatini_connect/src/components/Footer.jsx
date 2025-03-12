import { FormFooter } from "./Helper/FormFooter";

export function Footer(){
    return (
        <>

            <footer id="footer" className="footer sm:footer-horizontal text-neutral-content pt-44 px-10 bg-black">
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
                <FormFooter/>

            </footer>
        </>
    )
}