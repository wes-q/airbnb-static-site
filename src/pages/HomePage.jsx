import SlideshowAuto from "../components/SlideshowAuto";

const images = ["./src/assets/1.jpg", "./src/assets/2.jpg"];

const HomePage = () => {
    return (
        <>
            <div className="relative h-[550px] bg-black">
                <SlideshowAuto images={images} />
                <div className="absolute inset-0 flex justify-center items-center">
                    <div className="flex flex-col justify-center h-full w-full max-w-[900px] min-w-[500px] gap-6">
                        <div className="flex gap-2">
                            <span className="text-4xl font-black text-primary">PRIVATE ROOMS</span>
                            <span className="text-4xl font-black text-white text-shadow-black">BY SERANA</span>
                        </div>

                        <div className="flex">
                            <span className="text-xs text-shadow-black">Finding the right accommodation can be a daunting task, especially in a fast-paced world where time is of the essence. At Serana, we understand your needs and offer a hassle-free solution to your accommodation woes. Whether you’re a student, a young professional, or a family looking for a comfortable place to call home, we’ve got you covered. Our rooms are carefully curated to provide you with the comfort and convenience you need to live your best life.</span>
                        </div>

                        <div className="flex gap-2">
                            <button className="rounded-sm bg-primary py-2 px-4 text-xs hover:bg-white hover:text-primary transition-colors duration-500">Contact Us</button>
                            <button className="rounded-sm bg-primary py-2 px-4 text-xs hover:bg-white hover:text-primary transition-colors duration-500">Our Listings</button>
                        </div>
                    </div>
                </div>
            </div>
            <img src="./src/assets/dave.jpg" alt="dave" />
        </>
    );
};

export default HomePage;
