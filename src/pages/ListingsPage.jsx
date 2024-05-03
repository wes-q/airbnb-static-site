import { listings } from "../data";
import Card from "../components/Card";
import listingImage from "../assets/listings-background.jpg";

const ListingsPage = () => {
    return (
        <>
            <div className="relative flex justify-center h-56 w-full bg-black mb-20">
                <img className="absolute inset-0 w-full h-full object-cover opacity-70" src={listingImage} alt="house back" />
                <div className="absolute inset-0 flex justify-center items-center text-4xl text-white">
                    <span className="font-bold">LISTINGS</span>
                </div>
            </div>

            <div className="flex flex-col items-center text-secondary gap-8 mb-20">
                <span className="text-2xl font-extrabold">Yale University Area</span>
                <div className="grid grid-cols-3 gap-8">
                    {listings.map((listing) => {
                        return (
                            <>
                                <Card cardData={listing} />
                            </>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default ListingsPage;
