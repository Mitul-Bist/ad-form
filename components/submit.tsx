interface submitStates {
    submit : boolean;
    loading : boolean;
}

export default function SubmitSection({submit, loading} : submitStates) {
    return (
        <div className="bg-white w-3/5 p-4 pt-2 flex flex-col rounded-sm mt-5 justify-center">
            <div className="h-1 w-40 mb-5 bg-blue-500 rounded-full"></div>
            <div className="flex flex-row justify-between">
                {!submit ?
                    <div>
                        <p className="text-xl font-semibold text-slate-900">Your Privacy Matters</p>
                        <ul className="text-slate-700 list-disc marker:text-xl marker:text-blue-500 px-10 mt-2">
                            <li>We do not sell your information.</li>
                            <li>Responses are used only for research.</li>
                        </ul>
                    </div>
                    :
                    <div >
                        <p className="text-xl font-semibold text-slate-900">Thank you!</p>
                        <ul className="text-slate-700 list-disc marker:text-xl marker:text-blue-500 px-10 mt-2">
                            <li>Your response has been received.</li>
                            <li>We appreciate your participation.</li>
                        </ul>
                    </div>
                }
                {/* SUBMIT BUTTON */}
                <button
                    className={`${!submit ? "bg-blue-500" : "bg-green-500"} 
                text-white font-semibold text-2xl w-70 px-14 h-13 mt-2 mr-30 rounded-md 
                flex flex-row items-center justify-center gap-2 transition-all duration-200 hover:-translate-y-0.5`}
                    type="submit"
                    disabled={loading}>
                    {loading && (
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    )}
                    {!submit ? (loading ? "uploading..." : "Submit") : "Submitted"}
                </button>
            </div>

        </div>
    )
}