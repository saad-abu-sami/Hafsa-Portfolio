
import MapIcon from '@mui/icons-material/Map';
import LandscapeIcon from '@mui/icons-material/Landscape';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import NearMeIcon from '@mui/icons-material/NearMe';
import FlightIcon from '@mui/icons-material/Flight';
import DirectionsBoatIcon from '@mui/icons-material/DirectionsBoat';

export const footprintsData = [
   {
      id: 1,
      title: "Sajek Valley",
      location: "Rangamati",
      date: "August 2023",
      category: "Hill Tracks",
      image: "/images/experience/Sajek Valley.jpg",
      icon: "Map",
      description: "A journey above the clouds in the Queen of Hills.",
      fullContent: `
         <h3>The Kingdom of Clouds</h3>
         <p>Sajek Valley is known for its stunning natural beauty and is often referred to as the 'Queen of Hills' and 'Roof of Rangamati'. The valley is surrounded by mountains, dense forests, and grassland hill tracts.</p>
         
         <h3>Experiences</h3>
         <ul>
            <li>Witnessing the sunrise from Helipad</li>
            <li>Exploring the Konglak Para</li>
            <li>Night stay at bamboo cottages</li>
            <li>Experiencing the indigenous culture</li>
         </ul>
      `,
      tags: ["Nature", "Adventure", "Mountains"],
      coordinates: "23.3820° N, 92.2938° E"
   },
   {
      id: 2,
      title: "Cox's Bazar",
      location: "Chittagong",
      date: "December 2022",
      category: "Coastal",
      image: "/images/experience/Cox's Bazar.jpg",
      icon: "DirectionsBoat",
      description: "Longest natural sea beach in the world.",
      fullContent: `
         <h3>Ocean Breeze</h3>
         <p>Cox's Bazar is famous for its long natural sandy beach, and it is the top tourist destination in Bangladesh.</p>
         
         <h3>Highlights</h3>
         <ul>
            <li>Sunset at Inani Beach</li>
            <li>Drive through Marine Drive Road</li>
            <li>Seafood culinary experience</li>
            <li>Himchori Waterfall visit</li>
         </ul>
      `,
      tags: ["Beach", "Sea", "Relaxation"],
      coordinates: "21.4272° N, 92.0058° E"
   },
   {
      id: 3,
      title: "Sylhet Tea Gardens",
      location: "Sylhet",
      date: "June 2023",
      category: "Nature",
      image: "/images/experience/Sylhet Tea Gardens.jpg",
      icon: "Landscape",
      description: "Lush green carpets of tea plantations.",
      fullContent: `
         <h3>Green Horizon</h3>
         <p>Sylhet is the land of two leaves and a bud. The rolling hills covered with lush green tea gardens create a mesmerizing landscape.</p>
         
         <h3>Activities</h3>
         <ul>
            <li>Walking through Ratargul Swamp Forest</li>
            <li>Boating in Jaflong</li>
            <li>Visiting tea processing plants</li>
            <li>Exploring Bisnakandi</li>
         </ul>
      `,
      tags: ["Greenery", "Tea", "Rainforest"],
      coordinates: "24.8949° N, 91.8687° E"
   },
   {
      id: 4,
      title: "Saint Martin's Island",
      location: "Bay of Bengal",
      date: "January 2023",
      category: "Island",
      image: "/images/experience/Saint Martin's Island.jpg",
      icon: "DirectionsBoat",
      description: "The only coral island of Bangladesh.",
      fullContent: `
         <h3>Blue Paradise</h3>
         <p>Saint Martin's Island acts as a serene getaway with its blue water and coconut groves.</p>
         
         <h3>Memories</h3>
         <ul>
            <li>Cycling around the island</li>
            <li>Scuba diving</li>
            <li>Fresh coconut water</li>
            <li>Barbecue night by the beach</li>
         </ul>
      `,
      tags: ["Island", "Coral", "Blue Water"],
      coordinates: "20.6272° N, 92.3226° E"
   },
   {
      id: 5,
      title: "Sundarbans",
      location: "Khulna",
      date: "February 2022",
      category: "Wildlife",
      image: "/images/experience/Sundarbans.jpg",
      icon: "PhotoCamera",
      description: "Largest mangrove forest in the world.",
      fullContent: `
         <h3>Wilderness Call</h3>
         <p>Home to the Royal Bengal Tiger, the Sundarbans is a UNESCO World Heritage site featuring a complex network of tidal waterways.</p>
         
         <h3>Adventures</h3>
         <ul>
            <li>Jungle safari</li>
            <li>Spotting deer and crocodiles</li>
            <li>Boat cruising</li>
            <li>Honey collection trails</li>
         </ul>
      `,
      tags: ["Wildlife", "Forest", "Adventure"],
      coordinates: "21.9497° N, 89.1833° E"
   },
   {
      id: 6,
      title: "Bandarban",
      location: "Hill Tracts",
      date: "October 2021",
      category: "Trekking",
      image: "/images/experience/Bandarban.jpg",
      icon: "NearMe",
      description: "Exploring the highest peaks of the country.",
      fullContent: `
         <h3>Peak of Serenity</h3>
         <p>Bandarban offers the most adventurous trekking trails to peaks like Keokradong and Tahjingdong.</p>
         
         <h3>Trails</h3>
         <ul>
            <li>Trekking to Boga Lake</li>
            <li>Nilagiri scenery</li>
            <li>Sangu River boat ride</li>
            <li>Golden Temple visit</li>
         </ul>
      `,
      tags: ["Trekking", "Hills", "Culture"],
      coordinates: "22.1953° N, 92.2184° E"
   }
];
