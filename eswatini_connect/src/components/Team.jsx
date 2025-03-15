// import React, { useState } from 'react'; 

import { TeamLine } from "./Helper/TeamLine";

export function Team(){        
    return (
        <section className="py-12 bg-black sm:py-16 lg:py-40">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-white font-inter600 sm:text-4xl xl:text-5xl font-pj">Meet Our Team</h2>
                </div>

                <div className="grid max-w-6xl grid-cols-1 px-20 mx-auto mt-12 text-center sm:px-0 sm:grid-cols-2 md:mt-20 gap-x-8 md:grid-cols-4 gap-y-12 lg:gap-x-16 xl:gap-x-20">
                    <div>
                        <img className="object-cover w-32 h-32 mx-auto rounded-full lg:w-44 lg:h-44 grayscale filter" src="https://cdn.rareblocks.xyz/collection/clarity/images/team/1/team-member-1.png" alt="" />
                        <p className="mt-5 text-lg font-bold text-white sm:text-xl sm:mt-8 font-pj">Jerome Bell</p>
                        <p className="mt-2 text-base font-normal text-white font-pj">Co founder, Chairman, Executive Director</p>
                    </div>

                    <div>
                        <img className="object-cover w-32 h-32 mx-auto rounded-full lg:w-44 lg:h-44 grayscale filter" src="https://cdn.rareblocks.xyz/collection/clarity/images/team/1/team-member-2.png" alt="" />
                        <p className="mt-5 text-lg font-bold text-white sm:text-xl sm:mt-8 font-pj">Jerome Bell</p>
                        <p className="mt-2 text-base font-normal text-white">Co founder, Chairman, Executive Director</p>
                    </div>

                    <div>
                        <img className="object-cover w-32 h-32 mx-auto rounded-full lg:w-44 lg:h-44 grayscale filter" src="https://cdn.rareblocks.xyz/collection/clarity/images/team/1/team-member-3.png" alt="" />
                        <p className="mt-5 text-lg font-bold text-white sm:text-xl sm:mt-8 font-pj">Jerome Bell</p>
                        <p className="mt-2 text-base font-normal text-white">Co founder, Chairman, Executive Director</p>
                    </div>

                    <div>
                        <img className="object-cover w-32 h-32 mx-auto rounded-full lg:w-44 lg:h-44 grayscale filter" src="https://cdn.rareblocks.xyz/collection/clarity/images/team/1/team-member-4.png" alt="" />
                        <p className="mt-5 text-lg font-bold text-white sm:text-xl sm:mt-8 font-pj">Jerome Bell</p>
                        <p className="mt-2 text-base font-normal text-white font-pj">Co founder, Chairman, Executive Director</p>
                    </div>
                </div>

                <div className="mt-12 sm:mt-16">
                  <TeamLine />
                </div>

                <div className="max-w-3xl mx-auto mt-12 space-y-8 sm:space-y-0 sm:flex sm:items-center sm:justify-center sm:mt-16 sm:gap-x-16">
                    <div>
                        <img className="w-auto mx-auto h-11" src="https://cdn.rareblocks.xyz/collection/clarity/images/team/1/logo-waverio.svg" alt="" />
                    </div>

                    <div>
                        <img className="w-auto mx-auto h-11" src="https://cdn.rareblocks.xyz/collection/clarity/images/team/1/logo-squarestone.svg" alt="" />
                    </div>

                    <div>
                        <img className="w-auto mx-auto h-11" src="https://cdn.rareblocks.xyz/collection/clarity/images/team/1/logo-creaty.svg" alt="" />
                    </div>
                </div>
            </div>
        </section>

    )
}