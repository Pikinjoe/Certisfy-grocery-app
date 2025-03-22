const products = [
    // Beverages (20 items)
    { 
        id: 1, 
        category: "Beverages", 
        name: "PremiumCoffee", 
        price: 12.95, 
        description: "Indulge in this bold, full-bodied coffee featuring a rich, smoky finish that lingers on the palate, crafted from the finest hand-picked beans roasted to perfection.", 
        rating: 4.8, 
        size: "12 oz", 
        image: "PremiumCoffee" 
    },
    
    { 
        id: 2, 
        category: "Beverages", 
        name: "OrganicGreenTea", 
        price: 8.75, 
        description: "Savor the delicate, earthy essence of this organic green tea, harvested from pristine leaves grown in harmony with nature, offering a light yet rejuvenating taste.", 
        rating: 4.5, 
        size: "20 bags", 
        image: "OrganicGreenTea" 
    },
    
    { 
        id: 3, 
        category: "Beverages", 
        name: "SparklingLemonade", 
        price: 2.85, 
        description: "Refresh your senses with this zesty sparkling lemonade, where the vibrant tang of fresh lemons meets a subtle sweetness, all wrapped in effervescent bubbles.", 
        rating: 4.2, 
        size: "16 oz", 
        image: "SparklingLemonade" 
    },
    
    { 
        id: 4, 
        category: "Beverages", 
        name: "ChamomileHerbalTea", 
        price: 7.25, 
        description: "Unwind with this soothing chamomile herbal tea, infused with gentle floral undertones that create a calming, aromatic experience perfect for any time of day.", 
        rating: 4.6, 
        size: "15 bags", 
        image: "ChamomileHerbalTea" 
    },
    
    { 
        id: 5, 
        category: "Beverages", 
        name: "ColdBrewCoffee", 
        price: 4.65, 
        description: "Experience the velvety smoothness of this cold-brewed coffee, meticulously steeped for hours to unlock a deep, rich flavor profile with minimal bitterness.", 
        rating: 4.7, 
        size: "12 oz", 
        image: "ColdBrewCoffee" 
    },
    
    { 
        id: 6, 
        category: "Beverages", 
        name: "PeppermintTea", 
        price: 6.85, 
        description: "Awaken your senses with this invigorating peppermint tea, delivering a cool, crisp burst of minty freshness that’s both uplifting and delightfully soothing.", 
        rating: 4.4, 
        size: "20 bags", 
        image: "PeppermintTea" 
    },
    
    { 
        id: 7, 
        category: "Beverages", 
        name: "GingerAle", 
        price: 2.55, 
        description: "Enjoy the crisp, effervescent bite of this ginger ale, where a fiery ginger kick dances with subtle sweetness for a perfectly balanced, refreshing soda.", 
        rating: 4.1, 
        size: "16 oz", 
        image: "GingerAle" 
    },
    
    { 
        id: 8, 
        category: "Beverages", 
        name: "EspressoBlend", 
        price: 14.85, 
        description: "Dive into the intense, dark-roasted richness of this espresso blend, expertly crafted to deliver a robust, velvety shot with a lingering, bittersweet finish.", 
        rating: 4.9, 
        size: "10 oz", 
        image: "EspressoBlend" 
    },
    
    { 
        id: 9, 
        category: "Beverages", 
        name: "OrangeJuice", 
        price: 3.95, 
        description: "Brighten your day with this vibrant orange juice, squeezed from sun-ripened oranges to capture a tangy, refreshing citrus burst in every sip.", 
        rating: 4.3, 
        size: "32 oz", 
        image: "OrangeJuice" 
    },
    
    { 
        id: 10, 
        category: "Beverages", 
        name: "BlackTeaDarjeeling", 
        price: 9.35, 
        description: "Relish the exquisite fragrance of this Darjeeling black tea, sourced from the misty hills, offering a sophisticated, nuanced flavor with muscatel notes.", 
        rating: 4.6, 
        size: "18 bags", 
        image: "BlackTeaDarjeeling" 
    },
    
    { 
        id: 11, 
        category: "Beverages", 
        name: "RootBeer", 
        price: 2.65, 
        description: "Take a sip of nostalgia with this creamy root beer, blending a smooth vanilla twist with classic sassafras for a frothy, satisfying treat.", 
        rating: 4.2, 
        size: "12 oz", 
        image: "RootBeer" 
    },
    
    { 
        id: 12, 
        category: "Beverages", 
        name: "DecafCoffee", 
        price: 11.75, 
        description: "Enjoy the gentle, comforting warmth of this decaffeinated coffee, crafted to retain all the robust flavor of premium beans without the jolt.", 
        rating: 4.5, 
        size: "12 oz", 
        image: "DecafCoffee" 
    },
    
    { 
        id: 13, 
        category: "Beverages", 
        name: "CoconutWater", 
        price: 3.45, 
        description: "Hydrate naturally with this pure coconut water, straight from tender coconuts, offering a crisp, subtly sweet taste with tropical undertones.", 
        rating: 4.3, 
        size: "16 oz", 
        image: "CoconutWater" 
    },
    
    { 
        id: 14, 
        category: "Beverages", 
        name: "HibiscusTea", 
        price: 7.95, 
        description: "Delight in the vibrant ruby hue and tart, berry-like flavor of this hibiscus tea, a floral infusion that’s as refreshing as it is striking.", 
        rating: 4.4, 
        size: "20 bags", 
        image: "HibiscusTea" 
    },
    
    { 
        id: 15, 
        category: "Beverages", 
        name: "AppleCider", 
        price: 4.35, 
        description: "Warm your soul with this spiced apple cider, pressed from crisp, fresh apples and simmered with cinnamon and cloves for a cozy, aromatic drink.", 
        rating: 4.6, 
        size: "24 oz", 
        image: "AppleCider" 
    },
    
    { 
        id: 16, 
        category: "Beverages", 
        name: "MatchaGreenTea", 
        price: 15.75, 
        description: "Immerse yourself in the vivid, earthy richness of this Japanese matcha green tea, stone-ground into a fine powder for an authentic, energizing brew.", 
        rating: 4.8, 
        size: "2 oz", 
        image: "MatchaGreenTea" 
    },
    
    { 
        id: 17, 
        category: "Beverages", 
        name: "Cola", 
        price: 2.35, 
        description: "Satisfy your cravings with this bubbly cola, featuring a classic caramel undertone and a fizzy finish that’s timelessly refreshing.", 
        rating: 4.0, 
        size: "12 oz", 
        image: "Cola" 
    },
    
    { 
        id: 18, 
        category: "Beverages", 
        name: "RooibosTea", 
        price: 8.25, 
        description: "Discover the nutty, caffeine-free warmth of this South African rooibos tea, with its smooth, red-hued richness and naturally sweet finish.", 
        rating: 4.5, 
        size: "20 bags", 
        image: "RooibosTea" 
    },
    
    { 
        id: 19, 
        category: "Beverages", 
        name: "PineappleJuice", 
        price: 3.85, 
        description: "Transport yourself to the tropics with this sweet, golden pineapple juice, pressed from ripe, succulent fruit for a burst of sunny flavor.", 
        rating: 4.3, 
        size: "32 oz", 
        image: "PineappleJuice" 
    },
    
    { 
        id: 20, 
        category: "Beverages", 
        name: "HazelnutCoffee", 
        price: 13.65, 
        description: "Awaken your senses with this roasted hazelnut coffee, where the nutty aroma intertwines with bold coffee notes for a luxurious, aromatic escape.", 
        rating: 4.7, 
        size: "12 oz", 
        image: "HazelnutCoffee" 
    },
    
    // Confectioneries (20 items)
    { 
        id: 21, 
        category: "Confectioneries", 
        name: "DarkChocolateTruffles", 
        price: 15.85, 
        description: "Indulge in the velvety decadence of these dark chocolate truffles, where deep, bittersweet cocoa melts into a creamy center, dusted with a delicate cocoa powder finish.", 
        rating: 4.9, 
        size: "8 oz", 
        image: "DarkChocolateTruffles" 
    },
    
    { 
        id: 22, 
        category: "Confectioneries", 
        name: "GummyBears", 
        price: 4.75, 
        description: "Savor the playful chewiness of these gummy bears, bursting with a rainbow of assorted fruit flavors that bring a nostalgic sweetness to every bite.", 
        rating: 4.2, 
        size: "12 oz", 
        image: "GummyBears" 
    },
    
    { 
        id: 23, 
        category: "Confectioneries", 
        name: "CaramelToffees", 
        price: 6.95, 
        description: "Treat yourself to the rich, buttery goodness of these caramel toffees, where golden caramel is slow-cooked to perfection for a satisfyingly sticky delight.", 
        rating: 4.4, 
        size: "10 oz", 
        image: "CaramelToffees" 
    },
    
    { 
        id: 24, 
        category: "Confectioneries", 
        name: "MilkChocolateBar", 
        price: 3.55, 
        description: "Unwrap the creamy, melt-in-your-mouth bliss of this milk chocolate bar, crafted from pure cocoa and silky milk for a timeless sweet escape.", 
        rating: 4.3, 
        size: "4 oz", 
        image: "MilkChocolateBar" 
    },
    
    { 
        id: 25, 
        category: "Confectioneries", 
        name: "PeppermintPatties", 
        price: 5.85, 
        description: "Cool your palate with these peppermint patties, featuring a refreshing mint center enveloped in a smooth layer of dark chocolate decadence.", 
        rating: 4.5, 
        size: "8 oz", 
        image: "PeppermintPatties" 
    },
    
    { 
        id: 26, 
        category: "Confectioneries", 
        name: "JellyBeans", 
        price: 4.45, 
        description: "Pop these tiny jelly beans for a burst of fruity joy, each one packed with vibrant flavors that dance across your tongue in a delightful medley.", 
        rating: 4.1, 
        size: "10 oz", 
        image: "JellyBeans" 
    },
    
    { 
        id: 27, 
        category: "Confectioneries", 
        name: "PeanutBrittle", 
        price: 7.35, 
        description: "Crunch into this crisp peanut brittle, where roasted peanuts are locked in a golden, sugary shell that shatters with every satisfying bite.", 
        rating: 4.4, 
        size: "12 oz", 
        image: "PeanutBrittle" 
    },
    
    { 
        id: 28, 
        category: "Confectioneries", 
        name: "WhiteChocolateDrops", 
        price: 6.65, 
        description: "Melt away with these sweet white chocolate drops, offering a creamy, vanilla-kissed bliss that’s perfect for snacking or baking indulgence.", 
        rating: 4.3, 
        size: "8 oz", 
        image: "WhiteChocolateDrops" 
    },
    
    { 
        id: 29, 
        category: "Confectioneries", 
        name: "LicoriceTwists", 
        price: 3.95, 
        description: "Twist into the bold, chewy intensity of these black licorice twists, delivering a distinctive anise flavor that’s both nostalgic and adventurous.", 
        rating: 4.0, 
        size: "10 oz", 
        image: "LicoriceTwists" 
    },
    
    { 
        id: 30, 
        category: "Confectioneries", 
        name: "ChocolateAlmonds", 
        price: 9.85, 
        description: "Relish the perfect pairing of crunchy roasted almonds draped in a luscious layer of milk chocolate, creating a harmonious balance of nutty and sweet.", 
        rating: 4.6, 
        size: "10 oz", 
        image: "ChocolateAlmonds" 
    },
    
    { 
        id: 31, 
        category: "Confectioneries", 
        name: "SourGummies", 
        price: 4.55, 
        description: "Pucker up for these sour gummies, where a zesty, tangy coating gives way to a chewy core bursting with bold, mouthwatering fruit flavors.", 
        rating: 4.2, 
        size: "12 oz", 
        image: "SourGummies" 
    },
    
    { 
        id: 32, 
        category: "Confectioneries", 
        name: "FudgeSquares", 
        price: 8.35, 
        description: "Sink your teeth into these dense, velvety fudge squares, swirled with rich chocolate for a luxurious treat that’s both indulgent and comforting.", 
        rating: 4.5, 
        size: "8 oz", 
        image: "FudgeSquares" 
    },
    
    { 
        id: 33, 
        category: "Confectioneries", 
        name: "Marshmallows", 
        price: 3.25, 
        description: "Float away on fluffy pillows of sugary delight with these marshmallows, perfect for roasting, topping, or simply enjoying straight from the bag.", 
        rating: 4.1, 
        size: "16 oz", 
        image: "Marshmallows" 
    },
    
    { 
        id: 34, 
        category: "Confectioneries", 
        name: "CaramelPopcorn", 
        price: 5.45, 
        description: "Crunch through this caramel popcorn, where airy kernels are generously drizzled with sticky, golden caramel for a sweet and salty symphony.", 
        rating: 4.3, 
        size: "10 oz", 
        image: "CaramelPopcorn" 
    },
    
    { 
        id: 35, 
        category: "Confectioneries", 
        name: "ToffeeCrunch", 
        price: 7.75, 
        description: "Snap into this hard toffee crunch, a brittle masterpiece of buttery sweetness that delivers a satisfying crackle with every delicious bite.", 
        rating: 4.4, 
        size: "8 oz", 
        image: "ToffeeCrunch" 
    },
    
    { 
        id: 36, 
        category: "Confectioneries", 
        name: "FruitChews", 
        price: 4.15, 
        description: "Chew into these soft fruit chews, infused with real fruit essence for a juicy, long-lasting burst of natural sweetness in every piece.", 
        rating: 4.2, 
        size: "12 oz", 
        image: "FruitChews" 
    },
    
    { 
        id: 37, 
        category: "Confectioneries", 
        name: "HazelnutPralines", 
        price: 10.95, 
        description: "Indulge in the elegant sophistication of these hazelnut pralines, where smooth, creamy hazelnut filling meets a delicate chocolate shell.", 
        rating: 4.7, 
        size: "6 oz", 
        image: "HazelnutPralines" 
    },
    
    { 
        id: 38, 
        category: "Confectioneries", 
        name: "CandyCanes", 
        price: 2.95, 
        description: "Celebrate with these festive peppermint candy canes, offering a cool, refreshing twist of sweetness in a classic holiday-inspired shape.", 
        rating: 4.0, 
        size: "12 pack", 
        image: "CandyCanes" 
    },
    
    { 
        id: 39, 
        category: "Confectioneries", 
        name: "ChocolateCaramels", 
        price: 6.45, 
        description: "Unwrap the silky richness of these chocolate caramels, where gooey caramel centers are enrobed in a luscious layer of smooth milk chocolate.", 
        rating: 4.5, 
        size: "10 oz", 
        image: "ChocolateCaramels" 
    },
    
    { 
        id: 40, 
        category: "Confectioneries", 
        name: "Lollipops", 
        price: 3.65, 
        description: "Twirl into fun with these bright lollipops, each one swirling with bold, playful flavors that bring a burst of joy to every lick.", 
        rating: 4.1, 
        size: "20 pack", 
        image: "Lollipops" 
    },
    
    // Nuts (20 items)
    { 
        id: 41, 
        category: "Nuts", 
        name: "RoastedAlmonds", 
        price: 9.95, 
        description: "Savor the golden, salty crunch of these roasted almonds, perfectly toasted to enhance their natural nuttiness for a wholesome, satisfying snack.", 
        rating: 4.6, 
        size: "16 oz", 
        image: "RoastedAlmonds" 
    },
    
    { 
        id: 42, 
        category: "Nuts", 
        name: "HoneyGlazedCashews", 
        price: 11.85, 
        description: "Delight in these honey-glazed cashews, where creamy cashews are kissed with a sweet, sticky honey coating for an irresistible blend of flavors.", 
        rating: 4.7, 
        size: "14 oz", 
        image: "HoneyGlazedCashews" 
    },
    
    { 
        id: 43, 
        category: "Nuts", 
        name: "MixedNutMedley", 
        price: 13.75, 
        description: "Enjoy a symphony of flavors with this mixed nut medley, featuring a trio of almonds, cashews, and pecans roasted to perfection for a hearty crunch.", 
        rating: 4.8, 
        size: "18 oz", 
        image: "MixedNutMedley" 
    },
    
    { 
        id: 44, 
        category: "Nuts", 
        name: "SaltedPeanuts", 
        price: 5.35, 
        description: "Crunch into these classic salted peanuts, lightly roasted and seasoned with a savory edge that makes them a timeless, crowd-pleasing snack.", 
        rating: 4.3, 
        size: "20 oz", 
        image: "SaltedPeanuts" 
    },
    
    { 
        id: 45, 
        category: "Nuts", 
        name: "Pistachios", 
        price: 12.65, 
        description: "Crack open the subtle, green richness of these pistachios, mildly roasted to highlight their unique, buttery flavor and satisfying texture.", 
        rating: 4.6, 
        size: "12 oz", 
        image: "Pistachios" 
    },
    
    { 
        id: 46, 
        category: "Nuts", 
        name: "WalnutHalves", 
        price: 10.75, 
        description: "Relish the fresh, buttery decadence of these walnut halves, offering a mild sweetness and tender crunch perfect for snacking or baking.", 
        rating: 4.5, 
        size: "14 oz", 
        image: "WalnutHalves" 
    },
    
    { 
        id: 47, 
        category: "Nuts", 
        name: "SpicyPecans", 
        price: 11.55, 
        description: "Ignite your taste buds with these spicy pecans, roasted with a fiery chili kick that complements their natural richness for a bold, addictive treat.", 
        rating: 4.4, 
        size: "12 oz", 
        image: "SpicyPecans" 
    },
    
    { 
        id: 48, 
        category: "Nuts", 
        name: "BrazilNuts", 
        price: 13.95, 
        description: "Discover the large, creamy luxury of these Brazil nuts, harvested from the Amazon, offering a smooth, rich taste with a subtle earthy undertone.", 
        rating: 4.7, 
        size: "16 oz", 
        image: "BrazilNuts" 
    },
    
    { 
        id: 49, 
        category: "Nuts", 
        name: "MacadamiaNuts", 
        price: 15.85, 
        description: "Indulge in the buttery, velvety richness of these macadamia nuts, lightly roasted to amplify their decadent flavor and delicate crunch.", 
        rating: 4.9, 
        size: "10 oz", 
        image: "MacadamiaNuts" 
    },
    
    { 
        id: 50, 
        category: "Nuts", 
        name: "Hazelnuts", 
        price: 10.35, 
        description: "Enjoy the warm, toasted charm of these hazelnuts, where a gentle roast brings out their aromatic depth and satisfyingly crisp texture.", 
        rating: 4.5, 
        size: "14 oz", 
        image: "Hazelnuts" 
    },
    
    { 
        id: 51, 
        category: "Nuts", 
        name: "ChiliAlmonds", 
        price: 9.65, 
        description: "Spice up your snack time with these chili almonds, where bold chili seasoning enhances the natural crunch of roasted almonds for a fiery twist.", 
        rating: 4.4, 
        size: "16 oz", 
        image: "ChiliAlmonds" 
    },
    
    { 
        id: 52, 
        category: "Nuts", 
        name: "PineNuts", 
        price: 17.75, 
        description: "Elevate your dishes with these delicate pine nuts, offering a subtle, buttery flavor and tender bite that’s perfect for gourmet creations.", 
        rating: 4.8, 
        size: "8 oz", 
        image: "PineNuts" 
    },
    
    { 
        id: 53, 
        category: "Nuts", 
        name: "SmokedCashews", 
        price: 12.85, 
        description: "Savor the woody, smoky allure of these smoked cashews, where a slow-smoking process infuses them with a deep, rustic flavor and creamy crunch.", 
        rating: 4.6, 
        size: "14 oz", 
        image: "SmokedCashews" 
    },
    
    { 
        id: 54, 
        category: "Nuts", 
        name: "CandiedWalnuts", 
        price: 11.25, 
        description: "Treat yourself to these candied walnuts, glazed with a sugary sweetness that enhances their natural richness for a delightful, crunchy indulgence.", 
        rating: 4.5, 
        size: "12 oz", 
        image: "CandiedWalnuts" 
    },
    
    { 
        id: 55, 
        category: "Nuts", 
        name: "TrailMix", 
        price: 8.95, 
        description: "Fuel your adventures with this trail mix, blending hearty nuts and sweet dried fruits for a balanced, energy-packed snack bursting with flavor.", 
        rating: 4.3, 
        size: "18 oz", 
        image: "TrailMix" 
    },
    
    { 
        id: 56, 
        category: "Nuts", 
        name: "SesamePeanuts", 
        price: 6.25, 
        description: "Crunch into these sesame peanuts, where roasted peanuts are rolled in a nutty, crunchy sesame coating for a savory, textured delight.", 
        rating: 4.2, 
        size: "16 oz", 
        image: "SesamePeanuts" 
    },
    
    { 
        id: 57, 
        category: "Nuts", 
        name: "CinnamonAlmonds", 
        price: 10.15, 
        description: "Warm up with these cinnamon almonds, dusted with fragrant cinnamon to complement their roasted crunch with a cozy, spiced sweetness.", 
        rating: 4.5, 
        size: "14 oz", 
        image: "CinnamonAlmonds" 
    },
    
    { 
        id: 58, 
        category: "Nuts", 
        name: "RawPecans", 
        price: 12.45, 
        description: "Taste the pure, unadulterated richness of these raw pecans, offering a natural, earthy flavor and tender bite straight from the tree.", 
        rating: 4.6, 
        size: "12 oz", 
        image: "RawPecans" 
    },
    
    { 
        id: 59, 
        category: "Nuts", 
        name: "SaltedMacadamias", 
        price: 16.35, 
        description: "Indulge in these salted macadamias, where a touch of sea salt elevates their buttery decadence for a luxurious, savory crunch.", 
        rating: 4.8, 
        size: "10 oz", 
        image: "SaltedMacadamias" 
    },
    
    { 
        id: 60, 
        category: "Nuts", 
        name: "BBQPeanuts", 
        price: 5.85, 
        description: "Fire up your snack game with these BBQ peanuts, roasted and seasoned with a smoky, tangy BBQ blend that’s bold and irresistible.", 
        rating: 4.3, 
        size: "20 oz", 
        image: "BbqPeanuts" 
    },
    
    // Jams (20 items)
    { 
        id: 61, 
        category: "Jams", 
        name: "StrawberryPreserve", 
        price: 5.95, 
        description: "Spread the lush, summery sweetness of this strawberry preserve, crafted from ripe, juicy strawberries simmered to capture their vibrant, fruity essence.", 
        rating: 4.6, 
        size: "12 oz", 
        image: "StrawberryPreserve" 
    },
    
    { 
        id: 62, 
        category: "Jams", 
        name: "BlueberryFruitSpread", 
        price: 6.55, 
        description: "Enjoy the pure, unadulterated taste of this blueberry fruit spread, made with no added sugar to let the natural tart-sweetness of blueberries shine through.", 
        rating: 4.4, 
        size: "10 oz", 
        image: "BlueberryFruitSpread" 
    },
    
    { 
        id: 63, 
        category: "Jams", 
        name: "ApricotJam", 
        price: 5.45, 
        description: "Brighten your mornings with this apricot jam, where the tangy bite of sun-ripened apricots is preserved in a smooth, golden spread of delight.", 
        rating: 4.3, 
        size: "12 oz", 
        image: "ApricotJam" 
    },
    
    { 
        id: 64, 
        category: "Jams", 
        name: "RaspberryJam", 
        price: 6.85, 
        description: "Dive into the vivid, tart-sweet bliss of this raspberry jam, bursting with the bold flavor of fresh raspberries and tiny seeds for authentic texture.", 
        rating: 4.5, 
        size: "12 oz", 
        image: "RaspberryJam" 
    },
    
    { 
        id: 65, 
        category: "Jams", 
        name: "PeachPreserves", 
        price: 5.75, 
        description: "Savor the smooth, juicy sweetness of these peach preserves, made from succulent peaches to bring a taste of summer orchards to your table.", 
        rating: 4.4, 
        size: "10 oz", 
        image: "PeachPreserves" 
    },
    
    { 
        id: 66, 
        category: "Jams", 
        name: "BlackberryJam", 
        price: 6.35, 
        description: "Indulge in the deep, bold richness of this blackberry jam, crafted from plump blackberries to deliver a robust, fruity spread with every spoonful.", 
        rating: 4.5, 
        size: "12 oz", 
        image: "BlackberryJam" 
    },
    
    { 
        id: 67, 
        category: "Jams", 
        name: "OrangeMarmalade", 
        price: 4.85, 
        description: "Awaken your senses with this zesty orange marmalade, featuring tender orange peel suspended in a tangy, citrusy spread that’s both bright and bittersweet.", 
        rating: 4.3, 
        size: "14 oz", 
        image: "OrangeMarmalade" 
    },
    
    { 
        id: 68, 
        category: "Jams", 
        name: "CherryPreserve", 
        price: 7.55, 
        description: "Relish the rich, sweet-tart decadence of this cherry preserve, where plump, ripe cherries are simmered into a luxurious spread bursting with flavor.", 
        rating: 4.6, 
        size: "10 oz", 
        image: "CherryPreserve" 
    },
    
    { 
        id: 69, 
        category: "Jams", 
        name: "FigJam", 
        price: 6.65, 
        description: "Enjoy the sweet, earthy sophistication of this fig jam, where ripe figs and their tiny seeds create a textured, honeyed spread perfect for pairing.", 
        rating: 4.5, 
        size: "12 oz", 
        image: "FigJam" 
    },
    
    { 
        id: 70, 
        category: "Jams", 
        name: "PlumJam", 
        price: 5.85, 
        description: "Taste the plump, tart-sweet magic of this plum jam, crafted from juicy plums to deliver a balanced spread that’s both vibrant and comforting.", 
        rating: 4.4, 
        size: "12 oz", 
        image: "PlumJam" 
    },
    
    { 
        id: 71, 
        category: "Jams", 
        name: "MixedBerryJam", 
        price: 6.95, 
        description: "Delight in this mixed berry jam, a harmonious medley of strawberries, blueberries, and raspberries blended into a sweet, tangy jar of fruity bliss.", 
        rating: 4.6, 
        size: "10 oz", 
        image: "MixedBerryJam" 
    },
    
    { 
        id: 72, 
        category: "Jams", 
        name: "GrapeJelly", 
        price: 4.55, 
        description: "Spread the smooth, nostalgic sweetness of this grape jelly, made from rich concord grapes for a classic, velvety finish that’s pure comfort.", 
        rating: 4.2, 
        size: "14 oz", 
        image: "GrapeJelly" 
    },
    
    { 
        id: 73, 
        category: "Jams", 
        name: "PineappleJam", 
        price: 6.45, 
        description: "Brighten your day with this tropical pineapple jam, where the sunny, tangy sweetness of ripe pineapples is captured in a golden, luscious spread.", 
        rating: 4.4, 
        size: "12 oz", 
        image: "PineappleJam" 
    },
    
    { 
        id: 74, 
        category: "Jams", 
        name: "MangoChutney", 
        price: 7.35, 
        description: "Spice up your meals with this mango chutney, blending sweet mango chunks with a hint of heat for a versatile, spicy-sweet condiment.", 
        rating: 4.5, 
        size: "10 oz", 
        image: "MangoChutney" 
    },
    
    { 
        id: 75, 
        category: "Jams", 
        name: "CranberryJelly", 
        price: 5.25, 
        description: "Celebrate the tart, festive flair of this cranberry jelly, where bright cranberries are transformed into a smooth, tangy spread perfect for any season.", 
        rating: 4.3, 
        size: "12 oz", 
        image: "CranberryJelly" 
    },
    
    { 
        id: 76, 
        category: "Jams", 
        name: "LemonCurd", 
        price: 6.75, 
        description: "Indulge in the creamy, zesty decadence of this lemon curd, where a bright lemon zing meets silky smoothness for a luxurious, tangy treat.", 
        rating: 4.6, 
        size: "8 oz", 
        image: "LemonCurd" 
    },
    
    { 
        id: 77, 
        category: "Jams", 
        name: "ElderberryJam", 
        price: 7.85, 
        description: "Discover the rare, floral richness of this elderberry jam, crafted from delicate elderberries for a unique, berry-forward spread with a hint of elegance.", 
        rating: 4.7, 
        size: "10 oz", 
        image: "ElderberryJam" 
    },
    
    { 
        id: 78, 
        category: "Jams", 
        name: "AppleButter", 
        price: 5.65, 
        description: "Savor the spiced, velvety comfort of this apple butter, slow-cooked from fresh apples with cinnamon and nutmeg for a rich, autumnal spread.", 
        rating: 4.5, 
        size: "12 oz", 
        image: "AppleButter" 
    },
    
    { 
        id: 79, 
        category: "Jams", 
        name: "BoysenberryJam", 
        price: 6.85, 
        description: "Enjoy the unique, tangy sweetness of this boysenberry jam, where the bold flavor of boysenberries shines in a vibrant, fruity spread.", 
        rating: 4.4, 
        size: "10 oz", 
        image: "BoysenberryJam" 
    },
    
    { 
        id: 80, 
        category: "Jams", 
        name: "GuavaJelly", 
        price: 7.45, 
        description: "Escape to the tropics with this guava jelly, where the exotic, floral sweetness of ripe guavas is transformed into a smooth, tropical delight.", 
        rating: 4.6, 
        size: "12 oz", 
        image: "GuavaJelly" 
    },
    
    // Fruits (20 items)
    { 
        id: 81, 
        category: "Fruits", 
        name: "Apple", 
        price: 1.95, 
        description: "Bite into the crisp, refreshing sweetness of this apple, offering a satisfying crunch and a juicy burst of flavor straight from the orchard.", 
        rating: 4.3, 
        size: "1 lb", 
        image: "Apple" 
    },
    
    { 
        id: 82, 
        category: "Fruits", 
        name: "Banana", 
        price: 0.85, 
        description: "Peel back the creamy, smooth richness of this banana, delivering a soft, naturally sweet texture that’s perfect for a quick, wholesome snack.", 
        rating: 4.2, 
        size: "1 lb", 
        image: "Banana" 
    },
    
    { 
        id: 83, 
        category: "Fruits", 
        name: "Orange", 
        price: 1.55, 
        description: "Zest up your day with this juicy orange, bursting with a bright citrus flavor that’s both refreshing and invigorating with every peel.", 
        rating: 4.4, 
        size: "1 lb", 
        image: "Orange" 
    },
    
    { 
        id: 84, 
        category: "Fruits", 
        name: "Grape", 
        price: 2.85, 
        description: "Pop these plump, juicy grapes for a sweet, satisfying burst of flavor, each one a tiny jewel of natural goodness fresh from the vine.", 
        rating: 4.3, 
        size: "1 lb", 
        image: "Grape" 
    },
    
    { 
        id: 85, 
        category: "Fruits", 
        name: "Pineapple", 
        price: 3.95, 
        description: "Dive into the tropical tang of this pineapple, where succulent, golden flesh offers a refreshing bite of sunny sweetness with a hint of tartness.", 
        rating: 4.5, 
        size: "1 whole", 
        image: "Pineapple" 
    },
    
    { 
        id: 86, 
        category: "Fruits", 
        name: "Watermelon", 
        price: 4.85, 
        description: "Cool off with this refreshing watermelon, its crisp, juicy flesh bursting with hydrating sweetness that’s the essence of summer in every slice.", 
        rating: 4.6, 
        size: "1 whole", 
        image: "Watermelon" 
    },
    
    { 
        id: 87, 
        category: "Fruits", 
        name: "Strawberry", 
        price: 1.85, 
        description: "Savor the bright, aromatic sweetness of these strawberries, each one a ruby-red delight with a juicy texture and a summery flavor explosion.", 
        rating: 4.5, 
        size: "1 lb", 
        image: "Strawberry" 
    },
    
    { 
        id: 88, 
        category: "Fruits", 
        name: "Blueberry", 
        price: 2.75, 
        description: "Enjoy the tiny, tart-sweet burst of these blueberries, packed with antioxidants and a delicate flavor that’s perfect for snacking or baking.", 
        rating: 4.4, 
        size: "1 pint", 
        image: "Blueberry" 
    },
    
    { 
        id: 89, 
        category: "Fruits", 
        name: "Mango", 
        price: 3.85, 
        description: "Indulge in the luscious, silky richness of this mango, its vibrant orange flesh offering a tropical sweetness that melts in your mouth.", 
        rating: 4.7, 
        size: "1 whole", 
        image: "Mango" 
    },
    
    { 
        id: 90, 
        category: "Fruits", 
        name: "Cherry", 
        price: 2.95, 
        description: "Pop these shiny, bold cherries for a juicy explosion of sweet-tart flavor, each one a glossy gem plucked at the peak of ripeness.", 
        rating: 4.5, 
        size: "1 lb", 
        image: "Cherry" 
    },
    
    { 
        id: 91, 
        category: "Fruits", 
        name: "Peach", 
        price: 2.65, 
        description: "Bite into the fuzzy, juicy decadence of this peach, its tender flesh dripping with sweet nectar that captures the essence of summer orchards.", 
        rating: 4.4, 
        size: "1 lb", 
        image: "Peach" 
    },
    
    { 
        id: 92, 
        category: "Fruits", 
        name: "Pear", 
        price: 2.55, 
        description: "Enjoy the smooth, gentle sweetness of this pear, its crisp yet tender flesh offering a subtle, refreshing flavor with every juicy bite.", 
        rating: 4.3, 
        size: "1 lb", 
        image: "Pear" 
    },
    
    { 
        id: 93, 
        category: "Fruits", 
        name: "Kiwi", 
        price: 2.45, 
        description: "Peel into the tart, vibrant green flesh of this kiwi, where a zesty kick meets a juicy sweetness for a refreshing, exotic treat.", 
        rating: 4.4, 
        size: "1 lb", 
        image: "Kiwi" 
    },
    
    { 
        id: 94, 
        category: "Fruits", 
        name: "Lemon", 
        price: 2.35, 
        description: "Zest up your dishes with this lemon, its bright, sour punch cutting through with a refreshing citrus tang that’s both bold and versatile.", 
        rating: 4.2, 
        size: "1 lb", 
        image: "Lemon" 
    },
    
    { 
        id: 95, 
        category: "Fruits", 
        name: "Lime", 
        price: 2.25, 
        description: "Add a sharp, citrusy kick with this lime, its intense, tangy juice perfect for brightening flavors with a zesty, refreshing twist.", 
        rating: 4.3, 
        size: "1 lb", 
        image: "Lime" 
    },
    
    { 
        id: 96, 
        category: "Fruits", 
        name: "Avocado", 
        price: 2.75, 
        description: "Scoop into the creamy, nutty richness of this avocado, its smooth, green flesh offering a wholesome, velvety texture perfect for any dish.", 
        rating: 4.6, 
        size: "1 whole", 
        image: "Avocado" 
    },
    
    { 
        id: 97, 
        category: "Fruits", 
        name: "Coconut", 
        price: 2.95, 
        description: "Crack open this fresh coconut for its sweet, hydrating water and tender flesh, a tropical treasure brimming with natural flavor.", 
        rating: 4.4, 
        size: "1 whole", 
        image: "Coconut" 
    },
    
    { 
        id: 98, 
        category: "Fruits", 
        name: "Pomegranate", 
        price: 2.85, 
        description: "Unleash the ruby-red juiciness of this pomegranate, its tart, sweet seeds bursting with flavor and antioxidants in every delicious bite.", 
        rating: 4.5, 
        size: "1 whole", 
        image: "Pomegranate" 
    },
    
    { 
        id: 99, 
        category: "Fruits", 
        name: "Raspberry", 
        price: 2.65, 
        description: "Savor the delicate, tart finish of these raspberries, each tiny berry packing a punch of vibrant flavor and a soft, juicy texture.", 
        rating: 4.4, 
        size: "1 pint", 
        image: "Raspberry" 
    },
    
    { 
        id: 100, 
        category: "Fruits", 
        name: "Blackberry", 
        price: 2.95, 
        description: "Indulge in the bold, deep flavor of these blackberries, their juicy, dark flesh offering a rich sweetness with a hint of tartness.", 
        rating: 4.5, 
        size: "1 pint", 
        image: "Blackberry" 
    },
    
    // Vegetables (20 items)
    { 
        id: 101, 
        category: "Vegetables", 
        name: "Tomato", 
        price: 1.85, 
        description: "Savor the ripe, savory juiciness of this tomato, its vibrant red flesh bursting with a balanced sweetness and subtle tang fresh from the vine.", 
        rating: 4.3, 
        size: "1 lb", 
        image: "Tomato" 
    },
    
    { 
        id: 102, 
        category: "Vegetables", 
        name: "Carrot", 
        price: 0.95, 
        description: "Crunch into the sweet, earthy bite of this carrot, its bright orange hue and crisp texture making it a wholesome addition to any meal.", 
        rating: 4.2, 
        size: "1 lb", 
        image: "Carrot" 
    },
    
    { 
        id: 103, 
        category: "Vegetables", 
        name: "Cucumber", 
        price: 1.45, 
        description: "Refresh your palate with this cool cucumber, its crisp, hydrating flesh offering a subtle freshness and satisfying snap with every slice.", 
        rating: 4.3, 
        size: "1 whole", 
        image: "Cucumber" 
    },
    
    { 
        id: 104, 
        category: "Vegetables", 
        name: "Broccoli", 
        price: 2.85, 
        description: "Enjoy the tender, green florets of this broccoli, packed with nutrients and a mild, earthy flavor that’s perfect steamed, roasted, or raw.", 
        rating: 4.4, 
        size: "1 lb", 
        image: "Broccoli" 
    },
    
    { 
        id: 105, 
        category: "Vegetables", 
        name: "Spinach", 
        price: 3.95, 
        description: "Dive into the leafy, earthy richness of this spinach, its tender leaves offering a nutrient-packed bite with a smooth, versatile flavor.", 
        rating: 4.5, 
        size: "1 lb", 
        image: "Spinach" 
    },
    
    { 
        id: 106, 
        category: "Vegetables", 
        name: "Kale", 
        price: 4.75, 
        description: "Power up with this hearty kale, its robust, slightly bitter leaves delivering a nutrient-dense crunch that’s ideal for salads or hearty dishes.", 
        rating: 4.4, 
        size: "1 lb", 
        image: "Kale" 
    },
    
    { 
        id: 107, 
        category: "Vegetables", 
        name: "Lettuce", 
        price: 1.75, 
        description: "Crisp up your salads with this lettuce, its mild, refreshing leaves providing a light, versatile base for any fresh and healthy creation.", 
        rating: 4.2, 
        size: "1 head", 
        image: "Lettuce" 
    },
    
    { 
        id: 108, 
        category: "Vegetables", 
        name: "Bell Pepper", 
        price: 2.95, 
        description: "Brighten your dishes with this sweet bell pepper, its vibrant crunch and juicy flesh adding a mild, colorful sweetness to every bite.", 
        rating: 4.4, 
        size: "1 lb", 
        image: "Bellpepper" 
    },
    
    { 
        id: 109, 
        category: "Vegetables", 
        name: "Onion", 
        price: 3.85, 
        description: "Spice up your cooking with this pungent onion, its sharp, aromatic bite softening into a sweet, savory depth when caramelized or sautéed.", 
        rating: 4.3, 
        size: "1 lb", 
        image: "Onion" 
    },
    
    { 
        id: 110, 
        category: "Vegetables", 
        name: "Garlic", 
        price: 2.75, 
        description: "Elevate your flavors with this aromatic garlic, its bold, spicy kick transforming into a rich, mellow warmth when roasted or cooked.", 
        rating: 4.5, 
        size: "1 bulb", 
        image: "Garlic" 
    },
    
    { 
        id: 111, 
        category: "Vegetables", 
        name: "Potato", 
        price: 2.65, 
        description: "Dig into the starchy, hearty comfort of this potato, its versatile flesh perfect for mashing, roasting, or frying into golden deliciousness.", 
        rating: 4.4, 
        size: "1 lb", 
        image: "Potato" 
    },
    
    { 
        id: 112, 
        category: "Vegetables", 
        name: "Sweet Potato", 
        price: 2.85, 
        description: "Savor the rich, orange-hued sweetness of this sweet potato, its tender, naturally sweet flesh offering a wholesome twist on a classic staple.", 
        rating: 4.5, 
        size: "1 lb", 
        image: "Sweetpotato" 
    },
    
    { 
        id: 113, 
        category: "Vegetables", 
        name: "Zucchini", 
        price: 2.55, 
        description: "Enjoy the mild, tender flesh of this zucchini, its subtle flavor and soft texture making it a versatile star in both raw and cooked dishes.", 
        rating: 4.3, 
        size: "1 lb", 
        image: "Zucchini" 
    },
    
    { 
        id: 114, 
        category: "Vegetables", 
        name: "Asparagus", 
        price: 2.95, 
        description: "Snap into the slim, grassy elegance of this asparagus, its delicate spears offering a fresh, earthy flavor that shines when grilled or steamed.", 
        rating: 4.4, 
        size: "1 lb", 
        image: "Asparagus" 
    },
    
    { 
        id: 115, 
        category: "Vegetables", 
        name: "Mushroom", 
        price: 2.75, 
        description: "Savor the meaty, umami depth of this mushroom, its earthy richness adding a savory complexity to soups, stir-fries, or simply sautéed.", 
        rating: 4.5, 
        size: "1 lb", 
        image: "Mushroom" 
    },
    
    { 
        id: 116, 
        category: "Vegetables", 
        name: "Cauliflower", 
        price: 3.25, 
        description: "Enjoy the firm, nutty versatility of this cauliflower, its mild flavor and sturdy florets perfect for roasting, mashing, or transforming into rice.", 
        rating: 4.4, 
        size: "1 head", 
        image: "Cauliflower" 
    },
    
    { 
        id: 117, 
        category: "Vegetables", 
        name: "Eggplant", 
        price: 2.45, 
        description: "Dive into the glossy, spongy richness of this eggplant, its tender flesh soaking up flavors for a hearty, versatile addition to any dish.", 
        rating: 4.3, 
        size: "1 whole", 
        image: "Eggplant" 
    },
    
    { 
        id: 118, 
        category: "Vegetables", 
        name: "GreenBeans", 
        price: 1.95, 
        description: "Snap into the crisp, fresh flavor of these green beans, their tender pods offering a vibrant, garden-fresh taste that’s perfect steamed or sautéed.", 
        rating: 4.2, 
        size: "1 lb", 
        image: "GreenBeans" 
    },
    
    { 
        id: 119, 
        category: "Vegetables", 
        name: "Radish", 
        price: 1.65, 
        description: "Spice up your plate with this peppery radish, its crisp, juicy bite adding a bold, refreshing zing to salads or garnishes.", 
        rating: 4.1, 
        size: "1 lb", 
        image: "Radish" 
    },
    
    { 
        id: 120, 
        category: "Vegetables", 
        name: "Beet", 
        price: 2.35, 
        description: "Unearth the earthy, sweet richness of this beet, its deep red flesh offering a tender, nutrient-packed bite that’s perfect roasted or raw.", 
        rating: 4.4, 
        size: "1 lb", 
        image: "Beet" 
    }
];

export default products;