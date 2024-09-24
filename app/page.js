import Image from "next/image";
import MagazineWrapper from "@/components/magazine/MagazineWrapper";
import Footer from "@/components/footer/Footer";
import Block from "@/components/Block";

export default function Home() {
  return (
    <div>
      <Block />
      <Footer />
    </div>
    
  );
}


// return (
//   <div className="flex flex-row space-x-24 h-screen items-center ">
//   <div className="relative h-full w-5/12">
//       <img className="object-cover w-full h-full" src="mag.jpg" alt="" />
//       <span className="absolute top-20 left-3/4 text-8xl tracking-widest bg-gradient-to-br from-black to-colorC bg-clip-text text-transparent">MAGAZINES & PUBLICATIONS</span>
//   </div>
//   <div className="w-1/2 self-end mb-10">
//       <p className="text-xl mt-32 mr-12">Lorem ipsum dolor sit amet e Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, pariatur illum! Perspiciatis optio suscipit ipsa earum, consectetur consequuntur nostrum, enim cum commodi, in iusto ullam excepturi? Dolores laboriosam veritatis reiciendis. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis laboriosam eum deserunt? Corrupti aliquid facere tempora consequatur excepturi quam vitae iusto libero ea aut sequi, aperiam illo quasi, accusantium sed? reiciendis.</p>
//       <button className="bg-gradient-to-br from-colorA to-colorB text-white py-4 px-6 rounded-full mt-10">EXPLORE NOW ! </button>
//   </div>
//   </div>
// )