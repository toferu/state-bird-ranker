const stateBirds = [
    {
        image: "https://statesymbolsusa.org/sites/statesymbolsusa.org/files/styles/large/public/primary-images/NorthernFlickerMaleALbirdsymbol.jpg?itok=xf9EnXCs",
        state: "Alabama",
        name: "Northern Flicker",
        pro: "Eats termites",
        con: "Symbol of the state since Civil War"
    },
    {
        image: "https://statesymbolsusa.org/sites/statesymbolsusa.org/files/styles/large/public/Willow_Ptarmigan_3web.jpg?itok=OBRZsj9c",
        state: "Alaska",
        name: "Willow Ptarmigan",
        pro: "Changes colors based on the season (open-minded?)",
        con: "The cocks are agressive and territorial in summer"
    },
    {
        image: "https://statesymbolsusa.org/sites/statesymbolsusa.org/files/styles/large/public/primary-images/CactusWren-AZstatebird.jpg?itok=EgpVNLhk",
        state: "Arizona",
        name: "Cactus Wren",
        pro: "Eats wasps",
        con: "Destroy other bird's nests and eggs (xenophobic)"
    },
    {
        image: "https://statesymbolsusa.org/sites/statesymbolsusa.org/files/styles/large/public/mockingbird_miller_3web.jpg?itok=CvAYTJ8K",
        state: "Arkansas, Florida, Mississippi, Tennessee, and Texas",
        name: "Mockingbird",
        pro: "Known for their hardiness and adaptability",
        con: "Represents states with questionable concepts of patriotism"
    },
    {
        image: "https://statesymbolsusa.org/sites/statesymbolsusa.org/files/styles/large/public/California_Quail2.jpg?itok=B-FpSx2_",
        state: "California",
        name: "California Quail",
        pro: "Cute n sassy",
        con: "Smol n dainty"
    },
    {
        image: "https://statesymbolsusa.org/sites/statesymbolsusa.org/files/styles/large/public/larkbunting_swbirders2.jpg?itok=bQuzOGU7",
        state: "Colorado",
        name: "Lark Bunting",
        pro: "Lots of chutzpah",
        con: "Looks drab in winter"
    },
    {
        image: "https://statesymbolsusa.org/sites/statesymbolsusa.org/files/styles/large/public/primary-images/RobinAmericanRobin.jpg?itok=f1kHaoej",
        state: "Connecticut & Wisconin",
        name: "American Robin",
        pro: "Adapted to modern lifestyles",
        con: "Looks European (pretentious?)"
    },
    {
        image: "https://statesymbolsusa.org/sites/statesymbolsusa.org/files/styles/large/public/primary-images/wood-thrush-DC-bird.jpg?itok=lzUUD_MX",
        state: "N/A: District of Columbia",
        name: "Wood Thrush",
        pro: "Pot-bellied like all good patriots",
        con: "Reclusive"
    },
    {
        image: "https://www.gannett-cdn.com/-mm-/703eba0a903b88f385ecb3396c95b279914691c0/c=0-185-3674-2261/local/-/media/2017/08/28/Wilmington/Wilmington/636395319497547040-Blue-Hen-022.jpg",
        state: "Delaware",
        name: "Blue Hen Chicken",
        pro: "Famously good at winning fights against roosters",
        con: "snowflakes say cockfights are bad"
    },
    {
        image: "https://statesymbolsusa.org/sites/statesymbolsusa.org/files/styles/large/public/primary-images/brownthrasherGeorgiaBird.jpg?itok=Ng4G_c92",
        state: "Georgia",
        name: "Brown Thrasher",
        pro: "kinda big",
        con: "sus latin name: 'Toxostoma rufum'"
    },
    {
        image: "https://statesymbolsusa.org/sites/statesymbolsusa.org/files/styles/large/public/primary-images/birdnenehawaiiangoose.jpg?itok=Yc4N35nE",
        state: "Hawaii",
        name: "Nene",
        pro: "Too cool to fly or swim much even tho they have wings and webbed feet",
        con: "Endangered snowflake even tho it does not have many predators"
    },
    {
        image: "https://statesymbolsusa.org/sites/statesymbolsusa.org/files/styles/large/public/primary-images/wood-thrush-DC-bird.jpg?itok=lzUUD_MX",
        state: "N/A: District of Columbia",
        name: "Wood Thrush",
        pro: "Pot-bellied like all good patriots",
        con: "Reclusive"
    },
    {
        image: "https://statesymbolsusa.org/sites/statesymbolsusa.org/files/styles/large/public/primary-images/BrownPelicanstatebirdLA0.jpg?itok=GwtEnuHo",
        state: "Louisiana",
        name: "Brown Pelican",
        pro: "Shows a generous and nurturing attitude toward their young",
        con: "looks musty"
    },
    {
        image: "https://statesymbolsusa.org/sites/statesymbolsusa.org/files/styles/large/public/primary-images/blackcappedchickadeebird.jpg?itok=ecR6suEs",
        state: "Maine & Massachusetts",
        name:  "Black-capped Chickadee",
        pro: "Cheerful, energetic, and social",
        con: "Has disparaging nicknames like 'dickybird' and 'tomtit'"
    },
    {
        image: "https://statesymbolsusa.org/sites/statesymbolsusa.org/files/styles/large/public/primary-images/baltimoreorioleMDstatebird.jpg?itok=_U4-7WXQ",
        state: "Maryland",
        name: "Baltimore Oriole",
        pro: "Has a baseball team named after it. What's more American than that?",
        con: "Can't survive in this fast-paced modern world"
    },
    {
        image: 'https://statesymbolsusa.org/sites/statesymbolsusa.org/files/primary-images/westernmeadowlarkbird41.jpg',
        state: 'Kansas, Montana, Nebraska, North Dakota, Oregon, Wyoming',
        name: 'Western Meadowlark',
        pro: 'Featured in the Paramount+ hit series Yellowstone',
        con: 'Going extinct because of pesticide usage',
    },
    {
        image: "https://statesymbolsusa.org/sites/statesymbolsusa.org/files/styles/symbol_thumbnail__medium/public/primary-images/birdmountainbluebirdmale.jpg?itok=UVopwcK3",
        state: 'Nevada, Idaho',
        name: 'Mountain Bluebird',
        pro: 'Vibrant Blue color (liberal?)',
        con: 'Hunted Easily because of vibrant blue color',
    },
    {
        image: "https://statesymbolsusa.org/sites/statesymbolsusa.org/files/styles/symbol_thumbnail__medium/public/primary-images/birdmountainbluebirdmale.jpg?itok=UVopwcK3",
        state: 'New Hampshire',
        name: 'Red-Tailed Hawk',
        pro: 'Chosen to represent the State by school children',
        con: 'Can be aggressive at times (is that even a con?)',
    },
    {
        image: "https://statesymbolsusa.org/sites/statesymbolsusa.org/files/styles/symbol_thumbnail__medium/public/primary-images/EasternAmericanGoldfinchthistle.jpg?itok=hOTFiBEV",
        state: 'Iowa, New Jersey, Washington',
        name: 'Eastern Goldfinch',
        pro: 'Also called the wild canary (canary in the coal mine?)',
        con: 'Chirps a bit loudly',
    },
    {
        image: 'https://statesymbolsusa.org/sites/statesymbolsusa.org/files/styles/symbol_thumbnail__medium/public/primary-images/Roadrunner-001.jpg?itok=3EfiTn78',
        state: 'New Mexico',
        name: 'Greater Roadrunner',
        pro: 'Meep Meep',
        con: 'Greater in the name (MAGA?)',
    },
    {
        image: "https://statesymbolsusa.org/sites/statesymbolsusa.org/files/styles/symbol_thumbnail__medium/public/easternBluebird_ownby1.jpg?itok=3TJY5cDY",
        state: 'New York, Missouri',
        name: 'Eastern Blue Bird',
        pro: 'Blue in color (Bernie Supporter)',
        con: 'Looks like it will take your sandwich',
    },
    {
        image: "https://statesymbolsusa.org/sites/statesymbolsusa.org/files/styles/symbol_thumbnail__medium/public/primary-images/pairnortherncardinals.jpg?itok=wcj7yWik",
        state: 'Illinois, Indiana, Kentucky, North Carolina, Ohio, Virginia, West Virginia',
        name: 'Northern Cardinal',
        pro: 'Very Popular',
        con: 'Bright Red (MAGA?)',
    },
    {
        image: "https://statesymbolsusa.org/sites/statesymbolsusa.org/files/styles/symbol_thumbnail__medium/public/easternBluebird_ownby1.jpg?itok=3TJY5cDY",
        state: 'Oklahoma',
        name: 'Scissor-tailed Fly Catcher',
        pro: 'Catches Flies',
        con: 'The name is a mouthful',
    },
    {
        image: "https://statesymbolsusa.org/sites/statesymbolsusa.org/files/styles/symbol_thumbnail__medium/public/primary-images/Ruffed-grouse-PA-statebird.jpg?itok=9Q1WplB0",
        state: 'Pennsylvania',
        name: 'Ruffed Grouse',
        pro: 'Camoflauges Easily',
        con: 'Aggressively territorial',
    },
    {
        image: "https://statesymbolsusa.org/sites/statesymbolsusa.org/files/styles/symbol_thumbnail__medium/public/primary-images/roosterrhodeislandred.jpg?itok=qQG1e2jk",
        state: 'Rhode Island',
        name: 'Red Chicken',
        pro: 'Chicken is tasty',
        con: "Can't eat it because it's protected",
    },
    {
        image: "https://statesymbolsusa.org/sites/statesymbolsusa.org/files/styles/symbol_thumbnail__medium/public/primary-images/CarolinaWrenThryothorusludovicianus.jpg?itok=W4P0sy3T",
        state: 'South Carolina',
        name: 'Carolina Wren',
        pro: 'Small Enough to fit in your hand and a bird in the hand is better than two in the bush',
        con: "Not Gamecock red",
    },
    {
        image: "https://statesymbolsusa.org/sites/statesymbolsusa.org/files/styles/large/public/primary-images/ringneckedpheasantbirdSD.jpg?itok=XhNjJdHm",
        state: 'South Dakota',
        name: 'Ring-Necked Pheasant',
        pro: 'Beautiful Plumage',
        con: "Frequently leaves excrement on Mount Rushmore",
    },
    {
        image: "https://statesymbolsusa.org/sites/statesymbolsusa.org/files/styles/symbol_thumbnail__medium/public/CaliforniaSeagulls.jpg?itok=J4Bv0APq",
        state: 'Utah',
        name: 'California Gull ',
        pro: 'Saved the Mormons from famine by eating crop-killing crickets',
        con: "Kicked out of California for radical views",
    },
    {
        image: "https://statesymbolsusa.org/sites/statesymbolsusa.org/files/styles/symbol_thumbnail__medium/public/Hermit_Thrush_web.jpg?itok=h9M_KR3B",
        state: 'Vermont',
        name: 'Hermit Thrush',
        pro: 'Good Singer',
        con: "Is a Hermit",
    },
    {
        image: "https://statesymbolsusa.org/sites/statesymbolsusa.org/files/styles/symbol_thumbnail__medium/public/primary-images/commonloonstatebirdMN.jpg?itok=QTBDXBJD",
        state: 'Minnesota',
        name: 'Common Loon',
        pro: 'Seeing them in the morning mist on the Lake is lovely',
        con: "Loony",
    },
    {
        image: "https://statesymbolsusa.org/sites/statesymbolsusa.org/files/styles/large/public/primary-images/birdAmericanRobin-01.jpg?itok=I8Ijwqgp",
        state: 'Michigan',
        name: 'Robin Redbreast',
        pro: 'Looks like a good dinner date',
        con: "Looks like it talks a lot",
    },
]

export default stateBirds