export function Pricing(){
    const plans = [
        {
          name: "Standard Plan",
          description: "Just started your business? Then this package fits right in your budget!",
          features: [
            "Basic Strategy",
            "2 Social Media Accounts",
            "Content Creation",
            "Community Management",
            "Basic Monthly Report",
          ],
          highlight: false,
        },
        {
          name: "Professional Plan",
          description: "Expand your business influence with our effective strategies.",
          features: [
            "Detailed Strategy",
            "3 Social Media Accounts",
            "1 Video Advert",
            "Content Creation + Calendar",
            "Community Management",
            "Monthly Reporting",
          ],
          highlight: true,
        },
        {
          name: "Enterprise Plan",
          description: "Dominate your industry with high-quality content and effective marketing funnels.",
          features: [
            "Detailed Funnel Strategy",
            "4 Social Media Accounts",
            "Content Creation + 2 Video Adverts",
            "Campaign Management",
            "Community Management",
            "Detailed Monthly Reporting",
          ],
          highlight: false,
        },
      ];
    
      return (
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 p-8 bg-black text-white min-h-screen">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white text-black p-6 rounded-2xl shadow-lg w-full md:w-1/3 ${plan.highlight ? "border-t-8 border-orange-500" : ""}`}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-sm font-bold px-3 py-1 rounded-b-md">
                  Most Popular
                </div>
              )}
              <h2 className="text-xl font-semibold text-center mb-2">{plan.name}</h2>
              <p className="text-center text-gray-600 mb-4">{plan.description}</p>
              <ul className="mb-6 space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-700">
                    <span className="text-orange-500">✔</span> {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-2 rounded-lg font-semibold ${plan.highlight ? "bg-black text-white" : "bg-gray-200 text-gray-700"}`}
              >
                GET STARTED
              </button>
            </div>
          ))}
        </div>
    );
}