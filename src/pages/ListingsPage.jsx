const ListingsPage = () => {
    return (
        <>
            <div className="relative flex justify-center h-48 bg-black mb-20">
                <img className="opacity-50" src="./src/assets/listings-background.jpg" alt="house back" />
                <div className="absolute inset-0 flex justify-center items-center text-4xl text-white">
                    <span>LISTINGS</span>
                </div>
            </div>
            <div className="flex justify-center text-secondary">
                <span className="text-2xl font-extrabold">Yale University Area</span>
            </div>
        </>
    );
};

export default ListingsPage;
