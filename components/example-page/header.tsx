import Link from "next/link";

const sections = ["Uttarakhand","World","India","Sport","Education","Entertainment"]

const sectionRender = sections.map((sec) =>
        <div className="text-xl font-semibold mt-1 mx-4">
            {sec}
        </div>)

export default function Header(){
    return(
        <div className="bg-cyan-500 text-white p-7 flex flex-col justify-center items-center shadow-md shadow-black/30">
            <h1 className="text-6xl font-bold">News App</h1>
            <div className="flex flex-row mt-2">
                {sectionRender}
            </div>
        </div>
    );
}