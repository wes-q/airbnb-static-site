const Card = ({ cardData }) => {
    const Icon = cardData.icon;

    return (
        <div className="flex flex-col items-left gap-2 rounded-md h-96 w-72 bg-secondary border-2 border-primary text-white p-2">
            <img className="h-52 w-full object-cover" src={cardData.image} alt="listing image" />
            <div className="flex justify-center">
                <span className="text-xl">{cardData.value2}</span>
            </div>
            <div className="border-t-2 border-primary w-full"></div>
            <span className="text-xs">{cardData.value1}</span>
            <div className="flex gap-2">
                <Icon className="text-primary" />
                <span className="text-xs">{cardData.value3}</span>
            </div>
            <div className="flex justify-center">
                <button className="rounded-sm bg-primary w-32 py-2 px-4 text-xs hover:bg-white hover:text-primary transition-colors duration-500">Learn More</button>
            </div>
        </div>
    );
};

export default Card;
