import { useState, useEffect } from "react";
import Footer from "../components/Footer/Footer";
import AccordionFooter from '../components/AccordionFooter/Accordion';
import Header from '../components/header/Header';
import HeaderAside from '../components/Header/HeaderAside';
import { Outlet } from "react-router-dom";
import FooterBranding from "../components/Footer/FooterBrand";
const RootLayout = () => {
    // footer accordion states
    const [isOpen, setIsOpen] = useState(true);


useEffect(() => {
    const handleResizeFooter = () => {
        if (window.innerWidth > 1000) {
            setIsOpen(false)
        } else {
            setIsOpen(true)
        }
    }
    window.addEventListener('resize', handleResizeFooter);
    handleResizeFooter(); // set initial state
}, []);

    return (
        <div>
        { isOpen ? <HeaderAside /> : <Header />}
           <main>
            <Outlet />
           </main>
           <div>
        { isOpen ? <AccordionFooter/> : <Footer /> }
            <FooterBranding />
           </div>
        </div>
    )
}

export default RootLayout;