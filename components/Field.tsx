interface fieldProps {
    label : string,
    name : string,
    type : string
}

export default function Field({label, name, type} : fieldProps){
    return(
        <div className="flex flex-col m-2 w-9/10 md:w-1/2">
                    <label htmlFor={name}>{label}</label>
                    <input
                        className="bg-gray-200 border-gray-500 rounded-sm h-8 "
                        type={type} name={name} id={name}
                    />
        </div>
    );
}