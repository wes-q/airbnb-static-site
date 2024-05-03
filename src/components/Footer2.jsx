import { locations } from "../data";

const Footer2 = () => {
    return (
        <div className="text-black">
            {locations.map((location) => {
                return <li key={location}>{location}</li>;
            })}
        </div>
    );
};

export default Footer2;
