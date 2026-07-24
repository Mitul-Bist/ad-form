"use client";
import AdBox from "@/components/ad_box";

export default function Ads() {
    return (
        <>
            <div className="w-full flex flex-col justify-center items-center bg-gray-800 p-4">
                <h1 className="text-4xl font-semibold text-white">IAB Fixed Size Ad Specifications</h1>
            </div>
            <div className="bg-gray-300">
                <div className="flex flex-row justify-around">
                    <div className="flex flex-col m-3">
                        <AdBox adName="Billboard" width="970px" height="250px" />
                        <AdBox adName="Large Leaderboard" width="970px" height="90px" />
                        <AdBox adName="Leaderboard" width="728px" height="90px" />
                    </div>
                    <AdBox adName="Half Page" width="300px" height="600px" />
                </div>

                <div className="flex flex-row justify-around">

                    <AdBox adName="Wide Skyscraper" width="160px" height="600px" />

                    <div className="flex flex-col">
                        <AdBox adName="Large Rectangle" width="336px" height="280px" />
                        <AdBox adName="Medium Rectangle" width="300px" height="250px" />
                    </div>

                    <div className="flex flex-row m-5">
                        <div className="flex flex-col m-2">
                            <AdBox adName="Large Mobile Banner" width="320px" height="100px" />
                            <AdBox adName="Mobile Banner" width="320px" height="50px" />
                            <AdBox adName="Mobile Leaderboard" width="300px" height="50px" />
                        </div>
                        <AdBox adName="Square" width="250px" height="250px" />
                    </div>

                </div>

            </div>
        </>
    );
}