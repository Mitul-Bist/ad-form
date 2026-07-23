export default function ContactForm() {
    return (
        <form className="bg-white w-3/5 p-2 flex flex-col rounded-sm mt-5" action="">
            {/*TITLE  */}
            <div className="flex flex-col m-2">
                <div className="text-black/30">part 1 of 2</div>
                <div className="text-xl font-semibold">CONTACT INFORMATION</div>
            </div>

            {/* 1ST ROW */}
            <div className="flex flex-row justify-center w-full">

                {/* first name */}
                <div className="flex flex-col m-2 w-1/2">
                    <label htmlFor="first-name">First Name</label>
                    <input
                        className="bg-gray-200 border-gray-500 rounded-sm h-8 "
                        type="text" name="first-name" id="name"
                    />
                </div>


                {/* last name */}
                <div className="flex flex-col m-2 w-1/2">
                    <label htmlFor="first-name">Last Name</label>
                    <input
                        className="bg-gray-200 border-gray-500 rounded-sm h-8"
                        type="text" name="last-name" id="last-name"
                    />
                </div>

            </div>

            {/* 2ND ROW */}

            <div className="flex flex-row justify-center w-full">

                {/* email */}
                <div className="flex flex-col m-2 w-1/2">
                    <label htmlFor="first-name">E-mail</label>
                    <input
                        className="bg-gray-200 border-gray-500 rounded-sm h-8 "
                        type="text" name="first-name" id="name"
                    />
                </div>


                {/* phone */}
                <div className="flex flex-col m-2 w-1/2">
                    <label htmlFor="first-name">Telephone</label>
                    <input
                        className="bg-gray-200 border-gray-500 rounded-sm h-8"
                        type="text" name="phone" id="phone"
                    />
                </div>

            </div>

            {/* 3RD ROW */}

            <div className="flex flex-row justify-center w-full">

                {/* address */}
                <div className="flex flex-col m-2 w-3/4">
                    <label htmlFor="first-name">Address</label>
                    <input
                        className="bg-gray-200 border-gray-500 rounded-sm h-8 "
                        type="text" name="first-name" id="name"
                    />
                </div>


                {/* Zip code */}
                <div className="flex flex-col m-2 w-1/4">
                    <label htmlFor="first-name">Pin-code</label>
                    <input
                        className="bg-gray-200 border-gray-500 rounded-sm h-8"
                        type="text" name="phone" id="phone"
                    />
                </div>

            </div>
        </form>
    )
}