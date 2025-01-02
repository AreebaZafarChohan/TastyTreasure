import { NextResponse } from "next/server";

const blogs = [  
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
      "heading": "The Club Sandwich - A Snack You Can't Resist",
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
      "para": "Dahi Puri is a popular Indian snack that combines crispy puris filled with chilled yogurt and topped with a variety of tangy and spicy chutneys. This delicious dish is a perfect balance of flavors - crunchy, creamy, sweet, sour, and spicy. Dahi Puri is a favorite for street food lovers and can be enjoyed as an appetizer or a light snack."
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
        "Steamed Perfection: The steamed momo dough gives them a soft, pillowy texture that's a joy to bite into.",
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
      "para": "Bihari Boti is not just a BBQ item; it's a symbol of authentic South Asian flavors. Its unique marination and grilling techniques set it apart from other BBQ dishes."
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
      "para": "Gajar ka Halwa, also known as carrot halwa, is a beloved traditional dessert in South Asia. Made with grated carrots, milk, sugar, and a touch of aromatic cardamom, it's a warm and comforting dish that's perfect for cold winter evenings. Often garnished with nuts and dried fruits, Gajar ka Halwa is a festive favorite during weddings and celebrations."
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
      "para": "Gajar ka Halwa is more than just a dessert; it's an emotion that brings families together during special moments. Its rich aroma and creamy texture make it a perfect way to end any meal. Try this recipe at home and relish the taste of this classic winter delight."
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
      "para": "Rasmalai, derived from the Bengali words ‘Ras' (juice) and ‘Malai' (cream), is a dessert that exudes luxury. Its delicate flavors and creamy texture make it an irresistible treat for anyone with a sweet tooth."
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
      "para": "Rabri Kheer is a delightful fusion of tradition and innovation. Its creamy richness and flavorful ingredients make it a standout choice for any occasion. Try this recipe and indulge in a dessert that's truly special!"
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
      "heading": "Why Brownies Are Everyone's Favorite",
      "para": [
        "Rich and Chocolatey: Packed with cocoa and chocolate chips, brownies are a chocolate lover's dream.",
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
      "heading": "Double Cheese Pizza - Every Cheese Lover's Dream",
      "para": "Double cheese pizza is a classic fast food that never fails to satisfy. With a crispy crust, flavorful tomato sauce, and an abundance of melted cheese, it's the ultimate indulgence for pizza enthusiasts."
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
      "para": "The burger is a beloved fast food icon, known for its juicy patty, fresh veggies, and flavorful sauces, all sandwiched between soft buns. It's a meal that never goes out of style and satisfies cravings like no other."
    },
    "sub": {
      "heading": "A Perfect Meal in Every Bite",
      "para": "Burgers are a complete meal packed with protein, veggies, and carbs, making them a go-to choice for a quick and satisfying meal."
    },
    "description": {
      "heading": "Why Burgers Are a Global Favorite",
      "para": [
        "Endless Customization: From beef to chicken and veggie patties, there's a burger for everyone.",
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
      "heading": "A Crispy Treat You Can't Resist",
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
    return NextResponse.json(blogs, { status: 200 });
}
