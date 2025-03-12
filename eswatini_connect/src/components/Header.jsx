import { NavLink } from "./Helper/NavLink";

export function Header(){
    return (
        <>
            <div className="flex justify-between items-center text-white px-10 py-10">
                <div className="">
                    <img src="https://cdn.prod.website-files.com/6706dece62edde9c8c446cf9/6706dece62edde9c8c446e9b_Enigma%20Studio.svg" alt="logo" className="" />
                </div>
                <nav className="flex text-gray-300 gap-10 ">
                    <NavLink linkName='Our Services' href="services"/>
                    <NavLink linkName='About Us' href="about"/>
                    <NavLink linkName='Our Work' />
                    <NavLink linkName='Contact Us' href="footer"/>
                </nav>
                <div id="contact_Btn" className="cursor-pointer flex border border-yellowCustom  text-white rounded-lg px-10 py-2 hover:bg-yellowCustom  hover:text-black transition duration-400 ease-in-out bg-cardBg ">Let's Talk</div>
            </div>
        </>
    )
}