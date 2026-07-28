interface featuredProps {
    image : string,
    title : string,
    content : string
}

export default function Featured({image, title, content} : featuredProps){
    return(
        <div className="w-1/3 aspect-square py-4 flex flex-col justify-between items-center shadow-md shadow-black/30">
            <img className="aspect-7/4 shrink-0 object-cover" src={image} alt="" />
            <p className="text-xl">{title}</p>
            <p className="text-black/70">{content}</p>
        </div>
    );
}