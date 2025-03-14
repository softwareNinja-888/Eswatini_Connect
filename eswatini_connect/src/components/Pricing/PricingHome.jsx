import React, { useState } from 'react';
import { PriceLg } from './PriceLg';
import { PriceSm } from './PriceSm';

export function PricingHome(){

    return (
            <section className="py-10 bg-white sm:py-16 lg:py-24">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="max-w-xl mx-auto text-center">
                        <h2 className="text-4xl font-bold text-black lg:text-5xl sm:text-5xl">Pricing &amp; Plans</h2>
                        <p className="mt-4 text-lg leading-relaxed text-gray-600">Amet minim mollit non deserunt ullam co est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                    </div>
    
                    <PriceLg/>
                </div>
    
                <PriceSm/>
        </section>
    
        )
    }