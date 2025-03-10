import { NavLink } from "./Helper/NavLink";

export function Header(){
    return (
        <>
            <div className="flex justify-between items-center text-white px-10 py-10">
                <div className="">
                    <img src="https://cdn.prod.website-files.com/6706dece62edde9c8c446cf9/6706dece62edde9c8c446e9b_Enigma%20Studio.svg" alt="logo" className="" />
                </div>
                <nav className="flex text-gray-300 gap-10 ">
                    <NavLink linkName='About Us' />
                    <NavLink linkName='Our Services' />
                    <NavLink linkName='Our Work' />
                    <NavLink linkName='Contact Us' />
                </nav>
                <div className="cursor-pointer flex border border-secondary bg-primary text-gray-300 rounded-lg px-7 py-2 hover:bg-secondary hover:text-black transition duration-400 ease-in-out ">Let's Talk</div>
            </div>
        </>
    )
}