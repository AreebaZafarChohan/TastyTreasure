import { BlogDataProps } from "@/types/componentTypes";
import { NextResponse } from "next/server";

const blogs: BlogDataProps[] = [
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
    image: "/images/ChickenKarahi.jpg",
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
      para: `Chicken Karahi is not just a dish; it&APOS;s an experience that defines the essence of Pakistani hospitality and love for food. Its simplicity and unbeatable flavor make it a dish you&APOS;ll want to cook over and over again.`,
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
        para: `For frying: Deep fry the marinated chicken until it’s golden brown and cooked through (about 15-20 minutes on medium heat).

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
