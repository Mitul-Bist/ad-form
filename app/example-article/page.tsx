import Header from "@/components/example-page/header"
import AdBox from "@/components/example-page/ex-adbox"

const newsContent = [
    `Spain captured their second FIFA World Cup title with a disciplined 1-0 victory over Argentina 
        in a tense final, producing a defensive masterclass that kept Lionel Messi and the reigning champions 
        largely under control. The Spaniards executed their tactical plan to perfection, 
        denying Argentina space in midfield and limiting clear-cut opportunities throughout the contest.`
    ,
    `The decisive moment arrived in the second half when Fernando Torres found the back of the net with 
        a clinical finish after a swift attacking move. Spain's patient build-up and precise passing created 
        the opening, and Torres made no mistake, sending Spanish supporters into celebration while putting 
        Argentina under immense pressure.`
    ,
    `Despite trailing, Argentina pushed relentlessly in search of an equalizer, with Messi orchestrating 
        attacks and attempting to inspire a comeback. However, Spain's organized backline remained composed, 
        closing down passing lanes and frustrating Argentina's forwards. The European side also received 
        crucial saves from their goalkeeper to preserve the narrow advantage.`
    ,
    `The final whistle sparked jubilant celebrations as Spain secured its second World Cup crown with a 
        performance defined by tactical discipline, resilience, and efficiency. While Argentina's campaign 
        ended in disappointment despite another memorable tournament run, Spain's triumph will be remembered 
        for its collective effort and Torres' match-winning goal on football's biggest stage.`
    ,]

const mainContent = newsContent.map((nz) => {
    return (
        <>
            <p>{nz}</p><br />
        </>
    );
})

const otherNews = [
    {
        thumbnail: "news_img/sikkim.jpg",
        title: "Sikkim tunnel collapse toll rises to 20, rescue operations continue"
    },
    {
        thumbnail: "news_img/ukraine.jpg",
        title: "Four Indians killed in attack on ship leaving Ukraine's Odesa, New Delhi says"
    },
    {
        thumbnail: "news_img/mussorie.jpg",
        title: "Heavy Rains Cause Major Cracks, Shut Dehradun-Mussoorie Road"
    },
    {
        thumbnail: "news_img/skyroot.jpg",
        title: "Skyroot’s Vikram-1 success shows it’s time for ISRO to redefine its role"
    },
    {
        thumbnail: "news_img/RG3.jpg",
        title: "After Dharna And Detention, Rahul Gandhi's Five Demands To The Centre"
    }
]

const mostPopular = otherNews.map((news) =>
    <div className="w-full mt-3 flex flex-row justify-center border-b-2 border-b-black/15 pb-3">
        <img className="w-1/4 aspect-square object-cover" src={news.thumbnail} alt="" />
        <p className="px-2 text-[17px]">{news.title}</p>
    </div>
)

export default function ArticleExample() {
    return (
        <div>
            <Header />
            <div className="w-full flex flex-col items-center my-5">
                <AdBox adName="Billboard" width="970px" height="250px" />
            </div>
            <div className="flex flex-row">
                {/* news article */}
                <div className="w-5/8 bg-amber-100 flex-col justify-between items-center ml-30" >
                    <h1 className="w-full font-bold text-5xl">
                        FIFA World Cup Final: Spain chokes Messi and Argentina to lift second title, rides on Torres’ winner
                    </h1>
                    <img className="w-full aspect-7/5 shrink-0 mt-4" src="/news_img/spain.jpg" alt="" />
                    <div className="text-lg flex flex-col items-center">
                        {mainContent.slice(0,2)}
                        <AdBox adName="Large Rectangle" width="336px" height="280px" />
                        {mainContent.slice(2,4)}
                    </div>
                </div>

                {/* other news links */}
                <div className="w-2/9 ml-5 bg-amber-100 flex flex-col items-center">
                    <h2 className="text-2xl font-semibold">Most Popular</h2>
                    <div className="flex flex-col items-center">
                        {mostPopular.slice(0, 2)}
                        <AdBox adName="Half Page" width="300px" height="600px" />
                        {mostPopular.slice(2, 4)}
                    </div>
                </div>
            </div>
        </div>
    )
}