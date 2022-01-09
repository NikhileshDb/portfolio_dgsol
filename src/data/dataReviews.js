import { v4 as uuidv4 } from "uuid";

const dataReviews = [
    {
        id: uuidv4(),
        name: "Rajarshi Collge",
        image: "https://i0.wp.com/www.hindishayaricollections.com/wp-content/uploads/2019/10/girls-dp-profile-pics-40.jpg",
        message: "One of the best services, the team is very helpful in terms of making decision and in various apects of websites.",
        facebook: "#",
        instagram: "#",
        linkedin: "#",
        wave_color: "#8A5FBB",
      },
      {
        id: uuidv4(),
        name: "Saint John",
        image: `${process.env.PUBLIC_URL}/images/img2.jpg`,
        message: "One of the best services, the team is very helpful in terms of making decision and in various apects of websites.",
        facebook: "#",
        instagram: "#",
        linkedin: "#",
        wave_color: "#EA5A43",
      },
      {
        id: uuidv4(),
        name: "Adolf hitler",
        image: `${process.env.PUBLIC_URL}/images/img3.jpg`,
        message: "One of the best services, the team is very helpful in terms of making decision and in various apects of websites.",
        facebook: "#",
        instagram: "#",
        linkedin: "#",
        wave_color:"hsl(8.26,79.9%,59.02%)",
      }
     
]

export default dataReviews;