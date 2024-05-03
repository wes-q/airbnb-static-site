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
            <div className="flex justify-center my-20">
                <div className="flex justify-center w-full max-w-[900px] border-4 border-secondary rounded-md">
                    <div className="bg-black flex-1">
                        <img className="rounded-s-md" src="./src/assets/dave.jpg" alt="dave" />
                    </div>
                    <div className="flex flex-col justify-center bg-primary flex-1 px-10 gap-4 rounded-e-md">
                        <span className="text-2xl font-extrabold">ABOUT ME</span>
                        <span className="text-xs">I am a US Army Iraq War veteran. I am a Registered Nurse with a doctorate in nursing. I am also a Medical Doctor, but retired. Now I bring CARE to Airbnb. I am happily married to a Registered Nurse, Mary Sue. I have 2 sons, Ben and Joatham, a foster son Mark, a foster daughter, Z and 9 frozen embryos for surrogacy implantation. I am a proud AirBnB host.</span>
                        <div className="">
                            <button className="rounded-sm bg-secondary py-2 px-4 text-xs hover:bg-white hover:text-primary transition-colors duration-500">Get In Touch</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center gap-20 mb-20">
                <span className="text-2xl font-extrabold text-secondary">Our Listings</span>

                <div className="grid grid-cols-3 gap-8">
                    <div className="rounded-md h-96 w-72 bg-secondary border-2 border-primary"></div>
                    <div className="rounded-md h-96 w-72 bg-secondary border-2 border-primary"></div>
                    <div className="rounded-md h-96 w-72 bg-secondary border-2 border-primary"></div>
                </div>

                <button className="rounded-sm bg-secondary py-2 px-4 text-xs hover:bg-primary hover:text-white transition-colors duration-500">View More</button>
            </div>
        </>
    );
};

export default HomePage;
