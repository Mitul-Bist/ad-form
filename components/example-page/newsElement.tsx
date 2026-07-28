interface newsProps{
    image : string,
    title : string 
}

export default function NewsElement({image, title} : newsProps){
    return(
        <div className="w-full mt-1 aspect-4/3 py-4 flex flex-col justify-start items-center">
            <img className="aspect-7/4 shrink-0 object-cover" src={image} alt="" />
            <p className="mt-1">{title}</p>
        </div>
    );
}