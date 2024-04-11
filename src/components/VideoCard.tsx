export function VideoCard(props : any){
    return <div className="p-3">
        <img src={props.thumbnail} alt="thumbnail" className="rounded-xl"/>
        <div className="grid grid-cols-12 pt-2">
            <div className="col-span-2">
                <img className="rounded-full w-20 h-20" src={props.cover} alt="cover" />
            </div>
            <div className="col-span-10 pl-5">
                <div>
                    {props.title}  
                </div>
                <div className="col-span-10 text-gray-400 text-sm">
                    {props.author}
                
            </div>
            <div className="col-span-10 text-gray-400 text-sm">
               {props.views} • {props.timestamp}
                
            </div>
            </div>
        </div>
    </div>
}