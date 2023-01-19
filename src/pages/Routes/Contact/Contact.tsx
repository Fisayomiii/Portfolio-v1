import ContactMe from "../../../components/Contact/Contact";
import Footer from "../../../components/Footer/Footer";
import Sidebar from "../../../components/Sidebar/Sidebar";

function Contact() {
    return (
        <>
            <div className="app">
                <Sidebar />
                <main className="main">
                    <ContactMe />
                    <Footer />
                </main>
            </div>
        </>
    )
}

export default Contact