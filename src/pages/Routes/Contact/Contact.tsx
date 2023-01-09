import ContactMe from "../../../components/Contact/Contact";
import Sidebar from "../../../components/Sidebar/Sidebar";

function Contact() {
    return (
        <>
            <div className="app">
                <Sidebar />
                <main className="section-home">
                    <ContactMe />
                </main>
            </div>
        </>
    )
}

export default Contact