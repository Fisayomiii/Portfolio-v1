import Footer from "../../../components/Footer/Footer";
import Project from "../../../components/Portfolio/Portfolio";
import Sidebar from "../../../components/Sidebar/Sidebar";

function Projects() {
    return (
        <>
            <div className="app">
                <Sidebar />
                <main className="main">
                    <br /><br /><br /><br /><br /><br /><Project />
                    <Footer/>
                </main>
            </div>
        </>
    )
}

export default Projects