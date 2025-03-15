import { FormFooter } from "./FormFooter";
import { useState } from "react";

export function FormModal(){
        const [email, setEmail] = useState("");
        const [phone, setPhone] = useState("");
        const [name, setName] = useState("");
        const [isSubmitting, setIsSubmitting] = useState(false);
        const [isSubmitted, setIsSubmitted] = useState(false);
        const [errors, setErrors] = useState({});
    return (
        <>
            {/* <button className="btn" onClick={()=>document.getElementById('my_modal_2').showModal()}>open modal</button> */}

            <div id="contact_Btn" className="cursor-pointer flex border border-greenPrimary  text-white rounded-lg px-10 py-2 hover:bg-greenPrimary  hover:text-black transition duration-400 ease-in-out bg-black font-inter700 " onClick={()=>document.getElementById('my_modal_2').showModal()}>Let's Talk</div>

            <dialog id="my_modal_2" className="modal">
            <div className="flex flex-col justify-center items-center  modal-box text-black bg-white">
                
                <h1 className="text-4xl mt-20 mb-10 self-start px-20">Lets talk</h1>
                <form method="dialog"onSubmit={()=>null} className="flex flex-col gap-4 w-12/12 font-inter300 modal-backdrop mx-auto text-black px-20">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-2xl font-poppins" onClick={()=>document.getElementById('my_modal_2').closeModal()}>✕</button>
                    {/* FIRST NAME */}
                    <label htmlFor="name" className="block">
                        Name *
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Name"
                        className="w-full px-3 py-2 border border-black rounded focus:outline-none focus:ring-2 focus:ring-yellowCustom focus:border-0"
                    />
                    {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

                    {/* EMAIL */}
                    <label htmlFor="emailFoot" className="block">
                        Enter your email *
                    </label>
                    <input
                        type="email"
                        id="emailFoot"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your email"
                        className="w-full px-3 py-2 border border-black rounded focus:outline-none focus:ring-2 focus:ring-yellowCustom focus:border-0"
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

                    {/* PHONE */}
                    <label htmlFor="phoneFoot" className="block">
                        Enter your phone number
                    </label>
                    <input
                        type="text"
                        id="phoneFoot"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+268 7856 6745"
                        className="w-full px-3 py-2 border border-black rounded focus:outline-none focus:ring-2 focus:ring-yellowCustom focus:border-0"
                    />
                    {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}


                    {/* SUBMIT BUTTON */}
                    <button
                        aria-label="Submit Form"
                        id="submit_form"
                        type="submit"
                        className="w-full mt-3 bg-yellowCustom border border-yellowCustom text-white text-lg font-bold py-2 font-inter700 cursor-pointer flex justify-center items-center gap-2 transition duration-500 hover:scale-103"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? (
                            <>
                                <svg
                                    className="animate-spin h-5 w-5 text-green-500"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <circle
                                        className="opacity-100"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                    ></circle>
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 100 16v-4l-3 3 3 3v-4a8 8 0 01-8-8z"
                                    ></path>
                                </svg>
                                Submitting...
                            </>
                        ) : (
                            "Submit"
                        )}
                    </button>
                </form>
            </div>

            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
           
            </dialog>
        </>
    )
}