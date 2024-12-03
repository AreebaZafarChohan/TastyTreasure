"use client";

import Image from "next/image";

const About = () => {
  return (
    <section className="m-2 p-4 md:m-8 md:p-8 border-2  border-red-900 border-double rounded-lg">
      <div className="lg:mx-16 flex flex-col lg:flex-row items-center">
       <div className="md:w-1/2 sm:w-[80%]">
       <h1 className="text-2xl sm:text-4xl font-bold text-red-900">
          About Tasty Treasure
        </h1>
        <p className="text-black text-sm sm:text-lg mt-4">
        Welcome to *Tasty Treasure*, a vibrant platform dedicated to
            bringing the joy of cooking and delicious meals into every home. We
            celebrate the art of culinary creativity, offering a treasure trove
            of recipes, cooking tips, and food stories to inspire your
            gastronomic journey.
        </p>
        <p className="text-black text-sm sm:text-lg mt-4">
            From traditional comfort foods to innovative global dishes, Tasty
            Treasure is here to transform your kitchen into a hub of flavors,
            passion, and endless possibilities.
          </p>
       </div>
       <div className="w-full sm:w-1/2 m-12 sm:m-6 lg:m-28 border-2 border-red-950 rounded-full shadow-2xl hover:shadow-red-950 transition-shadow duration-300 ease-in-out animate-none hover:animate-pulse">
        <Image
        src="/images/logo.png"
        alt="Logo Image"
        width={500}
        height={500}
        className="" />
       </div>
      </div>
      <hr className="h-1 rounded bg-gray-200"/>
      <div className="flex flex-col lg:flex-row gap-6 items-center sm:m-6">
        <div className="lg:w-1/2">
          <Image
            src="/images/herobg.jpg"
            alt="Our Story Image"
            width={400}
            height={400}
            className="rounded"
          />
        </div>
        <div className="space-y-6 lg:w-1/2">
          <h2 className="text-2xl sm:text-3xl font-bold text-red-900 underline">Our Story</h2>
          <p className="text-black text-sm  sm:text-lg">
            Tasty Treasure began as a personal passion project—a food diary
            capturing cherished recipes from family, friends, and travels. Over
            time, it blossomed into a thriving community of food lovers eager
            to explore, learn, and share the magic of cooking.
          </p>
          <p className="text-black text-sm  sm:text-lg">
            Whether it's celebrating the warmth of a family dinner or the
            excitement of discovering a new dish, Tasty Treasure is your trusted
            companion in the kitchen, bringing the world of flavors right to
            your table.
          </p>
        </div>
      </div>

      <hr className="h-1 rounded bg-gray-200 my-8" />

      <div className="flex flex-col lg:flex-row gap-6 items-center sm:m-6">
        <div className="space-y-6 lg:w-1/2">
          <h2 className="text-2xl sm:text-3xl font-bold text-red-900 underline">Our Mission</h2>
          <p className="text-black text-sm  sm:text-lg">
            At Tasty Treasure, our mission is to inspire and empower food
            enthusiasts by providing them with easy-to-follow recipes, engaging
            stories, and practical cooking tips that make every meal a
            delightful experience. We believe that cooking is not just about
            food; it&#39;s about creativity, connection, and the joy of sharing.
          </p>
          <p className="text-black text-sm  sm:text-lg">
            We are committed to creating a community where home cooks, chefs,
            and foodies can come together to celebrate their love for food and
            cooking.
          </p>
        </div>
        <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:w-1/2">
          <Image
            src="/images/gajarHalwa.jpg"
            alt="Gajar Halwa Image"
            width={400}
            height={400}
            className="h-48 rounded"
          />
           <Image
            src="/images/halwaPuri.jpg"
            alt="Halwa Puri Image"
            width={400}
            height={400}
            className="h-48 rounded"
          />
           <Image
            src="/images/cheeseStick.jpg"
            alt="Cheese Stick Image"
            width={400}
            height={400}
            className="h-48 rounded"
          />
           <Image
            src="/images/koreanWings.jpg"
            alt="Korean Wings Image"
            width={400}
            height={400}
            className="h-48 rounded"
          />
           <Image
            src="/images/turkishKebab.jpg"
            alt="Turkish Kebab Image"
            width={400}
            height={400}
            className="h-48 rounded"
          />
           <Image
            src="/images/momos.jpg"
            alt="Momos Image"
            width={400}
            height={400}
            className="h-48 rounded"
          />
        </div>
      </div>

      <hr className="h-1 rounded bg-gray-200 my-8" />

      <div className="flex flex-col lg:flex-row gap-6 items-center sm:m-6">
        <div className="space-y-6 lg:w-1/2">
          <h2 className="text-xl sm:text-3xl font-bold text-red-900 underline">
            Why Choose Us?
          </h2>
          <p className="text-black text-sm sm:text-lg">
            Tasty Treasure is more than just a recipe hub—it’s a culinary
            adventure. We take pride in offering:
          </p>
          <ul className="list-disc pl-8 text-black text-sm  sm:text-lg">
            <li>Curated recipes for every skill level, from beginners to experts.</li>
            <li>Step-by-step guides with visuals to ensure perfect results.</li>
            <li>Unique global flavors and modern twists on classic dishes.</li>
            <li>A supportive community for food enthusiasts to connect and share.</li>
          </ul>
        </div>
        <div className="lg:w-1/2">
          <Image
            src="/images/whyChooseUs.jpg"
            alt="Why Choose Us Image"
            width={500}
            height={500}
            className="rounded"
          />
        </div>
      </div>

      <hr className="h-1 rounded bg-gray-200 my-8" />

      <div className="flex flex-col lg:flex-row gap-6 items-center sm:m-6">
        <div className="lg:w-1/2">
          <Image
            src="/images/team.jpg"
            alt="Team Image"
            width={400}
            height={400}
            className="rounded"
          />
        </div>
        <div className="space-y-6 lg:w-1/2">
          <h2 className="text-2xl sm:text-3xl font-bold text-red-900 underline">Meet the Team</h2>
          <p className="text-black text-sm  sm:text-lg">
            Behind Tasty Treasure is a group of passionate foodies, chefs, and
            storytellers who love to share their culinary experiences. From
            recipe developers to photographers, our team is dedicated to making
            every piece of content valuable and visually appealing.
          </p>
          <p className="text-black text-sm  sm:text-lg">
            <span className="underline text-red-900">Join us on this flavorful journey</span> as we continue to explore, create,
            and celebrate the magic of food.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;