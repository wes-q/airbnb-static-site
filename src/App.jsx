import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import { useState, useEffect } from "react";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import LoginPage from "./pages/LoginPage";
import RootLayout from "./pages/RootLayout";
import ListingsPage from "./pages/ListingsPage";
import ContactsPage from "./pages/ContactsPage";

function App() {
    // const [currentUser, setCurrentUser] = useState("");
    // const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

    // useEffect(() => {
    //     getLocalUserFromBrowser();
    // }, [currentUser]);

    // const getLocalUserFromBrowser = () => {
    //     const loggedUserName = window.localStorage.getItem("loggedUserName");
    //     if (loggedUserName) {
    //         setCurrentUser(loggedUserName);
    //         setIsUserLoggedIn(true);
    //     }
    // };

    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path="/" element={<RootLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path="listings" element={<ListingsPage />} />
                    <Route path="contact-us" element={<ContactsPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Route>
                <Route path="login" element={<LoginPage />} />
            </>
        )
    );

    return <RouterProvider router={router} />;
}

export default App;
