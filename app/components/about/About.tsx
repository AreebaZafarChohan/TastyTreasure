"use client";

const About = () => {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-orange-700">
          About Tasty Treasure
        </h1>
        <p className="text-gray-600 text-lg mt-4">
          Welcome to Tasty Treasure, your go-to destination for delicious recipes, food stories, and cooking tips. 
          We aim to bring the world of flavors to your kitchen.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Our Mission</h2>
          <p className="text-gray-600">
            At Tasty Treasure, our mission is to inspire and empower food enthusiasts 
            by sharing easy-to-follow recipes, engaging stories, and useful cooking tips 
            that transform every meal into a delightful experience.
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Our Story</h2>
          <p className="text-gray-600">
            Tasty Treasure was born out of a passion for exploring cuisines from around the world. 
            What started as a personal food diary has now become a vibrant community of food lovers 
            and culinary explorers.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;