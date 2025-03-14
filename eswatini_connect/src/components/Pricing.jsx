// export function Pricing(){
//     const plans = [
//         {
//           name: "Standard Plan",
//           description: "Just started your business? Then this package fits right in your budget!",
//           features: [
//             "Basic Strategy",
//             "2 Social Media Accounts",
//             "Content Creation",
//             "Community Management",
//             "Basic Monthly Report",
//           ],
//           highlight: false,
//         },
//         {
//           name: "Professional Plan",
//           description: "Expand your business influence with our effective strategies.",
//           features: [
//             "Detailed Strategy",
//             "3 Social Media Accounts",
//             "1 Video Advert",
//             "Content Creation + Calendar",
//             "Community Management",
//             "Monthly Reporting",
//           ],
//           highlight: true,
//         },
//         {
//           name: "Enterprise Plan",
//           description: "Dominate your industry with high-quality content and effective marketing funnels.",
//           features: [
//             "Detailed Funnel Strategy",
//             "4 Social Media Accounts",
//             "Content Creation + 2 Video Adverts",
//             "Campaign Management",
//             "Community Management",
//             "Detailed Monthly Reporting",
//           ],
//           highlight: false,
//         },
//       ];
    
//       return (
//         <div className="flex flex-col md:flex-row justify-center items-center gap-6 p-8 bg-black text-white min-h-screen">
//           {plans.map((plan, index) => (
//             <div
//               key={index}
//               className={`relative bg-white text-black p-6 rounded-2xl shadow-lg w-full md:w-1/3 ${plan.highlight ? "border-t-8 border-orange-500" : ""}`}
//             >
//               {plan.highlight && (
//                 <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-sm font-bold px-3 py-1 rounded-b-md">
//                   Most Popular
//                 </div>
//               )}
//               <h2 className="text-xl font-semibold text-center mb-2">{plan.name}</h2>
//               <p className="text-center text-gray-600 mb-4">{plan.description}</p>
//               <ul className="mb-6 space-y-2">
//                 {plan.features.map((feature, i) => (
//                   <li key={i} className="flex items-center gap-2 text-gray-700">
//                     <span className="text-orange-500">✔</span> {feature}
//                   </li>
//                 ))}
//               </ul>
//               <button
//                 className={`w-full py-2 rounded-lg font-semibold ${plan.highlight ? "bg-black text-white" : "bg-gray-200 text-gray-700"}`}
//               >
//                 GET STARTED
//               </button>
//             </div>
//           ))}
//         </div>
//     );
// }

import React from "react";
import {CardSvg} from './Helper/CardSvg'

export function Pricing() {

  function  PricingCard({
    children,
    description,
    price,
    type,
    subscription,
    buttonText,
    active,
  }) {
    return (
      <>
        <div className="w-full px-4 md:w-1/2 lg:w-1/3">
          <div className="relative z-10 mb-10 overflow-hidden rounded-[10px] border-2 border-stroke bg-[#1a1a1a] px-8 py-10 shadow-pricing dark:border-dark-3 dark:bg-dark-2 sm:p-12 lg:px-6 lg:py-10 xl:p-[50px]">
            <span className="mb-3 block text-lg font-semibold text-yellowCustom">
              {type}
            </span>
            <h2 className="mb-5 text-[42px] font-bold text-white">
              {price}
              <span className="text-base font-medium text-white">
                / {subscription}
              </span>
            </h2>
            <p className="mb-8 border-b border-stroke pb-8 text-base text-white">
              {description}
            </p>
            <div className="mb-9 flex flex-col gap-[14px]">{children}</div>
            <a
              href="/#"
              className={` ${
                active
                  ? "block w-full rounded-md border  bg-yellowCustom border-yellowCustom p-3 text-center text-base font-medium text-white transition hover:bg-opacity-90"
                  : "block w-full rounded-md border border-stroke bg-transparent p-3 text-center text-base font-medium text-yellowCustom border-yellowCustom transition hover:border-yellowCustom hover:bg-yelborder-yellowCustom hover:text-white dark:border-dark-3"
              } `}
            >
              {buttonText}
            </a>
            <div>
              <CardSvg/>
            </div>
          </div>
        </div>
      </>
    );
  };

  const List = ({ children }) => {
    return (
      <p className="text-base text-white">{children}</p>
    );
  }; 
  
  return (
    <section className="relative z-10 overflow-hidden bg-black pb-12 pt-20 lg:pb-[90px] lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center">
              <span className="mb-2 block text-lg font-semibold text-yellowCustom">
                Pricing Table
              </span>
              <h2 className="mb-3 text-3xl font-bold leading-[1.208] text-white sm:text-4xl md:text-[40px]">
                Our Pricing Plan
              </h2>
              <p className="text-base text-white">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="-mx-4 flex flex-wrap">
            <PricingCard
              type="Personal"
              price="$59"
              subscription="year"
              description="Perfect for using in a personal website or a client project."
              buttonText="Choose Personal"
            >
              <List>1 User</List>
              <List>All UI components</List>
              <List>Lifetime access</List>
              <List>Free updates</List>
              <List>Use on 1 (one) project</List>
              <List>3 Months support</List>
            </PricingCard>
            <PricingCard
              type="Business"
              price="$199"
              subscription="year"
              description="Perfect for using in a personal website or a client project."
              buttonText="Choose Business"
              active
            >
              <List>5 User</List>
              <List>All UI components</List>
              <List>Lifetime access</List>
              <List>Free updates</List>
              <List>Use on31 (Three) project</List>
              <List>4 Months support</List>
            </PricingCard>
            <PricingCard
              type="Professional"
              price="$256"
              subscription="year"
              description="Perfect for using in a personal website or a client project."
              buttonText="Choose Professional"
            >
              <List>Unlimited User</List>
              <List>All UI components</List>
              <List>Lifetime access</List>
              <List>Free updates</List>
              <List>Unlimited project</List>
              <List>12 Months support</List>
            </PricingCard>
          </div>
        </div>
      </div>
    </section>
  );
};


