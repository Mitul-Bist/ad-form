export default function NewsElement(props){
    return(
        <div className="w-full mt-1 aspect-4/3 py-4 flex flex-col justify-start items-center">
            <img className="aspect-7/4 shrink-0 object-cover" src={props.image} alt="" />
            <p className="mt-1">{props.title}</p>
        </div>
    );
}