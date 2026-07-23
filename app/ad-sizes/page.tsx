import AdBox from "@/components/ad_box";

export default function Ads(){
    return(
        <div>
            <AdBox adName="Billboard" width="970px" height="250px" />
            <AdBox adName="Leaderbord" width="728px" height="90px" />
            <AdBox adName="Large Leaderboard" width="970px" height="90px" />
            <AdBox adName="Billboard" width="970px" height="250px" />
        </div>  
    );
}