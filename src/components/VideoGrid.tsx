import { VideoCard } from "./VideoCard";

const VIDEOS = [{
    title :"KR$NA - Joota Japani | Offical Music Video",
    thumbnail : "thumbnail.jpg",
    cover : "cover.jpg",
    author : "KRSNA ♪",
    views :"16M views",
    timestamp :"2 months ago"
},{
    title :"KR$NA - Joota Japani | Offical Music Video",
    thumbnail : "thumbnail.jpg",
    cover : "cover.jpg",
    author : "KRSNA ♪",
    views :"16M views",
    timestamp :"2 months ago"
},{
    title :"KR$NA - Joota Japani | Offical Music Video",
    thumbnail : "thumbnail.jpg",
    cover : "cover.jpg",
    author : "KRSNA ♪",
    views :"16M views",
    timestamp :"2 months ago"
},{
    title :"KR$NA - Joota Japani | Offical Music Video",
    thumbnail : "thumbnail.jpg",
    cover : "cover.jpg",
    author : "KRSNA ♪",
    views :"16M views",
    timestamp :"2 months ago"
},{
    title :"KR$NA - Joota Japani | Offical Music Video",
    thumbnail : "thumbnail.jpg",
    cover : "cover.jpg",
    author : "KRSNA ♪",
    views :"16M views",
    timestamp :"2 months ago"
},{
    title :"KR$NA - Joota Japani | Offical Music Video",
    thumbnail : "thumbnail.jpg",
    cover : "cover.jpg",
    author : "KRSNA ♪",
    views :"16M views",
    timestamp :"2 months ago"
},{
    title :"KR$NA - Joota Japani | Offical Music Video",
    thumbnail : "thumbnail.jpg",
    cover : "cover.jpg",
    author : "KRSNA ♪",
    views :"16M views",
    timestamp :"2 months ago"
}];

export const VideoGrid=() => {
    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {VIDEOS.map(video => <div>
        <VideoCard
            title={video.title}
            thumbnail = {video.thumbnail}
            cover = {video.cover}
            author = {video.author}
            views = {video.views}
            timestamp = {video.timestamp}
        ></VideoCard>
        </div>)}
    </div>
}