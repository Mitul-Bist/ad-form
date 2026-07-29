export default function ImageForm() {
    return (
        <div className="bg-white w-full md:w-3/5 p-2 flex flex-col rounded-sm mt-5 pb-5">
            <div className="h-1 w-40 mb-5 bg-blue-500 rounded-full"></div>
            {/*TITLE  */}
            <div className="flex flex-col m-2 ">
                <div className="text-slate-700">part 3 of 3</div>
                <div className="text-slate-900 text-xl font-semibold">ANALYTICS</div>
            </div>

            <div className="mt-1 m-2 flex flex-col">
                <label className="text-slate-700 mb-1">Please Submit a Screenshot of Your <span className="font-semibold">Ad Analytics Page</span></label>
                <input
                    className="w-2/8 border bg-gray-200 border-gray-500 rounded-sm h-8 "
                    type="file"
                    id="analytics"
                    name="analytics"
                    accept="image/png, image/jpeg, image/webp"
                />
            </div>

        </div>
    )
}