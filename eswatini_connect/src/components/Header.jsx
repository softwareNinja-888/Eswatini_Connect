import { NavLink } from "./Helper/NavLink";

export function Header(){
    return (
        <>
            <div className="flex justify-between items-center text-white">
                <div className="">
                    <img src="https://cdn.prod.website-files.com/6706dece62edde9c8c446cf9/6706dece62edde9c8c446e9b_Enigma%20Studio.svg" alt="" srcset="" />
                </div>
                <nav className="flex text-gray-300 gap-10 ">
                    <div className="">About Us</div>
                    <div className="">Our Services</div>
                    <div className="">Our Work</div>
                    <div className="">Contact</div>
                    <NavLink linkName='Hello' color="[#e2c376]"/>
               
                </nav>
                <div className="cursor-pointer flex border border-secondary bg-primary text-gray-300 rounded-lg px-7 py-2 hover:bg-secondary hover:text-black transition duration-400 ease-in-out ">Let's Talk</div>
            </div>
        </>
    )
}