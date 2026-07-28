import NewsElement from "./newsElement"
import Featured from "./featured"
import AdBox from "./ex-adbox"

export default function HeroSection() {
    return (
        <main className="mt-5 flex flex-row justify-center items-start gap-x-5">

            {/* 1ST ROW */}
            <Featured
                image="/news_img/spain.jpg"
                title="Spain wins FIFA World Cup"
                content=
                {`Spain captured its second FIFA World Cup title following a dramatic 1-0 extra-time victory over Argentina
                at MetLife Stadium. Forward Ferran Torres scored the decisive winning goal in the 106th minute,
                sparking massive celebrations across Madrid and breaking global television viewership records.
                 `}
            />

            {/* 2ND ROW */}
            <div className="w-1/6">
                <div className="text-xl font-semibold border-b-2 border-b-black/80">Latest</div>
                <NewsElement
                    image="/news_img/ukraine.jpg"
                    title="Ukraine ship attacked"
                />
                <NewsElement
                    image="/news_img/mussorie.jpg"
                    title="Mussorie road blocked"
                />
            </div>

            {/* 3RD ROW */}
            <div className="w-1/6" >
                <div className="text-xl font-semibold border-b-2 border-b-black/80">India</div>
                <NewsElement
                    image="/news_img/skyroot.jpg"
                    title="sikkim tunnel accident"
                />
                <NewsElement
                    image="/news_img/sikkim.jpg"
                    title="sikkim tunnel accident"
                />
            </div>


            <AdBox adName="Wide skyscraper" width="160px" height="600px"/>
        </main>
    )
}