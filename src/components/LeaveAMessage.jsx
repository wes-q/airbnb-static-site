import { useState, useEffect } from "react";

const LeaveAMessage = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
    });

    const handleChange = (event) => {
        const { name, value, type } = event.target;
        const newValue = type === "file" ? files[0] : value;

        setFormData({
            ...formData,
            [name]: newValue,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Create a message object
        const newMessage = {
            firstName: formData["firstName"],
            lastName: formData["lastName"],
            email: formData["email"],
            message: formData["message"],
            timestamp: new Date().toISOString(),
        };

        // Store the message in localStorage
        localStorage.setItem("message", JSON.stringify(newMessage));

        // Clear form fields
        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            message: "",
        });

        alert("Message submitted successfully!");
    };

    return (
        <div className="flex flex-col items-center w-full">
            <span className="text-2xl text-secondary font-bold mb-4">Leave A Message</span>

            <form className="w-96 flex flex-col gap-2" id="messageForm" onSubmit={handleSubmit}>
                <label>
                    <span className="block text-sm font-medium text-secondary">First Name</span>
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="px-3 py-2 bg-slate-100 text-black border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-primary block w-full rounded-md sm:text-sm focus:ring-1 disabled:bg-gray-200 disabled:text-gray-500 disabled:border-gray-300" placeholder="First Name" required />
                </label>
                <label>
                    <span className="block text-sm font-medium text-secondary">Last Name</span>
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="px-3 py-2 bg-slate-100 text-black border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-primary block w-full rounded-md sm:text-sm focus:ring-1 disabled:bg-gray-200 disabled:text-gray-500 disabled:border-gray-300" placeholder="Last Name" required />
                </label>
                <label>
                    <span className="block text-sm font-medium text-secondary">Email</span>
                    <input type="text" name="email" value={formData.email} onChange={handleChange} className="px-3 py-2 bg-slate-100 text-black border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-primary block w-full rounded-md sm:text-sm focus:ring-1 disabled:bg-gray-200 disabled:text-gray-500 disabled:border-gray-300" placeholder="Email" required />
                </label>
                <label>
                    <span className="block text-sm font-medium text-secondary">Message</span>
                    <textarea name="message" value={formData.message} onChange={handleChange} form="messageForm" className="px-3 py-2 bg-slate-100 text-black border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-primary block w-full rounded-md sm:text-sm focus:ring-1 disabled:bg-gray-200 disabled:text-gray-500 disabled:border-gray-300" placeholder="Your message here..." required></textarea>
                </label>
                <button type="submit" className="rounded-sm bg-primary ring-1 ring-primary py-2 px-4 text-xs hover:bg-white hover:text-primary transition-colors duration-500">
                    Send Message
                </button>
            </form>
        </div>
    );
};
export default LeaveAMessage;
