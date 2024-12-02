import Link from "next/link";

const HeroSection = () => {
  return (
   <div className="bg-[url('/images/bg3.png')] bg-cover bg-center min-h-screen ">
     <div className="text-center py-16 px-8">
      <h1 className="text-4xl font-bold text-black">Welcome to Tasty Teasers</h1>
      <p className="mt-4 text-lg text-white">
        Explore delicious recipes, cooking hacks, and culinary inspiration for every occasion!
      </p>
      <button className="mt-6 bg-orange-900 text-white py-2 px-4 rounded hover:bg-orange-600">
       <Link href="/blogs"> Explore Recipes</Link>
      </button>
    </div>
    <div>
      <h4 className="text-center m-8 text-3xl font-semibold underline underline-offset-[12px] text-black">New & Trending</h4>
    </div>
    
   </div>
  );
};

export default HeroSection;