import Field from "./Field"

export default function ContactForm() {
    return (
        <div className="bg-white w-3/5 p-2 flex flex-col rounded-sm mt-5">
            {/*TITLE  */}
            <div className="flex flex-col m-2 ">
                <div className="text-black/30">part 1 of 3</div>
                <div className="text-xl font-semibold">CONTACT INFORMATION</div>
                <div className="text-black/50 text-lg ">Contact Person</div>
            </div>

            {/* 1ST ROW */}
            <div className="flex flex-row justify-center w-full">
                {/* first name */}
                <Field label="First Name" name="firstName" type="text" />
                {/* last name */}
                <Field label="Last Name" name="lastName" type="text" />
            </div>

            {/* 2ND ROW */}
            <div className="flex flex-row justify-center w-full">
                {/* email */}
                <Field label="E-mail" name="mail_ID" type="email" />
                {/* phone */}
                <Field label="Telephone" name="phoneNo" type="text" />
            </div>


            {/* COMPANY INFO */}
            <div className="text-black/50 text-lg m-2">Company Information</div>

            {/* 3RD ROW */}
            <div className="flex flex-row justify-center w-full">
                {/* Company - Name */}
                <Field label="Company Name" name="companyName" type="text" />
                {/* website url */}
                <Field label="Website URL" name="websiteURL" type="text" />
            </div>

            {/* 4TH ROW */}
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

            {/* 5TH ROW  drop downs*/}
            <div className="flex flex-row justify-center w-full">

                {/* Industry */}
                <div className="flex flex-col m-2 w-1/2">
                    <label htmlFor="industry">Industry/Category</label>
                    <select
                        className="bg-gray-200 border-gray-500 rounded-sm h-8"
                        name="industry"
                        id="industry"
                        defaultValue=""
                    >
                        <option value="" disabled hidden></option>
                        <option value="News">News</option>
                        <option value="E-commerce">E-commerce</option>
                        <option value="Blog">Blog</option>
                        <option value="Education">Education</option>
                        <option value="Entertainment">Entertainment</option>
                        <option value="Finance">Finance</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                {/* Category */}
                <div className="flex flex-col m-2 w-1/2">
                    <label htmlFor="monthly-users">Monthly Users</label>
                    <select
                        className="bg-gray-200 border-gray-500 rounded-sm h-8"
                        name="monthlyUsers"
                        id="monthlyUsers"
                        defaultValue=""
                    >
                        <option className="text-gray-300" value="" disabled hidden></option>
                        <option value="5k">&lt; 5k</option>
                        <option value="10k">5k-10k</option>
                        <option value="15k">&gt; 10k</option>
                    </select>
                </div>

            </div>



        </div>
    )
}