
import { Inter } from "next/font/google";
import {VideoCard} from "@/components/VideoCard"
import {VideoGrid} from "@/components/VideoGrid"
import { AppBar } from "@/components/AppBar";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
        {/* <VideoCard
        title = {"KR$NA - Joota Japani | Offical Music Video"}
        thumbnail = {"thumbnail.jpg"}
        cover = {"cover.jpg"}
        author = {"KRSNA ♪"}
        views = {"16M views"}
        timestamp = {"2 months ago"}
      ></VideoCard> */}
      <AppBar></AppBar>
      <VideoGrid></VideoGrid>
    </div>
  );
}
