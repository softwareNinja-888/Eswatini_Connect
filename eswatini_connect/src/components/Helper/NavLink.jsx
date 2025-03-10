export function NavLink({linkName,href="#"}){

    function toUrl(url) {
        const UrlSection = document.getElementById(url);

        if (UrlSection === null){
            window.open(url)
        } else{
            UrlSection?.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <>
            <div className={`flex gap-1.5 no-underline relative cursor-pointer text-inherit after:content-[''] after:absolute after:-bottom-0.5 after:left-0 after:w-full after:h-0.5 after:opacity-0 after:transition-opacity after:duration-300 after:ease-in-out hover:after:opacity-100 hover:after:bg-secondary text-base max-[500px]:text-xs`} onClick={()=>{toUrl(href)}}>
               {linkName} 
            </div>
        </>
    )
}