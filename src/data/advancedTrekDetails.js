
import everestImage from "../../photos/everest.jpeg";
import apiImage from "../../photos/api.jpeg";
import phoksundoImage from "../../photos/shey.png";
import annapurnaImage from "../../photos/thoran.jpeg";
import manasluImage from "../../photos/manasulus.jpeg";
import threePassImage from "../../photos/everestss.jpeg";

// Same itinerary structure as trekDetails.js
const createDay = (
  day,
  title,
  route,
  altitude,
  duration,
  accommodation,
  meals,
  distance,
  description
) => ({
  day,
  title,
  route,
  altitude,
  duration,
  accommodation,
  meals,
  distance,
  description,
});

export const advancedTrekDetails = {

  // =====================================================
  // 1. EVEREST BASE CAMP & CHO LA PASS TREK
  // =====================================================

  "everest-base-camp-cho-la-pass": {
    name: "Everest Base Camp & Cho La Pass Trek",
    region: "Everest / Khumbu Region, Nepal",
    duration: "17–18 Days",
    altitude: "5,545 m (Kala Patthar)",
    sleepingAltitude: "5,164 m (Gorak Shep)",
    difficulty: "Strenuous / Advanced",
    startingPoint: "Kathmandu",
    bestSeason: "March–May, September–November",
    image: everestImage,

    description:
      "Experience one of Nepal's most spectacular high-altitude adventures. This extended route combines Everest Base Camp, Kala Patthar, the turquoise Gokyo Lakes and the challenging Cho La Pass. Explore traditional Sherpa villages, ancient monasteries, glaciers and breathtaking Himalayan viewpoints.",

    highlights: [
      "Visit the legendary Everest Base Camp",
      "Sunrise views from Kala Patthar at 5,545 m",
      "Cross the challenging Cho La Pass",
      "Explore the beautiful Gokyo Lakes",
      "Visit Namche Bazaar and traditional Sherpa villages",
      "Enjoy spectacular views of Everest, Lhotse and Ama Dablam",
    ],

    itinerary: [
      createDay(1, "Arrival in Kathmandu", "Kathmandu International Airport – Hotel", "1,400 m", "Arrival day", "3-star hotel", "Dinner", "Airport transfer", "Arrive in Kathmandu, meet your trekking representative and transfer to your hotel. Attend a trip briefing and equipment check."),

      createDay(2, "Kathmandu Preparation Day", "Kathmandu – Permit and Equipment Preparation", "1,400 m", "Flexible", "3-star hotel", "Breakfast", "Local travel", "Complete trekking preparations, check equipment and arrange the required permits. Enjoy optional sightseeing around Kathmandu Valley."),

      createDay(3, "Fly to Lukla and Trek to Phakding", "Kathmandu – Lukla – Phakding", "2,860 m / 2,610 m", "3–4 hours walking, plus flight", "Mountain teahouse", "Breakfast, Lunch and Dinner", "Approx. 8 km", "Take a scenic mountain flight to Lukla and begin trekking through small Sherpa settlements, forests and suspension bridges towards Phakding."),

      createDay(4, "Trek to Namche Bazaar", "Phakding – Monjo – Namche Bazaar", "3,440 m", "5–6 hours", "Mountain teahouse", "Breakfast, Lunch and Dinner", "Approx. 10–12 km", "Follow the Dudh Koshi River, cross suspension bridges and enter Sagarmatha National Park. Climb through pine forests to reach Namche Bazaar."),

      createDay(5, "Acclimatization at Namche Bazaar", "Namche – Everest View Hotel – Namche", "3,440 m", "3–4 hours optional hike", "Mountain teahouse", "Breakfast, Lunch and Dinner", "Approx. 4–5 km", "Spend an acclimatization day exploring Namche Bazaar. An optional hike towards Everest View Hotel offers spectacular views of Everest, Ama Dablam and surrounding peaks."),

      createDay(6, "Trek to Tengboche", "Namche – Phunki Tenga – Tengboche", "3,860 m", "5–6 hours", "Mountain teahouse", "Breakfast, Lunch and Dinner", "Approx. 9–10 km", "Walk along scenic mountain trails with views of Ama Dablam before reaching Tengboche and its famous Buddhist monastery."),

      createDay(7, "Trek to Dingboche", "Tengboche – Pangboche – Dingboche", "4,410 m", "5–6 hours", "Mountain teahouse", "Breakfast, Lunch and Dinner", "Approx. 10–11 km", "Continue through Pangboche village and alpine landscapes towards Dingboche, surrounded by spectacular Himalayan peaks."),

      createDay(8, "Acclimatization at Dingboche", "Dingboche – Nagarjun Hill – Dingboche", "4,410 m", "3–4 hours optional hike", "Mountain teahouse", "Breakfast, Lunch and Dinner", "Approx. 4–5 km", "Spend an additional day acclimatizing. An optional hike towards Nagarjun Hill provides panoramic mountain views."),

      createDay(9, "Trek to Lobuche", "Dingboche – Thukla – Lobuche", "4,940 m", "5–6 hours", "Mountain teahouse", "Breakfast, Lunch and Dinner", "Approx. 8–9 km", "Walk towards Thukla Pass and pass memorials dedicated to climbers before continuing along the Khumbu Glacier towards Lobuche."),

      createDay(10, "Everest Base Camp Trek", "Lobuche – Gorak Shep – Everest Base Camp – Gorak Shep", "5,364 m", "7–8 hours", "Mountain teahouse", "Breakfast, Lunch and Dinner", "Approx. 12–14 km", "Trek to Gorak Shep and continue towards Everest Base Camp across the rugged Khumbu Glacier surroundings. Return to Gorak Shep for the night."),

      createDay(11, "Kala Patthar and Trek to Dzongla", "Gorak Shep – Kala Patthar – Dzongla", "5,545 m viewpoint / 4,830 m overnight", "6–7 hours", "Mountain teahouse", "Breakfast, Lunch and Dinner", "Approx. 9–11 km", "Start early for the climb to Kala Patthar and enjoy spectacular views of Mount Everest. Descend and continue towards Dzongla."),

      createDay(12, "Cross Cho La Pass to Dragnag", "Dzongla – Cho La Pass – Dragnag", "5,420 m pass / Approx. 4,700 m overnight", "7–9 hours", "Mountain teahouse", "Breakfast, Lunch and Dinner", "Approx. 9–11 km", "Cross the challenging Cho La Pass, which may involve snow and icy terrain, before descending towards the Gokyo Valley."),

      createDay(13, "Trek to Gokyo Lakes", "Dragnag – Gokyo", "4,790 m", "3–4 hours", "Mountain teahouse", "Breakfast, Lunch and Dinner", "Approx. 4–5 km", "Continue through the glacial landscape to Gokyo village beside the beautiful turquoise alpine lakes."),

      createDay(14, "Gokyo Ri Exploration", "Gokyo – Gokyo Ri – Gokyo", "5,357 m viewpoint", "4–5 hours", "Mountain teahouse", "Breakfast, Lunch and Dinner", "Approx. 4–6 km", "Enjoy an optional ascent of Gokyo Ri for panoramic views of Everest, Cho Oyu, Makalu and the surrounding glaciers."),

      createDay(15, "Trek to Dole", "Gokyo – Machhermo – Dole", "4,110 m", "5–6 hours", "Mountain teahouse", "Breakfast, Lunch and Dinner", "Approx. 8–10 km", "Descend through the Gokyo Valley, passing alpine landscapes and small settlements towards Dole."),

      createDay(16, "Trek to Namche Bazaar", "Dole – Phortse Tenga – Namche Bazaar", "3,440 m", "5–6 hours", "Mountain teahouse", "Breakfast, Lunch and Dinner", "Approx. 9–11 km", "Continue downhill through forests and mountain villages to Namche Bazaar."),

      createDay(17, "Trek to Lukla", "Namche – Monjo – Phakding – Lukla", "2,860 m", "6–7 hours", "Mountain teahouse", "Breakfast, Lunch and Dinner", "Approx. 18–20 km", "Follow the familiar trail through Phakding and Monjo to Lukla. Celebrate the completion of your Himalayan adventure."),

      createDay(18, "Fly to Kathmandu", "Lukla – Kathmandu", "1,400 m", "35-minute flight, subject to conditions", "Hotel / End of trip", "Breakfast", "Flight", "Take a return flight to Kathmandu, subject to weather and flight operations. Transfer to your hotel and conclude your trek."),
    ],

    inclusions: [
      "Airport transfers in Kathmandu",
      "Domestic flights as specified in the confirmed package",
      "Licensed trekking guide",
      "Required trekking permits and entry fees",
      "Mountain teahouse accommodation during the trek",
      "Meals as specified in the final itinerary",
      "Ground transportation as agreed",
      "Trekking logistics and route assistance",
    ],

    exclusions: [
      "International flights",
      "Nepal entry visa",
      "Travel and emergency evacuation insurance",
      "Personal trekking equipment",
      "Personal expenses, snacks and drinks",
      "Tips for guides and porters",
      "Additional accommodation caused by delays",
    ],
  },

  // =====================================================
  // 2. API HIMAL BASE CAMP TREK
  // =====================================================

  "api-himal-base-camp": {
    name: "Api Himal Base Camp Trek",
    region: "Darchula / Far-Western Nepal",
    duration: "16–18 Days",
    altitude: "4,200 m (Kali Dhunga Lake)",
    sleepingAltitude: "Approx. 3,861 m (Base Camp area)",
    difficulty: "Challenging / Strenuous",
    startingPoint: "Darchula",
    bestSeason: "April–June, September–November",
    image: apiImage,

    description:
      "Explore the remote wilderness of Far-Western Nepal on the spectacular Api Himal Base Camp Trek. Journey through traditional villages, dense forests, alpine meadows and breathtaking Himalayan landscapes while discovering the untouched beauty of the Api Nampa Conservation Area.",

    highlights: [
      "Experience breathtaking views of Mt. Api (7,132 m)",
      "Explore the spectacular Api Himal Base Camp",
      "Discover the scenic Kali Dhunga Lake",
      "Experience traditional village life in Darchula",
      "Trek through pristine forests and remote alpine landscapes",
    ],

    itinerary: [
      createDay(1, "Arrival in Kathmandu", "Kathmandu Airport – Hotel", "1,400 m", "Arrival day", "3-star hotel", "Dinner", "Airport transfer", "Arrive in Kathmandu and meet your trekking representative. Prepare for the remote Far-Western Nepal expedition."),

      createDay(2, "Kathmandu Preparation Day", "Kathmandu", "1,400 m", "Flexible", "3-star hotel", "Breakfast", "Local travel", "Complete trekking preparations, permits and equipment checks. Review the expedition route with your guide."),

      createDay(3, "Fly to Dhangadhi", "Kathmandu – Dhangadhi", "109 m", "Flight and transfer", "Hotel", "Breakfast and Dinner", "Domestic flight", "Take a domestic flight to Dhangadhi and prepare for the overland journey towards Darchula."),

      createDay(4, "Drive to Darchula", "Dhangadhi – Darchula", "Approx. 1,000 m", "Full-day drive", "Lodge", "Breakfast, Lunch and Dinner", "Road journey", "Travel through the hills and river valleys of Far-Western Nepal towards Darchula."),

      createDay(5, "Drive to the Trek Starting Point", "Darchula – Gokuleshwar / Trailhead", "Approx. 1,500 m", "4–6 hours", "Local guesthouse", "Breakfast, Lunch and Dinner", "Road journey", "Continue towards the starting area of the Api Himal trekking route. The exact trailhead depends on road conditions and local arrangements."),

      createDay(6, "Trek to Makarigaad", "Trailhead – Makarigaad", "Approx. 1,800 m", "5–6 hours", "Homestay / Camping", "Breakfast, Lunch and Dinner", "Approx. 8–10 km", "Begin trekking through rural settlements, forests and beautiful river landscapes."),

      createDay(7, "Trek to Seti", "Makarigaad – Seti", "Approx. 2,300 m", "5–6 hours", "Homestay / Camping", "Breakfast, Lunch and Dinner", "Approx. 8–10 km", "Follow remote mountain trails through traditional villages and forested slopes."),

      createDay(8, "Trek to Lawathi", "Seti – Lawathi", "Approx. 2,700 m", "5–6 hours", "Camping", "Breakfast, Lunch and Dinner", "Approx. 8–10 km", "Continue into higher mountain terrain, passing forests, grazing areas and isolated settlements."),

      createDay(9, "Trek towards Simar", "Lawathi – Simar", "Approx. 3,000 m", "5–6 hours", "Camping", "Breakfast, Lunch and Dinner", "Approx. 7–9 km", "Ascend gradually through alpine vegetation and open mountain landscapes."),

      createDay(10, "Trek to Api Base Camp Area", "Simar – Api Base Camp", "Approx. 3,861 m", "5–6 hours", "Camping", "Breakfast, Lunch and Dinner", "Approx. 7–9 km", "Continue towards the Api Himal Base Camp area, enjoying dramatic views of the surrounding peaks."),

      createDay(11, "Explore Api Himal Base Camp", "Api Base Camp and surrounding viewpoints", "Approx. 3,861 m", "Flexible exploration", "Camping", "Breakfast, Lunch and Dinner", "Local exploration", "Spend time exploring the base camp surroundings and observing the spectacular mountain scenery."),

      createDay(12, "Explore Kali Dhunga Lake", "Base Camp Area – Kali Dhunga Lake – Base Camp Area", "Up to 4,200 m", "5–7 hours", "Camping", "Breakfast, Lunch and Dinner", "Route dependent", "Depending on local trail conditions, weather and guide assessment, explore the high-altitude Kali Dhunga Lake area."),

      createDay(13, "Return to Simar", "Api Base Camp Area – Simar", "Approx. 3,000 m", "5–6 hours", "Camping", "Breakfast, Lunch and Dinner", "Approx. 7–9 km", "Descend through alpine landscapes towards lower campsites."),

      createDay(14, "Trek to Lawathi", "Simar – Lawathi", "Approx. 2,700 m", "5–6 hours", "Camping", "Breakfast, Lunch and Dinner", "Approx. 8–10 km", "Retrace the route through mountain pastures and remote settlements."),

      createDay(15, "Trek to Makarigaad", "Lawathi – Seti – Makarigaad", "Approx. 1,800 m", "6–7 hours", "Homestay / Camping", "Breakfast, Lunch and Dinner", "Approx. 10–12 km", "Continue descending through forests and villages towards the lower valley."),

      createDay(16, "Return to Darchula", "Makarigaad – Roadhead – Darchula", "Approx. 1,000 m", "Trek and drive", "Lodge", "Breakfast, Lunch and Dinner", "Road journey", "Complete the trekking section and transfer back to Darchula."),

      createDay(17, "Drive to Dhangadhi", "Darchula – Dhangadhi", "109 m", "Full-day drive", "Hotel", "Breakfast, Lunch and Dinner", "Road journey", "Travel towards Dhangadhi for onward connections."),

      createDay(18, "Return to Kathmandu", "Dhangadhi – Kathmandu", "1,400 m", "Domestic flight", "Hotel / End of trip", "Breakfast", "Flight", "Take a return flight to Kathmandu and conclude the expedition."),
    ],

    inclusions: [
      "Accommodation during the organized itinerary",
      "Experienced local trekking guide",
      "Required conservation area permits and permissions",
      "Camping equipment where required",
      "Meals during the trekking section",
      "Ground transportation specified in the package",
      "Trekking logistics and support",
    ],

    exclusions: [
      "International flights",
      "Domestic flights unless specified",
      "Personal travel insurance and evacuation coverage",
      "Personal trekking gear",
      "Personal expenses",
      "Extra accommodation and meals due to delays",
      "Tips for trekking staff",
    ],
  },

  // =====================================================
  // 3. SHEY PHOKSUNDO LAKE TREK
  // =====================================================

  "shey-phoksundo-lake": {
    name: "Shey Phoksundo Lake Trek",
    region: "Dolpo / Karnali Region, Nepal",
    duration: "15–17 Days",
    altitude: "3,611 m",
    sleepingAltitude: "Approx. 3,611 m",
    difficulty: "Challenging / Remote",
    startingPoint: "Juphal",
    bestSeason: "May–October",
    image: phoksundoImage,

    description:
      "Discover the untouched beauty of the remote Dolpo region on the spectacular Shey Phoksundo Lake Trek. Journey through pristine forests, dramatic mountain landscapes and traditional Tibetan-influenced villages before reaching the breathtaking turquoise waters of Nepal's deepest lake. Experience ancient Bon Buddhist culture and the peaceful wilderness of Shey Phoksundo National Park.",

    highlights: [
      "Explore the stunning turquoise waters of Shey Phoksundo Lake",
      "Witness the spectacular Phoksundo Waterfall",
      "Discover the traditional Bon Buddhist culture of Ringmo Village",
      "Visit the ancient Tshowa Gompa monastery",
      "Explore Shey Phoksundo National Park",
      "Experience breathtaking views of the remote Dolpo Himalayas",
    ],

    itinerary: [
      createDay(1, "Arrival in Kathmandu", "Kathmandu Airport – Hotel", "1,400 m", "Arrival day", "3-star hotel", "Dinner", "Airport transfer", "Arrive in Kathmandu and meet your trekking representative."),

      createDay(2, "Kathmandu Preparation Day", "Kathmandu", "1,400 m", "Flexible", "3-star hotel", "Breakfast", "Local travel", "Complete trekking preparation, permits and equipment checks."),

      createDay(3, "Fly to Nepalgunj", "Kathmandu – Nepalgunj", "150 m", "Flight", "Hotel", "Breakfast and Dinner", "Domestic flight", "Take a domestic flight to Nepalgunj and prepare for the remote Dolpo journey."),

      createDay(4, "Fly to Juphal and Trek to Dunai", "Nepalgunj – Juphal – Dunai", "2,475 m / 2,140 m", "Flight and 2–3 hours walking", "Lodge", "Breakfast, Lunch and Dinner", "Approx. 5–6 km walking", "Take a scenic mountain flight to Juphal and walk towards Dunai, the administrative centre of Dolpo."),

      createDay(5, "Trek to Chhepka", "Dunai – Suligad – Chhepka", "Approx. 2,670 m", "5–6 hours", "Teahouse / Camping", "Breakfast, Lunch and Dinner", "Approx. 8–10 km", "Follow the Suli Gad River through forests and narrow valleys towards Chhepka."),

      createDay(6, "Trek to Rechi", "Chhepka – Rechi", "Approx. 3,000 m", "5–6 hours", "Teahouse / Camping", "Breakfast, Lunch and Dinner", "Approx. 8–10 km", "Continue along the river valley through forests and remote settlements."),

      createDay(7, "Trek towards Phoksundo Khola", "Rechi – Phoksundo Khola Area", "Approx. 3,500 m", "5–6 hours", "Camping", "Breakfast, Lunch and Dinner", "Approx. 8–10 km", "Follow the trail through increasingly dramatic mountain scenery towards the Phoksundo region."),

      createDay(8, "Trek to Ringmo Village", "Phoksundo Khola – Ringmo", "3,611 m", "4–5 hours", "Teahouse / Camping", "Breakfast, Lunch and Dinner", "Approx. 7–9 km", "Reach the beautiful Ringmo settlement overlooking the spectacular turquoise lake."),

      createDay(9, "Explore Shey Phoksundo Lake", "Ringmo – Phoksundo Lake Viewpoints", "3,611 m", "3–4 hours", "Teahouse / Camping", "Breakfast, Lunch and Dinner", "Local exploration", "Explore the lake's scenic shores, enjoy mountain views and experience the peaceful atmosphere of the Dolpo region."),

      createDay(10, "Visit Tshowa Gompa and Ringmo", "Ringmo – Tshowa Gompa – Ringmo", "3,611 m", "2–4 hours", "Teahouse / Camping", "Breakfast, Lunch and Dinner", "Local exploration", "Discover the traditional village and visit the ancient Tshowa Gompa, subject to local access and arrangements."),

      createDay(11, "Explore Phoksundo Waterfall", "Ringmo – Phoksundo Waterfall Viewpoints", "Approx. 3,700 m", "3–5 hours", "Teahouse / Camping", "Breakfast, Lunch and Dinner", "Route dependent", "Enjoy a local exploration day around the famous waterfall and surrounding viewpoints."),

      createDay(12, "Trek to Rechi", "Ringmo – Rechi", "Approx. 3,000 m", "5–6 hours", "Teahouse / Camping", "Breakfast, Lunch and Dinner", "Approx. 10–12 km", "Retrace the route through the scenic Phoksundo Valley."),

      createDay(13, "Trek to Chhepka", "Rechi – Chhepka", "Approx. 2,670 m", "5–6 hours", "Teahouse / Camping", "Breakfast, Lunch and Dinner", "Approx. 8–10 km", "Descend along the river valley through forests and traditional settlements."),

      createDay(14, "Trek to Dunai", "Chhepka – Dunai", "2,140 m", "5–6 hours", "Lodge", "Breakfast, Lunch and Dinner", "Approx. 10–12 km", "Return to Dunai, completing the main trekking section."),

      createDay(15, "Trek to Juphal", "Dunai – Juphal", "2,475 m", "2–3 hours", "Lodge", "Breakfast, Lunch and Dinner", "Approx. 5–6 km", "Walk back to Juphal and prepare for the return flight."),

      createDay(16, "Fly to Nepalgunj", "Juphal – Nepalgunj", "150 m", "Flight, subject to conditions", "Hotel", "Breakfast and Dinner", "Domestic flight", "Take the return flight to Nepalgunj. Flight schedules are weather dependent."),

      createDay(17, "Return to Kathmandu", "Nepalgunj – Kathmandu", "1,400 m", "Domestic flight", "Hotel / End of trip", "Breakfast", "Domestic flight", "Fly back to Kathmandu and conclude your Dolpo adventure."),
    ],

    inclusions: [
      "Domestic flights as specified in the package",
      "Airport transfers",
      "Licensed trekking guide",
      "Required national park permits",
      "Accommodation during the trek",
      "Meals during the organized trekking itinerary",
      "Ground transportation where specified",
    ],

    exclusions: [
      "International flights",
      "Nepal visa",
      "Travel and evacuation insurance",
      "Personal equipment",
      "Personal expenses",
      "Tips",
      "Extra costs caused by flight delays",
    ],
  },

  // =====================================================
  // 4. ANNAPURNA CIRCUIT VIA THORONG LA PASS
  // =====================================================

  "annapurna-circuit-thorong-la": {
    name: "Annapurna Circuit via Thorong La Pass",
    region: "Annapurna Conservation Area, Nepal",
    duration: "15–18 Days",
    altitude: "5,416 m",
    sleepingAltitude: "Approx. 4,450 m",
    difficulty: "Strenuous / Advanced",
    startingPoint: "Kathmandu",
    bestSeason: "March–May, September–November",
    image: annapurnaImage,

    description:
      "Journey through the diverse landscapes of the Annapurna region, from lush river valleys and traditional mountain villages to the dramatic high-altitude terrain of the Tibetan plateau. Cross the famous Thorong La Pass, visit sacred Muktinath and discover the remarkable landscapes of Mustang.",

    highlights: [
      "Cross the famous Thorong La Pass at 5,416 m",
      "Explore Manang and its surrounding valleys",
      "Visit the sacred Muktinath pilgrimage site",
      "Experience the dramatic Mustang landscapes",
      "Enjoy views of Annapurna and Dhaulagiri",
      "Discover traditional Himalayan cultures",
    ],

    itinerary: [
      createDay(1, "Arrival in Kathmandu", "Kathmandu Airport – Hotel", "1,400 m", "Arrival day", "3-star hotel", "Dinner", "Airport transfer", "Arrive in Kathmandu and meet your trekking representative."),

      createDay(2, "Preparation and Sightseeing", "Kathmandu", "1,400 m", "Flexible", "3-star hotel", "Breakfast", "Local travel", "Complete trekking preparations, permits and equipment checks. Enjoy optional sightseeing around Kathmandu."),

      createDay(3, "Drive to Besisahar", "Kathmandu – Besisahar", "760 m", "6–7 hours", "Hotel / Lodge", "Breakfast, Lunch and Dinner", "Road journey", "Travel along scenic highways and river valleys to Besisahar."),

      createDay(4, "Drive to Chame", "Besisahar – Chame", "2,670 m", "5–7 hours", "Mountain teahouse", "Breakfast, Lunch and Dinner", "Road journey", "Continue along the mountain road through beautiful villages and forests to Chame."),

      createDay(5, "Trek to Upper Pisang", "Chame – Dhikur Pokhari – Upper Pisang", "3,300 m", "5–6 hours", "Mountain teahouse", "Breakfast, Lunch and Dinner", "Approx. 10–12 km", "Begin trekking through pine forests and mountain settlements with impressive views of Annapurna II."),

      createDay(6, "Trek to Manang", "Upper Pisang – Ghyaru – Ngawal – Manang", "3,540 m", "5–6 hours", "Mountain teahouse", "Breakfast, Lunch and Dinner", "Approx. 12–14 km", "Follow the scenic upper route through traditional villages and impressive Himalayan landscapes."),

      createDay(7, "Acclimatization at Manang", "Manang – Gangapurna Lake – Manang", "3,540 m", "3–4 hours optional hike", "Mountain teahouse", "Breakfast, Lunch and Dinner", "Approx. 4–5 km", "Spend a rest day exploring Manang and taking an optional acclimatization hike towards Gangapurna Lake and surrounding viewpoints."),

      createDay(8, "Trek to Yak Kharka", "Manang – Gunsang – Yak Kharka", "4,050 m", "3–4 hours", "Mountain teahouse", "Breakfast, Lunch and Dinner", "Approx. 8–9 km", "Ascend gradually through alpine pastures and open mountain terrain."),

      createDay(9, "Trek to Thorong Phedi", "Yak Kharka – Ledar – Thorong Phedi", "4,450 m", "3–4 hours", "Mountain teahouse", "Breakfast, Lunch and Dinner", "Approx. 7–8 km", "Continue towards Thorong Phedi and prepare for the high pass crossing."),

      createDay(10, "Cross Thorong La Pass", "Thorong Phedi – Thorong La – Muktinath", "5,416 m pass / 3,760 m overnight", "7–9 hours", "Mountain teahouse", "Breakfast, Lunch and Dinner", "Approx. 15–17 km", "Start early to cross Thorong La Pass before descending towards the sacred pilgrimage site of Muktinath."),

      createDay(11, "Explore Muktinath and Trek to Kagbeni", "Muktinath – Jharkot – Kagbeni", "2,810 m", "4–5 hours", "Mountain teahouse", "Breakfast, Lunch and Dinner", "Approx. 10–12 km", "Visit Muktinath Temple before descending through the dry landscapes of Mustang to Kagbeni."),

      createDay(12, "Trek to Jomsom", "Kagbeni – Jomsom", "2,720 m", "3–4 hours", "Mountain teahouse", "Breakfast, Lunch and Dinner", "Approx. 10 km", "Walk through the Kali Gandaki Valley towards Jomsom."),

      createDay(13, "Explore Marpha Village", "Jomsom – Marpha – Jomsom", "2,670 m", "3–4 hours", "Hotel / Lodge", "Breakfast, Lunch and Dinner", "Approx. 6–8 km", "Explore the traditional village of Marpha, known for its stone streets, architecture and apple orchards."),

      createDay(14, "Drive to Tatopani", "Jomsom – Marpha – Ghasa – Tatopani", "1,200 m", "6–8 hours", "Lodge", "Breakfast, Lunch and Dinner", "Road journey", "Travel through the dramatic Kali Gandaki Gorge towards Tatopani."),

      createDay(15, "Explore Tatopani", "Tatopani and surrounding area", "1,200 m", "Flexible", "Lodge", "Breakfast, Lunch and Dinner", "Local exploration", "Enjoy a relaxed day and optional visit to the natural hot springs."),

      createDay(16, "Return to Pokhara", "Tatopani – Beni – Pokhara", "822 m", "5–7 hours", "Hotel / End of trip", "Breakfast and Lunch", "Road journey", "Drive back to Pokhara, marking the end of the Annapurna Circuit adventure."),
    ],

    inclusions: [
      "Ground transportation specified in the itinerary",
      "Licensed trekking guide",
      "Required trekking permits",
      "Mountain teahouse accommodation",
      "Meals during the trek",
      "Trekking logistics and support",
    ],

    exclusions: [
      "International flights",
      "Nepal visa",
      "Travel insurance and evacuation",
      "Personal equipment",
      "Personal expenses and drinks",
      "Tips",
      "Optional sightseeing and additional activities",
    ],
  },

  // =====================================================
  // 5. MANASLU CIRCUIT TREK
  // =====================================================

  "manaslu-circuit": {
    name: "Manaslu Circuit Trek",
    region: "Manaslu Conservation Area, Nepal",
    duration: "15–17 Days",
    altitude: "5,106 m",
    sleepingAltitude: "Approx. 4,460 m",
    difficulty: "Strenuous / Advanced",
    startingPoint: "Machha Khola",
    bestSeason: "March–May, September–November",
    image: manasluImage,

    description:
      "Explore the remote and restricted Manaslu region, circling the spectacular 8,163-metre Mount Manaslu. Discover pristine landscapes, traditional Tibetan Buddhist culture, deep river valleys and challenging mountain trails before crossing the famous Larkya La Pass.",

    highlights: [
      "Cross Larkya La Pass at 5,106 m",
      "Experience spectacular views of Mount Manaslu",
      "Explore traditional Tibetan Buddhist villages",
      "Visit Samagaun and its surrounding valleys",
      "Discover the remote Manaslu Conservation Area",
      "Walk through dramatic Himalayan landscapes",
    ],

    itinerary: [
      createDay(1, "Arrival in Kathmandu", "Kathmandu Airport – Hotel", "1,400 m", "Arrival day", "3-star hotel", "Dinner", "Airport transfer", "Arrive in Kathmandu and prepare for the Manaslu Circuit expedition."),

      createDay(2, "Preparation and Permit Arrangements", "Kathmandu", "1,400 m", "Flexible", "3-star hotel", "Breakfast", "Local travel", "Complete restricted-area permit arrangements, equipment checks and trekking preparations."),

      createDay(3, "Drive to Machha Khola", "Kathmandu – Machha Khola", "870 m", "8–9 hours", "Mountain teahouse", "Breakfast, Lunch and Dinner", "Road journey", "Travel through mountain roads and river valleys to the starting point of the trek."),

      createDay(4, "Trek to Jagat", "Machha Khola – Khorlabesi – Jagat", "1,410 m", "6–7 hours", "Mountain teahouse", "Breakfast, Lunch and Dinner", "Approx. 12–14 km", "Follow the Budhi Gandaki River through narrow valleys, waterfalls and traditional settlements."),

      createDay(5, "Trek to Deng", "Jagat – Philim – Deng", "1,860 m", "6–7 hours", "Mountain teahouse", "Breakfast, Lunch and Dinner", "Approx. 10–12 km", "Continue through forests and river crossings towards the culturally rich upper Budhi Gandaki region."),

      createDay(6, "Trek to Namrung", "Deng – Bihi – Ghap – Namrung", "2,630 m", "6–7 hours", "Mountain teahouse", "Breakfast, Lunch and Dinner", "Approx. 10–12 km", "Ascend through forests and traditional villages, enjoying changing mountain scenery."),

      createDay(7, "Trek to Lho", "Namrung – Lihi – Sho – Lho", "3,180 m", "4–5 hours", "Mountain teahouse", "Breakfast, Lunch and Dinner", "Approx. 8–10 km", "Walk through alpine landscapes and traditional villages with impressive views of Manaslu."),

      createDay(8, "Trek to Samagaun", "Lho – Shyala – Samagaun", "3,530 m", "4–5 hours", "Mountain teahouse", "Breakfast, Lunch and Dinner", "Approx. 8–10 km", "Continue towards Samagaun, a beautiful settlement beneath Mount Manaslu."),

      createDay(9, "Acclimatization at Samagaun", "Samagaun – Birendra Lake – Samagaun", "3,530 m", "3–5 hours optional hike", "Mountain teahouse", "Breakfast, Lunch and Dinner", "Approx. 4–6 km", "Spend an acclimatization day with optional hikes towards Birendra Lake or nearby viewpoints."),

      createDay(10, "Trek to Samdo", "Samagaun – Samdo", "3,875 m", "3–4 hours", "Mountain teahouse", "Breakfast, Lunch and Dinner", "Approx. 7–8 km", "Walk through high-altitude terrain towards Samdo, a traditional settlement close to the Tibetan border."),

      createDay(11, "Trek to Dharamsala", "Samdo – Larkya Phedi / Dharamsala", "4,460 m", "4–5 hours", "Mountain teahouse / Lodge", "Breakfast, Lunch and Dinner", "Approx. 6–7 km", "Continue towards the Larkya La base area and prepare for the pass crossing."),

      createDay(12, "Cross Larkya La Pass", "Dharamsala – Larkya La – Bimthang", "5,106 m pass / 3,720 m overnight", "8–10 hours", "Mountain teahouse", "Breakfast, Lunch and Dinner", "Approx. 15–18 km", "Begin early and cross the challenging Larkya La Pass before descending towards the beautiful valley of Bimthang."),

      createDay(13, "Trek to Gho", "Bimthang – Sangure Kharka – Gho", "2,560 m", "5–6 hours", "Mountain teahouse", "Breakfast, Lunch and Dinner", "Approx. 10–12 km", "Descend through forests, mountain meadows and traditional settlements."),

      createDay(14, "Trek to Dharapani", "Gho – Tilije – Dharapani", "1,860 m", "5–6 hours", "Mountain teahouse", "Breakfast, Lunch and Dinner", "Approx. 10–12 km", "Continue through forested trails and villages to Dharapani, completing the main circuit."),

      createDay(15, "Drive to Besisahar and Kathmandu", "Dharapani – Besisahar – Kathmandu", "1,400 m", "Full-day drive", "Hotel / End of trip", "Breakfast and Lunch", "Road journey", "Travel by road towards Besisahar and onward to Kathmandu, depending on road conditions and transport arrangements."),
    ],

    inclusions: [
      "Restricted-area and conservation permits",
      "Licensed trekking guide",
      "Ground transportation as specified",
      "Mountain teahouse accommodation",
      "Meals during the trekking itinerary",
      "Trekking logistics and local support",
    ],

    exclusions: [
      "International flights",
      "Nepal visa",
      "Travel and emergency evacuation insurance",
      "Personal equipment",
      "Personal expenses",
      "Tips for trekking staff",
      "Additional accommodation due to delays",
    ],
  },

  // =====================================================
  // 6. EVEREST THREE PASSES TREK
  // =====================================================

  "everest-three-passes": {
    name: "Everest Three Passes Trek",
    region: "Everest / Khumbu Region, Nepal",
    duration: "18–20 Days",
    altitude: "5,535 m (Kongma La Pass)",
    sleepingAltitude: "Approx. 5,000 m",
    difficulty: "Extreme / Advanced",
    startingPoint: "Lukla",
    bestSeason: "March–May, September–November",
    image: threePassImage,

    description:
      "The ultimate high-altitude adventure in the Khumbu region. Take on three legendary mountain passes while exploring spectacular viewpoints, remote valleys and the heart of the Everest region. This demanding journey combines Kongma La, Cho La and Renjo La with Everest Base Camp and the beautiful Gokyo Lakes.",

    highlights: [
      "Cross Kongma La Pass",
      "Cross Cho La Pass",
      "Cross Renjo La Pass",
      "Visit Everest Base Camp",
      "Explore the Gokyo Lakes",
      "Climb Kala Patthar for Everest views",
      "Experience remote Sherpa settlements",
    ],

    itinerary: [
      createDay(1, "Arrival in Kathmandu", "Kathmandu Airport – Hotel", "1,400 m", "Arrival day", "3-star hotel", "Dinner", "Airport transfer", "Arrive in Kathmandu and meet your trekking representative."),

      createDay(2, "Preparation and Kathmandu", "Kathmandu", "1,400 m", "Flexible", "3-star hotel", "Breakfast", "Local travel", "Complete trekking preparations, permits and equipment checks."),

      createDay(3, "Fly to Lukla and Trek to Phakding", "Kathmandu – Lukla – Phakding", "2,860 m / 2,610 m", "3–4 hours walking, plus flight", "Mountain teahouse", "Breakfast, Lunch and Dinner", "Approx. 8 km", "Take a scenic flight to Lukla and begin trekking towards Phakding."),

      createDay(4, "Trek to Namche Bazaar", "Phakding – Monjo – Namche", "3,440 m", "5–6 hours", "Mountain teahouse", "Breakfast, Lunch and Dinner", "Approx. 10–12 km", "Follow the Dudh Koshi River and cross suspension bridges before climbing towards Namche."),

      createDay(5, "Acclimatization at Namche", "Namche – Everest View Hotel – Namche", "3,440 m", "3–4 hours optional hike", "Mountain teahouse", "Breakfast, Lunch and Dinner", "Approx. 4–5 km", "Spend a day acclimatizing and exploring the Sherpa capital."),

      createDay(6, "Trek to Tengboche", "Namche – Phunki Tenga – Tengboche", "3,860 m", "5–6 hours", "Mountain teahouse", "Breakfast, Lunch and Dinner", "Approx. 9–10 km", "Walk along scenic trails with panoramic views of Ama Dablam and surrounding peaks."),

      createDay(7, "Trek to Dingboche", "Tengboche – Pangboche – Dingboche", "4,410 m", "5–6 hours", "Mountain teahouse", "Breakfast, Lunch and Dinner", "Approx. 10–11 km", "Continue through alpine villages and open mountain terrain."),

      createDay(8, "Acclimatization at Dingboche", "Dingboche – Nagarjun Hill – Dingboche", "4,410 m", "3–4 hours optional hike", "Mountain teahouse", "Breakfast, Lunch and Dinner", "Approx. 4–5 km", "Spend an acclimatization day with an optional hike towards Nagarjun Hill."),

      createDay(9, "Cross Kongma La Pass", "Dingboche – Kongma La – Lobuche", "5,535 m pass / 4,940 m overnight", "8–10 hours", "Mountain teahouse", "Breakfast, Lunch and Dinner", "Approx. 10–12 km", "Cross the challenging Kongma La Pass and descend towards Lobuche. This is a demanding high-altitude day."),

      createDay(10, "Trek to Everest Base Camp", "Lobuche – Gorak Shep – Everest Base Camp – Gorak Shep", "5,364 m", "7–8 hours", "Mountain teahouse", "Breakfast, Lunch and Dinner", "Approx. 12–14 km", "Reach Gorak Shep and continue towards Everest Base Camp before returning to Gorak Shep."),

      createDay(11, "Kala Patthar and Trek to Dzongla", "Gorak Shep – Kala Patthar – Dzongla", "5,545 m viewpoint / 4,830 m overnight", "6–7 hours", "Mountain teahouse", "Breakfast, Lunch and Dinner", "Approx. 9–11 km", "Enjoy an early morning climb to Kala Patthar before descending towards Dzongla."),

      createDay(12, "Cross Cho La Pass", "Dzongla – Cho La – Dragnag", "5,420 m pass / Approx. 4,700 m overnight", "7–8 hours", "Mountain teahouse", "Breakfast, Lunch and Dinner", "Approx. 9–11 km", "Cross the demanding Cho La Pass, navigating rocky and potentially icy terrain."),

      createDay(13, "Trek to Gokyo", "Dragnag – Gokyo", "4,790 m", "3–4 hours", "Mountain teahouse", "Breakfast, Lunch and Dinner", "Approx. 4–5 km", "Walk towards Gokyo village and enjoy the spectacular alpine lake scenery."),

      createDay(14, "Explore Gokyo and Gokyo Ri", "Gokyo – Gokyo Ri – Gokyo", "5,357 m viewpoint", "4–5 hours", "Mountain teahouse", "Breakfast, Lunch and Dinner", "Approx. 4–6 km", "Climb Gokyo Ri for breathtaking panoramic views of Everest and surrounding Himalayan peaks."),

      createDay(15, "Cross Renjo La Pass", "Gokyo – Renjo La – Lungden", "5,360 m pass / Approx. 4,380 m overnight", "7–9 hours", "Mountain teahouse", "Breakfast, Lunch and Dinner", "Approx. 10–12 km", "Cross the third high pass, Renjo La, and descend towards the remote village of Lungden."),

      createDay(16, "Trek to Thame", "Lungden – Thame", "3,800 m", "5–6 hours", "Mountain teahouse", "Breakfast, Lunch and Dinner", "Approx. 8–10 km", "Descend through beautiful mountain landscapes towards Thame and its traditional Sherpa settlements."),

      createDay(17, "Trek to Namche Bazaar", "Thame – Namche", "3,440 m", "3–4 hours", "Mountain teahouse", "Breakfast, Lunch and Dinner", "Approx. 8 km", "Follow the valley trail back towards Namche Bazaar."),

      createDay(18, "Trek to Lukla", "Namche – Monjo – Phakding – Lukla", "2,860 m", "6–7 hours", "Mountain teahouse", "Breakfast, Lunch and Dinner", "Approx. 18–20 km", "Complete the final trekking section towards Lukla."),

      createDay(19, "Fly to Kathmandu", "Lukla – Kathmandu", "1,400 m", "35-minute flight, subject to conditions", "Hotel", "Breakfast", "Domestic flight", "Take a return flight to Kathmandu, subject to weather and flight operations."),

      createDay(20, "Departure from Nepal", "Kathmandu – International Airport", "1,400 m", "Airport transfer", "End of trip", "Breakfast", "Airport transfer", "Transfer to the international airport for your onward journey."),
    ],

    inclusions: [
      "Domestic flights as specified",
      "Licensed high-altitude trekking guide",
      "Required trekking permits",
      "Mountain teahouse accommodation",
      "Meals during the trek",
      "Ground transportation as agreed",
      "Trekking logistics and support",
    ],

    exclusions: [
      "International flights",
      "Nepal visa",
      "Travel and emergency evacuation insurance",
      "Personal trekking equipment",
      "Personal expenses and drinks",
      "Tips",
      "Extra accommodation caused by flight delays",
    ],
  },
};
