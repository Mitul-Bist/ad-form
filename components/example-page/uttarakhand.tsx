import NewsElement from "./newsElement";

export default function UKsection() {
    return (
        <div className="w-3/5 shadow-md shadow-black/30">
            <div className="ml-5 text-xl font-semibold">Uttarakhand</div>
            <div className="flex flex-row">
                <div className="ml-2">
                    <NewsElement
                        image="/news_img/ukraine.jpg"
                        title="Ukraine ship attacked" />
                </div>
                <div className="ml-2">
                    <NewsElement
                        image="/news_img/ukraine.jpg"
                        title="Ukraine ship attacked" />
                </div>
                <div className="ml-2">
                    <NewsElement
                        image="/news_img/ukraine.jpg"
                        title="Ukraine ship attacked" />
                </div>
            </div>
        </div>
    );
}