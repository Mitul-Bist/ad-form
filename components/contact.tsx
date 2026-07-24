export default function ContactForm() {
    return (
        <div className="bg-white w-3/5 p-2 flex flex-col rounded-sm mt-5">
            {/*TITLE  */}
            <div className="flex flex-col m-2">
                <div className="text-black/30">part 1 of 2</div>
                <div className="text-xl font-semibold">CONTACT INFORMATION</div>
            </div>

            {/* 1ST ROW */}
            <div className="flex flex-row justify-center w-full">

                {/* first name */}
                <div className="flex flex-col m-2 w-1/2">
                    <label htmlFor="firstName">First Name</label>
                    <input
                        className="bg-gray-200 border-gray-500 rounded-sm h-8 "
                        type="text" name="firstName" id="firstName"
                    />
                </div>


                {/* last name */}
                <div className="flex flex-col m-2 w-1/2">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        className="bg-gray-200 border-gray-500 rounded-sm h-8"
                        type="text" name="lastName" id="lastName"
                    />
                </div>

            </div>

            {/* 2ND ROW */}

            <div className="flex flex-row justify-center w-full">

                {/* email */}
                <div className="flex flex-col m-2 w-1/2">
                    <label htmlFor="mail_ID">E-mail</label>
                    <input
                        className="bg-gray-200 border-gray-500 rounded-sm h-8 "
                        type="email" name="mail_ID" id="mail_ID"
                    />
                </div>


                {/* phone */}
                <div className="flex flex-col m-2 w-1/2">
                    <label htmlFor="phoneNo">Telephone</label>
                    <input
                        className="bg-gray-200 border-gray-500 rounded-sm h-8"
                        type="text" name="phoneNo" id="phoneNo"
                    />
                </div>

            </div>

            {/* 3RD ROW */}

            <div className="flex flex-row justify-center w-full">

                {/* address */}
                <div className="flex flex-col m-2 w-3/4">
                    <label htmlFor="address">Address</label>
                    <input
                        className="bg-gray-200 border-gray-500 rounded-sm h-8 "
                        type="text" name="address" id="address"
                    />
                </div>


                {/* pin code */}
                <div className="flex flex-col m-2 w-1/4">
                    <label htmlFor="pinCode">Pin-code</label>
                    <input
                        className="bg-gray-200 border-gray-500 rounded-sm h-8"
                        type="text" name="pinCode" id="pinCode"
                    />
                </div>

            </div>
        </div>
    )
}