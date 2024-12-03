import { BlogDataProps } from "@/types/componentTypes";
import { NextResponse } from "next/server";

const blogs: BlogDataProps[] = [
  // breakfast

  {
    id: 1,
    category: "Breakfast",
    image: "/images/aluParatha.jpg",
    title: "Aloo Paratha - A Delicious Comfort Food",
    date: "December 2, 2024",
    main: {
      heading: "Aloo Paratha - A Flavorful Breakfast or Snack",
      para: "Aloo Paratha is a traditional Indian and Pakistani dish that is a beloved comfort food for many. It consists of a soft, flaky flatbread stuffed with a spicy mashed potato filling. This dish is often served as a hearty breakfast or a satisfying snack, paired with yogurt, pickles, or chutney. The combination of warm, crispy paratha and the savory, spiced potato filling makes it a favorite for all ages.",
    },
    sub: {
      heading: "A Perfect Meal for Any Time of the Day",
      para: "Whether served for breakfast, lunch, or dinner, Aloo Paratha is a filling and flavorful dish that can be enjoyed at any time. The simplicity of the ingredients and the ease of preparation make it a go-to recipe for busy mornings or casual gatherings.",
    },
    description: {
      heading: "Why Aloo Paratha is a Favorite",
      para: [
        "Comforting and Hearty: The soft paratha filled with spicy, mashed potatoes offers a comforting meal that fills you up and keeps you satisfied.",
        "Customizable: You can adjust the spices in the filling to suit your taste, making it as mild or spicy as you like.",
        "Easy to Make: Aloo Paratha is simple to make with just a few ingredients, making it an ideal choice for a quick yet flavorful meal.",
        "Perfectly Paired: Aloo Paratha can be paired with yogurt, pickle, or a cup of tea, elevating the meal to a complete and balanced dish.",
      ],
    },
    ingredients: [
      "For the Dough:",
      "Whole wheat flour: 2 cups",
      "Salt: ½ teaspoon",
      "Water: as required for kneading",
      "Oil or ghee: 1 tablespoon (optional, for soft dough)",
      "For the Filling:",
      "Boiled potatoes: 4 large (mashed)",
      "Onion: 1 medium (finely chopped)",
      "Green chilies: 2 (finely chopped)",
      "Coriander powder: 1 teaspoon",
      "Cumin powder: 1 teaspoon",
      "Red chili powder: 1 teaspoon",
      "Turmeric powder: ½ teaspoon",
      "Ginger: 1-inch piece (grated)",
      "Fresh coriander leaves: 2 tablespoons (chopped)",
      "Salt: to taste",
      "For Cooking:",
      "Ghee or oil: for shallow frying",
    ],
    cookingProcess: [
      {
        heading: "Prepare the Dough",
        para: "In a large mixing bowl, combine whole wheat flour and salt. Gradually add water and knead the dough until it becomes smooth and soft. If desired, add 1 tablespoon of oil or ghee for extra softness. Cover the dough with a damp cloth and let it rest for 15-20 minutes.",
      },
      {
        heading: "Prepare the Filling",
        para: "In a large bowl, mash the boiled potatoes until smooth. Add the finely chopped onion, green chilies, grated ginger, and fresh coriander leaves to the mashed potatoes. Season with coriander powder, cumin powder, red chili powder, turmeric powder, and salt. Mix everything thoroughly until well combined.",
      },
      {
        heading: "Roll the Parathas",
        para: "After resting, divide the dough into small equal-sized balls (about 8-10). Roll each dough ball into a small disc (about 4-5 inches in diameter) using a rolling pin. Place a spoonful of the prepared potato filling in the center of the dough disc. Carefully fold the edges of the dough over the filling to seal it completely. Gently roll the stuffed dough ball into a paratha, being careful not to let the filling spill out.",
      },
      {
        heading: "Cook the Parathas",
        para: "Heat a tawa or flat griddle over medium heat. Place the rolled paratha on the tawa and cook for 1-2 minutes on each side until small bubbles start to appear. Flip the paratha and apply a little ghee or oil on both sides. Cook until the paratha becomes golden and crispy, pressing gently with a spatula to ensure it cooks evenly. Repeat with the remaining dough balls.",
      },
      {
        heading: "Serve and Enjoy",
        para: "Serve the hot, crispy Aloo Parathas with yogurt, pickle, or chutney. They can also be paired with a cup of hot tea for a delicious breakfast or snack.",
      },
    ],
    conclusion: {
      heading: "Aloo Paratha - A Flavorful Delight for Any Meal",
      para: "Aloo Paratha is a simple yet flavorful dish that&apos;s perfect for breakfast, lunch, or dinner. The combination of soft, flaky flatbread with a spicy potato filling makes it a comforting meal that&apos;s loved by everyone. Whether enjoyed with yogurt, chutney, or pickle, Aloo Paratha is sure to satisfy your hunger and taste buds. Try this recipe and enjoy the warm, delicious flavors of this iconic dish!",
    },
  },
  {
    id: 2,
    category: "Breakfast",
    image: "/images/nihari.jpg",
    title: "Nihari - A Rich and Flavorful Stew",
    date: "November 30, 2024",
    main: {
      heading: "Nihari - A Rich and Flavorful Stew",
      para: "Nihari is a classic and flavorful stew that has its roots in South Asian cuisine, particularly Pakistan and India. Made with tender beef or mutton, this dish is slow-cooked with a combination of aromatic spices that infuse the meat with rich, deep flavors. Often served during special occasions and gatherings, Nihari is traditionally enjoyed with naan or steamed rice, making it a hearty and satisfying meal.",
    },
    sub: {
      heading: "A Special Dish for Celebrations and Gatherings",
      para: "Nihari is a dish that brings people together, often served during festive occasions, family gatherings, or weddings. The long cooking process allows the flavors to meld beautifully, creating a comforting and indulgent dish that everyone enjoys.",
    },
    description: {
      heading: "Why Nihari is Loved by Many",
      para: [
        "Tender and Flavorful: The slow-cooked beef or mutton becomes so tender that it practically melts in your mouth, making every bite a delight.",
        "Aromatic Spices: The blend of spices used in Nihari gives it a rich, savory flavor that is both comforting and indulgent.",
        "Nutrient-Rich: Nihari is a great source of protein and iron, making it not only tasty but also nourishing.",
        "Perfect for Special Occasions: Whether it&apos;s a celebration, gathering, or a cozy family meal, Nihari is the perfect dish to share with loved ones.",
      ],
    },
    ingredients: [
      "For the Meat and Stock:",
      "Beef shank or mutton: 1 kg (cut into chunks)",
      "Onions: 2 medium (sliced)",
      "Tomatoes: 2 medium (chopped)",
      "Ginger-garlic paste: 2 tablespoons",
      "Green chilies: 2-3 (slit)",
      "Coriander powder: 1 tablespoon",
      "Cumin powder: 1 teaspoon",
      "Red chili powder: 1 teaspoon",
      "Garam masala powder: 1 teaspoon",
      "Turmeric powder: ½ teaspoon",
      "Fennel seeds: 1 teaspoon",
      "Cloves: 3-4",
      "Cinnamon stick: 1-inch piece",
      "Black cardamom: 1-2",
      "Bay leaves: 2",
      "Salt: to taste",
      "Oil or ghee: 3-4 tablespoons",
      "Water: 6-8 cups (or enough to cover the meat)",
      "Bone broth or stock (optional): 2 cups",
    ],
    cookingProcess: [
      {
        heading: "Prepare the Meat",
        para: "Wash the beef or mutton thoroughly. Heat oil or ghee in a large pot and sauté the sliced onions until golden brown. Remove half of the onions and set them aside for garnish.",
      },
      {
        heading: "Cook the Spices",
        para: "Add ginger-garlic paste to the pot and sauté for 1-2 minutes. Add chopped tomatoes, green chilies, coriander powder, cumin powder, red chili powder, turmeric powder, and salt. Cook for 5-7 minutes until the tomatoes soften and the oil separates from the masala.",
      },
      {
        heading: "Add the Meat and Slow Cook",
        para: "Add the meat chunks to the pot and sear until browned on all sides. Add the whole garam masala spices (fennel seeds, cloves, cinnamon stick, black cardamom, and bay leaves). Pour in water to cover the meat (6-8 cups), and bring to a boil. Reduce the heat and simmer for 3-4 hours until the meat becomes tender and the flavors are well developed.",
      },
      {
        heading: "Simmer for Flavor",
        para: "Continue simmering the Nihari on low heat, stirring occasionally and checking the water level. Add more water if needed to maintain a thick, gravy-like consistency.",
      },
      {
        heading: "Final Seasoning and Garnishing",
        para: "Once the meat is tender and the broth has thickened, adjust the seasoning with salt if necessary. Sprinkle garam masala powder for added aroma and flavor. Garnish with the fried onions and fresh coriander leaves.",
      },
      {
        heading: "Serve and Enjoy",
        para: "Serve the Nihari hot with naan, paratha, or steamed rice. You can also enjoy it with a squeeze of lemon for extra freshness.",
      },
    ],
    conclusion: {
      heading: "Nihari - A Hearty Stew That Warms the Soul",
      para: "Nihari is more than just a meal - it&apos;s a tradition. With its rich, savory broth, tender meat, and aromatic spices, Nihari is the perfect dish for special occasions, family gatherings, or any time you crave a hearty, comforting meal. Try this recipe, and let Nihari fill your home with warmth, flavor, and love!",
    },
  },
  {
    id: 3,
    category: "Breakfast",
    image: "/images/paye.jpg",
    title: "Mutton Paye - A Flavorful Traditional Delight",
    date: "November 26, 2024",
    main: {
      heading: "Mutton Paye - A Flavorful Traditional Delight",
      para: "Mutton Paye is a deeply flavorful and traditional dish that is a beloved part of Pakistani and South Asian cuisine. Made with tender mutton or beef trotters, this dish is simmered for hours to extract all the rich flavors. The slow-cooking method allows the bones to release collagen, which creates a deliciously rich, hearty broth. Mutton Paye is often served during special occasions, festivals, and cold winter mornings as it is considered not only a treat for the taste buds but also a source of warmth and nutrition.",
    },
    sub: {
      heading: "A Comforting Dish for Special Occasions",
      para: "Mutton Paye is a delicacy that is often associated with lavish feasts, weddings, or family gatherings. With its rich aroma, flavorful spices, and melt-in-your-mouth texture, it&apos;s a dish that brings people together to enjoy a hearty meal.",
    },
    description: {
      heading: "Why Mutton Paye is Special",
      para: [
        "Rich, Savory Flavor: The slow-cooking of mutton or beef trotters creates a flavorful, hearty broth that is the star of the dish.",
        "High in Nutrients: Paye is rich in collagen, which is beneficial for joints and skin, making it not only delicious but also nutritious.",
        "Perfect for Cold Weather: This warm and aromatic dish is a great comfort food during cold winter months, offering both warmth and satisfaction.",
        "Cultural Significance: Mutton Paye has a long history and is an integral part of South Asian cuisine, particularly in festive and celebratory meals.",
      ],
    },
    ingredients: [
      "For the Stock:",
      "Mutton or beef trotters: 2-3 pairs",
      "Onions: 2 large (finely sliced)",
      "Tomatoes: 2 medium (chopped)",
      "Ginger-garlic paste: 2 tablespoons",
      "Green chilies: 2-3 (slit)",
      "Coriander powder: 1 tablespoon",
      "Cumin powder: 1 teaspoon",
      "Turmeric powder: ½ teaspoon",
      "Red chili powder: 1 teaspoon",
      "Garam masala: 1 teaspoon",
      "Cloves: 3-4",
      "Cinnamon stick: 1-inch piece",
      "Black cardamom: 1-2",
      "Bay leaves: 2",
      "Salt: to taste",
      "Oil or ghee: 3-4 tablespoons",
      "Fresh coriander leaves: for garnish",
      "Water: 6-8 cups (or enough to cover the paye)",
      "Bone broth or stock (optional, for added flavor): 2 cups",
    ],
    cookingProcess: [
      {
        heading: "Prepare the Paye",
        para: "Wash the mutton or beef trotters thoroughly to remove any impurities. In a large pot, heat oil or ghee and sauté the sliced onions until golden brown. Remove half of the onions and set them aside for garnishing.",
      },
      {
        heading: "Cook the Spices",
        para: "Add ginger-garlic paste to the pot and sauté for a minute. Add chopped tomatoes, slit green chilies, coriander powder, cumin powder, turmeric powder, red chili powder, and salt. Cook for 5-7 minutes until the tomatoes soften and the oil separates from the masala.",
      },
      {
        heading: "Add the Paye and Slow Cook",
        para: "Add the mutton or beef trotters to the pot and stir well to coat them in the spices. Pour in enough water to cover the paye (around 6-8 cups). Optionally, add bone broth for added richness. Add the whole garam masala spices (cloves, cinnamon, black cardamom, and bay leaves) to the pot. Bring the mixture to a boil, then reduce the heat and simmer for 3-4 hours. Stir occasionally and check the water level, adding more if necessary.",
      },
      {
        heading: "Simmer for Richness",
        para: "Continue to simmer until the trotters are tender and the broth has thickened into a rich, flavorful consistency. The trotters should be soft enough that the meat is falling off the bones.",
      },
      {
        heading: "Final Seasoning and Garnishing",
        para: "Once the paye is fully cooked and the broth has thickened, adjust the seasoning with salt if needed. Garnish with the reserved fried onions and freshly chopped coriander leaves.",
      },
      {
        heading: "Serve and Enjoy",
        para: "Serve the Mutton Paye hot with naan, paratha, or boiled rice. It can also be enjoyed with a squeeze of lemon for added freshness.",
      },
    ],
    conclusion: {
      heading: "Mutton Paye - A Hearty Feast for Your Taste Buds",
      para: "Mutton Paye is a rich, savory dish that embodies the essence of South Asian comfort food. With its tender, melt-in-your-mouth trotters, flavorful broth, and aromatic spices, it&apos;s the perfect meal for special occasions, family gatherings, or a cozy dinner on a chilly evening. Try this recipe, and let the deliciousness of Mutton Paye fill your home with warmth and joy!",
    },
  },
  {
    id: 4,
    category: "Breakfast",
    image: "/images/andaparatha.jpg",
    title: "Anda Paratha - A Hearty and Delicious Breakfast",
    date: "November 26, 2024",
    main: {
      heading: "Anda Paratha - The Ultimate Comfort Food for Breakfast",
      para: "Anda Paratha is a popular and hearty breakfast option in South Asian cuisine. This satisfying dish combines the crispy, flaky paratha with a rich, flavorful egg filling. The perfect balance of spices and textures makes it a favorite among all age groups. Whether served as a quick meal in the morning or a late-night snack, Anda Paratha always delivers a comforting and fulfilling experience.",
    },
    sub: {
      heading: "A Perfect Start to Your Day",
      para: "Not only is Anda Paratha delicious, but it also packs a nutritious punch with protein from the eggs and energy from the paratha. This dish is versatile, allowing you to add your favorite spices or toppings to enhance its taste.",
    },
    description: {
      heading: "What Makes Anda Paratha Special?",
      para: [
        "High in Protein: Eggs are a great source of protein, making Anda Paratha a nutritious choice to keep you energized throughout the day.",
        "Flaky and Crispy Paratha: The combination of the soft, buttery paratha with the savory egg filling creates a satisfying crunch with every bite.",
        "Quick and Easy to Make: Anda Paratha can be whipped up in no time, making it a perfect breakfast option for busy mornings.",
        "Customizable to Your Taste: You can add vegetables, cheese, or even more spices to suit your preferences. The dish is incredibly versatile and adaptable.",
      ],
    },
    ingredients: [
      "For the Paratha Dough:",
      "Whole wheat flour: 2 cups",
      "Salt: ½ teaspoon",
      "Water: as needed to make the dough",
      "Oil or ghee: for cooking",
      "For the Egg Filling:",
      "Eggs: 3",
      "Onion: 1 small (finely chopped)",
      "Green chilies: 1-2 (finely chopped)",
      "Tomatoes: 1 medium (chopped)",
      "Coriander leaves: a handful (chopped)",
      "Cumin powder: ½ teaspoon",
      "Red chili powder: ½ teaspoon",
      "Salt: to taste",
      "Black pepper: ¼ teaspoon",
      "Cooking oil or ghee: 1-2 tablespoons",
    ],
    cookingProcess: [
      {
        heading: "1. Make the Paratha Dough",
        para: "In a large bowl, mix the whole wheat flour with salt. Slowly add water and knead into a smooth, soft dough. Cover the dough and let it rest for 15-20 minutes.",
      },
      {
        heading: "2. Prepare the Egg Filling",
        para: "Heat 1 tablespoon of oil or ghee in a pan. Add chopped onions and sauté until golden brown. Add chopped tomatoes, green chilies, cumin powder, red chili powder, and salt. Cook for 2-3 minutes until the tomatoes soften. Crack the eggs into the pan, stir well, and cook the eggs until they are scrambled and cooked through. Set aside.",
      },
      {
        heading: "3. Roll the Paratha",
        para: "Divide the dough into equal-sized balls. Roll each ball into a thin circle, dusting with flour to prevent sticking.",
      },
      {
        heading: "4. Cook the Paratha",
        para: "Heat a tawa or skillet on medium heat. Place the rolled-out paratha onto the tawa and cook for about 1-2 minutes on one side. Flip it and cook the other side, applying a little oil or ghee on both sides for a crispy texture.",
      },
      {
        heading: "5. Assemble the Anda Paratha",
        para: "Once the paratha is cooked, take it off the tawa. Spread the scrambled egg filling onto the center of the paratha. Fold the paratha over the filling to form a wrap or roll.",
      },
      {
        heading: "6. Serve and Enjoy",
        para: "Serve your Anda Paratha hot with a side of yogurt, chutney, or pickles for added flavor.",
      },
    ],
    conclusion: {
      heading: "Anda Paratha - A Delicious Meal for Any Time of Day",
      para: "Anda Paratha is a fulfilling and flavorsome dish that combines the goodness of eggs and paratha. Whether you enjoy it for breakfast, lunch, or dinner, it's a meal that satisfies both your hunger and your taste buds. Try this easy recipe and indulge in a comforting, flavorful treat!",
    },
  },

  {
    "id": 5,
    "category": "Breakfast",
    "image": "/images/halwapuri.jpg",
    "title": "Halwa Puri - A Traditional Breakfast Delight",
    "date": "October 26, 2024",
    "main": {
      "heading": "Halwa Puri - A Traditional Breakfast Delight",
      "para": "Halwa Puri is a beloved and traditional breakfast option in South Asia. This comforting meal consists of soft, fluffy puris paired with a sweet, aromatic halwa made from semolina. The crispy puris combined with the rich, spiced halwa create a perfect harmony of flavors, making it a go-to dish for families and gatherings. Whether it's a festive morning or a regular weekend treat, Halwa Puri never fails to impress."
    },
    "sub": {
      "heading": "Start Your Day with a Taste of Tradition",
      "para": "Halwa Puri is not only delicious but also offers a fulfilling start to your day. The semolina halwa provides a dose of sweetness, while the puris provide a satisfying crunch. Together, they form the ultimate breakfast indulgence."
    },
    "description": {
      "heading": "Why Halwa Puri is Special",
      "para": [
        "Sweet and Savory: The halwa's sweetness contrasts beautifully with the crispy puris, making every bite a perfect balance of flavors.",
        "Traditional Comfort: This dish has been passed down through generations and remains a favorite for many on special occasions.",
        "Energy-Boosting: The combination of semolina in the halwa and the deep-fried puris provides a burst of energy to kickstart your day.",
        "Quick to Prepare: Despite its rich flavors, Halwa Puri is quick and easy to make, making it perfect for a weekend breakfast or a family gathering."
      ]
    },
    "ingredients": [
      "For the Puri Dough:",
      "Whole wheat flour: 2 cups",
      "Salt: ½ teaspoon",
      "Water: as needed to make the dough",
      "Oil for frying",
      "For the Halwa:",
      "Semolina (sooji): 1 cup",
      "Sugar: ½ cup",
      "Ghee: 3 tablespoons",
      "Water: 2 cups",
      "Cardamom powder: ½ teaspoon",
      "Saffron strands: a pinch",
      "Chopped nuts (cashews, almonds, pistachios): 2 tablespoons"
    ],
    "cookingProcess": [
      {
        "heading": "1. Make the Puri Dough",
        "para": "In a bowl, mix the whole wheat flour with salt. Slowly add water and knead into a soft, smooth dough. Let the dough rest for about 10-15 minutes."
      },
      {
        "heading": "2. Prepare the Halwa",
        "para": "In a pan, heat 3 tablespoons of ghee. Add the semolina and roast it on medium heat until it turns golden brown and fragrant. Add water, sugar, cardamom powder, and saffron strands. Stir well and cook until the mixture thickens. Garnish with chopped nuts."
      },
      {
        "heading": "3. Roll and Fry the Puris",
        "para": "Divide the dough into small balls and roll them out into small, round discs. Heat oil in a deep pan and fry the puris until golden and crispy."
      },
      {
        "heading": "4. Assemble the Halwa Puri",
        "para": "Serve the hot, crispy puris with a generous portion of sweet semolina halwa."
      },
      {
        "heading": "5. Serve and Enjoy",
        "para": "Serve Halwa Puri hot with a side of yogurt or pickle for an added burst of flavor."
      }
    ],
    "conclusion": {
      "heading": "Halwa Puri - A Breakfast to Remember",
      "para": "Halwa Puri is more than just a breakfast; it&apos;s a nostalgic and indulgent meal that brings comfort and joy. Whether you&apos;re making it for a festive occasion or a weekend treat, Halwa Puri is sure to be a hit with family and friends. Try this recipe today for a taste of tradition and flavor!"
    }
  }, 

  //Lunch
  {
    id: 6,
    category: `Lunch`,
    image: "/images/dalChawal.jpg",
    title: `Daal Chawal - A Comfort Food Classic`,
    date: `September 26, 2024`,
    main: {
      heading: `Daal Chawal - A Dish That Feels Like Home`,
      para: `Daal Chawal (lentils and rice) is a timeless staple of South Asian cuisine, cherished for its simplicity and comforting flavors. Whether it&apos;s a busy weekday or a lazy weekend, this wholesome dish is a go-to meal for people of all ages. The combination of creamy lentils and fluffy steamed rice, often paired with tangy pickles or crispy papad, creates a heartwarming experience.`,
    },
    sub: {
      heading: `The Ultimate Comfort Food`,
      para: `Daal Chawal is more than just food; it&apos;s an emotion. Easy to prepare and incredibly satisfying, this dish is a reminder of home, tradition, and the joy of simple, nourishing meals.`,
    },
    description: {
      heading: `Why Daal Chawal Is Loved by All`,
      para: [
        `A Budget-Friendly Delight
Made with easily available ingredients, daal chawal is one of the most affordable yet fulfilling meals.`,
        ` Perfect for All Seasons
Whether it&apos;s a chilly winter evening or a summer lunch, daal chawal is perfect for every season.
`,
        `Nutritious and Wholesome
Packed with proteins, fiber, and essential nutrients, this dish is as healthy as it is delicious.
`,
        ` Customizable and Versatile
From spicy tarka (tempering) to mild and creamy variations, daal chawal can be customized to suit everyone&apos;s taste.
`,
      ],
    },
    ingredients: [
      `For the Daal (Lentils):`,
      `Split red lentils (Masoor dal): 1 cup`,
      `Water: 4 cups`,
      `Turmeric powder: ½ teaspoon`,
      `Red chili powder: ½ teaspoon`,
      `Salt: to taste`,
      `For the Tarka (Tempering):`,
      `Cooking oil or ghee: 4 tablespoons`,
      `Onion: 1 medium (sliced)`,
      `Garlic cloves: 3-4 (finely chopped)`,
      `Cumin seeds: 1 teaspoon`,
      `Green chilies: 2-3 (sliced)`,
      `Tomatoes: 1 medium (chopped)`,
      `Fresh coriander leaves: for garnish`,
      `For the Chawal (Rice):`,
      `Basmati rice: 2 cups`,
      `Water: 4 cups`,
      `Salt: 1 teaspoon`,
    ],

    cookingProcess: [
      {
        heading: `Cook the Daal (Lentils)`,
        para: `Wash the lentils thoroughly and add them to a pot with water, turmeric, red chili powder, and salt. Cook on medium heat until the lentils are soft and creamy. Adjust the water to your desired consistency.
`,
      },
      {
        heading: `Prepare the Tarka (Tempering)`,
        para: `Heat oil or ghee in a pan. Add cumin seeds and let them sizzle.

Add sliced onions and fry until golden brown.

Add chopped garlic, green chilies, and tomatoes. Cook until the tomatoes are soft and the oil separates.

Pour this tarka over the cooked lentils and mix well.
`,
      },
      {
        heading: `Cook the Rice`,
        para: `Wash the basmati rice and soak it for 20-30 minutes.

In a pot, bring water to a boil, add salt, and then add the rice.

Cook until the rice is tender and the water is absorbed.
`,
      },
      {
        heading: `Serve and Enjoy`,
        para: `Serve the hot daal over a bed of steamed rice. Garnish with fresh coriander leaves.

Pair it with pickles, papad, or a fresh salad for a complete meal.
`,
      },
    ],
    conclusion: {
      heading: `The Simplicity of Daal Chawal`,
      para: `Daal Chawal is more than just a dish; it&apos;s a celebration of simplicity and tradition. Its rich flavors and heartwarming aroma bring families together, making it a timeless favorite. Whether you&apos;re craving a quick meal or a nostalgic bite, daal chawal never disappoints.`,
    },
  },

  {
    id: 7,
    category: 'Lunch',
    image: "/images/aluGobhi.jpg",
    title: 'Aloo Gobhi - A Comforting Classic',
    date: 'November 26, 2024',
    main: {
      heading: 'Aloo Gobhi - A Timeless Vegetarian Delight',
      para: 'Aloo Gobhi, the beloved combination of potatoes (aloo) and cauliflower (gobhi), is a staple dish in many South Asian homes. Known for its simple yet delicious flavors, this dry curry is a versatile option that pairs perfectly with roti, naan, or rice. Aloo Gobhi is a dish that celebrates the beauty of fresh vegetables, enhanced with aromatic spices.',
    },
    sub: {
      heading: 'A Dish That Never Fails to Impress',
      para: 'Easy to prepare, hearty, and full of nutrients, Aloo Gobhi is the ultimate comfort food that pleases the palate and nourishes the body.',
    },
    description: {
      heading: 'What Makes Aloo Gobhi Special?',
      para: [
        'A Wholesome Combination: Cauliflower is rich in fiber and vitamins, while potatoes provide the perfect complement with their earthy flavor and texture.',
        'Aromatic Spices: The subtle blend of cumin, turmeric, and coriander makes this dish a flavorful delight.',
        'Quick and Easy: Aloo Gobhi is a straightforward recipe that fits well into a busy schedule without compromising on taste.',
        'Perfect for All Occasions: From family dinners to festive meals, Aloo Gobhi is always a crowd-pleaser.',
      ],
    },
    ingredients: [
      'For the Dish:',
      'Potatoes (aloo): 3 medium (peeled and diced)',
      'Cauliflower (gobhi): 1 medium (cut into florets)',
      'Onion: 1 medium (finely chopped)',
      'Tomatoes: 2 medium (chopped)',
      'Green chilies: 2-3 (sliced)',
      'Garlic cloves: 3-4 (minced)',
      'Cooking oil: 4 tablespoons',
      'Cumin seeds: 1 teaspoon',
      'Turmeric powder: ½ teaspoon',
      'Red chili powder: 1 teaspoon',
      'Coriander powder: 1 tablespoon',
      'Garam masala powder: ½ teaspoon',
      'Salt: to taste',
      'Fresh coriander leaves: for garnish',
    ],
    cookingProcess: [
      {
        heading: 'Prepare the Vegetables',
        para: 'Peel and dice the potatoes into small cubes. Cut the cauliflower into bite-sized florets and wash thoroughly.',
      },
      {
        heading: 'Sauté the Aromatics',
        para:'Heat oil in a large pan or wok. Add cumin seeds and let them sizzle. Add chopped onions and garlic, and sauté until golden and fragrant.',
      },
      {
        heading: 'Cook the Potatoes and Cauliflower',
        para: 'Add the diced potatoes to the pan and cook for 5-6 minutes, stirring occasionally. Add the cauliflower florets, turmeric, red chili powder, coriander powder, and salt. Mix well to coat the vegetables in spices.',
      },
      {
        heading: 'Simmer with Tomatoes',
        para: 'Add the chopped tomatoes and green chilies. Cover and cook on low heat for 10-12 minutes, stirring occasionally, until the vegetables are tender.',
      },
      {
        heading: 'Finish with Garam Masala',
        para: 'Sprinkle garam masala over the cooked vegetables and mix well. Let it simmer for another 2-3 minutes.',
      },
      {
        heading: 'Garnish and Serve',
        para: 'Garnish with fresh coriander leaves. Serve hot with roti, paratha, or steamed rice.',
      },
    ],
    conclusion: {
      heading: 'Aloo Gobhi - Simple Yet Flavorful',
      para: 'Aloo Gobhi is a timeless dish that proves the best meals are often the simplest. With its earthy vegetables and aromatic spices, it&apos;s a perfect example of how traditional recipes turn basic ingredients into something extraordinary. Make this comforting dish a part of your weekly menu, and enjoy its delightful flavors with your loved ones!',
    },
  }, 

  {
    id: 8,
    category: "Lunch",
    image: "/images/aluuPalak.jpg",
    title: "Aloo Palak - A Nutritious and Flavorful Classic",
    date: "October 19, 2024",
    main: {
      heading: "Aloo Palak - A Perfect Blend of Health and Taste",
      para: "Aloo Palak, a delightful combination of spinach (palak) and potatoes (aloo), is a staple vegetarian dish in South Asian households. Packed with nutrients and bursting with flavor, this quick and easy recipe is perfect for everyday meals. Whether served with roti, paratha, or rice, Aloo Palak brings a hearty and satisfying touch to your dining table."
    },
    sub: {
      heading: "A Dish Loved by All",
      para: "This simple yet wholesome dish is a perfect way to incorporate greens into your diet. Its earthy flavors and subtle spices make it a favorite among both adults and kids."
    },
    description: {
      heading: "Why Aloo Palak Is Special",
      para: [
        "A Nutritional Powerhouse: Spinach is loaded with iron, vitamins, and antioxidants, while potatoes provide energy-rich carbohydrates.",
        "Simple and Quick to Make: With minimal ingredients and an easy cooking process, Aloo Palak is a hassle-free addition to your menu.",
        "Versatile and Customizable: You can adjust the spices and consistency to suit your taste, making it a highly flexible dish.",
        "Perfect for Every Occasion: Be it a casual lunch or a festive meal, Aloo Palak fits in seamlessly with any spread."
      ]
    },
    ingredients: [
      "For the Dish:",
      "Potatoes (aloo): 3 medium (peeled and diced)",
      "Spinach (palak): 500 grams (washed and chopped)",
      "Onion: 1 medium (finely chopped)",
      "Tomatoes: 2 medium (chopped)",
      "Green chilies: 2-3 (sliced)",
      "Garlic cloves: 3-4 (finely chopped)",
      "Cooking oil: 4 tablespoons",
      "Cumin seeds: 1 teaspoon",
      "Red chili powder: 1 teaspoon",
      "Turmeric powder: ½ teaspoon",
      "Salt: to taste",
      "Fresh coriander leaves: for garnish"
    ],
    cookingProcess: [
      {
        heading: "Prepare the Ingredients",
        para: "Peel and dice the potatoes into small cubes. Wash and chop the spinach."
      },
      {
        heading: "Cook the Potatoes",
        para: "Heat oil in a pan and add cumin seeds. Let them sizzle. Add the chopped onions and garlic, and sauté until golden brown. Add the diced potatoes, turmeric, red chili powder, and salt. Stir well to coat the potatoes with spices."
      },
      {
        heading: "Add Spinach and Tomatoes",
        para: "Add the chopped spinach and tomatoes to the pan. Mix well. Cover and cook on low heat for 10-12 minutes, stirring occasionally, until the potatoes are tender and the spinach is cooked."
      },
      {
        heading: "Adjust the Seasoning",
        para: "Taste and adjust the salt and spices as needed. Add sliced green chilies for a little heat if desired."
      },
      {
        heading: "Garnish and Serve",
        para: "Garnish with fresh coriander leaves. Serve hot with roti, naan, or steamed rice."
      }
    ],
    conclusion: {
      heading: "Aloo Palak - A Healthy Comfort Food",
      para: "Aloo Palak is not just a dish; it&apos;s a celebration of simple ingredients transformed into a flavorful masterpiece. It&apos;s the perfect way to add greens to your meals without compromising on taste. Enjoy this wholesome recipe that&apos;s sure to leave you and your loved ones asking for seconds!"
    }
  },

  {
    id: 9,
    category: "Lunch",
    image: "/images/haleem.jpg",
    title: "Haleem - A Rich and Hearty Delight",
    date: "November 12, 2024",
    main: {
      heading: "Haleem - A Bowl of Warm Comfort",
      para: "Haleem is a cherished South Asian dish known for its rich texture, depth of flavor, and cultural significance. This slow-cooked delicacy combines lentils, wheat, barley, and meat, simmered with aromatic spices to create a dish that is both hearty and satisfying. Haleem is often enjoyed during Ramadan, festivals, or any occasion that calls for a meal that feeds the soul."
    },
    sub: {
      heading: "A Dish Full of Tradition and Flavor",
      para: "Haleem is not just a dish; it is an experience. With every spoonful, you taste centuries of tradition, love, and patience that go into its preparation."
    },
    description: {
      heading: "Why Haleem Stands Out",
      para: [
        "A Nutrient-Packed Meal: With its mix of grains, lentils, and meat, Haleem is a balanced, protein-rich dish that provides long-lasting energy.",
        "A Symbol of Togetherness: Traditionally cooked in large quantities, Haleem is meant to be shared with family and friends, fostering a sense of community.",
        "A Labor of Love: The slow-cooking process and careful blending of spices make Haleem a labor-intensive yet rewarding dish.",
        "Perfect for Any Occasion: Whether it&apos;s a festive gathering or a quiet family dinner, Haleem is a dish that always steals the spotlight."
      ]
    },
    ingredients: [
      "For the Haleem Base:",
      "Boneless meat (beef, mutton, or chicken): 1 kg",
      "Wheat grains: 1 cup",
      "Barley (jau): ½ cup",
      "Split Bengal gram (chana dal): 1 cup",
      "Red lentils (masoor dal): ½ cup",
      "Yellow lentils (moong dal): ½ cup",
      "Salt: to taste",
      "Water: as needed",
      "For the Spice Mix:",
      "Onions: 2 large (finely sliced)",
      "Garlic paste: 2 tablespoons",
      "Ginger paste: 2 tablespoons",
      "Yogurt: 1 cup",
      "Red chili powder: 1 tablespoon",
      "Turmeric powder: 1 teaspoon",
      "Coriander powder: 1 tablespoon",
      "Garam masala powder: 1 teaspoon",
      "Cumin seeds: 1 teaspoon",
      "Cooking oil or ghee: ½ cup",
      "For Garnish:",
      "Fried onions: 1 cup",
      "Fresh coriander leaves: chopped",
      "Green chilies: sliced",
      "Ginger: julienned",
      "Lemon wedges: for serving"
    ],
    cookingProcess: [
      {
        heading: "Prepare the Grains and Lentils",
        para: "Wash and soak the wheat, barley, and lentils separately for 3-4 hours. Boil them until soft, then blend into a smooth paste using a hand blender or food processor. Set aside."
      },
      {
        heading: "Cook the Meat",
        para: "In a large pot, heat oil or ghee and fry sliced onions until golden brown. Add garlic, ginger paste, and meat, and sauté for a few minutes. Add yogurt, red chili powder, turmeric, coriander powder, garam masala, and salt. Cook until the oil separates from the mixture. Add water and let the meat cook until tender. Shred the meat into fine pieces and mix it back into the pot."
      },
      {
        heading: "Combine and Cook",
        para: "Add the blended grain and lentil mixture to the pot with the shredded meat. Stir continuously to prevent sticking. Cook on low heat for 1-2 hours, stirring occasionally, until the Haleem reaches a thick and creamy consistency."
      },
      {
        heading: "Prepare Garnish and Serve",
        para: "Garnish the Haleem with fried onions, fresh coriander, green chilies, julienned ginger, and lemon wedges. Serve hot with naan or parathas for a complete meal."
      }
    ],
    conclusion: {
      heading: "Haleem - A Dish of Timeless Elegance",
      para: "Haleem is more than a meal; it&apos;s a tradition that brings people together. Whether you&apos;re savoring it on a cold winter evening or enjoying it during a festive celebration, this hearty dish always leaves a lasting impression. With its complex flavors and comforting warmth, Haleem truly deserves its place in the spotlight of South Asian cuisine."
    }
  },

  {
    id: 10,
    category: "Lunch",
    image: "/images/aluQeema.jpg",
    title: "Aloo Keema - A Comforting Pakistani Classic",
    date: "Septeber 7, 2024",
    main: {
      heading: "Aloo Keema - A Comforting Pakistani Classic",
      para: "Aloo Keema is a beloved dish in Pakistani households, combining ground meat (usually beef or mutton) with tender potatoes, cooked with aromatic spices. This flavorful dish is perfect for a comforting lunch or dinner and pairs beautifully with roti, paratha, or rice."
    },
    sub: {
      heading: "A Hearty and Satisfying Meal",
      para: "Aloo Keema is not just a meal; it&apos;s a blend of savory flavors that bring out the warmth and richness of Pakistani cuisine. It&apos;s a complete, filling dish that&apos;s easy to prepare yet loved by all."
    },
    description: {
      heading: "Why Aloo Keema is a Favorite",
      para: [
        "Rich in Protein: The combination of ground meat and potatoes makes this dish a great source of protein and essential nutrients.",
        "Quick and Easy: It&apos;s a simple recipe that doesn&apos;t require much time, making it an ideal choice for busy days.",
        "Full of Flavor: The spices bring out an incredible depth of flavor, while the potatoes absorb the savory meat juices, making each bite satisfying.",
        "Perfect for Any Meal: Aloo Keema can be served as a lunch, dinner, or even as a filling snack with paratha or naan."
      ]
    },
    ingredients: [
      "For the Aloo Keema:",
      "Ground beef or mutton: 500 grams",
      "Potatoes (aloo): 3 medium (peeled and cubed)",
      "Onion: 1 large (finely chopped)",
      "Tomatoes: 2 medium (chopped)",
      "Green chilies: 2-3 (sliced)",
      "Ginger-garlic paste: 1 tablespoon",
      "Cooking oil: 4 tablespoons",
      "Cumin seeds: 1 teaspoon",
      "Coriander powder: 1 teaspoon",
      "Red chili powder: 1 teaspoon",
      "Turmeric powder: ½ teaspoon",
      "Garam masala: 1 teaspoon",
      "Salt: to taste",
      "Fresh coriander leaves: for garnish"
    ],
    cookingProcess: [
      {
        heading: "Prepare the Ingredients",
        para: "Chop the onions, tomatoes, and green chilies. Peel and cube the potatoes. Set them aside."
      },
      {
        heading: "Cook the Ground Meat",
        para: "Heat oil in a large pan and add cumin seeds. Once they sizzle, add the chopped onions and ginger-garlic paste. Sauté until golden brown. Add the ground meat and cook until it turns brown."
      },
      {
        heading: "Add Spices and Tomatoes",
        para: "Add coriander powder, red chili powder, turmeric, and salt. Stir well to coat the meat with the spices. Add the chopped tomatoes and cook until they soften and the oil starts to separate."
      },
      {
        heading: "Cook the Potatoes",
        para: "Add the cubed potatoes to the pan and mix them into the meat. Add a little water, cover the pan, and let it cook on medium heat for 15-20 minutes until the potatoes are tender and cooked through."
      },
      {
        heading: "Final Touch and Garnish",
        para: "Once the potatoes are cooked, sprinkle garam masala over the dish and stir well. Garnish with fresh coriander leaves and green chilies."
      }
    ],
    conclusion: {
      heading: "Aloo Keema - The Heart of Pakistani Meals",
      para: "Aloo Keema is a timeless dish that captures the essence of Pakistani cuisine. The combination of meat and potatoes, enriched with aromatic spices, is a meal that brings warmth, comfort, and a sense of home. Serve it with roti or rice for a satisfying meal that will leave everyone asking for more."
    }
  },

  // Dinner
  {
    id: 11,
    category: `Dinner`,
    image: "/images/biryani.jpg",
    title: `Biryani - A Culinary Symphony`,
    date: `November 26, 2024`,
    main: {
      heading: `The Magical World of Biryani`,
      para: `Biryani is more than just a dish; it is a celebration of flavors, culture, and heritage. Originating from the royal kitchens of the Mughal Empire, biryani has traveled far and wide, evolving into countless regional variations while retaining its essence.`,
    },
    sub: {
      heading: `An Irresistible Aroma with Every Grain`,
      para: `Biryani is a harmonious blend of aromatic basmati rice, tender meat or vegetables, and a medley of spices that tantalize the senses. Its preparation involves layering and slow cooking to infuse each grain of rice with mouthwatering flavors.`,
    },
    description: {
      heading: `A Flavorful History`,
      para: [
        `Origins in Persia and Mughal India Biryani&apos;s origins can be traced back to Persia, where it was brought to India by the Mughals. Over time, it became an integral part of Indian cuisine.`,
        ` Regional Variations Each region in South Asia has its own version of biryani—Hyderabadi, Lucknowi, Kolkata, Sindhi, and more—each adding a unique twist to the classic recipe.`,
        `A Royal Dish for the Masses Once reserved for royalty, biryani has now become a universal favorite, loved by people across all walks of life.`,
        `A Symbol of Celebration Biryani is synonymous with festivities and is often the star dish at weddings, festivals, and gatherings.`,
      ],
    },
    ingredients: [
      `Basmati rice: 2 cups`,

      `Chicken or mutton: 500 grams (can be substituted with vegetables for a veg biryani)`,

      `Yogurt: 1 cup`,

      `Onions: 3 large (sliced thin)`,

      `Tomatoes: 2 medium (chopped)`,

      `Garlic and ginger paste: 2 tablespoons`,

      `Green chilies: 4-5 (slit)`,

      `Biryani masala: 2 tablespoons`,

      `Whole spices: bay leaf, cinnamon, cardamom, cloves, and star anise`,
      `Saffron: a pinch (soaked in warm milk)`,

      `Coriander and mint leaves: a handful (chopped)`,

      `Cooking oil or ghee: 4 tablespoons`,

      `Salt: to taste`,
    ],

    cookingProcess: [
      {
        heading: `Prepare the Rice`,
        para: `Wash and soak basmati rice for 30 minutes. Boil the rice with whole spices, salt, and water until 70% cooked. Drain and set aside.`,
      },
      {
        heading: `Marinate the Chicken/Mutton`,
        para: `In a bowl, mix yogurt, garlic-ginger paste, green chilies, biryani masala, and salt. Add the chicken or mutton and let it marinate for at least 1 hour.`,
      },
      {
        heading: `Cook the Meat`,
        para: `Heat oil/ghee in a pan, fry onions until golden brown, and set aside. In the same oil, add the marinated meat and cook until tender. Add chopped tomatoes and cook until oil separates.`,
      },
      {
        heading: `Layer the Biryani`,
        para: `In a heavy-bottomed pot, layer cooked rice and meat alternately. Sprinkle fried onions, coriander, mint, and saffron milk between layers.`,
      },
      {
        heading: `Dum Cooking`,
        para: `Cover the pot with a tight lid and cook on low flame for 25-30 minutes to allow the flavors to infuse.`,
      },
      {
        heading: `Serve Hot`,
        para: `Gently mix the biryani before serving to maintain the layers. Serve with raita or salad.`,
      },
    ],
    conclusion: {
      heading: `A Timeless Delight`,
      para: `Whether enjoyed with family or at grand celebrations, biryani continues to be a dish that brings people together. Its rich aroma, vibrant colors, and heavenly taste make it a culinary masterpiece cherished by million`,
    },
  },

  {
    id: 12,
    category: `Dinner`,
    image: "/images/qorma.jpg",
    title: `Qorma - A Royal Delight`,
    date: `September 7, 2024`,
    main: {
      heading: `The Rich and Flavorful Qorma`,
      para: `Qorma is a dish that exemplifies the richness of South Asian cuisine. Known for its creamy texture, aromatic spices, and tender meat, qorma is a staple at grand feasts and family gatherings alike. This royal dish carries with it centuries of culinary tradition and remains a favorite on dining tables worldwide.`,
    },
    sub: {
      heading: `A Dish of Elegance and Taste`,
      para: `Qorma is not just a curry; it is a masterpiece of flavors. Its preparation involves slow cooking to ensure every spice and ingredient perfectly blends, creating a taste that is unforgettable.`,
    },
    description: {
      heading: `A Journey Through Qorma&apos;s Legacy`,
      para: [
        `A Mughal Invention Qorma finds its roots in Mughal kitchens, where chefs created this dish as a tribute to the emperors&apos; love for rich and flavorful food.`,
        `A Symbol of Hospitality In South Asia, qorma is synonymous with hospitality and is often served to honor guests at weddings and festivals.`,
        `Diverse Variations From chicken qorma to mutton qorma, each version has its distinct flavor profile, influenced by regional preferences.`,
        `Perfectly Paired with Naan or Rice Qorma is often enjoyed with naan, paratha, or plain steamed rice, making it a versatile dish for any occasion.`,
      ],
    },
    ingredients: [
      `Chicken or mutton: 500 grams`,

      `Onions: 3 large (thinly sliced)`,

      `Yogurt: 1 cup`,

      `Garlic and ginger paste: 2 tablespoons`,

      `Tomatoes: 2 medium (optional, for a tangy flavor)`,

      `Cooking oil or ghee: 4 tablespoons`,

      `Whole spices: bay leaf, cinnamon stick, cloves, green cardamom, and black peppercorns`,

      `Ground spices: turmeric, red chili powder, coriander powder, and garam masala (1 teaspoon each)`,

      `Salt: to taste`,

      `Almonds or cashews: a handful (optional, for a richer texture)`,

      `Saffron: a pinch (soaked in warm milk)`,

      `Fresh coriander leaves: for garnishing`,
    ],

    cookingProcess: [
      {
        heading: `Prepare the Base`,
        para: `Heat oil or ghee in a pot, add whole spices, and sauté until aromatic. Add sliced onions and fry until golden brown. Remove a few for garnishing later.`,
      },
      {
        heading: `Cook the Meat`,
        para: `Add garlic-ginger paste to the pot, followed by chicken or mutton. Cook until the meat changes color and releases its juices.`,
      },
      {
        heading: ` Add Yogurt and Spices`,
        para: `Lower the heat and add whisked yogurt, ground spices, and salt. Stir well to prevent curdling and cook until oil separates.`,
      },
      {
        heading: `Simmer to Perfection`,
        para: `Add a little water for the desired consistency, cover, and let it simmer on low heat until the meat is tender. (Optional) Add saffron milk and ground almonds/cashews for a creamier texture.`,
      },
      {
        heading: `Garnish and Serve`,
        para: `Garnish with fried onions and fresh coriander leaves. Serve hot with naan, paratha, or rice.`,
      },
    ],
    conclusion: {
      heading: `A Dish That Stands the Test of Time`,
      para: `Qorma is more than just a meal; it is an experience that brings people together. Whether served at weddings or festive dinners, its rich flavors and royal appeal never fail to impress.`,
    },
  },

  {
    id: 13,
    category: `Dinner`,
    image: "/images/chickenKarahi.jpg",
    title: `Chicken Karahi - A Pakistani Classic`,
    date: `December 26, 2023`,
    main: {
      heading: `The Iconic Chicken Karahi`,
      para: `Chicken Karahi is a beloved dish in South Asian cuisine, especially in Pakistan. Known for its bold flavors and minimal ingredients, it&apos;s a go-to dish for family dinners, gatherings, and even roadside eateries. With its quick preparation and irresistible aroma, chicken karahi has earned a special place in the hearts of food lovers.`,
    },
    sub: {
      heading: `Simple Yet Flavorful`,
      para: `Chicken Karahi combines the essence of fresh tomatoes, green chilies, and aromatic spices. Cooked in a wok (karahi) over high heat, this dish is all about bold flavors packed into every bite.`,
    },
    description: {
      heading: `The Journey of Chicken Karahi`,
      para: [
        `Street Food to Gourmet Originally a roadside delicacy, chicken karahi has now become a staple at high-end restaurants and home kitchens alike.`,
        `A Symbol of Pakistani Cuisine Chicken Karahi is a signature dish of Pakistani cuisine, showcasing the simplicity and depth of regional flavors.`,
        `Quick and Easy Preparation Its simple cooking method and easily available ingredients make it a favorite for both novice and seasoned cooks.`,
        `Best Served with Fresh Bread Chicken Karahi is best paired with hot naan, tandoori roti, or steamed rice, making it a versatile dish for any occasion.`,
      ],
    },
    ingredients: [
      `Chicken: 1 kg (cut into medium pieces)`,

      `Tomatoes: 4 large (chopped or pureed)`,

      `Onions: 2 medium (sliced)`,

      `Garlic and ginger paste: 2 tablespoons`,

      `Cooking oil or ghee: 4 tablespoons`,

      `Green chilies: 6-8 (slit lengthwise)`,

      `Red chili powder: 1 teaspoon`,

      `Turmeric powder: ½ teaspoon`,

      `Coriander powder: 1 teaspoon`,

      `Garam masala powder: 1 teaspoon`,

      `Salt: to taste`,

      `Fresh coriander leaves: for garnishing`,

      `Lemon juice: 2 tablespoons`,
    ],

    cookingProcess: [
      {
        heading: ` Heat the Oil`,
        para: `Heat oil or ghee in a wok (karahi). Add sliced onions and sauté until golden brown.`,
      },
      {
        heading: `Cook the Chicken`,
        para: `Add chicken pieces and cook on high heat until they turn golden and release their juices.`,
      },
      {
        heading: `Add Tomatoes and Spices`,
        para: `Add chopped or pureed tomatoes, garlic-ginger paste, and all the spices (except garam masala). Cook until the tomatoes break down and oil separates.`,
      },
      {
        heading: ` Simmer and Add Green Chilies`,
        para: `Lower the heat, add green chilies, and let the karahi simmer until the chicken is fully cooked and the gravy thickens.`,
      },
      {
        heading: `Finish with Garam Masala and Lemon`,
        para: `Sprinkle garam masala and drizzle lemon juice over the dish. Stir well and cook for another 2-3 minutes.`,
      },
      {
        heading: `Garnish and Serve`,
        para: `Garnish with fresh coriander leaves and serve hot with naan, roti, or rice.`,
      },
    ],
    conclusion: {
      heading: `A Timeless Favorite`,
      para: `Chicken Karahi is not just a dish; it&apos;s an experience that defines the essence of Pakistani hospitality and love for food. Its simplicity and unbeatable flavor make it a dish you&apos;ll want to cook over and over again.`,
    },
  },

  {
    id: 14,
    category: `Dinner`,
    image: "/images/DumQeema.jpg",
    title: `Dum Qeema - A Flavorful Delight`,
    date: `November 17, 2024`,
    main: {
      heading: `Dum Qeema - The Perfect Blend of Flavor and Aroma`,
      para: `Dum Qeema is a beloved South Asian delicacy, known for its rich flavors and tender minced meat. Cooked over low heat ('dum'), this dish is infused with aromatic spices, making it a favorite for lunch or dinner. Whether served with naan, paratha, or rice, Dum Qeema never fails to tantalize the taste buds.`,
    },
    sub: {
      heading: `The Essence of Dum Cooking`,
      para: `The slow-cooking technique used in Dum Qeema allows the flavors of the meat, spices, and aromatics to develop fully. This results in a dish that is rich, fragrant, and absolutely irresistible.`,
    },
    description: {
      heading: `The Legacy of Dum Qeema`,
      para: [
        `A Dish Rooted in Tradition Dum Qeema is inspired by the traditional 'dum pukht' style of cooking, where food is cooked on low heat to enhance its flavors.`,
        `An All-Season Favorite Its warm and hearty flavors make it perfect for every season, whether served as a comforting winter meal or a festive summer delight.`,
        `A Crowd Pleaser Easy to prepare and packed with flavor, Dum Qeema is a go-to dish for family gatherings and special occasions.`,
        `Versatile Pairing Enjoy Dum Qeema with naan, paratha, or even as a stuffing for sandwiches and rolls.`,
      ],
    },
    ingredients: [
      `Minced meat (beef, chicken, or mutton): 500 grams`,

      `Onions: 2 large (finely chopped)`,

      `Tomatoes: 3 medium (pureed or finely chopped)`,

      `Garlic and ginger paste: 2 tablespoons`,

      `Yogurt: ½ cup (whisked)`,

      `Green chilies: 3-4 (chopped)`,

      `Cooking oil or ghee: 4 tablespoons`,

      `Red chili powder: 1 teaspoon`,

      `Turmeric powder: ½ teaspoon`,

      `Coriander powder: 1 teaspoon`,

      `Cumin powder: 1 teaspoon`,

      `Garam masala powder: 1 teaspoon`,

      `Salt: to taste`,

      `Fresh coriander and mint leaves: for garnishing`,

      `Lemon juice: 1 tablespoon`,
    ],

    cookingProcess: [
      {
        heading: `Prepare the Base`,
        para: `Heat oil or ghee in a heavy-bottomed pan. Add chopped onions and sauté until golden brown.`,
      },
      {
        heading: ` Cook the Minced Meat`,
        para: `Add garlic-ginger paste and minced meat. Cook on high heat until the meat changes color and any excess water evaporates.`,
      },
      {
        heading: `Add Tomatoes and SpiceS`,
        para: `Add pureed or chopped tomatoes, yogurt, and all the spices (except garam masala). Cook on medium heat until the oil separates.`,
      },
      {
        heading: `Slow Cook (Dum)`,
        para: `Lower the heat, cover the pan tightly, and let the qeema cook on dum for 15-20 minutes. Stir occasionally to ensure even cooking.`,
      },
      {
        heading: `Add Green Chilies and Garnish`,
        para: `Add chopped green chilies and sprinkle garam masala. Cook for another 2-3 minutes. Garnish with fresh coriander, mint leaves, and a drizzle of lemon juice.`,
      },
      {
        heading: `Serve Hot`,
        para: `Serve Dum Qeema hot with naan, paratha, or rice.`,
      },
    ],
    conclusion: {
      heading: `A Timeless Recipe`,
      para: `Dum Qeema is a testament to the rich culinary heritage of South Asia. Its bold flavors and aromatic spices make it a dish worth savoring. Whether it&apos;s a family dinner or a special occasion, Dum Qeema is sure to be the star of the table.`,
    },
  },

  {
    id: 15,
    category: `Dinner`,
    image: "/images/chargha.jpg",
    title: `Chicken Chargha - A Deliciously Spicy Delight`,
    date: `October 7, 2024`,
    main: {
      heading: `Chicken Chargha - A Spicy Feast of Flavor`,
      para: `Chicken Chargha is a popular and mouthwatering dish from Pakistan, known for its crispy skin, juicy meat, and bold flavors. Traditionally marinated with a blend of spices, then deep-fried or roasted, Chicken Chargha is often enjoyed as a festive treat or a special weekend meal. Served with naan, rice, or salad, this dish never fails to impress.`,
    },
    sub: {
      heading: `A Celebration of Flavors`,
      para: `The unique blend of spices in the marinade and the method of cooking, which involves both marination and deep frying or roasting, gives Chicken Chargha its irresistible taste and texture.`,
    },
    description: {
      heading: `The Story Behind Chicken Chargha`,
      para: [
        `A Festive Dish
Chicken Chargha is often prepared for special occasions, family gatherings, and events, becoming a star dish of the menu.`,
        `Traditional yet Modern Though its roots are in traditional South Asian cooking, Chicken Chargha is now widely loved across the world, thanks to its bold flavors and crispy texture.`,
        `Perfect for Sharing
The whole chicken is cooked and served, making it a perfect dish for sharing with family and friends.`,
        `A Tasty Street Food
Originally served by roadside vendors, Chicken Chargha has now found its way to restaurant menus and home kitchens alike`,
      ],
    },
    ingredients: [
      `Whole chicken: 1 (approximately 1-1.5 kg)`,

      `Yogurt: 1 cup`,

      `Lemon juice: 2 tablespoons`,

      `Garlic paste: 1 tablespoon`,

      `Ginger paste: 1 tablespoon`,

      `Green chilies: 3-4 (finely chopped)`,

      `Red chili powder: 1 tablespoon`,

      `Turmeric powder: 1 teaspoon`,

      `Cumin powder: 1 teaspoon`,

      `Coriander powder: 1 teaspoon`,

      `Garam masala powder: 1 teaspoon`,

      `Salt: to taste`,

      `Cooking oil: for deep frying or roasting`,

      `Fresh coriander leaves: for garnish`,

      `Onions: 1 medium (sliced, for garnish)`,
    ],

    cookingProcess: [
      {
        heading: `Marinate the Chicken`,
        para: `Wash and soak basmati rice for 30 minutes. Boil the rice with whole spices, salt, and water until 70% cooked. Drain and set aside.`,
      },
      {
        heading: `Marinate the Chicken/Mutton`,
        para: `In a large bowl, mix yogurt, lemon juice, garlic paste, ginger paste, green chilies, and all the spices.

Rub this mixture all over the chicken, making sure it&apos;s well-coated. Cover the chicken and let it marinate for at least 3-4 hours (overnight for best results).
`,
      },
      {
        heading: `Prepare for Cooking`,
        para: `Heat oil in a deep pan for frying or preheat the oven to 180°C (350°F) for roasting.`,
      },
      {
        heading: `Fry or Roast the Chicken`,
        para: `For frying: Deep fry the marinated chicken until it&apos;s golden brown and cooked through (about 15-20 minutes on medium heat).

For roasting: Place the marinated chicken in the oven and roast for 45-60 minutes, or until the chicken is cooked through and the skin is crispy.
`,
      },
      {
        heading: `Serve and Garnish`,
        para: `Once the chicken is cooked, remove it from the pan or oven. Garnish with fresh coriander leaves and sliced onions.`,
      },
      {
        heading: `Serve Hot`,
        para: `Serve Chicken Chargha with naan, rice, or a fresh salad on the side.`,
      },
    ],
    conclusion: {
      heading: `A Crowd-Pleasing Dish`,
      para: `Chicken Chargha is more than just a meal; it&apos;s a celebration of flavors. Whether you&apos;re hosting a gathering or enjoying a family meal, this dish is guaranteed to be a hit. Its crispy texture, juicy interior, and spicy marinade make it a standout choice for any occasion.`,
    },
  },

  // Snacks

  {
    "id": 16,
    "category": "Snacks",
    "image": "/images/sandwich.jpg",
    "title": "Club Sandwich - A Perfect Snack for Any Time",
    "date": "November 26, 2024",
    "main": {
      "heading": "Club Sandwich - A Perfect Snack for Any Time",
      "para": "The Club Sandwich is a timeless snack loved by many for its delicious layers of bread, crispy bacon, fresh vegetables, and tender chicken or turkey. Often served with crispy fries, this snack is both satisfying and filling. Whether it's for a quick lunch, a picnic, or a snack during your day, the Club Sandwich never disappoints."
    },
    "sub": {
      "heading": "Quick and Easy, Yet Delicious",
      "para": "The Club Sandwich is not only quick to prepare but also offers endless variations. Whether you prefer it with chicken, turkey, or even vegetarian options, it's a versatile and customizable snack that suits all tastes."
    },
    "description": {
      "heading": "Why the Club Sandwich is a Favorite",
      "para": [
        "Layered Goodness: The Club Sandwich's multiple layers of bread, meats, veggies, and sauces offer a variety of textures and flavors in each bite.",
        "Filling and Satisfying: With its hearty ingredients, this sandwich is a perfect snack or light meal that keeps you full.",
        "Customizable: You can easily modify the filling to suit your taste, whether you like extra cheese, more veggies, or a different protein.",
        "Perfect for Any Occasion: Whether you're at home, in a cafe, or packing lunch for a picnic, the Club Sandwich is an ideal choice."
      ]
    },
    "ingredients": [
      "For the Club Sandwich:",
      "Bread slices (preferably toasted): 6",
      "Chicken breast (cooked or grilled): 1",
      "Crispy bacon strips: 4",
      "Lettuce leaves: 2",
      "Tomato slices: 3-4",
      "Cucumber slices: 3-4",
      "Cheese slices (optional): 2",
      "Mayonnaise: 2 tablespoons",
      "Mustard sauce (optional): 1 tablespoon",
      "Salt and pepper: to taste"
    ],
    "cookingProcess": [
      {
        "heading": "1. Prepare the Ingredients",
        "para": "Start by toasting the bread slices until golden and crisp. Cook the chicken breast or use leftover grilled chicken, and fry the bacon until crispy. Prepare the lettuce, tomato, cucumber, and cheese slices."
      },
      {
        "heading": "2. Layer the Sandwich",
        "para": "Spread mayonnaise on one side of the toasted bread slices. On the first slice, layer a piece of lettuce, a few slices of tomato, and a layer of grilled chicken or turkey. Add a slice of cheese (optional), then top it with another slice of toasted bread."
      },
      {
        "heading": "3. Add More Layers",
        "para": "On the second slice of bread, layer the crispy bacon, cucumber slices, and another piece of lettuce. Then add the final slice of bread on top."
      },
      {
        "heading": "4. Cut and Serve",
        "para": "Carefully cut the sandwich into quarters or halves, securing the pieces with toothpicks if needed. Serve with fries, chips, or a side salad for a complete snack."
      }
    ],
    "conclusion": {
      "heading": "The Club Sandwich - A Snack You Can&apos;t Resist",
      "para": "The Club Sandwich is a snack that's loved by many for its delicious layers and variety of flavors. It's easy to prepare, customizable, and perfect for any occasion. Whether you're craving a light snack or a satisfying meal, the Club Sandwich is sure to hit the spot. Try this recipe today for a satisfying and tasty treat!"
    }
  },
  {
    "id": 17,
    "category": "Snacks",
    "image": "/images/qeemaSamosa.jpg",
    "title": "Qeema Samosa - A Spicy and Savory Delight",
    "date": "November 26, 2024",
    "main": {
      "heading": "Qeema Samosa - A Spicy and Savory Delight",
      "para": "Qeema Samosa is a crispy, golden snack filled with a savory minced meat (qeema) filling, flavored with aromatic spices. This popular snack in South Asian cuisine is perfect for tea-time or as an appetizer. Whether served at family gatherings or during festive occasions, these samosas never fail to impress with their delicious taste and crispy texture."
    },
    "sub": {
      "heading": "A Flavor Explosion in Every Bite",
      "para": "Qeema Samosa packs a flavorful punch, combining tender minced meat with a rich blend of spices. The crispy outer shell contrasts perfectly with the spicy, juicy filling, making it an irresistible treat for snack lovers."
    },
    "description": {
      "heading": "What Makes Qeema Samosa Special?",
      "para": [
        "Crispy Outer Shell: The golden, flaky crust of the samosa adds the perfect crunch to complement the flavorful filling.",
        "Spiced Meat Filling: The minced meat is cooked with a blend of spices, giving the samosa a warm, savory flavor that is rich and satisfying.",
        "Perfect for Any Occasion: Qeema Samosas are perfect for tea-time, snacks, parties, or as an appetizer at gatherings.",
        "Easy to Make: Though delicious, making Qeema Samosas at home is quite simple with this easy-to-follow recipe."
      ]
    },
    "ingredients": [
      "For the Samosa Filling:",
      "Minced beef or chicken: 250 grams",
      "Onion (finely chopped): 1 medium",
      "Green chilies (finely chopped): 2-3",
      "Ginger-garlic paste: 1 tablespoon",
      "Tomato (chopped): 1 medium",
      "Coriander powder: 1 teaspoon",
      "Cumin powder: 1 teaspoon",
      "Red chili powder: 1 teaspoon",
      "Turmeric powder: ½ teaspoon",
      "Salt: to taste",
      "Fresh coriander leaves (chopped): 2 tablespoons",
      "Oil for cooking: 2 tablespoons",
      "For the Samosa Wrappers:",
      "Samosa pastry sheets (or homemade dough): 10 sheets",
      "Oil for deep frying: enough for frying"
    ],
    "cookingProcess": [
      {
        "heading": "1. Prepare the Filling",
        "para": "Heat oil in a pan and sauté the chopped onions until golden brown. Add the ginger-garlic paste and green chilies, then cook for another 1-2 minutes."
      },
      {
        "heading": "2. Cook the Meat",
        "para": "Add the minced meat to the pan, and cook until browned. Add tomatoes, coriander powder, cumin powder, red chili powder, turmeric powder, and salt. Cook for 5-7 minutes until the tomatoes soften and the meat is fully cooked."
      },
      {
        "heading": "3. Add Fresh Coriander",
        "para": "Once the filling is cooked, stir in the fresh coriander leaves and let the mixture cool completely."
      },
      {
        "heading": "4. Prepare the Samosa Wrappers",
        "para": "If you're using ready-made samosa sheets, cut them into halves to form triangles. If you're using homemade dough, roll it out into small circles, then cut them into halves."
      },
      {
        "heading": "5. Fill and Shape the Samosas",
        "para": "Place a spoonful of the cooled qeema filling on the center of each samosa wrapper. Fold the wrapper to form a triangle and seal the edges by pressing them together with a little water."
      },
      {
        "heading": "6. Deep Fry the Samosas",
        "para": "Heat oil in a deep frying pan. Once the oil is hot, gently drop the samosas in and fry them until golden brown and crispy. Remove from oil and drain on paper towels to remove excess oil."
      }
    ],
    "conclusion": {
      "heading": "Qeema Samosa - A Flavorful Snack for All",
      "para": "Qeema Samosas are a crowd-pleasing snack that combine the crunch of crispy pastry with the spicy, savory meat filling. Perfect for any occasion, these samosas are sure to be a hit at your next gathering or family snack time. Enjoy them with mint chutney or yogurt for the ultimate snack experience!"
    }
  },
  {
    "id": 18,
    "category": "Snacks",
    "image": "/images/cheeseStick.jpg",
    "title": "Cheese Sticks - A Crispy and Gooey Delight",
    "date": "November 26, 2024",
    "main": {
      "heading": "Cheese Sticks - A Crispy and Gooey Delight",
      "para": "Cheese Sticks are a delicious snack that combines the crunch of a golden, crispy exterior with the gooey, melty cheese filling inside. Perfect as a quick snack, appetizer, or party treat, these cheese sticks are sure to please anyone who loves cheesy, savory snacks. With minimal ingredients and quick preparation, cheese sticks are a go-to comfort food."
    },
    "sub": {
      "heading": "A Cheesy Snack You Can't Resist",
      "para": "The crispy outer layer of these cheese sticks contrasts beautifully with the smooth, melty cheese inside. Whether you dip them in marinara sauce or enjoy them on their own, cheese sticks are a simple yet irresistible snack."
    },
    "description": {
      "heading": "What Makes Cheese Sticks Special?",
      "para": [
        "Crispy Outer Layer: The golden, crunchy breadcrumbs provide a perfect texture against the soft, gooey cheese.",
        "Melty Cheese Filling: The cheese inside becomes perfectly melted and gooey once fried, creating a deliciously cheesy experience.",
        "Quick and Easy: With a short prep time and simple ingredients, cheese sticks are a fast snack to satisfy cravings.",
        "Customizable: You can use different types of cheese or even add seasonings to make them your own."
      ]
    },
    "ingredients": [
      "Mozzarella cheese sticks: 10-12 pieces",
      "All-purpose flour: ½ cup",
      "Eggs: 2 (beaten)",
      "Bread crumbs: 1 cup (preferably panko)",
      "Salt: to taste",
      "Black pepper: ½ teaspoon",
      "Chili flakes: ½ teaspoon (optional)",
      "Dried oregano: ½ teaspoon (optional)",
      "Oil for deep frying: enough for frying"
    ],
    "cookingProcess": [
      {
        "heading": "1. Prepare the Breading",
        "para": "In a shallow bowl, mix the flour with a pinch of salt and black pepper. In another bowl, beat the eggs. In a third bowl, place the bread crumbs (seasoned with chili flakes and oregano if desired)."
      },
      {
        "heading": "2. Coat the Cheese Sticks",
        "para": "Dip each mozzarella cheese stick first into the flour, then the beaten eggs, and finally coat it with the bread crumbs. Repeat the process for all cheese sticks."
      },
      {
        "heading": "3. Freeze the Cheese Sticks",
        "para": "Once the cheese sticks are breaded, place them on a tray and freeze them for at least 30 minutes to ensure the cheese doesn't melt too quickly while frying."
      },
      {
        "heading": "4. Fry the Cheese Sticks",
        "para": "Heat oil in a deep frying pan or pot over medium-high heat. Once the oil is hot, carefully drop the frozen cheese sticks into the oil and fry them until golden brown and crispy. This should take about 2-3 minutes."
      },
      {
        "heading": "5. Drain and Serve",
        "para": "Once the cheese sticks are golden and crispy, remove them from the oil and drain them on paper towels to remove excess oil."
      }
    ],
    "conclusion": {
      "heading": "Cheese Sticks - The Perfect Snack for Cheese Lovers",
      "para": "Cheese Sticks are an irresistible snack that will satisfy any cheese lover's cravings. With their crunchy exterior and melty cheese inside, they make a perfect treat for parties, family gatherings, or as a simple snack. Serve them with marinara sauce or any dip of your choice for the ultimate cheesy experience!"
    }
  },
  {
    "id": 19,
    "category": "Snacks",
    "image": "/images/dahiPuri.jpg",
    "title": "Dahi Puri - A Flavorful and Refreshing Snack",
    "date": "November 26, 2024",
    "main": {
      "heading": "Dahi Puri - A Flavorful and Refreshing Snack",
      "para": "Dahi Puri is a popular Indian snack that combines crispy puris filled with chilled yogurt and topped with a variety of tangy and spicy chutneys. This delicious dish is a perfect balance of flavors – crunchy, creamy, sweet, sour, and spicy. Dahi Puri is a favorite for street food lovers and can be enjoyed as an appetizer or a light snack."
    },
    "sub": {
      "heading": "A Burst of Flavors in Every Bite",
      "para": "Each bite of Dahi Puri offers a delightful combination of textures, with the crispy puris giving way to the creamy yogurt and zesty chutneys. The burst of flavors from tamarind chutney, mint chutney, and spices makes this snack a true treat for your taste buds."
    },
    "description": {
      "heading": "What Makes Dahi Puri Special?",
      "para": [
        "Crunchy Puris: The crispy puris provide the perfect base for the creamy yogurt filling and add a satisfying crunch.",
        "Chilled Yogurt: The yogurt is the heart of this dish, offering a cool and refreshing contrast to the spicy chutneys.",
        "Tangy Chutneys: Tamarind and mint chutneys give Dahi Puri its signature tangy and zesty flavor, elevating the taste.",
        "Quick and Easy: Dahi Puri is a simple dish to make and can be prepared in minutes, making it an ideal snack for any occasion."
      ]
    },
    "ingredients": [
      "Puris: 12-15 pieces (store-bought or homemade)",
      "Plain yogurt: 1 cup (whisked)",
      "Tamarind chutney: 2 tablespoons",
      "Mint chutney: 2 tablespoons",
      "Chaat masala: 1 teaspoon",
      "Roasted cumin powder: ½ teaspoon",
      "Black salt: to taste",
      "Salt: to taste",
      "Chili powder: ¼ teaspoon (optional)",
      "Coriander leaves: for garnishing",
      "Pomegranate seeds: for garnishing (optional)"
    ],
    "cookingProcess": [
      {
        "heading": "1. Prepare the Yogurt",
        "para": "In a bowl, whisk the plain yogurt until smooth. Add a pinch of salt, roasted cumin powder, and chaat masala to enhance the flavor. Set aside."
      },
      {
        "heading": "2. Prepare the Chutneys",
        "para": "If using store-bought chutneys, make sure they are ready to use. If homemade, blend tamarind with sugar and salt for tamarind chutney, and fresh mint with green chilies and spices for mint chutney."
      },
      {
        "heading": "3. Assemble the Dahi Puri",
        "para": "Take each puri and carefully create a small opening in the center. Gently fill the puris with the prepared yogurt."
      },
      {
        "heading": "4. Add Chutneys and Spices",
        "para": "Drizzle tamarind chutney and mint chutney over the filled puris. Sprinkle black salt, chaat masala, and chili powder for an extra kick of flavor."
      },
      {
        "heading": "5. Garnish and Serve",
        "para": "Garnish the Dahi Puri with fresh coriander leaves and optional pomegranate seeds for a burst of color. Serve immediately for a crunchy, creamy snack."
      }
    ],
    "conclusion": {
      "heading": "Dahi Puri - A Snack That Refreshes and Delights",
      "para": "Dahi Puri is the perfect snack to enjoy with family and friends. With its refreshing yogurt filling and tangy chutneys, it provides a burst of flavors in every bite. Easy to prepare and incredibly satisfying, Dahi Puri is an excellent choice for anyone who loves a blend of crunch and creaminess in their snacks. Try it today for a deliciously unique treat!"
    }
  },
  {
    "id": 20,
    "category": "Snacks",
    "image": "/images/momos.jpg",
    "title": "Momos - Steamed Dumplings Packed with Flavor",
    "date": "November 26, 2024",
    "main": {
      "heading": "Momos - Steamed Dumplings Packed with Flavor",
      "para": "Momos are delightful steamed dumplings that are a beloved snack in South Asia. These bite-sized dumplings are filled with savory ingredients like vegetables, chicken, or beef, and are usually served with a spicy dipping sauce. Their soft, doughy exterior and flavorful filling make them a favorite street food and snack choice for people of all ages."
    },
    "sub": {
      "heading": "A Comforting Snack with a Delicious Twist",
      "para": "Momos are the perfect combination of a delicate, soft dumpling shell and a filling that's packed with flavor. Whether filled with spicy vegetables or savory meat, these dumplings are a delightful treat that can be enjoyed any time of day."
    },
    "description": {
      "heading": "What Makes Momos Special?",
      "para": [
        "Steamed Perfection: The steamed momo dough gives them a soft, pillowy texture that&apos;s a joy to bite into.",
        "Savory Fillings: Whether vegetarian or non-vegetarian, momos can be filled with your favorite ingredients, from spicy potatoes to juicy chicken.",
        "Quick and Easy: Momos are relatively easy to make and can be steamed in just a few minutes, making them an ideal snack for any occasion.",
        "Versatile: You can experiment with different fillings, dipping sauces, and seasonings to make them uniquely yours."
      ]
    },
    "ingredients": [
      "All-purpose flour: 1 cup",
      "Salt: ½ teaspoon",
      "Water: as needed to make the dough",
      "Oil: for greasing the steamer",
      "For the filling:",
      "Vegetables (carrot, cabbage, and onion): 1 cup (finely chopped)",
      "Ginger-garlic paste: 1 teaspoon",
      "Soy sauce: 1 tablespoon",
      "Black pepper: ½ teaspoon",
      "Salt: to taste",
      "Chili sauce: 1 teaspoon (optional)",
      "For dipping sauce (optional):",
      "Chili sauce: 2 tablespoons",
      "Soy sauce: 1 tablespoon",
      "Vinegar: 1 tablespoon",
      "Garlic: 1 clove (finely chopped)"
    ],
    "cookingProcess": [
      {
        "heading": "1. Prepare the Dough",
        "para": "In a bowl, combine all-purpose flour with salt. Gradually add water and knead into a smooth, soft dough. Cover the dough with a damp cloth and let it rest for 15-20 minutes."
      },
      {
        "heading": "2. Prepare the Filling",
        "para": "In a pan, heat a tablespoon of oil and sauté the chopped vegetables along with ginger-garlic paste until they soften. Add soy sauce, black pepper, salt, and optional chili sauce, then cook for another 2-3 minutes. Let the filling cool."
      },
      {
        "heading": "3. Shape the Momos",
        "para": "Divide the dough into small portions and roll each portion into a thin circle. Place a spoonful of the filling in the center of each circle, then fold the dough around the filling to form a dumpling, sealing the edges tightly."
      },
      {
        "heading": "4. Steam the Momos",
        "para": "Grease a steaming tray with oil and arrange the momos in the tray, leaving space between each. Steam the momos for about 10-12 minutes or until the dough is cooked through and soft."
      },
      {
        "heading": "5. Make the Dipping Sauce",
        "para": "In a small bowl, mix chili sauce, soy sauce, vinegar, and finely chopped garlic. Adjust seasoning to taste."
      },
      {
        "heading": "6. Serve and Enjoy",
        "para": "Serve the freshly steamed momos with the dipping sauce on the side. Enjoy them hot for the best flavor and texture."
      }
    ],
    "conclusion": {
      "heading": "Momos - A Tasty Treat for All",
      "para": "Momos are an irresistible snack that can easily satisfy your cravings. With their soft texture and savory filling, they make for a filling and delicious snack that can be enjoyed by everyone. Whether you enjoy them as a quick snack or as part of a meal, momos are sure to leave you wanting more. Try making them at home with your favorite fillings and share the goodness with your friends and family!"
    }
  },

  // BBQ
  {
    "id": 21,
    "category": "BBQ",
    "image": "/images/turkishKebab.jpg",
    "title": "Turkish Kebab - A Flavorful BBQ Delight",
    "date": "November 26, 2024",
    "main": {
      "heading": "Turkish Kebab - A Flavorful BBQ Delight",
      "para": "Turkish Kebabs are a world-renowned BBQ dish that combines the rich flavors of seasoned meat with the smoky aroma of grilling. These kebabs are celebrated for their juicy texture, aromatic spices, and the perfect char from the grill. Whether served with pita bread, rice, or fresh salads, Turkish Kebabs are a must-try for any BBQ enthusiast."
    },
    "sub": {
      "heading": "A Perfect Blend of Flavor and Tradition",
      "para": "Turkish Kebabs embody the essence of Turkish cuisine, with their roots in centuries-old culinary traditions. Their succulent texture and rich, smoky flavor make them a popular choice for gatherings, celebrations, or any special occasion."
    },
    "description": {
      "heading": "What Makes Turkish Kebab Special?",
      "para": [
        "Authentic Seasoning: The use of traditional Turkish spices like paprika, cumin, and sumac creates a unique and irresistible flavor.",
        "Juicy and Tender: The kebabs are marinated to ensure every bite is juicy and bursting with flavor.",
        "Smoky Aroma: Grilled to perfection, Turkish Kebabs have a delightful smoky aroma that enhances their taste.",
        "Versatile Serving Options: Serve them with pita, rice, or fresh vegetables for a complete and satisfying meal."
      ]
    },
    "ingredients": [
      "Ground lamb or beef: 500 grams",
      "Onion: 1 large (grated)",
      "Garlic: 2-3 cloves (minced)",
      "Paprika: 1 teaspoon",
      "Cumin powder: 1 teaspoon",
      "Sumac: 1 teaspoon (optional)",
      "Chili flakes: ½ teaspoon (optional)",
      "Parsley: a handful (finely chopped)",
      "Salt: to taste",
      "Black pepper: ½ teaspoon",
      "Oil: for greasing the grill"
    ],
    "cookingProcess": [
      {
        "heading": "1. Prepare the Meat Mixture",
        "para": "In a large bowl, combine the ground lamb or beef with grated onion, minced garlic, paprika, cumin powder, sumac, chili flakes, parsley, salt, and black pepper. Mix well until all the ingredients are evenly incorporated."
      },
      {
        "heading": "2. Shape the Kebabs",
        "para": "Divide the meat mixture into equal portions and shape each portion into long, cylindrical kebabs. If desired, you can skewer the kebabs for easy grilling."
      },
      {
        "heading": "3. Preheat the Grill",
        "para": "Preheat your grill or BBQ to medium-high heat. Lightly grease the grill grates with oil to prevent the kebabs from sticking."
      },
      {
        "heading": "4. Grill the Kebabs",
        "para": "Place the kebabs on the grill and cook for about 4-5 minutes on each side, or until they are cooked through and have a nice char. Avoid overcooking to keep them juicy."
      },
      {
        "heading": "5. Serve and Enjoy",
        "para": "Serve the hot kebabs with pita bread, rice, or a side of fresh salad. You can also pair them with a creamy garlic yogurt sauce for extra flavor."
      }
    ],
    "conclusion": {
      "heading": "Turkish Kebab - A BBQ Classic",
      "para": "Turkish Kebabs are a perfect blend of tradition and flavor, making them a standout dish for any BBQ gathering. Their juicy, smoky taste and versatile serving options make them a crowd-pleaser every time. Try this recipe and bring the authentic flavors of Turkish cuisine to your table!"
    }
  },

  {
    "id": 22,
    "category": "BBQ",
    "image": "/images/malaiBoti.jpg",
    "title": "Malai Boti - A Creamy and Juicy BBQ Favorite",
    "date": "November 26, 2024",
    "main": {
      "heading": "Malai Boti - A Creamy and Juicy BBQ Favorite",
      "para": "Malai Boti is a beloved BBQ dish known for its creamy, melt-in-your-mouth texture and rich flavors. This Pakistani classic combines tender chicken chunks marinated in a luscious mixture of cream, yogurt, and spices, then grilled to perfection. Perfect for family gatherings, parties, or festive occasions, Malai Boti is a crowd-pleaser that never disappoints."
    },
    "sub": {
      "heading": "A Delicate Balance of Cream and Spice",
      "para": "Malai Boti brings together the mild creaminess of dairy and the aromatic depth of spices. This unique combination makes it a standout dish on any BBQ menu, offering a perfect balance of flavor and tenderness."
    },
    "description": {
      "heading": "What Makes Malai Boti Special?",
      "para": [
        "Creamy and Tender: The marinade of cream and yogurt ensures the chicken stays juicy and flavorful.",
        "Rich Flavor Profile: Spices like cardamom, black pepper, and green chilies add layers of flavor.",
        "Quick to Cook: Malai Boti grills quickly, making it an excellent option for BBQ events.",
        "Versatile Accompaniment: Serve it with naan, paratha, or a fresh salad for a complete meal."
      ]
    },
    "ingredients": [
      "Boneless chicken cubes: 500 grams",
      "Fresh cream: 3 tablespoons",
      "Yogurt: 2 tablespoons",
      "Ginger-garlic paste: 1 tablespoon",
      "Green chilies: 2-3 (finely chopped)",
      "White pepper powder: ½ teaspoon",
      "Black pepper powder: ½ teaspoon",
      "Cardamom powder: ¼ teaspoon",
      "Salt: to taste",
      "Lemon juice: 1 tablespoon",
      "Cooking oil or butter: for basting",
      "Wooden or metal skewers: for grilling"
    ],
    "cookingProcess": [
      {
        "heading": "1. Marinate the Chicken",
        "para": "In a bowl, combine fresh cream, yogurt, ginger-garlic paste, green chilies, white pepper, black pepper, cardamom powder, salt, and lemon juice. Add the chicken cubes and mix well to coat evenly. Cover and refrigerate for at least 1-2 hours (or overnight for best results)."
      },
      {
        "heading": "2. Prepare the Skewers",
        "para": "Thread the marinated chicken cubes onto skewers. If using wooden skewers, soak them in water for 30 minutes beforehand to prevent burning."
      },
      {
        "heading": "3. Preheat the Grill",
        "para": "Heat your grill or BBQ to medium-high heat. Lightly grease the grill grates to prevent sticking."
      },
      {
        "heading": "4. Grill the Malai Boti",
        "para": "Place the skewers on the grill and cook for 10-12 minutes, turning occasionally. Baste with oil or butter to enhance the flavor and ensure even cooking."
      },
      {
        "heading": "5. Serve and Enjoy",
        "para": "Once the Malai Boti is golden and cooked through, remove it from the grill. Serve hot with naan, chutney, or a fresh salad."
      }
    ],
    "conclusion": {
      "heading": "Malai Boti - A Creamy BBQ Delight",
      "para": "Malai Boti is a perfect choice for those who enjoy creamy, mildly spiced BBQ dishes. Its tender texture and rich flavors make it a standout addition to any meal. Try this easy recipe and impress your guests with the authentic taste of this BBQ favorite!"
    }
  },

  {
    "id": 23,
    "category": "BBQ",
    "image": "/images/seekhKebab.jpg",
    "title": "Seekh Kebab - The Classic BBQ Favorite",
    "date": "November 26, 2024",
    "main": {
      "heading": "Seekh Kebab - The King of BBQ Delights",
      "para": "Seekh Kebab is a beloved Pakistani BBQ delicacy made from minced meat mixed with aromatic spices, grilled on skewers to perfection. Known for its smoky flavor and juicy texture, it is a must-have for any BBQ spread. Enjoyed with chutney, naan, or salad, Seekh Kebab is a dish that never fails to impress."
    },
    "sub": {
      "heading": "A Flavorful Treat for All Occasions",
      "para": "Whether served at festive gatherings or family dinners, Seekh Kebabs are a versatile BBQ option loved by all. Their distinct taste and appealing aroma make them a standout on any menu."
    },
    "description": {
      "heading": "What Makes Seekh Kebab Special?",
      "para": [
        "Smoky BBQ Flavor: Grilled on open flames, Seekh Kebabs capture the essence of traditional BBQ.",
        "Perfectly Spiced: A blend of spices enhances the flavor of the minced meat.",
        "Quick to Prepare: The marinated mince is easy to shape and grill in no time.",
        "Versatile Serving Options: Pair with naan, raita, or chutney for a complete meal."
      ]
    },
    "ingredients": [
      "Minced beef or chicken: 500 grams",
      "Onion: 1 (finely chopped)",
      "Green chilies: 2-3 (finely chopped)",
      "Coriander leaves: a handful (chopped)",
      "Ginger-garlic paste: 1 tablespoon",
      "Cumin powder: 1 teaspoon",
      "Red chili powder: 1 teaspoon",
      "Garam masala powder: ½ teaspoon",
      "Salt: to taste",
      "Lemon juice: 1 tablespoon",
      "Cooking oil: for basting",
      "Wooden or metal skewers"
    ],
    "cookingProcess": [
      {
        "heading": "1. Prepare the Mince",
        "para": "In a bowl, mix minced meat with onion, green chilies, coriander leaves, ginger-garlic paste, and spices. Add salt and lemon juice, and combine well."
      },
      {
        "heading": "2. Shape the Kebabs",
        "para": "Take a handful of the mixture and shape it around a skewer, pressing firmly to form an even cylinder."
      },
      {
        "heading": "3. Grill the Kebabs",
        "para": "Heat the grill or BBQ to medium-high heat. Place the skewers on the grill and cook for 8-10 minutes, turning occasionally and basting with oil."
      },
      {
        "heading": "4. Serve Hot",
        "para": "Once cooked through and slightly charred, remove the kebabs from the grill. Serve hot with chutney, salad, or naan."
      }
    ],
    "conclusion": {
      "heading": "Seekh Kebab - A Timeless BBQ Delight",
      "para": "Seekh Kebabs are a true representation of Pakistani BBQ flavors. Their smoky aroma and rich taste make them a favorite for all BBQ lovers. Try this recipe and enjoy the magic of Seekh Kebab at home!"
    }
  }, 

  {
    "id": 24,
    "category": "BBQ",
    "image": "/images/chickenTikka.jpg",
    "title": "Chicken Tikka - A Spicy BBQ Treat",
    "date": "November 26, 2024",
    "main": {
      "heading": "Chicken Tikka - A Perfect Blend of Spice and Smoke",
      "para": "Chicken Tikka is a crowd-pleasing BBQ dish featuring juicy chicken pieces marinated in a blend of yogurt and spices. Grilled over open flames, it offers a delightful combination of smoky aroma and bold flavors. Perfect for BBQ parties and festive meals, Chicken Tikka is a classic favorite."
    },
    "sub": {
      "heading": "A Dish Loved Across Generations",
      "para": "From street food stalls to fine dining restaurants, Chicken Tikka is a staple in Pakistani cuisine. Its vibrant taste and tender texture make it an evergreen favorite."
    },
    "description": {
      "heading": "What Makes Chicken Tikka Special?",
      "para": [
        "Bold Spices: A mix of traditional spices gives Chicken Tikka its unique flavor.",
        "Tender and Juicy: The yogurt marinade ensures the chicken stays moist.",
        "Quick Cooking: The small chicken pieces cook evenly and quickly.",
        "Pairing Perfection: Serve with naan, raita, or mint chutney for a complete meal."
      ]
    },
    "ingredients": [
      "Chicken pieces (leg, thigh, or breast): 1 kg",
      "Yogurt: ½ cup",
      "Ginger-garlic paste: 1 tablespoon",
      "Red chili powder: 1 teaspoon",
      "Turmeric powder: ½ teaspoon",
      "Cumin powder: 1 teaspoon",
      "Coriander powder: 1 teaspoon",
      "Garam masala powder: ½ teaspoon",
      "Salt: to taste",
      "Lemon juice: 2 tablespoons",
      "Cooking oil: for basting"
    ],
    "cookingProcess": [
      {
        "heading": "1. Marinate the Chicken",
        "para": "In a bowl, mix yogurt, ginger-garlic paste, spices, salt, and lemon juice. Add the chicken pieces and coat evenly. Cover and refrigerate for 2-4 hours."
      },
      {
        "heading": "2. Preheat the Grill",
        "para": "Prepare the BBQ grill or preheat the oven to 200°C. Lightly grease the grill or baking tray."
      },
      {
        "heading": "3. Grill the Chicken",
        "para": "Place the chicken on the grill or baking tray. Cook for 15-20 minutes, turning occasionally and basting with oil until cooked through."
      },
      {
        "heading": "4. Serve and Enjoy",
        "para": "Once golden and slightly charred, remove from heat. Serve hot with mint chutney and naan."
      }
    ],
    "conclusion": {
      "heading": "Chicken Tikka - A Spicy BBQ Classic",
      "para": "Chicken Tikka is a flavorful BBQ dish that captures the essence of Pakistani cuisine. Its tender texture and bold spices make it an irresistible treat for any occasion. Try this recipe and savor the magic of Chicken Tikka!"
    }
  },

  {
    "id": 25,
    "category": "BBQ",
    "image": "/images/bihariBoti.jpg",
    "title": "Beef Bihari Boti - A Rich and Smoky BBQ Delight",
    "date": "November 26, 2024",
    "main": {
      "heading": "Beef Bihari Boti - A True BBQ Masterpiece",
      "para": "Beef Bihari Boti is a traditional Pakistani BBQ dish known for its rich, melt-in-your-mouth texture and bold spices. Made with tenderized beef marinated in a special mix of spices and grilled over charcoal, it offers an unparalleled depth of flavor. Perfect for festive occasions and BBQ gatherings, this dish is a true culinary gem."
    },
    "sub": {
      "heading": "An Iconic Dish from the Heart of Bihari Cuisine",
      "para": "Bihari Boti is not just a BBQ item; it&apos;s a symbol of authentic South Asian flavors. Its unique marination and grilling techniques set it apart from other BBQ dishes."
    },
    "description": {
      "heading": "What Makes Beef Bihari Boti Special?",
      "para": [
        "Tender and Juicy: The special marination ensures the beef stays soft and flavorful.",
        "Charcoal-Grilled Perfection: Grilling over charcoal enhances its smoky aroma.",
        "Authentic Spices: A unique mix of spices gives Bihari Boti its signature taste.",
        "Perfect for BBQ Feasts: A must-have dish for any BBQ gathering."
      ]
    },
    "ingredients": [
      "Beef undercut (thinly sliced): 1 kg",
      "Yogurt: ½ cup",
      "Fried onions: ½ cup (crushed)",
      "Ginger-garlic paste: 1 tablespoon",
      "Raw papaya paste: 1 tablespoon",
      "Red chili powder: 1 teaspoon",
      "Coriander powder: 1 teaspoon",
      "Cumin powder: 1 teaspoon",
      "Garam masala powder: ½ teaspoon",
      "Mustard oil: 2 tablespoons",
      "Salt: to taste",
      "Cooking oil: for basting"
    ],
    "cookingProcess": [
      {
        "heading": "1. Marinate the Beef",
        "para": "In a bowl, mix yogurt, fried onions, ginger-garlic paste, raw papaya paste, and all the spices. Add mustard oil and salt, and combine well. Coat the beef slices evenly with the marinade. Cover and refrigerate for 6-8 hours or overnight for best results."
      },
      {
        "heading": "2. Preheat the Grill",
        "para": "Prepare a charcoal grill and heat it until the coals are red-hot. Lightly grease the grill grates with oil to prevent sticking."
      },
      {
        "heading": "3. Skewer the Beef",
        "para": "Thread the marinated beef slices onto skewers, ensuring they are not tightly packed to allow even cooking."
      },
      {
        "heading": "4. Grill to Perfection",
        "para": "Place the skewers on the grill and cook for 10-15 minutes, turning occasionally. Baste the beef with cooking oil to keep it moist and enhance the flavor. Cook until the beef is tender and slightly charred."
      },
      {
        "heading": "5. Serve Hot",
        "para": "Once cooked, remove the skewers from the grill and slide the beef onto a serving plate. Garnish with sliced onions, lemon wedges, and fresh coriander leaves. Serve hot with naan or parathas and mint chutney."
      }
    ],
    "conclusion": {
      "heading": "Beef Bihari Boti - A BBQ Sensation",
      "para": "Beef Bihari Boti is a standout BBQ dish that embodies the rich culinary traditions of Pakistan. Its tender texture, smoky aroma, and bold spices make it a favorite at any gathering. Try this recipe to bring authentic flavors to your BBQ party and impress your guests with this timeless delicacy."
    }
  },
  // Dessert
  {
    "id": 26,
    "category": "Dessert",
    "image": "/images/gajarHalwa.jpg",
    "title": "Gajar ka Halwa - A Classic Winter Dessert",
    "date": "December 2, 2024",
    "main": {
      "heading": "Gajar ka Halwa - The Quintessential Winter Treat",
      "para": "Gajar ka Halwa, also known as carrot halwa, is a beloved traditional dessert in South Asia. Made with grated carrots, milk, sugar, and a touch of aromatic cardamom, it&apos;s a warm and comforting dish that&apos;s perfect for cold winter evenings. Often garnished with nuts and dried fruits, Gajar ka Halwa is a festive favorite during weddings and celebrations."
    },
    "sub": {
      "heading": "A Dessert Rooted in Tradition",
      "para": "Originating from Mughal kitchens, Gajar ka Halwa has stood the test of time and continues to be a staple in Pakistani and Indian households. Its rich flavors and satisfying texture make it a must-have dessert for any special occasion."
    },
    "description": {
      "heading": "What Makes Gajar ka Halwa Special?",
      "para": [
        "Rich and Creamy: Slow-cooked carrots blended with milk and sugar create a creamy consistency.",
        "Festive Vibes: A signature dessert for weddings, Eid, and winter gatherings.",
        "Healthy and Nutritious: Carrots provide essential vitamins, and nuts add a dose of healthy fats.",
        "Customizable: You can adjust the sweetness and garnishes to suit your taste."
      ]
    },
    "ingredients": [
      "Fresh carrots (grated): 1 kg",
      "Full-fat milk: 1 liter",
      "Sugar: ¾ cup (adjust to taste)",
      "Ghee: 4 tablespoons",
      "Cardamom powder: ½ teaspoon",
      "Almonds and pistachios (chopped): 2-3 tablespoons",
      "Raisins: 1 tablespoon (optional)",
      "Khoya (optional): ½ cup"
    ],
    "cookingProcess": [
      {
        "heading": "1. Grate the Carrots",
        "para": "Wash and peel the carrots. Grate them finely using a grater or food processor."
      },
      {
        "heading": "2. Cook the Carrots in Milk",
        "para": "In a large pan, add the grated carrots and milk. Cook on medium heat, stirring occasionally, until the milk reduces and the carrots are tender. This may take about 20-30 minutes."
      },
      {
        "heading": "3. Add Sugar and Ghee",
        "para": "Once the milk has evaporated, add sugar and ghee to the pan. Mix well and continue to cook until the mixture thickens and leaves the sides of the pan."
      },
      {
        "heading": "4. Enhance with Cardamom and Nuts",
        "para": "Add cardamom powder, chopped nuts, and raisins. Mix well and cook for another 5 minutes. If using khoya, add it at this stage for extra richness."
      },
      {
        "heading": "5. Serve Hot",
        "para": "Transfer the halwa to a serving dish and garnish with additional nuts. Serve warm and enjoy this delightful dessert."
      }
    ],
    "conclusion": {
      "heading": "Gajar ka Halwa - A Timeless Sweet Treat",
      "para": "Gajar ka Halwa is more than just a dessert; it&apos;s an emotion that brings families together during special moments. Its rich aroma and creamy texture make it a perfect way to end any meal. Try this recipe at home and relish the taste of this classic winter delight."
    }
  },
  {
    "id": 27,
    "category": "Dessert",
    "image": "/images/rasmalai.jpg",
    "title": "Rasmalai - The Creamy Delight",
    "date": "December 2, 2024",
    "main": {
      "heading": "Rasmalai - A Royal and Creamy Indulgence",
      "para": "Rasmalai is a rich and decadent dessert loved across South Asia. Made with soft paneer balls soaked in sweet, flavored milk, this dessert melts in your mouth and leaves a lingering taste of saffron and cardamom. It is often reserved for special occasions, adding an element of elegance to every celebration."
    },
    "sub": {
      "heading": "A Royal Dessert with a Timeless Appeal",
      "para": "Rasmalai, derived from the Bengali words ‘Ras&apos; (juice) and ‘Malai&apos; (cream), is a dessert that exudes luxury. Its delicate flavors and creamy texture make it an irresistible treat for anyone with a sweet tooth."
    },
    "description": {
      "heading": "Why Rasmalai is Special?",
      "para": [
        "Soft and Spongy Texture: The paneer balls are tender and perfectly absorb the flavored milk.",
        "Rich and Creamy: The milk is thickened and infused with cardamom, saffron, and pistachios for a royal taste.",
        "Perfect for Celebrations: A favorite for weddings, Eid, and festive dinners."
      ]
    },
    "ingredients": [
      "Full-fat milk: 1 liter (for paneer)",
      "Vinegar or lemon juice: 2 tablespoons",
      "Sugar: 1 cup (for syrup)",
      "Milk: 1 liter (for rabri)",
      "Condensed milk: ½ cup",
      "Cardamom powder: ½ teaspoon",
      "Saffron strands: a pinch",
      "Chopped pistachios and almonds: 2 tablespoons"
    ],
    "cookingProcess": [
      {
        "heading": "1. Make the Paneer",
        "para": "Boil the milk and curdle it using vinegar or lemon juice. Strain the curdled milk and hang it in a muslin cloth to remove excess water."
      },
      {
        "heading": "2. Shape the Rasmalai Balls",
        "para": "Knead the paneer until smooth and form small, flat balls."
      },
      {
        "heading": "3. Cook in Sugar Syrup",
        "para": "Boil water with sugar to make a syrup. Add the paneer balls and cook until they double in size."
      },
      {
        "heading": "4. Prepare the Rabri",
        "para": "In another pan, boil milk until it thickens. Add condensed milk, saffron, cardamom powder, and chopped nuts."
      },
      {
        "heading": "5. Assemble and Serve",
        "para": "Squeeze the cooked paneer balls to remove excess syrup and soak them in the prepared rabri. Chill before serving."
      }
    ],
    "conclusion": {
      "heading": "Rasmalai - A Creamy Dessert for Every Occasion",
      "para": "Rasmalai is a dessert that brings sophistication and joy to your dining table. Its delicate flavors and creamy richness make it a must-try for dessert lovers. Prepare this recipe at home and indulge in its royal taste!"
    }
  },
  {
    "id": 28,
    "category": "Dessert",
    "image": "/images/shahiTukry.jpg",
    "title": "Shahi Tukray - The Royal Bread Pudding",
    "date": "December 2, 2024",
    "main": {
      "heading": "Shahi Tukray - A Regal Dessert from the Mughal Era",
      "para": "Shahi Tukray, often referred to as the royal bread pudding, is a dessert rich in history and flavor. This Mughal-era treat combines crispy fried bread soaked in flavored milk with generous toppings of nuts and saffron, making it a decadent choice for special occasions."
    },
    "sub": {
      "heading": "A Dessert Fit for Royalty",
      "para": "Shahi Tukray, which translates to 'Royal Pieces,' is a dish that symbolizes luxury. Its creamy base and crispy texture offer a delightful contrast, making it a favorite at weddings and festive dinners."
    },
    "description": {
      "heading": "What Makes Shahi Tukray Unique?",
      "para": [
        "Rich and Creamy: The milk is thickened with sugar, saffron, and cardamom to create a luscious rabri.",
        "Crispy and Flavorful: The bread is fried to golden perfection before soaking up the rich milk.",
        "Perfect for Celebrations: A must-have dessert for Eid, weddings, and Diwali."
      ]
    },
    "ingredients": [
      "White bread slices: 6-8",
      "Milk: 1 liter",
      "Sugar: ¾ cup",
      "Cardamom powder: ½ teaspoon",
      "Saffron strands: a pinch",
      "Ghee: for frying",
      "Chopped almonds and pistachios: 2-3 tablespoons"
    ],
    "cookingProcess": [
      {
        "heading": "1. Fry the Bread",
        "para": "Cut the bread slices into triangles and fry them in ghee until golden and crispy. Set aside."
      },
      {
        "heading": "2. Prepare the Milk Mixture",
        "para": "In a pan, boil milk and reduce it to half. Add sugar, cardamom powder, and saffron, stirring until dissolved."
      },
      {
        "heading": "3. Assemble the Shahi Tukray",
        "para": "Arrange the fried bread slices in a dish. Pour the prepared milk mixture over the bread, ensuring every slice is soaked."
      },
      {
        "heading": "4. Garnish and Serve",
        "para": "Top with chopped nuts and refrigerate for an hour. Serve chilled and enjoy this royal treat."
      }
    ],
    "conclusion": {
      "heading": "Shahi Tukray - A Luxurious Dessert to Relish",
      "para": "Shahi Tukray is a timeless dessert that combines tradition and indulgence. Its unique flavors and rich texture make it a standout dish for any festive occasion. Try this recipe and experience the royal taste of the Mughal kitchens!"
    }
  },
  {
    "id": 29,
    "category": "Dessert",
    "image": "/images/rabriKheer.jpg",
    "title": "Rabri Kheer - A Luxurious Fusion Dessert",
    "date": "December 2, 2024",
    "main": {
      "heading": "Rabri Kheer - The Perfect Blend of Rabri and Kheer",
      "para": "Rabri Kheer combines two classic South Asian desserts, rabri and kheer, into one luscious and indulgent treat. With the creamy richness of rabri and the silky texture of kheer, this dessert is perfect for special occasions and festive gatherings."
    },
    "sub": {
      "heading": "A Fusion of Flavors and Tradition",
      "para": "Rabri Kheer is a dessert that brings together the best of both worlds. The creamy rabri enhances the flavor of the traditional kheer, creating a luxurious dish that is sure to impress."
    },
    "description": {
      "heading": "Why Rabri Kheer Stands Out",
      "para": [
        "Rich and Creamy Texture: The addition of rabri makes the kheer extra velvety and indulgent.",
        "Perfect for Celebrations: This fusion dessert is a highlight for weddings, Eid, and other festivities.",
        "Flavored with Tradition: Cardamom, saffron, and nuts add a royal touch to this dish."
      ]
    },
    "ingredients": [
      "Full-fat milk: 1.5 liters",
      "Rice: ½ cup (soaked)",
      "Sugar: ¾ cup",
      "Cardamom powder: ½ teaspoon",
      "Saffron strands: a pinch",
      "Rabri: 1 cup",
      "Chopped almonds, pistachios, and cashews: 2-3 tablespoons"
    ],
    "cookingProcess": [
      {
        "heading": "1. Prepare the Kheer Base",
        "para": "Boil the milk in a heavy-bottomed pan. Add soaked rice and cook on low heat, stirring frequently, until the rice is soft and the milk thickens."
      },
      {
        "heading": "2. Add Sugar and Flavorings",
        "para": "Stir in the sugar, cardamom powder, and saffron. Cook for 5-7 minutes, ensuring the sugar dissolves completely."
      },
      {
        "heading": "3. Incorporate the Rabri",
        "para": "Add the prepared rabri to the kheer and mix well. Cook for another 5 minutes, allowing the flavors to blend."
      },
      {
        "heading": "4. Garnish and Serve",
        "para": "Top the Rabri Kheer with chopped nuts and refrigerate for an hour. Serve chilled and enjoy this luxurious dessert."
      }
    ],
    "conclusion": {
      "heading": "Rabri Kheer - A Fusion Dessert to Remember",
      "para": "Rabri Kheer is a delightful fusion of tradition and innovation. Its creamy richness and flavorful ingredients make it a standout choice for any occasion. Try this recipe and indulge in a dessert that&apos;s truly special!"
    }
  },
  {
    "id": 30,
    "category": "Dessert",
    "image": "/images/brownie.jpg",
    "title": "Brownie - The Ultimate Chocolate Delight",
    "date": "December 2, 2024",
    "main": {
      "heading": "Brownie - A Decadent Chocolate Treat",
      "para": "Brownies are a classic dessert loved by chocolate enthusiasts around the world. With their fudgy center and crisp edges, brownies strike the perfect balance between a cake and a cookie. This irresistible treat is perfect for any occasion or as a quick indulgence."
    },
    "sub": {
      "heading": "A Sweet Treat for Every Occasion",
      "para": "Whether served plain, topped with ice cream, or drizzled with chocolate sauce, brownies are a versatile dessert that never fails to impress."
    },
    "description": {
      "heading": "Why Brownies Are Everyone&apos;s Favorite",
      "para": [
        "Rich and Chocolatey: Packed with cocoa and chocolate chips, brownies are a chocolate lover&apos;s dream.",
        "Customizable: Add nuts, caramel, or marshmallows to create your favorite version.",
        "Easy to Make: With simple ingredients and minimal effort, you can whip up a batch in no time."
      ]
    },
    "ingredients": [
      "Unsalted butter: ½ cup",
      "Dark chocolate: 100 grams (chopped)",
      "Cocoa powder: 2 tablespoons",
      "Sugar: 1 cup",
      "Eggs: 2",
      "Vanilla extract: 1 teaspoon",
      "All-purpose flour: ½ cup",
      "Salt: a pinch",
      "Chocolate chips or nuts (optional): ½ cup"
    ],
    "cookingProcess": [
      {
        "heading": "1. Melt Butter and Chocolate",
        "para": "In a saucepan, melt the butter and chopped dark chocolate over low heat. Stir until smooth, then let it cool slightly."
      },
      {
        "heading": "2. Mix Wet Ingredients",
        "para": "Whisk the sugar, eggs, and vanilla extract into the melted chocolate mixture until well combined."
      },
      {
        "heading": "3. Combine Dry Ingredients",
        "para": "In a separate bowl, sift together the flour, cocoa powder, and salt. Gradually fold this into the wet mixture."
      },
      {
        "heading": "4. Add Toppings and Bake",
        "para": "Mix in chocolate chips or nuts if desired. Pour the batter into a greased baking dish and bake at 175°C (350°F) for 20-25 minutes."
      },
      {
        "heading": "5. Cool and Serve",
        "para": "Let the brownies cool before slicing. Serve as is or with a scoop of ice cream for added indulgence."
      }
    ],
    "conclusion": {
      "heading": "Brownies - A Dessert That Never Disappoints",
      "para": "Brownies are a timeless dessert that brings joy to chocolate lovers everywhere. Their rich flavor and fudgy texture make them an all-time favorite. Bake a batch today and treat yourself to this delicious chocolate delight!"
    }
  },

  // Fast Food

  {
    "id": 31,
    "category": "Fast Food",
    "image": "/images/nuggets.jpg",
    "title": "Nuggets - Crispy Bites of Happiness",
    "date": "December 2, 2024",
    "main": {
      "heading": "Nuggets - The Ultimate Snack for All Ages",
      "para": "Nuggets are a universally loved snack known for their crispy coating and tender, juicy interior. Perfect as a party appetizer, lunchbox addition, or movie-night treat, nuggets are versatile and delicious for any occasion."
    },
    "sub": {
      "heading": "A Perfect Blend of Crunch and Flavor",
      "para": "Nuggets deliver a satisfying crunch on the outside and a burst of flavor inside. They are easy to make, easy to eat, and guaranteed to please the crowd."
    },
    "description": {
      "heading": "Why Nuggets Are a Favorite Fast Food",
      "para": [
        "Quick and Convenient: Nuggets are easy to prepare and perfect for on-the-go meals.",
        "Customizable Coating: Experiment with breadcrumbs, panko, or even crushed chips for a unique twist.",
        "Great for Sharing: Nuggets are bite-sized and perfect for sharing with friends and family."
      ]
    },
    "ingredients": [
      "Boneless chicken: 500 grams (cut into bite-sized pieces)",
      "Salt: 1 teaspoon",
      "Black pepper: ½ teaspoon",
      "Garlic powder: ½ teaspoon",
      "Eggs: 2 (beaten)",
      "Flour: ½ cup",
      "Breadcrumbs: 1 cup",
      "Oil: for frying"
    ],
    "cookingProcess": [
      {
        "heading": "1. Season the Chicken",
        "para": "Marinate the chicken pieces with salt, black pepper, and garlic powder. Let it rest for 15 minutes."
      },
      {
        "heading": "2. Prepare the Coating",
        "para": "Set up a coating station with separate bowls for flour, beaten eggs, and breadcrumbs."
      },
      {
        "heading": "3. Coat the Chicken",
        "para": "Dip each chicken piece into the flour, then the egg, and finally coat it with breadcrumbs. Repeat for all pieces."
      },
      {
        "heading": "4. Fry the Nuggets",
        "para": "Heat oil in a pan and fry the coated chicken pieces on medium heat until golden brown and crispy."
      },
      {
        "heading": "5. Serve and Enjoy",
        "para": "Drain the nuggets on paper towels and serve them hot with your favorite dipping sauce."
      }
    ],
    "conclusion": {
      "heading": "Nuggets - A Snack Everyone Loves",
      "para": "Nuggets are the perfect combination of simplicity and flavor. Whether for a quick snack or a party platter, nuggets never fail to impress. Try this recipe and enjoy crispy bites of happiness!"
    }
  },

  {
    "id": 32,
    "category": "Fast Food",
    "image": "/images/loadedFries.jpg",
    "title": "Loaded Fries - The Ultimate Comfort Food",
    "date": "December 2, 2024",
    "main": {
      "heading": "Loaded Fries - A Perfect Combination of Flavors",
      "para": "Loaded fries are a fast-food favorite that takes regular fries to the next level. Topped with cheese, sauces, and your favorite toppings, loaded fries are indulgent, flavorful, and perfect for any occasion."
    },
    "sub": {
      "heading": "A Treat for Your Taste Buds",
      "para": "Whether you prefer spicy, cheesy, or tangy flavors, loaded fries can be customized to suit your taste and mood."
    },
    "description": {
      "heading": "Why Loaded Fries Are So Popular",
      "para": [
        "Cheesy Goodness: Melted cheese adds a rich and creamy layer to the crispy fries.",
        "Customizable Toppings: Add jalapeños, chicken, or veggies to make them your own.",
        "Perfect for Sharing: Loaded fries are great for enjoying with friends or family."
      ]
    },
    "ingredients": [
      "French fries: 500 grams (frozen or homemade)",
      "Cheddar cheese: 1 cup (shredded)",
      "Chicken (cooked and shredded): 1 cup",
      "Jalapeños: ¼ cup (sliced)",
      "Sour cream: ½ cup",
      "Chili sauce: 2 tablespoons",
      "Salt and pepper: to taste"
    ],
    "cookingProcess": [
      {
        "heading": "1. Prepare the Fries",
        "para": "Cook the fries according to the package instructions or fry fresh potatoes until golden and crispy."
      },
      {
        "heading": "2. Add the Cheese",
        "para": "Spread the fries on a baking tray, sprinkle shredded cheddar cheese on top, and bake until the cheese melts."
      },
      {
        "heading": "3. Add Toppings",
        "para": "Top the cheesy fries with cooked chicken, jalapeños, and chili sauce. Add salt and pepper to taste."
      },
      {
        "heading": "4. Garnish and Serve",
        "para": "Drizzle sour cream over the loaded fries and serve them hot."
      }
    ],
    "conclusion": {
      "heading": "Loaded Fries - A Crowd-Pleasing Snack",
      "para": "Loaded fries are the ultimate comfort food for gatherings or solo indulgence. Customize your toppings and enjoy a plate of these irresistible fries today!"
    }
  },
  {
    "id": 33,
    "category": "Fast Food",
    "image": "/images/doubleCheesePizza.jpg",
    "title": "Double Cheese Pizza - A Cheesy Delight",
    "date": "December 2, 2024",
    "main": {
      "heading": "Double Cheese Pizza - Every Cheese Lover&apos;s Dream",
      "para": "Double cheese pizza is a classic fast food that never fails to satisfy. With a crispy crust, flavorful tomato sauce, and an abundance of melted cheese, it&apos;s the ultimate indulgence for pizza enthusiasts."
    },
    "sub": {
      "heading": "Twice the Cheese, Twice the Fun",
      "para": "This pizza doubles the cheesy goodness, making every bite rich, creamy, and absolutely delightful."
    },
    "description": {
      "heading": "Why Double Cheese Pizza is a Favorite",
      "para": [
        "Loaded with Cheese: A generous layer of mozzarella and cheddar ensures every bite is heavenly.",
        "Perfect Crust: A soft, crispy base complements the cheesy topping.",
        "Customizable: Add toppings like olives, mushrooms, or chicken to make it your own."
      ]
    },
    "ingredients": [
      "Pizza dough: 1 (store-bought or homemade)",
      "Tomato sauce: ½ cup",
      "Mozzarella cheese: 1 cup (shredded)",
      "Cheddar cheese: 1 cup (shredded)",
      "Olive oil: 1 tablespoon",
      "Oregano: 1 teaspoon",
      "Chili flakes: ½ teaspoon (optional)"
    ],
    "cookingProcess": [
      {
        "heading": "1. Prepare the Pizza Base",
        "para": "Roll out the pizza dough on a floured surface and transfer it to a greased baking tray."
      },
      {
        "heading": "2. Add the Sauce",
        "para": "Spread tomato sauce evenly over the pizza base, leaving a small border."
      },
      {
        "heading": "3. Add the Cheese",
        "para": "Generously sprinkle mozzarella and cheddar cheese over the sauce."
      },
      {
        "heading": "4. Bake the Pizza",
        "para": "Bake the pizza in a preheated oven at 220°C (425°F) for 12-15 minutes or until the crust is golden and the cheese is melted."
      },
      {
        "heading": "5. Garnish and Serve",
        "para": "Drizzle olive oil and sprinkle oregano or chili flakes on top before serving."
      }
    ],
    "conclusion": {
      "heading": "Double Cheese Pizza - A Cheesy Masterpiece",
      "para": "Double cheese pizza is a timeless dish that everyone loves. Its gooey, cheesy topping and perfect crust make it an irresistible treat for any occasion. Bake one today and enjoy the cheesy goodness!"
    }
  },
  {
    "id": 34,
    "category": "Fast Food",
    "image": "/images/burger.jpg",
    "title": "Burger - The King of Fast Food",
    "date": "December 2, 2024",
    "main": {
      "heading": "Burger - A Classic Comfort Food",
      "para": "The burger is a beloved fast food icon, known for its juicy patty, fresh veggies, and flavorful sauces, all sandwiched between soft buns. It&apos;s a meal that never goes out of style and satisfies cravings like no other."
    },
    "sub": {
      "heading": "A Perfect Meal in Every Bite",
      "para": "Burgers are a complete meal packed with protein, veggies, and carbs, making them a go-to choice for a quick and satisfying meal."
    },
    "description": {
      "heading": "Why Burgers Are a Global Favorite",
      "para": [
        "Endless Customization: From beef to chicken and veggie patties, there&apos;s a burger for everyone.",
        "Convenient and Portable: Perfect for on-the-go meals or casual dining.",
        "Deliciously Balanced: A harmony of textures and flavors in every bite."
      ]
    },
    "ingredients": [
      "Burger buns: 2",
      "Beef or chicken patty: 2 (cooked)",
      "Lettuce: 2 leaves",
      "Tomato: 1 (sliced)",
      "Cheese slice: 2",
      "Pickles: 4 slices",
      "Mayonnaise: 2 tablespoons",
      "Ketchup: 2 tablespoons"
    ],
    "cookingProcess": [
      {
        "heading": "1. Prepare the Ingredients",
        "para": "Slice the tomato, prepare the lettuce leaves, and have all ingredients ready."
      },
      {
        "heading": "2. Toast the Buns",
        "para": "Lightly toast the burger buns on a hot skillet or grill."
      },
      {
        "heading": "3. Assemble the Burger",
        "para": "Spread mayonnaise and ketchup on the buns. Add the lettuce, patty, cheese, tomato slices, and pickles."
      },
      {
        "heading": "4. Serve and Enjoy",
        "para": "Cover with the top bun, secure with a toothpick if needed, and serve with fries or a drink."
      }
    ],
    "conclusion": {
      "heading": "Burgers - A Timeless Fast Food Favorite",
      "para": "Whether classic or gourmet, burgers are a satisfying meal loved by people of all ages. Try this easy recipe and enjoy a delicious homemade burger today!"
    }
  },
  {
    "id": 35,
    "category": "Fast Food",
    "image": "/images/broast.jpg",
    "title": "Broast - Crispy, Juicy Perfection",
    "date": "December 2, 2024",
    "main": {
      "heading": "Broast - A Fried Chicken Delight",
      "para": "Broast is a popular fast food item, combining the crispy texture of fried chicken with juicy, flavorful meat inside. Perfect for family meals or casual gatherings, broast is loved for its crunch and taste."
    },
    "sub": {
      "heading": "A Crispy Treat You Can&apos;t Resist",
      "para": "Broast is fried to golden perfection, delivering a satisfying crunch that pairs perfectly with its juicy interior."
    },
    "description": {
      "heading": "What Makes Broast Special",
      "para": [
        "Pressure-Fried Perfection: Retains juices while achieving a crisp exterior.",
        "Perfectly Seasoned: A blend of spices enhances every bite.",
        "Great for Sharing: Broast is perfect for family dinners or parties."
      ]
    },
    "ingredients": [
      "Chicken: 1 whole (cut into pieces)",
      "Salt: 1 teaspoon",
      "Black pepper: ½ teaspoon",
      "Garlic powder: ½ teaspoon",
      "Buttermilk: 2 cups",
      "Flour: 1 cup",
      "Cornstarch: ½ cup",
      "Paprika: 1 teaspoon",
      "Oil: for frying"
    ],
    "cookingProcess": [
      {
        "heading": "1. Marinate the Chicken",
        "para": "Mix chicken with salt, pepper, garlic powder, and buttermilk. Marinate for at least 2 hours or overnight."
      },
      {
        "heading": "2. Prepare the Coating",
        "para": "Combine flour, cornstarch, and paprika in a bowl for the coating."
      },
      {
        "heading": "3. Coat the Chicken",
        "para": "Remove chicken pieces from the marinade, let excess drip off, and coat them in the flour mixture."
      },
      {
        "heading": "4. Fry the Chicken",
        "para": "Heat oil in a deep fryer or pot. Fry chicken pieces until golden and cooked through, about 12-15 minutes."
      },
      {
        "heading": "5. Serve Hot",
        "para": "Drain on paper towels and serve hot with coleslaw and dipping sauces."
      }
    ],
    "conclusion": {
      "heading": "Broast - A Crowd-Pleasing Classic",
      "para": "Broast is the perfect combination of crispy and juicy. Enjoy this easy homemade recipe and bring the flavors of your favorite fast food right to your table!"
    }
  },
];

export async function GET() {
  try {
    return NextResponse.json(blogs, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: `Failed to fetch blogs data` },
      { status: 500 }
    );
  }
}
