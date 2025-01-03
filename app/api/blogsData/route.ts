import { NextResponse } from "next/server";

const blogs = [  
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
