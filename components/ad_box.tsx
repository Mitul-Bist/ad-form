export default function AdBox(props){
    return(
        <div>
            <div>{props.adName}</div>
            <div className="border-amber-700 border-4" style={{ width: props.width, height: props.height }}></div>
        </div>
    );
}