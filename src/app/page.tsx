import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Main from "@/components/Main/Main";


export default function Home() {
  return (
    <>
    <main className="bg-gradient-to-t from-gray-500 via-gray-800 to-gray-900  flex min-h-screen flex-col items-center justify-between">
      <Navbar />     
      <Main page={"resume"} />
      <Footer />
    </main>
    </>
  );
}
