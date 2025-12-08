const Sohrai = "/Photos/EventsImage/Soharai.jpg";
const Chhau = "/Photos/EventsImage/Chhau.jpg";
const Karma = "/Photos/EventsImage/Karam.jpg";
const Chhat = "/Photos/EventsImage/chhat-pooja.jpg";
const Jhumair = "/Photos/EventsImage/jhumair-dance.jpg";
const Sarhul = "/Photos/EventsImage/Sarhul.jpg";
const Tribal = "/Photos/EventsImage/Tribal-music.jpg";
const Jharkhand = "/Photos/EventsImage/Jharkhand.jpg";  
const Chaibasa = "/Photos/EventsImage/Chaibasa-event.jpg";    
const Jitiya = "/Photos/EventsImage/Jitiya.jpg";        




export const eventsData = [
  {
  id: 1,
  title: "Chhath Puja – Arghya Offering Festival",
  categoryKey: "Religious",
  label: "Religious Festival",
  category: "Hindu Festival",
  dateRange: "Nov 17–20, 2025 • 4 Days",
  date: "November 17-20, 2025",
  startDay: 17,
  location: "Various Ghats, Ranchi & Hazaribagh",
  priceLabel: "Free Entry",
  isFree: true,
  badge: "Free",
  image: Chhat, // <-- your imported local image
  shortDescription:
    "A sacred four-day festival dedicated to the Sun God, celebrated with traditional rituals along rivers and ponds.",
  
  description:
    "Chhath Puja is one of the most significant festivals celebrated across Jharkhand, especially in cities like Ranchi, Hazaribagh, Dhanbad, and Jamshedpur. The festival spans four days—Nahay Khay, Kharna, Sandhya Arghya, and Usha Arghya—during which devotees observe strict rituals, fasting, and offerings to the Sun God (Surya) and Chhathi Maiya. Thousands gather along riverbanks and ponds, lighting diyas and singing traditional folk songs. The festival highlights purity, devotion, gratitude, and harmony with nature. Women observe rigorous fasting for family wellness and prosperity, creating a powerful spiritual atmosphere at ghats during sunrise and sunset. Cultural performances, folk songs, and community gatherings make this festival an unforgettable experience.",
  
  isFeatured: true,
  isThisWeek: false,

  highlights: [
    "Sunset & sunrise Arghya rituals at major ghats",
    "Traditional folk songs of Chhath",
    "Beautifully decorated ghats with thousands of diyas",
    "Nahay-Khay and Kharna rituals",
    "Cultural performances and devotional music",
    "Eco-friendly celebrations promoting river conservation",
    "Community offerings and prasad distribution",
    "4-day spiritual fasting ritual observed by devotees"
  ],

  organizer: "Jharkhand Cultural & Religious Committee",
  timings: "4:00 AM – 7:00 PM (Varies by ritual)",
  ageRestriction: "All ages welcome",
  languages: "Hindi, Maithili, Bhojpuri, Nagpuri"
}
,
  {

    id: 10,
    title: "Sohrai Art Festival – Hazaribagh",
    categoryKey: "Cultural",
    label: "Cultural Festivals",
    category: "Cultural Festival",
    dateRange: "Nov 20–25, 2025 • 6 Days",
    date: "November 20-25, 2025",
    startDay: 20, 
    location: "Hazaribagh District, Jharkhand",
    priceLabel: "₹100",
    isFree: false,
    badge: "₹100",
    tag: "Featured",
    image: Sohrai,
    shortDescription: "Experience the vibrant Sohrai tribal art tradition with local artists.",
    description: "The Sohrai Art Festival celebrates one of Jharkhand's most ancient and beautiful art forms. Sohrai is a traditional harvest mural art practiced by tribal women in Hazaribagh district. During this 6-day festival, you'll witness stunning wall paintings featuring geometric patterns, animals, and nature motifs created using natural pigments. The festival includes live art demonstrations, workshops where you can learn the techniques, cultural performances, and interactions with master artists from various villages. This UNESCO-recognized art form dates back to the Mesolithic era and represents the rich cultural heritage of Jharkhand's tribal communities.",
    isFeatured: true,
    isThisWeek: false,
    highlights: [
      "Live Sohrai wall painting demonstrations by tribal women artists",
      "Hands-on workshops to learn traditional art techniques",
      "Exhibition of ancient Sohrai art from various villages",
      "Cultural performances including folk songs and dances",
      "Meet and interact with master Sohrai artists",
      "Photography opportunities of stunning murals",
      "Local handicraft and art market"
    ],
    organizer: "Jharkhand Tourism & Culture Department",
    timings: "10:00 AM - 6:00 PM daily",
    ageRestriction: "All ages welcome",
    languages: "Hindi, English, Local tribal languages"
  },
  {
    id: 2,
    title: "Chhau Dance Festival",
    categoryKey: "Tribal",
    label: "Tribal Dance & Art",
    category: "Tribal Performing Arts",
    dateRange: "Dec 10–14, 2025 • 5 Days",
    date: "December 10-14, 2025",
    startDay: 10,
    location: "Seraikela, Jharkhand",
    priceLabel: "₹150",
    isFree: false,
    badge: "₹150",
    tag: "Featured",
    image: Chhau,
    shortDescription: "Witness the spectacular masked Chhau dance recognized by UNESCO.",
    description: "Chhau Dance Festival showcases one of India's most dynamic and visually stunning martial dance-drama traditions. Recognized as a UNESCO Intangible Cultural Heritage, Chhau combines martial arts, acrobatics, and folk traditions with elaborate masks and costumes. The Seraikela style is known for its grace and subtlety. Over five days, watch renowned Chhau troupes perform mythological stories through powerful movements and expressions. The festival features evening performances under open skies, mask-making workshops, backstage tours, and discussions with veteran dancers. Experience the raw energy and spiritual depth of this 400-year-old tradition.",
    isFeatured: true,
    isThisWeek: false,
    highlights: [
      "Nightly Chhau dance performances by master troupes",
      "UNESCO Intangible Cultural Heritage celebration",
      "Traditional mask-making workshops",
      "Behind-the-scenes access to costume preparation",
      "Stories from mythology enacted through dance",
      "Training demonstrations showing martial art techniques",
      "Meet legendary Chhau gurus and performers",
      "Evening bonfire cultural gatherings"
    ],
    organizer: "Seraikela Cultural Trust",
    timings: "6:00 PM - 10:00 PM (Evening performances)",
    ageRestriction: "Suitable for ages 8+",
    languages: "Hindi, Bengali, English"
  },
  {
    id: 3,
    title: "Karma Festival Celebration",
    categoryKey: "Seasonal",
    label: "Seasonal Events",
    category: "Harvest Festival",
    dateRange: "Aug 15–17, 2025 • 3 Days",
    date: "August 15-17, 2025",
    startDay: 15,
    location: "Multiple Villages, Ranchi",
    priceLabel: "Free Entry",
    isFree: true,
    badge: "Free",
    tag: "Featured",
    image: Karma,
    shortDescription: "Celebrate the harvest festival with traditional Karma dance around sacred trees.",
    description: "Karma Festival is one of the most important celebrations for tribal communities in Jharkhand, marking the harvest season and worshipping the Karma tree (Neolamarckia cadamba). This three-day festival features the beautiful Karma dance where young men and women dance in circles around the sacred Karma branch, expressing gratitude for good harvest and prosperity. The festival includes traditional music with Mandar drums, local cuisine prepared from fresh harvest, colorful traditional attire, and community gatherings. Villages across Ranchi district open their celebrations to visitors, offering an authentic glimpse into tribal culture, traditions, and the deep connection between nature and community life.",
    isFeatured: true,
    isThisWeek: true,
    highlights: [
      "Traditional Karma dance around the sacred tree branch",
      "Rhythmic Mandar drum performances",
      "Authentic tribal cuisine from fresh harvest",
      "Colorful traditional costumes and jewelry",
      "Village-to-village cultural tours",
      "Folk songs celebrating nature and harvest",
      "Community feasts and gatherings",
      "Children's traditional games and activities"
    ],
    organizer: "Ranchi Village Cultural Committee",
    timings: "All day celebration (Main events: 4:00 PM - 11:00 PM)",
    ageRestriction: "Open to all ages",
    languages: "Hindi, Nagpuri, Kurukh, Mundari"
  },
  {
    id: 4,
    title: "Sarhul Spring Festival",
    categoryKey: "Religious",
    label: "Religious Events",
    category: "Religious & Nature Festival",
    dateRange: "March 20–22, 2025 • 3 Days",
    date: "March 20-22, 2025",
    startDay: 21,
    location: "Rural Villages, Ranchi",
    priceLabel: "Free Entry",
    isFree: true,
    badge: "Free",
    tag: "Featured",
    image: Sarhul,
    shortDescription: "Spring worship festival celebrating nature, Sal trees and village deities.",
    description: "Sarhul is the most sacred festival for tribal communities, marking the arrival of spring and the worship of nature. The festival centers around the sacred Sal tree (Shorea robusta), considered the abode of village deities. Witness the Pahan (village priest) offering prayers and Sal flowers to the deities, followed by distribution of Sal flowers to villagers as blessings. The three-day celebration includes traditional Sarhul songs, community dances, preparation of Handia (traditional rice beer), and colorful processions. Villages are decorated with fresh Sal leaves and flowers. This festival beautifully showcases the tribal philosophy of living in harmony with nature and respecting all forms of life.",
    isFeatured: true,
    isThisWeek: false,
    highlights: [
      "Sacred Sal tree worship ceremony led by village priest",
      "Distribution of blessed Sal flowers to devotees",
      "Traditional Sarhul folk songs and music",
      "Preparation of sacred Handia (rice beer)",
      "Colorful village processions with traditional attire",
      "Community prayers for prosperity and good harvest",
      "Traditional tribal cuisine feast",
      "Children learning about nature worship traditions"
    ],
    organizer: "Tribal Welfare Society, Ranchi",
    timings: "Dawn to dusk ceremonies (Best time: 6:00 AM - 12:00 PM)",
    ageRestriction: "All ages welcome",
    languages: "Hindi, Mundari, Kurukh, Ho"
  },
 {
  id: 5,
  title: "Jhumair Dance Festival – Folk Rhythms of Jharkhand",
  categoryKey: "Dance",
  label: "Folk Dance & Culture",
  category: "Cultural Festival",
  dateRange: "Oct 10–12, 2025 • 3 Days",
  date: "October 10-12, 2025",
  startDay: 10,
  location: "Ranchi, Bokaro & Surrounding Tribal Areas",
  priceLabel: "Free Entry",
  isFree: true,
  badge: "Free",
  image: Jhumair, // <-- your imported local image
  shortDescription:
    "Celebrate the iconic Jhumair folk dance performed with graceful circular formations, soulful songs, and rhythmic steps.",
  
  description:
    "The Jhumair Dance Festival is one of Jharkhand’s most cherished cultural gatherings, celebrating the traditional folk dance loved by the Munda, Kurmi, Oraon, and other tribal communities. Known for its elegant circular formations, synchronized footwork, and melodious Jhumar songs, the festival showcases the spirit of unity and joy. Over three vibrant days, dance groups from various districts perform expressive routines accompanied by instruments like the Mandar, Dhol, Nagara, Bansuri, and Kartal. The festival also includes workshops on tribal dance forms, storytelling sessions explaining the cultural significance of harvest celebrations, and interactive performances where visitors can learn basic Jhumair steps. Evening sessions glow with lantern-lit performances, creating a magical cultural atmosphere. Jhumair is not just dance—it’s a celebration of community, rhythm, and the living heritage of Jharkhand.",

  isFeatured: true,
  isThisWeek: false,

  highlights: [
    "Live Jhumair performances by renowned tribal dance groups",
    "Workshops teaching Jhumair steps and formations",
    "Traditional folk songs accompanied by Mandar & Nagara rhythms",
    "Harvest celebration themes with storytelling sessions",
    "Cultural procession showcasing regional dance costumes",
    "Exhibition of tribal musical instruments",
    "Young artists’ Jhumair competition",
    "Evening lantern-lit folk dance showcase"
  ],

  organizer: "Jharkhand Folk Art & Cultural Society",
  timings: "3:00 PM – 9:30 PM (Daily)",
  ageRestriction: "All ages welcome",
  languages: "Nagpuri, Kurmali, Hindi, Regional tribal languages"
},


  {
    id: 6,
    title: "Tribal Music & Drums Festival",
    categoryKey: "Music",
    label: "Music & Performances",
    category: "Music Festival",
    dateRange: "Jan 5–7, 2025 • 3 Days",
    date: "January 5-7, 2025",
    startDay: 5,
    location: "Jamshedpur Convention Center",
    priceLabel: "₹250",
    isFree: false,
    badge: "₹250",
    image: Tribal,
    shortDescription: "Immerse in rhythms of indigenous drums, songs and performances.",
    description: "The Tribal Music & Drums Festival brings together the most talented indigenous musicians and drummers from across Jharkhand and neighboring states. Experience the powerful rhythms of Mandar, Dhol, Nagara, and traditional percussion instruments. The festival features day-long performances, interactive drum circles, workshops on traditional instruments, and fusion performances blending tribal music with contemporary sounds. Learn about the cultural significance of different drum patterns, their use in rituals, and their role in storytelling. Evening concerts showcase renowned tribal music bands and solo artists performing ancient songs passed down through generations.",
    isFeatured: false,
    isThisWeek: false,
    highlights: [
      "Live performances by master drummers and musicians",
      "Interactive drum circle sessions",
      "Workshops on playing traditional instruments",
      "Fusion music blending tribal and modern styles",
      "Documentary screenings on tribal music heritage",
      "Instrument exhibition and demonstration",
      "Evening concerts under the stars",
      "Meet-and-greet with renowned tribal artists"
    ],
    organizer: "Jamshedpur Arts Foundation",
    timings: "11:00 AM - 9:00 PM",
    ageRestriction: "All ages (Kids under 5 free)",
    languages: "Hindi, English, Santali"
  },
  {
    id: 7,
    title: "Chaibasa Haat – Local Fair",
    categoryKey: "Fairs",
    label: "Local Fairs",
    category: "Weekly Market Fair",
    dateRange: "Every Saturday • Weekly",
    date: "Every Saturday",
    startDay: 8,
    location: "Chaibasa Market Ground",
    priceLabel: "Free Entry",
    isFree: true,
    badge: "Free",
    image: Chaibasa,
    shortDescription: "Colorful weekly market with crafts, food and local performances.",
    description: "Chaibasa Haat is a vibrant weekly market that has been the heartbeat of the region for generations. Every Saturday, tribal communities from surrounding villages gather to sell their handmade crafts, fresh organic produce, traditional medicines, and local delicacies. The market transforms into a cultural hub with spontaneous folk performances, storytelling sessions, and traditional games. Browse through colorful handwoven textiles, bamboo crafts, terracotta pottery, tribal jewelry, and organic products. Taste authentic tribal cuisine like Rugra (mushroom curry), Dhuska, and Pitha. The haat provides direct support to tribal artisans and farmers while offering visitors an authentic cultural shopping experience.",
    isFeatured: false,
    isThisWeek: true,
    highlights: [
      "Authentic handmade tribal crafts and textiles",
      "Fresh organic produce directly from farmers",
      "Traditional medicine and herbal products",
      "Street food stalls with local delicacies",
      "Spontaneous folk music and dance performances",
      "Handwoven sarees and traditional garments",
      "Bamboo and terracotta handicrafts",
      "Direct interaction with tribal artisans"
    ],
    organizer: "Chaibasa Municipal Corporation",
    timings: "7:00 AM - 6:00 PM every Saturday",
    ageRestriction: "Open to all",
    languages: "Hindi, Ho, Mundari"
  },
  

{
  id: 9,
  title: "Jitiya Festival – Mothers’ Vrat for Children’s Well-being",
  categoryKey: "Religious",
  label: "Cultural & Religious Festival",
  category: "Traditional Festival",
  dateRange: "Sep 6–8, 2025 • 3 Days",
  date: "September 6-8, 2025",
  startDay: 6,
  location: "Rural Jharkhand, Ranchi, Dumka & Santhal Pargana Region",
  priceLabel: "Free Entry",
  isFree: true,
  badge: "Free",
  image: Jitiya, // <-- your local imported image
  shortDescription:
    "A sacred three-day fast observed by mothers for the prosperity, health, and long life of their children.",

  description:
    "Jitiya, also known as Jivitputrika Vrat, is a deeply revered festival in tribal and rural regions of Jharkhand, especially among the Maithil, Bhojpuri, and Santhal communities. The festival spans three spiritually significant days—Praharn, Kharna, and Nirjala Vrat—during which mothers observe strict fasting for the protection and longevity of their children. Women gather near rivers, village ponds, and sacred trees for rituals involving holy chants, Jitiya katha, and vibrant cultural traditions. The symbolic figure of ‘Jitam Jivitputra’ inspires the vrat, representing devotion, sacrifice, and maternal love. The festival atmosphere is filled with traditional songs, community gatherings, clay idol worship, red-yellow ritual threads, and early-morning folk prayers. In many villages, elders narrate ancient stories associated with the vrat, reinforcing cultural heritage and intergenerational bonding. Jitiya is not merely a fast—it is a celebration of motherhood, faith, and the spiritual strength of Jharkhand’s communities.",

  isFeatured: true,
  isThisWeek: false,

  highlights: [
    "Traditional Jitiya Katha recital by village elders",
    "Early-morning river rituals and offerings",
    "Women’s Nirjala fast observed with collective prayers",
    "Folk songs celebrating motherhood and devotion",
    "Clay idol worship of Jitam Jivatputra",
    "Ritual tying of protective red-yellow thread",
    "Community gatherings and cultural storytelling",
    "Sunrise group chanting at village ghats"
  ],

  organizer: "Jharkhand Rural Cultural Society",
  timings: "5:00 AM – 7:00 PM (Varies by ritual)",
  ageRestriction: "All ages welcome",
  languages: "Hindi, Bhojpuri, Maithili, Nagpuri, Santali"
}

];