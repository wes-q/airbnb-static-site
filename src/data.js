import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneSquareAlt, FaGlobe, FaDotCircle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const locations = {
    headerText: "Our Locations",
    data: [
        { icon: FaLocationDot, value: "Bethpage, NY | Yale University area | Cornell University area" },
        { icon: FaLocationDot, value: "Woodside, NY | Harvard University area | Columbia University area" },
        { icon: FaLocationDot, value: "Woodhaven, NY | Brown University area | Princeton University area" },
        { icon: FaLocationDot, value: "Fort Hood, TX | Dartmouth College area | University of Pennsylvania area" },
    ],
};

const links = {
    headerText: "Useful Links",
    data: [
        { icon: FaDotCircle, value: "Home", link: "/" },
        { icon: FaDotCircle, value: "Listings", link: "listings" },
        { icon: FaDotCircle, value: "Contact Us", link: "contact-us" },
    ],
};

const contacts = {
    headerText: "Contact Us",
    data: [
        { icon: FaPhoneSquareAlt, value: "+ 1 212 961 7065" },
        { icon: MdEmail, value: "president@serana.com" },
        { icon: FaGlobe, value: "www.serana.com" },
    ],
};

const listings = [
    { icon: FaLocationDot, image: "./src/assets/room1.jpg", value1: "#4 Hotel-Like Private Room KING bed very near Yale", value2: "Private room in house", value3: "Yale University area" },
    { icon: FaLocationDot, image: "./src/assets/room2.jpg", value1: "New #6 Hotel-Like KING Private Room Very Near Yale", value2: "Private room in house", value3: "Yale University area" },
    { icon: FaLocationDot, image: "./src/assets/room3.jpg", value1: "New #2 Hotel-Like KING Private Room Very Near Yale", value2: "Private room in house", value3: "Yale University area" },
    { icon: FaLocationDot, image: "./src/assets/room4.jpg", value1: "New #7 Hotel-Like KING Private Room Very Near Yale", value2: "Private room in house", value3: "Yale University area" },
    { icon: FaLocationDot, image: "./src/assets/room5.jpg", value1: "Hotel-Like #1 KING Bed Private Room Near Yale", value2: "Private room in house", value3: "Yale University area" },
    { icon: FaLocationDot, image: "./src/assets/room6.jpg", value1: "New #4 Hotel-Like KING Private Room Very Near Yale", value2: "Private room in house", value3: "Yale University area" },
];

export { locations, links, contacts, listings };
