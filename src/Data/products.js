// product.js

const products = [
    // Beverages (20 items)
    { 
        id: 1, 
        category: "Beverages", 
        name: "PremiumCoffee", 
        price: 12.95, 
        description: "Bold coffee with a smoky finish", 
        inStock: true, 
        size: "12 oz", 
        image: "PremiumCoffee" 
    },
    
    { 
        id: 2, 
        category: "Beverages", 
        name: "OrganicGreenTea", 
        price: 8.75, 
        description: "Light, earthy tea from organic leaves", 
        inStock: true, 
        size: "20 bags", 
        image: "OrganicGreenTea" 
    },
    
    { 
        id: 3, 
        category: "Beverages", 
        name: "SparklingLemonade", 
        price: 2.85, 
        description: "Zesty lemon fizz with a hint of sweetness", 
        inStock: true, 
        size: "16 oz", 
        image: "SparklingLemonade" 
    },
    
    { 
        id: 4, 
        category: "Beverages", 
        name: "ChamomileHerbalTea", 
        price: 7.25, 
        description: "Soothing tea with floral undertones", 
        inStock: true, 
        size: "15 bags", 
        image: "ChamomileHerbalTea" 
    },
    
    { 
        id: 5, 
        category: "Beverages", 
        name: "ColdBrewCoffee", 
        price: 4.65, 
        description: "Smooth coffee brewed cold for richness", 
        inStock: true, 
        size: "12 oz", 
        image: "ColdBrewCoffee" 
    },
    
    { 
        id: 6, 
        category: "Beverages", 
        name: "PeppermintTea", 
        price: 6.85, 
        description: "Cool, invigorating mint tea", 
        inStock: true, 
        size: "20 bags", 
        image: "PeppermintTea" 
    },
    
    { 
        id: 7, 
        category: "Beverages", 
        name: "GingerAle", 
        price: 2.55, 
        description: "Crisp soda with a ginger kick", 
        inStock: true, 
        size: "16 oz", 
        image: "GingerAle" 
    },
    
    { 
        id: 8, 
        category: "Beverages", 
        name: "EspressoBlend", 
        price: 14.85, 
        description: "Dark roast perfect for espresso shots", 
        inStock: true, 
        size: "10 oz", 
        image: "EspressoBlend" 
    },
    
    { 
        id: 9, 
        category: "Beverages", 
        name: "OrangeJuice", 
        price: 3.95, 
        description: "Bright, tangy juice from ripe oranges", 
        inStock: true, 
        size: "32 oz", 
        image: "OrangeJuice" 
    },
    
    { 
        id: 10, 
        category: "Beverages", 
        name: "BlackTeaDarjeeling", 
        price: 9.35, 
        description: "Fragrant tea from Darjeeling hills", 
        inStock: true, 
        size: "18 bags", 
        image: "BlackTeaDarjeeling" 
    },
    
    { 
        id: 11, 
        category: "Beverages", 
        name: "RootBeer", 
        price: 2.65, 
        description: "Creamy soda with a vanilla twist", 
        inStock: true, 
        size: "12 oz", 
        image: "RootBeer" 
    },
    
    { 
        id: 12, 
        category: "Beverages", 
        name: "DecafCoffee", 
        price: 11.75, 
        description: "Gentle coffee without the caffeine", 
        inStock: true, 
        size: "12 oz", 
        image: "DecafCoffee" 
    },
    
    { 
        id: 13, 
        category: "Beverages", 
        name: "CoconutWater", 
        price: 3.45, 
        description: "Pure, refreshing tropical water", 
        inStock: true, 
        size: "16 oz", 
        image: "CoconutWater" 
    },
    
    { 
        id: 14, 
        category: "Beverages", 
        name: "HibiscusTea", 
        price: 7.95, 
        description: "Vibrant tea with a tart berry flavor", 
        inStock: true, 
        size: "20 bags", 
        image: "HibiscusTea" 
    },
    
    { 
        id: 15, 
        category: "Beverages", 
        name: "AppleCider", 
        price: 4.35, 
        description: "WarmSpiced cider from fresh apples", 
        inStock: true, 
        size: "24 oz", 
        image: "AppleCider" 
    },
    
    { 
        id: 16, 
        category: "Beverages", 
        name: "MatchaGreenTea", 
        price: 15.75, 
        description: "Vivid green tea powder from Japan", 
        inStock: true, 
        size: "2 oz", 
        image: "MatchaGreenTea" 
    },
    
    { 
        id: 17, 
        category: "Beverages", 
        name: "Cola", 
        price: 2.35, 
        description: "Bubbly cola with a caramel note", 
        inStock: true, 
        size: "12 oz", 
        image: "Cola" 
    },
    
    { 
        id: 18, 
        category: "Beverages", 
        name: "RooibosTea", 
        price: 8.25, 
        description: "Nutty, caffeineFree red tea", 
        inStock: true, 
        size: "20 bags", 
        image: "RooibosTea" 
    },
    
    { 
        id: 19, 
        category: "Beverages", 
        name: "PineappleJuice", 
        price: 3.85, 
        description: "Sweet, tropical juice from pineapples", 
        inStock: true, 
        size: "32 oz", 
        image: "PineappleJuice" 
    },
    
    { 
        id: 20, 
        category: "Beverages", 
        name: "HazelnutCoffee", 
        price: 13.65, 
        description: "Roasted coffee with a nutty aroma", 
        inStock: true, 
        size: "12 oz", 
        image: "HazelnutCoffee" 
    },
    
  
    // Confectioneries (20 items)
    { 
        id: 21, 
        category: "Confectioneries", 
        name: "DarkChocolateTruffles", 
        price: 15.85, 
        description: "Velvety truffles with deep cocoa", 
        inStock: true, 
        size: "8 oz", 
        image: "DarkChocolateTruffles" 
    },
    
    { 
        id: 22, 
        category: "Confectioneries", 
        name: "GummyBears", 
        price: 4.75, 
        description: "Chewy bears in assorted fruit flavors", 
        inStock: true, 
        size: "12 oz", 
        image: "GummyBears" 
    },
    
    { 
        id: 23, 
        category: "Confectioneries", 
        name: "CaramelToffees", 
        price: 6.95, 
        description: "Rich toffees with golden caramel", 
        inStock: true, 
        size: "10 oz", 
        image: "CaramelToffees" 
    },
    
    { 
        id: 24, 
        category: "Confectioneries", 
        name: "MilkChocolateBar", 
        price: 3.55, 
        description: "Creamy bar of pure milk chocolate", 
        inStock: true, 
        size: "4 oz", 
        image: "MilkChocolateBar" 
    },
    
    { 
        id: 25, 
        category: "Confectioneries", 
        name: "PeppermintPatties", 
        price: 5.85, 
        description: "Cool mint centers in dark chocolate", 
        inStock: true, 
        size: "8 oz", 
        image: "PeppermintPatties" 
    },
    
    { 
        id: 26, 
        category: "Confectioneries", 
        name: "JellyBeans", 
        price: 4.45, 
        description: "Tiny beans bursting with fruitiness", 
        inStock: true, 
        size: "10 oz", 
        image: "JellyBeans" 
    },
    
    { 
        id: 27, 
        category: "Confectioneries", 
        name: "PeanutBrittle", 
        price: 7.35, 
        description: "Crisp brittle with roasted peanuts", 
        inStock: true, 
        size: "12 oz", 
        image: "PeanutBrittle" 
    },
    
    { 
        id: 28, 
        category: "Confectioneries", 
        name: "WhiteChocolateDrops", 
        price: 6.65, 
        description: "Sweet drops of white chocolate bliss", 
        inStock: true, 
        size: "8 oz", 
        image: "WhiteChocolateDrops" 
    },
    
    { 
        id: 29, 
        category: "Confectioneries", 
        name: "LicoriceTwists", 
        price: 3.95, 
        description: "Bold black licorice with a chewy bite", 
        inStock: true, 
        size: "10 oz", 
        image: "LicoriceTwists" 
    },
    
    { 
        id: 30, 
        category: "Confectioneries", 
        name: "ChocolateAlmonds", 
        price: 9.85, 
        description: "Crunchy almonds coated in chocolate", 
        inStock: true, 
        size: "10 oz", 
        image: "ChocolateAlmonds" 
    },
    
    { 
        id: 31, 
        category: "Confectioneries", 
        name: "SourGummies", 
        price: 4.55, 
        description: "Puckering gummies with sour zest", 
        inStock: true, 
        size: "12 oz", 
        image: "SourGummies" 
    },
    
    { 
        id: 32, 
        category: "Confectioneries", 
        name: "FudgeSquares", 
        price: 8.35, 
        description: "Dense fudge with a chocolate swirl", 
        inStock: true, 
        size: "8 oz", 
        image: "FudgeSquares" 
    },
    
    { 
        id: 33, 
        category: "Confectioneries", 
        name: "Marshmallows", 
        price: 3.25, 
        description: "Fluffy pillows of sugary delight", 
        inStock: true, 
        size: "16 oz", 
        image: "Marshmallows" 
    },
    
    { 
        id: 34, 
        category: "Confectioneries", 
        name: "CaramelPopcorn", 
        price: 5.45, 
        description: "Popcorn drizzled with sticky caramel", 
        inStock: true, 
        size: "10 oz", 
        image: "CaramelPopcorn" 
    },
    
    { 
        id: 35, 
        category: "Confectioneries", 
        name: "ToffeeCrunch", 
        price: 7.75, 
        description: "Hard toffee with a satisfying snap", 
        inStock: true, 
        size: "8 oz", 
        image: "ToffeeCrunch" 
    },
    
    { 
        id: 36, 
        category: "Confectioneries", 
        name: "FruitChews", 
        price: 4.15, 
        description: "Soft chews with real fruit essence", 
        inStock: true, 
        size: "12 oz", 
        image: "FruitChews" 
    },
    
    { 
        id: 37, 
        category: "Confectioneries", 
        name: "HazelnutPralines", 
        price: 10.95, 
        description: "Elegant pralines with hazelnut cream", 
        inStock: true, 
        size: "6 oz", 
        image: "HazelnutPralines" 
    },
    
    { 
        id: 38, 
        category: "Confectioneries", 
        name: "CandyCanes", 
        price: 2.95, 
        description: "Festive peppermint sticks", 
        inStock: true, 
        size: "12 pack", 
        image: "CandyCanes" 
    },
    
    { 
        id: 39, 
        category: "Confectioneries", 
        name: "ChocolateCaramels", 
        price: 6.45, 
        description: "Silky caramels wrapped in chocolate", 
        inStock: true, 
        size: "10 oz", 
        image: "ChocolateCaramels" 
    },
    
    { 
        id: 40, 
        category: "Confectioneries", 
        name: "Lollipops", 
        price: 3.65, 
        description: "Bright lollipops in fun flavors", 
        inStock: true, 
        size: "20 pack", 
        image: "Lollipops" 
    },
    
  
    // Nuts (20 items)
    { 
        id: 41, 
        category: "Nuts", 
        name: "RoastedAlmonds", 
        price: 9.95, 
        description: "Golden almonds with a salty crunch", 
        inStock: true, 
        size: "16 oz", 
        image: "RoastedAlmonds" 
    },
    
    { 
        id: 42, 
        category: "Nuts", 
        name: "HoneyGlazedCashews", 
        price: 11.85, 
        description: "Cashews kissed with sweet honey", 
        inStock: true, 
        size: "14 oz", 
        image: "HoneyGlazedCashews" 
    },
    
    { 
        id: 43, 
        category: "Nuts", 
        name: "MixedNutMedley", 
        price: 13.75, 
        description: "A trio of almonds, cashews, and pecans", 
        inStock: true, 
        size: "18 oz", 
        image: "MixedNutMedley" 
    },
    
    { 
        id: 44, 
        category: "Nuts", 
        name: "SaltedPeanuts", 
        price: 5.35, 
        description: "Classic peanuts with a savory edge", 
        inStock: true, 
        size: "20 oz", 
        image: "SaltedPeanuts" 
    },
    
    { 
        id: 45, 
        category: "Nuts", 
        name: "Pistachios", 
        price: 12.65, 
        description: "Green pistachios with a mild roast", 
        inStock: true, 
        size: "12 oz", 
        image: "Pistachios" 
    },
    
    { 
        id: 46, 
        category: "Nuts", 
        name: "WalnutHalves", 
        price: 10.75, 
        description: "Fresh walnuts with a buttery taste", 
        inStock: true, 
        size: "14 oz", 
        image: "WalnutHalves" 
    },
    
    { 
        id: 47, 
        category: "Nuts", 
        name: "SpicyPecans", 
        price: 11.55, 
        description: "Pecans with a fiery chili kick", 
        inStock: true, 
        size: "12 oz", 
        image: "SpicyPecans" 
    },
    
    { 
        id: 48, 
        category: "Nuts", 
        name: "BrazilNuts", 
        price: 13.95, 
        description: "Large, creamy nuts from the Amazon", 
        inStock: true, 
        size: "16 oz", 
        image: "BrazilNuts" 
    },
    
    { 
        id: 49, 
        category: "Nuts", 
        name: "MacadamiaNuts", 
        price: 15.85, 
        description: "Buttery macadamias with a light roast", 
        inStock: true, 
        size: "10 oz", 
        image: "MacadamiaNuts" 
    },
    
    { 
        id: 50, 
        category: "Nuts", 
        name: "Hazelnuts", 
        price: 10.35, 
        description: "Toasted hazelnuts with a warm flavor", 
        inStock: true, 
        size: "14 oz", 
        image: "Hazelnuts" 
    },
    
    { 
        id: 51, 
        category: "Nuts", 
        name: "ChiliAlmonds", 
        price: 9.65, 
        description: "Almonds spiced with bold chili", 
        inStock: true, 
        size: "16 oz", 
        image: "ChiliAlmonds" 
    },
    
    { 
        id: 52, 
        category: "Nuts", 
        name: "PineNuts", 
        price: 17.75, 
        description: "Delicate pine nuts for gourmet dishes", 
        inStock: true, 
        size: "8 oz", 
        image: "PineNuts" 
    },
    
    { 
        id: 53, 
        category: "Nuts", 
        name: "SmokedCashews", 
        price: 12.85, 
        description: "Cashews with a smoky, woody taste", 
        inStock: true, 
        size: "14 oz", 
        image: "SmokedCashews" 
    },
    
    { 
        id: 54, 
        category: "Nuts", 
        name: "CandiedWalnuts", 
        price: 11.25, 
        description: "Walnuts glazed with sugary sweetness", 
        inStock: true, 
        size: "12 oz", 
        image: "CandiedWalnuts" 
    },
    
    { 
        id: 55, 
        category: "Nuts", 
        name: "TrailMix", 
        price: 8.95, 
        description: "Nuts and fruit for an energy boost", 
        inStock: true, 
        size: "18 oz", 
        image: "TrailMix" 
    },
    
    { 
        id: 56, 
        category: "Nuts", 
        name: "SesamePeanuts", 
        price: 6.25, 
        description: "Peanuts rolled in crunchy sesame", 
        inStock: true, 
        size: "16 oz", 
        image: "SesamePeanuts" 
    },
    
    { 
        id: 57, 
        category: "Nuts", 
        name: "CinnamonAlmonds", 
        price: 10.15, 
        description: "Almonds dusted with warm cinnamon", 
        inStock: true, 
        size: "14 oz", 
        image: "CinnamonAlmonds" 
    },
    
    { 
        id: 58, 
        category: "Nuts", 
        name: "RawPecans", 
        price: 12.45, 
        description: "Pure pecans with a natural flavor", 
        inStock: true, 
        size: "12 oz", 
        image: "RawPecans" 
    },
    
    { 
        id: 59, 
        category: "Nuts", 
        name: "SaltedMacadamias", 
        price: 16.35, 
        description: "Macadamias with a touch of sea salt", 
        inStock: true, 
        size: "10 oz", 
        image: "SaltedMacadamias" 
    },
    
    { 
        id: 60, 
        category: "Nuts", 
        name: "BBQPeanuts", 
        price: 5.85, 
        description: "Peanuts with a smoky BBQ tang", 
        inStock: true, 
        size: "20 oz", 
        image: "BbqPeanuts" 
    },
    
  
    // Jams (20 items)
    { 
        id: 61, 
        category: "Jams", 
        name: "StrawberryPreserve", 
        price: 5.95, 
        description: "Lush jam from ripe strawberries", 
        inStock: true, 
        size: "12 oz", 
        image: "StrawberryPreserve" 
    },
    
    { 
        id: 62, 
        category: "Jams", 
        name: "BlueberryFruitSpread", 
        price: 6.55, 
        description: "Pure blueberry spread, no sugar added", 
        inStock: true, 
        size: "10 oz", 
        image: "BlueberryFruitSpread" 
    },
    
    { 
        id: 63, 
        category: "Jams", 
        name: "ApricotJam", 
        price: 5.45, 
        description: "Bright jam with a tangy apricot bite", 
        inStock: true, 
        size: "12 oz", 
        image: "ApricotJam" 
    },
    
    { 
        id: 64, 
        category: "Jams", 
        name: "RaspberryJam", 
        price: 6.85, 
        description: "Vivid raspberry jam with tiny seeds", 
        inStock: true, 
        size: "12 oz", 
        image: "RaspberryJam" 
    },
    
    { 
        id: 65, 
        category: "Jams", 
        name: "PeachPreserves", 
        price: 5.75, 
        description: "Smooth preserves from juicy peaches", 
        inStock: true, 
        size: "10 oz", 
        image: "PeachPreserves" 
    },
    
    { 
        id: 66, 
        category: "Jams", 
        name: "BlackberryJam", 
        price: 6.35, 
        description: "Deep, bold blackberry spread", 
        inStock: true, 
        size: "12 oz", 
        image: "BlackberryJam" 
    },
    
    { 
        id: 67, 
        category: "Jams", 
        name: "OrangeMarmalade", 
        price: 4.85, 
        description: "Zesty marmalade with orange peel", 
        inStock: true, 
        size: "14 oz", 
        image: "OrangeMarmalade" 
    },
    
    { 
        id: 68, 
        category: "Jams", 
        name: "CherryPreserve", 
        price: 7.55, 
        description: "Rich preserves from sweet cherries", 
        inStock: true, 
        size: "10 oz", 
        image: "CherryPreserve" 
    },
    
    { 
        id: 69, 
        category: "Jams", 
        name: "FigJam", 
        price: 6.65, 
        description: "Sweet jam with a hint of fig seeds", 
        inStock: true, 
        size: "12 oz", 
        image: "FigJam" 
    },
    
    { 
        id: 70, 
        category: "Jams", 
        name: "PlumJam", 
        price: 5.85, 
        description: "Plump plums in a tartSweet jam", 
        inStock: true, 
        size: "12 oz", 
        image: "PlumJam" 
    },
    
    { 
        id: 71, 
        category: "Jams", 
        name: "Mixed BerryJam", 
        price: 6.95, 
        description: "A medley of berries in one jar", 
        inStock: true, 
        size: "10 oz", 
        image: "MixedBerryJam" 
    },
    
    { 
        id: 72, 
        category: "Jams", 
        name: "GrapeJelly", 
        price: 4.55, 
        description: "Smooth jelly from concord grapes", 
        inStock: true, 
        size: "14 oz", 
        image: "GrapeJelly" 
    },
    
    { 
        id: 73, 
        category: "Jams", 
        name: "PineappleJam", 
        price: 6.45, 
        description: "Tropical jam with a sunny flavor", 
        inStock: true, 
        size: "12 oz", 
        image: "PineappleJam" 
    },
    
    { 
        id: 74, 
        category: "Jams", 
        name: "MangoChutney", 
        price: 7.35, 
        description: "SpicySweet chutney with mango chunks", 
        inStock: true, 
        size: "10 oz", 
        image: "MangoChutney" 
    },
    
    { 
        id: 75, 
        category: "Jams", 
        name: "CranberryJelly", 
        price: 5.25, 
        description: "Tart jelly with a festive flair", 
        inStock: true, 
        size: "12 oz", 
        image: "CranberryJelly" 
    },
    
    { 
        id: 76, 
        category: "Jams", 
        name: "LemonCurd", 
        price: 6.75, 
        description: "Creamy curd with a lemon zing", 
        inStock: true, 
        size: "8 oz", 
        image: "LemonCurd" 
    },
    
    { 
        id: 77, 
        category: "Jams", 
        name: "ElderberryJam", 
        price: 7.85, 
        description: "Rare jam with a floral berry taste", 
        inStock: true, 
        size: "10 oz", 
        image: "ElderberryJam" 
    },
    
    { 
        id: 78, 
        category: "Jams", 
        name: "AppleButter", 
        price: 5.65, 
        description: "Spiced butter from slowCooked apples", 
        inStock: true, 
        size: "12 oz", 
        image: "AppleButter" 
    },
    
    { 
        id: 79, 
        category: "Jams", 
        name: "BoysenberryJam", 
        price: 6.85, 
        description: "Unique jam with a berry tang", 
        inStock: true, 
        size: "10 oz", 
        image: "BoysenberryJam" 
    },
    
    { 
        id: 80, 
        category: "Jams", 
        name: "GuavaJelly", 
        price: 7.45, 
        description: "Exotic jelly with a tropical twist", 
        inStock: true, 
        size: "12 oz", 
        image: "GuavaJelly" 
    },
    
  
    // Fruits (20 items)
    { 
        id: 81, 
        category: "Fruits", 
        name: "Apple", 
        price: 1.95, 
        description: "Crisp apple with a sweet crunch", 
        inStock: true, 
        size: "1 lb", 
        image: "Apple" 
    },
    
    { 
        id: 82, 
        category: "Fruits", 
        name: "Banana", 
        price: 0.85, 
        description: "Creamy banana with a soft texture", 
        inStock: true, 
        size: "1 lb", 
        image: "Banana" 
    },
    
    { 
        id: 83, 
        category: "Fruits", 
        name: "Orange", 
        price: 1.55, 
        description: "Juicy orange with a citrus burst", 
        inStock: true, 
        size: "1 lb", 
        image: "Orange" 
    },
    
    { 
        id: 84, 
        category: "Fruits", 
        name: "Grape", 
        price: 2.85, 
        description: "Plump grapes with a sweet pop", 
        inStock: true, 
        size: "1 lb", 
        image: "Grape" 
    },
    
    { 
        id: 85, 
        category: "Fruits", 
        name: "Pineapple", 
        price: 3.95, 
        description: "Tropical pineapple with a tangy bite", 
        inStock: true, 
        size: "1 whole", 
        image: "Pineapple" 
    },
    
    { 
        id: 86, 
        category: "Fruits", 
        name: "Watermelon", 
        price: 4.85, 
        description: "Refreshing watermelon with juicy flesh", 
        inStock: true, 
        size: "1 whole", 
        image: "Watermelon" 
    },
    
    { 
        id: 87, 
        category: "Fruits", 
        name: "Strawberry", 
        price: 1.85, 
        description: "Bright strawberries with a sweet aroma", 
        inStock: true, 
        size: "1 lb", 
        image: "Strawberry" 
    },
    
    { 
        id: 88, 
        category: "Fruits", 
        name: "Blueberry", 
        price: 2.75, 
        description: "Tiny blueberries with a tart edge", 
        inStock: true, 
        size: "1 pint", 
        image: "Blueberry" 
    },
    
    { 
        id: 89, 
        category: "Fruits", 
        name: "Mango", 
        price: 3.85, 
        description: "Luscious mango with a silky texture", 
        inStock: true, 
        size: "1 whole", 
        image: "Mango" 
    },
    
    { 
        id: 90, 
        category: "Fruits", 
        name: "Cherry", 
        price: 2.95, 
        description: "Shiny cherries with a bold flavor", 
        inStock: true, 
        size: "1 lb", 
        image: "Cherry" 
    },
    
    { 
        id: 91, 
        category: "Fruits", 
        name: "Peach", 
        price: 2.65, 
        description: "Fuzzy peach with a juicy core", 
        inStock: true, 
        size: "1 lb", 
        image: "Peach" 
    },
    
    { 
        id: 92, 
        category: "Fruits", 
        name: "Pear", 
        price: 2.55, 
        description: "Smooth pear with a gentle sweetness", 
        inStock: true, 
        size: "1 lb", 
        image: "Pear" 
    },
    
    { 
        id: 93, 
        category: "Fruits", 
        name: "Kiwi", 
        price: 2.45, 
        description: "Tart kiwi with vibrant green flesh", 
        inStock: true, 
        size: "1 lb", 
        image: "Kiwi" 
    },
    
    { 
        id: 94, 
        category: "Fruits", 
        name: "Lemon", 
        price: 2.35, 
        description: "Zesty lemon with a sour punch", 
        inStock: true, 
        size: "1 lb", 
        image: "Lemon" 
    },
    
    { 
        id: 95, 
        category: "Fruits", 
        name: "Lime", 
        price: 2.25, 
        description: "Sharp lime with a citrus kick", 
        inStock: true, 
        size: "1 lb", 
        image: "Lime" 
    },
    
    { 
        id: 96, 
        category: "Fruits", 
        name: "Avocado", 
        price: 2.75, 
        description: "Creamy avocado with a nutty taste", 
        inStock: true, 
        size: "1 whole", 
        image: "Avocado" 
    },
    
    { 
        id: 97, 
        category: "Fruits", 
        name: "Coconut", 
        price: 2.95, 
        description: "Fresh coconut with sweet water", 
        inStock: true, 
        size: "1 whole", 
        image: "Coconut" 
    },
    
    { 
        id: 98, 
        category: "Fruits", 
        name: "Pomegranate", 
        price: 2.85, 
        description: "Ruby pomegranate with juicy seeds", 
        inStock: true, 
        size: "1 whole", 
        image: "Pomegranate" 
    },
    
    { 
        id: 99, 
        category: "Fruits", 
        name: "Raspberry", 
        price: 2.65, 
        description: "Delicate raspberries with a tart finish", 
        inStock: true, 
        size: "1 pint", 
        image: "Raspberry" 
    },
    
    { 
        id: 100, 
        category: "Fruits", 
        name: "Blackberry", 
        price: 2.95, 
        description: "Bold blackberries with a deep flavor", 
        inStock: true, 
        size: "1 pint", 
        image: "Blackberry" 
    },
    
  
    // Vegetables (20 items)
    { 
        id: 101, 
        category: "Vegetables", 
        name: "Tomato", 
        price: 1.85, 
        description: "Ripe tomato with a savory taste", 
        inStock: true, 
        size: "1 lb", 
        image: "Tomato" 
    },
    
    { 
        id: 102, 
        category: "Vegetables", 
        name: "Carrot", 
        price: 0.95, 
        description: "Crunchy carrot with a sweet bite", 
        inStock: true, 
        size: "1 lb", 
        image: "Carrot" 
    },
    
    { 
        id: 103, 
        category: "Vegetables", 
        name: "Cucumber", 
        price: 1.45, 
        description: "Cool cucumber with a fresh snap", 
        inStock: true, 
        size: "1 whole", 
        image: "Cucumber" 
    },
    
    { 
        id: 104, 
        category: "Vegetables", 
        name: "Broccoli", 
        price: 2.85, 
        description: "Tender broccoli with green florets", 
        inStock: true, 
        size: "1 lb", 
        image: "Broccoli" 
    },
    
    { 
        id: 105, 
        category: "Vegetables", 
        name: "Spinach", 
        price: 3.95, 
        description: "Leafy spinach with an earthy flavor", 
        inStock: true, 
        size: "1 lb", 
        image: "Spinach" 
    },
    
    { 
        id: 106, 
        category: "Vegetables", 
        name: "Kale", 
        price: 4.75, 
        description: "Hearty kale with a robust taste", 
        inStock: true, 
        size: "1 lb", 
        image: "Kale" 
    },
    
    { 
        id: 107, 
        category: "Vegetables", 
        name: "Lettuce", 
        price: 1.75, 
        description: "Crisp lettuce with a mild flavor", 
        inStock: true, 
        size: "1 head", 
        image: "Lettuce" 
    },
    
    { 
        id: 108, 
        category: "Vegetables", 
        name: "Bell Pepper", 
        price: 2.95, 
        description: "Sweet pepper with a vibrant crunch", 
        inStock: true, 
        size: "1 lb", 
        image: "Bellpepper" 
    },
    
    { 
        id: 109, 
        category: "Vegetables", 
        name: "Onion", 
        price: 3.85, 
        description: "Pungent onion with a sharp bite", 
        inStock: true, 
        size: "1 lb", 
        image: "Onion" 
    },
    
    { 
        id: 110, 
        category: "Vegetables", 
        name: "Garlic", 
        price: 2.75, 
        description: "Aromatic garlic with a bold kick", 
        inStock: true, 
        size: "1 bulb", 
        image: "Garlic" 
    },
    
    { 
        id: 111, 
        category: "Vegetables", 
        name: "Potato", 
        price: 2.65, 
        description: "Starchy potato with a hearty feel", 
        inStock: true, 
        size: "1 lb", 
        image: "Potato" 
    },
    
    { 
        id: 112, 
        category: "Vegetables", 
        name: "Sweet Potato", 
        price: 2.85, 
        description: "Sweet potato with a rich orange hue", 
        inStock: true, 
        size: "1 lb", 
        image: "Sweetpotato" 
    },
    
    { 
        id: 113, 
        category: "Vegetables", 
        name: "Zucchini", 
        price: 2.55, 
        description: "Mild zucchini with a tender flesh", 
        inStock: true, 
        size: "1 lb", 
        image: "Zucchini" 
    },
    
    { 
        id: 114, 
        category: "Vegetables", 
        name: "Asparagus", 
        price: 2.95, 
        description: "Slim asparagus with a grassy note", 
        inStock: true, 
        size: "1 lb", 
        image: "Asparagus" 
    },
    
    { 
        id: 115, 
        category: "Vegetables", 
        name: "Mushroom", 
        price: 2.75, 
        description: "Meaty mushroom with an umami depth", 
        inStock: true, 
        size: "1 lb", 
        image: "Mushroom" 
    },
    
    { 
        id: 116, 
        category: "Vegetables", 
        name: "Cauliflower", 
        price: 3.25, 
        description: "Firm cauliflower with a mild nutty taste", 
        inStock: true, 
        size: "1 head", 
        image: "Cauliflower" 
    },
    
    { 
        id: 117, 
        category: "Vegetables", 
        name: "Eggplant", 
        price: 2.45, 
        description: "Glossy eggplant with a spongy texture", 
        inStock: true, 
        size: "1 whole", 
        image: "Eggplant" 
    },
    
    { 
        id: 118, 
        category: "Vegetables", 
        name: "GreenBeans", 
        price: 1.95, 
        description: "Crisp green beans with a fresh flavor", 
        inStock: true, 
        size: "1 lb", 
        image: "GreenBeans" 
    },
    
    { 
        id: 119, 
        category: "Vegetables", 
        name: "Radish", 
        price: 1.65, 
        description: "Peppery radish with a crisp bite", 
        inStock: true, 
        size: "1 lb", 
        image: "Radish" 
    },
    
    { 
        id: 120, 
        category: "Vegetables", 
        name: "Beet", 
        price: 2.35, 
        description: "Earthy beet with a deep red color", 
        inStock: true, 
        size: "1 lb", 
        image: "Beet" }
  ];
  
  export default products;