export default function IntroSection(){
    return(
        <div className="bg-white w-full md:w-3/5 p-4 flex flex-col rounded-sm mt-5">
            <div className="h-1 w-40 mb-5 bg-blue-500 rounded-full"></div>
            <h1 className="text-3xl font-semibold text-slate-900">
                Help Us Understand <span className="text-blue-600">Website Advertising</span>
            </h1>

            <p className="text-lg text-slate-600 leading-8 mt-2">
                We're conducting a short survey to better understand how businesses use advertisements on their websites. 
                Your insights will help us gather valuable data on advertising strategies, placements, 
                and performance across different industries.
            </p>

            <ul className="mt-6 mx-8 pl-5 text-slate-700 text-base list-disc marker:text-xl marker:text-blue-500 flex flex-col gap-3">
                <li>It only takes 2–3 minutes to complete</li>
                <li>Your responses are <span className="font-semibold">greatly appreciated.</span></li>
            </ul>
        </div>
    );
}