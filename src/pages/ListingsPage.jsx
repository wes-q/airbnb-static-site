const ListingsPage = () => {
    return (
        <>
            <div className="relative flex justify-center h-56 w-full bg-black mb-20">
                <img className="absolute inset-0 w-full h-full object-cover opacity-70" src="./src/assets/listings-background.jpg" alt="house back" />
                <div className="absolute inset-0 flex justify-center items-center text-4xl text-white">
                    <span className="font-bold">LISTINGS</span>
                </div>
            </div>
            <div className="flex justify-center text-secondary">
                <span className="text-2xl font-extrabold">Yale University Area</span>
            </div>
        </>
    );
};

export default ListingsPage;
