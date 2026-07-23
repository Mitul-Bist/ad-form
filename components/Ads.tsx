const adSizes = [
    {
        type: "Leaderboard",
        dimensions: "728x90",
        placement: "Top of page"
    },
    {
        type: "Large Leaderboard",
        dimensions: "970x90",
        placement: "Top of page"
    },
    {
        type: "Billboard",
        dimensions: "970x250",
        placement: "Hero section"
    },
    {
        type: "Medium Rectangle",
        dimensions: "300x250",
        placement: "Within content / Sidebar"
    },
    {
        type: "Large Rectangle",
        dimensions: "336x280",
        placement: "Within articles"
    },
    {
        type: "Wide Skyscraper",
        dimensions: "160x600",
        placement: "Sidebar"
    },
    {
        type: "Half Page",
        dimensions: "300x600",
        placement: "Sidebar"
    },
    {
        type: "Mobile Banner",
        dimensions: "320x50",
        placement: "Top or Bottom"
    },
    {
        type: "Large Mobile Banner",
        dimensions: "320x100",
        placement: "Between content"
    },
    {
        type: "Mobile Leaderboard",
        dimensions: "300x50",
        placement: "Top or Bottom"
    },
    {
        type: "Square",
        dimensions: "250x250",
        placement: "Flexible placement"
    }
];

export default function AdForm() {
    return (

        <form className="bg-white w-3/5 p-2 flex flex-col rounded-sm mt-5" action="">
            {/*TITLE  */}
            <div className="flex flex-col m-2">
                <div className=" text-black/30">part 2 of 2</div>
                <div className=" text-xl font-semibold">ADVERTISEMENT SIZES</div>
            </div>

            {/*             
            <div className="flex flex-row justify-center w-full">

                
                <div className="flex flex-col m-2 w-1/2">
                    <label htmlFor="first-name">First Name</label>
                    <input
                        className="bg-gray-200 border-gray-500 rounded-sm h-8 "
                        type="text" name="first-name" id="name"
                    />
                </div>


                
                <div className="flex flex-col m-2 w-1/2">
                    <label htmlFor="first-name">Last Name</label>
                    <input
                        className="bg-gray-200 border-gray-500 rounded-sm h-8"
                        type="text" name="last-name" id="last-name"
                    />
                </div>

            </div> */}

            {/* ad table */}
            <div className="flex flex-row justify-around w-full  mt-4">
                <div className="w-1/15 border-amber-200 border-2">s.no</div>
                <div className="w-3/15 border-amber-200 border-2">Ad-Type</div>
                <div className="w-2/15 border-amber-200 border-2">Dimensions</div>
                <div className="w-3/15 border-amber-200 border-2">Placement</div>
                <div className="w-4/15 border-amber-200 border-2">Cost</div>
            </div>

            {
                adSizes.map((ad, i) => {
                    return (
                        <div className="flex flex-row justify-around w-full mt-5">
                            <div className="w-1/15">{i}</div>
                            <div className="w-3/15">{ad.type}</div>
                            <div className="w-2/15">{ad.dimensions}</div>
                            <div className="w-3/15">{ad.placement}</div>
                            <input
                                className="w-4/15 bg-gray-200 border-gray-500 rounded-sm h-8 "
                                type="text" name="first-name" id="name"
                            />
                        </div>
                    )
                })
            }

        </form>
    )
}