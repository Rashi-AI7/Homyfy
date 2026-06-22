const sampleListings = [
    {
        title: "Cozy Beachfront Cottage",
        description:
            "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=1200&h=800&fit=crop"
        },
        price: 1500,
        location: "Malibu",
        country: "United States",
    },
    {
        title: "Mountain Retreat Cabin",
        description:
            "Secluded cabin in the mountains with breathtaking views and modern amenities.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1518602164578-cd0074062767?w=1200&h=800&fit=crop"
        },
        price: 1200,
        location: "Aspen",
        country: "United States",
    },
    {
        title: "Urban Apartment",
        description:
            "Modern apartment located in the heart of downtown with easy access to restaurants and nightlife.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&h=800&fit=crop"
        },
        price: 900,
        location: "New York",
        country: "United States",
    },
    {
        title: "Rustic Farmhouse",
        description:
            "Charming farmhouse surrounded by rolling hills and farmland.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?w=1200&h=800&fit=crop"
        },
        price: 800,
        location: "Tuscany",
        country: "Italy",
    },
    {
        title: "Desert Villa",
        description:
            "Luxurious villa with a pool located in the middle of the desert.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1200&h=800&fit=crop"
        },
        price: 2000,
        location: "Dubai",
        country: "UAE",
    },
    {
        title: "Lakeside Cabin",
        description:
            "Wooden cabin with its own dock on Emerald Lake, the water so still in the mornings it doubles the mountains behind it.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1663550886635-44be9bd49df4?w=1200&h=800&fit=crop"
        },
        price: 1100,
        location: "British Columbia",
        country: "Canada",
    },
    {
        title: "Tropical Bungalow",
        description:
            "Open-air bungalow with a rice-paddy view, a five-minute scooter ride from the nearest beach.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=1200&h=800&fit=crop"
        },
        price: 1400,
        location: "Bali",
        country: "Indonesia",
    },
    {
        title: "Ski Chalet",
        description:
            "Cozy chalet near ski slopes, perfect for winter sports lovers.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1551524559-8af4e6624178?w=1200&h=800&fit=crop"
        },
        price: 1800,
        location: "Zermatt",
        country: "Switzerland",
    },
    {
        title: "Seaside Villa",
        description:
            "Spacious villa with a private beach and infinity pool.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&h=800&fit=crop"
        },
        price: 2500,
        location: "Santorini",
        country: "Greece",
    },
    {
        title: "Forest Treehouse",
        description:
            "Elevated treehouse with a wraparound deck, tucked into the jungle canopy with the sound of the rainforest below.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1652602723309-a16309084384?w=1200&h=800&fit=crop"
        },
        price: 1000,
        location: "Sunshine Coast",
        country: "Australia",
    },
    {
        title: "Historic Castle",
        description:
            "16th-century castle with working fireplaces in every room and a spiral staircase up to the battlements.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200&h=800&fit=crop"
        },
        price: 5000,
        location: "Edinburgh",
        country: "Scotland",
    },
    {
        title: "Island Hut",
        description:
            "Thatched-roof hut at the end of a private dock, with nothing but reef and open water on either side.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1637576308588-6647bf80944d?w=1200&h=800&fit=crop"
        },
        price: 900,
        location: "Fiji",
        country: "Fiji",
    },
    {
        title: "Countryside Manor",
        description:
            "Stone manor with manicured lawns and a circular drive, set well back from the road on its own private grounds.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1758612120966-b20c01160c7b?w=1200&h=800&fit=crop"
        },
        price: 2200,
        location: "Bavaria",
        country: "Germany",
    },
    {
        title: "Coastal Lighthouse",
        description:
            "Converted lighthouse keeper's quarters at Portland Head, with the beacon still operating overhead at night.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1530123985359-4fd0cce1ea8b?w=1200&h=800&fit=crop"
        },
        price: 1600,
        location: "Maine",
        country: "United States",
    },
    {
        title: "Safari Lodge",
        description:
            "Open-sided lodge on the migration route, with a resident guide who knows which waterhole to watch each morning.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200&h=800&fit=crop"
        },
        price: 2700,
        location: "Serengeti",
        country: "Tanzania",
    },
    {
        title: "Beach Hut",
        description:
            "Hand-painted beach hut steps from the sand, no AC, no frills, just a hammock and the sound of the waves.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1637720850856-bbc404cd0dd2?w=1200&h=800&fit=crop"
        },
        price: 400,
        location: "Goa",
        country: "India",
    },
    {
        title: "Riverside Houseboat",
        description:
            "Float gently on the backwaters in this fully equipped houseboat, complete with home-cooked meals and sunset views.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=1200&h=800&fit=crop"
        },
        price: 650,
        location: "Kerala",
        country: "India",
    },
    {
        title: "Parisian Loft",
        description:
            "Top-floor apartment above the zinc rooftops, a five-minute walk to the nearest metro and a clear line of sight to the Eiffel Tower at night.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1747246630708-dd91b294fca4?w=1200&h=800&fit=crop"
        },
        price: 1750,
        location: "Paris",
        country: "France",
    },
    {
        title: "Santa Fe Adobe House",
        description:
            "Sun-baked adobe home with warm earthen walls, a kiva fireplace, and panoramic desert mesa views.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1591474200742-8e512e6f98f8?w=1200&h=800&fit=crop"
        },
        price: 1050,
        location: "Santa Fe",
        country: "United States",
    },
    {
        title: "Kyoto Machiya Townhouse",
        description:
            "Century-old wooden townhouse on a quiet lattice-fronted street, ten minutes on foot from Kiyomizu-dera.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1758651794761-3271a0a507de?w=1200&h=800&fit=crop"
        },
        price: 1300,
        location: "Kyoto",
        country: "Japan",
    },
    {
        title: "Patagonian Mountain Cabin",
        description:
            "Small timber cabin facing a wall of glaciated peaks, closer to a trailhead than to any town.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1745750747233-c09276a878b3?w=1200&h=800&fit=crop"
        },
        price: 1600,
        location: "Patagonia",
        country: "Argentina",
    },
    {
        title: "Marrakech Riad",
        description:
            "Riad with a tiled plunge pool at its center and a rooftop terrace for mint tea, just past the spice market in the medina.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1570135460243-84a775827316?w=1200&h=800&fit=crop"
        },
        price: 950,
        location: "Marrakech",
        country: "Morocco",
    },
    {
        title: "Norwegian Fjord Cabin",
        description:
            "Minimalist timber cabin perched above a fjord, with a wood-burning stove and front-row seats to the northern lights.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?w=1200&h=800&fit=crop"
        },
        price: 1900,
        location: "Lofoten",
        country: "Norway",
    },
];
module.exports = { data: sampleListings };