import Hero from "@/app/src/widgets/ProfileUI/Hero";
import ProfilePage from "@/app/src/widgets/ProfileUI/NameTag";
import Navbar from "@/app/src/widgets/ProfileUI/Navbar";
import ProfileProject from "@/app/src/widgets/ProfileUI/ProfileProject";

export default function page() {
  return (
    <main className="p-6 flex flex-row">
      {/* <div className="w-[18%]">
        <Sidebar />
      </div> */}
      <div className=" px-8">
        <div className="navbar bg-cover bg-no-repeat bg-center h-64 rounded-2xl p-4">
          <Navbar />
        </div>
        <div className="px-5 -mt-16 mb-16">
          <ProfilePage />
        </div>
        <div className="mb-16">
          <Hero />
        </div>
        <div>
          <ProfileProject />
        </div>
      </div>
    </main>
  );
}
