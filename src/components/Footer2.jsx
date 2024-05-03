import { locations, contacts, links } from "../data";
import ListBox from "./ListBox";

const Footer2 = () => {
    return (
        <div className="flex justify-center py-20 bg-secondary gap-8">
            <ListBox listObject={locations} />
            <ListBox listObject={contacts} />
            <ListBox listObject={links} />
        </div>
    );
};

export default Footer2;
