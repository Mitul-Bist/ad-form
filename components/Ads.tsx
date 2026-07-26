import Link from "next/link";
import {SquareArrowOutUpRight} from 'lucide-react';

const adSizes = [
    {
        type: "Leaderboard",
        dimensions: "728x90",
        placement: "Top of page",
        inputName: "leaderboardCost"
    },
    {
        type: "Large Leaderboard",
        dimensions: "970x90",
        placement: "Top of page",
        inputName: "largeLeaderboardCost"
    },
    {
        type: "Billboard",
        dimensions: "970x250",
        placement: "Hero section",
        inputName: "billboardCost"
    },
    {
        type: "Medium Rectangle",
        dimensions: "300x250",
        placement: "Within content / Sidebar",
        inputName: "mediumRectangleCost"
    },
    {
        type: "Large Rectangle",
        dimensions: "336x280",
        placement: "Within articles",
        inputName: "largeRectangleCost"
    },
    {
        type: "Wide Skyscraper",
        dimensions: "160x600",
        placement: "Sidebar",
        inputName: "wideSkyscraperCost"
    },
    {
        type: "Half Page",
        dimensions: "300x600",
        placement: "Sidebar",
        inputName: "halfPageCost"
    },
    {
        type: "Mobile Banner",
        dimensions: "320x50",
        placement: "Top or Bottom",
        inputName: "moblieBannerCost"
    },
    {
        type: "Large Mobile Banner",
        dimensions: "320x100",
        placement: "Between content",
        inputName: "largeMobileBannerCost"
    },
    {
        type: "Mobile Leaderboard",
        dimensions: "300x50",
        placement: "Top or Bottom",
        inputName: "mobileLeaderboardCost"
    },
    {
        type: "Square",
        dimensions: "250x250",
        placement: "Flexible placement",
        inputName: "squareCost"
    }
];

export default function AdForm() {
    return (
        <div className="bg-white w-3/5 p-2 flex flex-col rounded-sm mt-5 pb-5" >
            {/*TITLE  */}

            <div className="flex flex-row justify-between">
                <div className="flex flex-col m-2">
                    <div className=" text-black/30">part 2 of 2</div>
                    <div className=" text-xl font-semibold">ADVERTISEMENT SIZES</div>
                </div>

                <div className="flex flex-col m-2 items-end">
                    <div className=" text-black/30">you can view your ad sizes here</div>
                    <Link className="flex flex-row transition-all duration-200 ease-in-out hover:text-blue-600" href={"/ad-sizes"} target="_blank" rel="noopener noreferrer">
                        <div className="text-xl font-semibold text-right ">REFERENCE</div>
                        <div className="m-1">
                            <SquareArrowOutUpRight size={19}/>
                        </div>
                    </Link>
                </div>

            </div>



            {/* ad table */}
            <div className="flex flex-row justify-around w-full mt-4 text-lg border-solid border-y-2 border-y-gray-600 bg-gray-200">
                <div className="w-1/15 ">S.no</div>
                <div className="w-3/15 ">Ad-Type</div>
                <div className="w-2/15 ">Dimensions</div>
                <div className="w-3/15 ">Placement</div>
                <div className="w-4/15 ">Cost</div>
            </div>

            {
                adSizes.map((ad, i) => {
                    return (
                        <div className="flex flex-row justify-around w-full mt-5">
                            <div className="w-1/15">{i+1}</div>
                            <div className="w-3/15">{ad.type}</div>
                            <div className="w-2/15">{ad.dimensions}</div>
                            <div className="w-3/15">{ad.placement}</div>
                            <input
                                className="w-4/15 bg-gray-200 border-gray-500 rounded-sm h-8 "
                                type="number" name={ad.inputName} id={ad.inputName}
                            />
                        </div>
                    )
                })
            }

        </div>
    )
}