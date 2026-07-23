/* ================= RIDECIRCLE — SHARED RIDE DATA =================
   Used by community.html (cards) and ride-details.html (detail view).
   In a real backend this would come from an API; here it's static
   data plus whatever a signed-in rider has joined/reviewed, which is
   layered on top from localStorage.
=================================================================== */

const RIDE_DATA = {

    "spiti-valley": {
        title: "Spiti Valley Expedition",
        club: "Mountain Riders Club",
        route: "Manali → Kaza → Spiti Valley",
        distanceKm: 412,
        difficulty: "Hard",
        date: "Aug 15, 2026",
        duration: "4 days",
        capacity: 50,
        joined: 42,
        cover: "linear-gradient(160deg,#6b5a3a,#241d10)",
        about: "A high-altitude crossing through cold desert valleys, monasteries and switchback passes. Riders should be comfortable with rough tarmac, water crossings and thin air above 4,000m.",
        highlights: ["Rohtang Pass crossing", "Key Monastery stop", "Chandratal night camp", "Support van + mechanic on route"],
        gallery: [
            "linear-gradient(160deg,#7c6a45,#2b2116)",
            "linear-gradient(160deg,#4a5a35,#1c2416)",
            "linear-gradient(160deg,#5a4632,#241d10)",
            "linear-gradient(160deg,#3a4a5a,#141d24)"
        ],
        videos: [
            { label: "Aerial flyover — Kaza valley floor", duration: "1:42" },
            { label: "Rider POV — Kunzum Pass switchbacks", duration: "3:10" }
        ],
        members: [
            { initials: "AS", name: "Arjun Singh", role: "Ride Lead" },
            { initials: "PK", name: "Priya Kaur", role: "Rider" },
            { initials: "RV", name: "Rohit Verma", role: "Rider" },
            { initials: "KR", name: "Kavya Reddy", role: "Rider" },
            { initials: "AK", name: "Aditya Kumar", role: "Mechanic" },
            { initials: "SI", name: "Sneha Iyer", role: "Rider" }
        ],
        reviews: [
            { name: "Dev Malhotra", stars: 5, text: "Best organised group ride I've done — the support van saved us twice." },
            { name: "Zara Ahmed", stars: 5, text: "Chandratal at night was worth every switchback. Ride lead kept the pace sane." },
            { name: "Rohit Verma", stars: 4, text: "Tough on the bike, but the route planning was spot on." }
        ]
    },

    "coastal-cruise": {
        title: "Coastal Highway Cruise",
        club: "Coastal Riders Network",
        route: "Mumbai → Goa via NH66",
        distanceKm: 590,
        difficulty: "Easy",
        date: "Aug 22, 2026",
        duration: "3 days",
        capacity: 200,
        joined: 128,
        cover: "linear-gradient(160deg,#4a4a4a,#141414)",
        about: "An easy-paced coastal run down NH66 with beach-town stopovers, seafood breaks and wide, well-surfaced roads. Great for first-time group riders.",
        highlights: ["Ganpatipule beach stop", "Sunset ride into Goa", "Beginner-friendly pace", "Hotel stays pre-booked"],
        gallery: [
            "linear-gradient(160deg,#2d5a6b,#0d2830)",
            "linear-gradient(160deg,#5a4632,#2b2116)",
            "linear-gradient(160deg,#3a3a3a,#111)",
            "linear-gradient(160deg,#4a5a35,#1c2416)"
        ],
        videos: [
            { label: "Drone shot — NH66 coastal stretch", duration: "2:05" },
            { label: "Group arrival — Goa beach", duration: "1:20" }
        ],
        members: [
            { initials: "PK", name: "Priya Kaur", role: "Ride Lead" },
            { initials: "SI", name: "Sneha Iyer", role: "Rider" },
            { initials: "DM", name: "Dev Malhotra", role: "Rider" },
            { initials: "ZA", name: "Zara Ahmed", role: "Rider" }
        ],
        reviews: [
            { name: "Kavya Reddy", stars: 5, text: "So relaxed compared to the mountain rides. Perfect for my first group ride." },
            { name: "Aditya Kumar", stars: 4, text: "Roads were great, wish we had one more beach stop." }
        ]
    },

    "ladakh-challenge": {
        title: "Ladakh Grand Challenge",
        club: "Himalayan Riders Guild",
        route: "Leh → Khardung La → Nubra Valley",
        distanceKm: 220,
        difficulty: "Hard",
        date: "Sep 5, 2026",
        duration: "5 days",
        capacity: 75,
        joined: 67,
        cover: "linear-gradient(160deg,#333,#0f0f0f);",
        about: "The classic high-pass challenge ride to one of the highest motorable roads on earth, followed by the cold desert dunes of Nubra Valley.",
        highlights: ["Khardung La summit", "Nubra sand dunes", "Oxygen support kits provided", "Acclimatisation day in Leh"],
        gallery: [
            "linear-gradient(160deg,#4b4b60,#17171f)",
            "linear-gradient(160deg,#6b5a3a,#241d10)",
            "linear-gradient(160deg,#333,#0f0f0f)",
            "linear-gradient(160deg,#5a4632,#2b2116)"
        ],
        videos: [
            { label: "Summit sign — Khardung La", duration: "0:58" },
            { label: "Convoy crossing Nubra dunes", duration: "2:32" }
        ],
        members: [
            { initials: "AK", name: "Aditya Kumar", role: "Ride Lead" },
            { initials: "ZA", name: "Zara Ahmed", role: "Rider" },
            { initials: "RV", name: "Rohit Verma", role: "Rider" },
            { initials: "AS", name: "Arjun Singh", role: "Rider" }
        ],
        reviews: [
            { name: "Sneha Iyer", stars: 5, text: "Bucket list ride, done right. The acclimatisation day mattered a lot." },
            { name: "Priya Kaur", stars: 5, text: "Guides knew every water crossing on the route. Felt safe the whole way." }
        ]
    },

    "ncr-warriors": {
        title: "Weekend Warriors NCR",
        club: "NCR Bikers Brotherhood",
        route: "Delhi → Alwar → Sariska",
        distanceKm: 210,
        difficulty: "Medium",
        date: "Aug 17, 2026",
        duration: "2 days",
        capacity: 40,
        joined: 35,
        cover: "linear-gradient(160deg,#4b4b60,#17171f)",
        about: "A short weekend escape from the city — forest roads, a wildlife sanctuary detour and an easy return on Sunday afternoon.",
        highlights: ["Sariska forest detour", "Overnight stay at Alwar", "Easy Sunday return", "Beginner + intermediate friendly"],
        gallery: [
            "linear-gradient(160deg,#3a4a2e,#141d10)",
            "linear-gradient(160deg,#4b4b60,#17171f)",
            "linear-gradient(160deg,#5a4632,#2b2116)",
            "linear-gradient(160deg,#333,#0f0f0f)"
        ],
        videos: [
            { label: "Forest road stretch — Sariska", duration: "1:15" }
        ],
        members: [
            { initials: "DM", name: "Dev Malhotra", role: "Ride Lead" },
            { initials: "KR", name: "Kavya Reddy", role: "Rider" },
            { initials: "PK", name: "Priya Kaur", role: "Rider" }
        ],
        reviews: [
            { name: "Arjun Singh", stars: 4, text: "Perfect quick weekend ride, didn't eat into Monday at all." }
        ]
    }
};
