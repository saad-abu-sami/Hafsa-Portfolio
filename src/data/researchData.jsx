import { Spa, Biotech, Science, Agriculture } from '@mui/icons-material';

export const researchData = [
   {
      id: 1,
      title: "Climate-Resilient Crop Varieties",
      summary: "Developing new rice varieties capable of withstanding extreme weather conditions.",
      date: "2024",
      image: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?q=80&w=2072&auto=format&fit=crop",
      icon: <Spa fontSize="large" />,
      fullContent: `
         <h3>Abstract</h3>
         <p>This research focuses on the genetic modification and selective breeding of rice varieties to enhance their resilience against drought and salinity. By identifying key stress-response genes, we have successfully developed prototypes that show a 30% increase in yield under stress conditions compared to traditional varieties.</p>
         
         <h3>Methodology</h3>
         <p>We utilized CRISPR-Cas9 technology to target specific genomic regions associated with osmotic stress tolerance. Field trials were conducted in coastal regions of Bangladesh with high salinity levels.</p>
         
         <h3>Key Findings</h3>
         <ul>
            <li>Identification of OsSALT1 gene as a primary regulator of salinity tolerance.</li>
            <li>Developed 'ResiliRice-1' variety showing robust growth in 12dS/m salinity.</li>
            <li>30% yield improvement in drought-prone areas.</li>
         </ul>
      `,
      publicationLink: "#",
      tags: ["Genetics", "Climate Change", "Food Security"]
   },
   {
      id: 2,
      title: "Sustainable Pest Management",
      summary: "Eco-friendly approaches to controlling agricultural pests without harmful chemicals.",
      date: "2023",
      image: "https://images.unsplash.com/photo-1628352081506-83c43123ed6d?q=80&w=2096&auto=format&fit=crop",
      icon: <Biotech fontSize="large" />,
      fullContent: `
         <h3>Abstract</h3>
         <p>This study explores the efficacy of bio-pesticides derived from neem and other indigenous plants. Our goal is to reduce the dependency on synthetic pesticides which harm the ecosystem and human health.</p>
         
         <h3>Methodology</h3>
         <p>Extracts from Azadirachta indica (Neem) were formulated into various concentrations and tested against common rice pests like the Brown Planthopper.</p>
         
         <h3>Key Findings</h3>
         <ul>
            <li>Neem-based formulations reduced pest population by 85% within 48 hours.</li>
            <li>No negative impact observed on beneficial insects like bees and ladybugs.</li>
            <li>Cost-effective alternative for small-scale farmers.</li>
         </ul>
      `,
      publicationLink: "#",
      tags: ["Organic Farming", "Pest Control", "Sustainability"]
   },
   {
      id: 3,
      title: "Soil Health Monitoring System",
      summary: "IoT-based system for real-time monitoring of soil nutrients and moisture levels.",
      date: "2023",
      image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=2070&auto=format&fit=crop",
      icon: <Science fontSize="large" />,
      fullContent: `
         <h3>Abstract</h3>
         <p>Integration of IoT sensors in agriculture allows for precision farming. This project developed a low-cost sensor network to monitor NPK levels, pH, and moisture in real-time.</p>
         
         <h3>Methodology</h3>
         <p>Sensors were deployed in a grid pattern across a 5-acre farm. Data was transmitted via LoRaWAN to a central dashboard accessible by farmers via a mobile app.</p>
         
         <h3>Key Findings</h3>
         <ul>
            <li>Real-time data enabled precise fertilizer application, reducing waste by 40%.</li>
            <li>Water usage reduced by 25% through optimized irrigation schedules.</li>
            <li>Increased crop uniformity and quality.</li>
         </ul>
      `,
      publicationLink: "#",
      tags: ["IoT", "Precision Agriculture", "Technology"]
   },
   {
      id: 4,
      title: "Vertical Farming in Urban Areas",
      summary: "Optimizing hydroponic systems for high-density urban food production.",
      date: "2022",
      image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?q=80&w=2070&auto=format&fit=crop",
      icon: <Agriculture fontSize="large" />,
      fullContent: `
         <h3>Abstract</h3>
         <p>With rapid urbanization, arable land is shrinking. This research investigates the viability of vertical farming systems for growing leafy greens and herbs in city centers.</p>
         
         <h3>Methodology</h3>
         <p>A comparative study between nutrient film technique (NFT) and deep water culture (DWC) systems was conducted in a controlled indoor environment.</p>
         
         <h3>Key Findings</h3>
         <ul>
            <li>Vertical systems produced 10x more yield per square foot compared to traditional farming.</li>
            <li>Water usage was 95% less than conventional methods.</li>
            <li>Year-round production independent of weather conditions.</li>
         </ul>
      `,
      publicationLink: "#",
      tags: ["Hydroponics", "Urban Farming", "Innovation"]
   }
];
