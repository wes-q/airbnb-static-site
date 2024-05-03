import ListBoxNoIcons from "../components/ListBoxNoIcons";
import { locations, contacts } from "../data";
import LeaveAMessage from "../components/LeaveAMessage";
import listingImage from "../assets/listings-background.jpg";

const ContactsPage = () => {
    return (
        <>
            <div className="relative flex justify-center h-56 w-full bg-black mb-20">
                <img className="absolute inset-0 w-full h-full object-cover opacity-70" src={listingImage} alt="house back" />
                <div className="absolute inset-0 flex justify-center items-center text-4xl text-white">
                    <span className="font-bold">CONTACT US</span>
                </div>
            </div>
            <div className="flex justify-center mb-20">
                <div className="flex w-full max-w-[900px] gap-4">
                    <div className="bg-primary p-4 grow rounded-md">
                        <ListBoxNoIcons listObject={contacts} />
                    </div>
                    <div className="bg-primary  p-4 grow rounded-md">
                        <ListBoxNoIcons listObject={locations} />
                    </div>
                </div>
            </div>
            <div className="flex justify-center mb-20">
                <div className="flex justify-center w-full max-w-[900px] gap-4">
                    <LeaveAMessage />
                </div>
            </div>
        </>
    );
};

export default ContactsPage;
