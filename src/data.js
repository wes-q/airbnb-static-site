import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneSquareAlt, FaGlobe, FaDotCircle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import room1 from "./assets/room1.jpg";
import room2 from "./assets/room2.jpg";
import room3 from "./assets/room3.jpg";
import room4 from "./assets/room4.jpg";
import room5 from "./assets/room5.jpg";
import room6 from "./assets/room6.jpg";

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
    { icon: FaLocationDot, image: room1, value1: "#4 Hotel-Like Private Room KING bed very near Yale", value2: "Private room in house", value3: "Yale University area" },
    { icon: FaLocationDot, image: room2, value1: "New #6 Hotel-Like KING Private Room Very Near Yale", value2: "Private room in house", value3: "Yale University area" },
    { icon: FaLocationDot, image: room3, value1: "New #2 Hotel-Like KING Private Room Very Near Yale", value2: "Private room in house", value3: "Yale University area" },
    { icon: FaLocationDot, image: room4, value1: "New #7 Hotel-Like KING Private Room Very Near Yale", value2: "Private room in house", value3: "Yale University area" },
    { icon: FaLocationDot, image: room5, value1: "Hotel-Like #1 KING Bed Private Room Near Yale", value2: "Private room in house", value3: "Yale University area" },
    { icon: FaLocationDot, image: room6, value1: "New #4 Hotel-Like KING Private Room Very Near Yale", value2: "Private room in house", value3: "Yale University area" },
];

export { locations, links, contacts, listings };
