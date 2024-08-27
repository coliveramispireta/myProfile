import Image from "next/image";
import NextImage from "../../public/next.svg"
import Profile from "@/components/Profile/Profile";
import VideoCard from "@/components/VideoCard/VideoCard";
import Links from "@/components/Links/Links";


export default function Home() {
  return (
    <>
    <main className="bg-gradient-to-t from-gray-500 via-gray-800 to-gray-900  flex min-h-screen flex-col items-center justify-between">
      <Profile />
      <div className="px-4">
      <VideoCard />
      </div>
      <Links />      
    </main>
    </>
  );
}
