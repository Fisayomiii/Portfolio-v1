import Project from "../../../components/Portfolio/Portfolio";
import Sidebar from "../../../components/Sidebar/Sidebar";

function Projects() {
    return (
        <>
            <div className="app">
                <Sidebar />
                <main className="section-home">
                    <Project /><br /><br />
                </main>
            </div>
        </>
    )
}

export default Projects