export default function Featured(props){
    return(
        <div className="w-1/3 aspect-square py-4 flex flex-col justify-between items-center shadow-md shadow-black/30">
            <img className="aspect-7/4 shrink-0 object-cover" src={props.image} alt="" />
            <p className="text-xl">{props.title}</p>
            <p className="text-black/70">{props.content}</p>
        </div>
    );
}