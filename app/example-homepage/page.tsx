import Header from "@/components/example-page/header"
import AdBox from "@/components/example-page/ex-adbox"
import HeroSection from "@/components/example-page/heroSection"
import UKsection from "@/components/example-page/uttarakhand"

export default function HomeExample() {
    return (
        <>
            <div className="flex flex-col items-center m-5">
                <AdBox adName="Leaderboard" width="728px" height="90px"/>
            </div>
            <Header />
            <HeroSection />
            <div className="flex flex-row justify-center items-center m-5 gap-x-5">
                <AdBox adName="Medium Rectangle" width="300px" height="250px"/>
                <UKsection />
            </div>
        </>
    )
}