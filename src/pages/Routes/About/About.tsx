import Aboutme from "../../../components/About/About";
import Sidebar from "../../../components/Sidebar/Sidebar";
import { useState, useEffect } from 'react';
import Loader from "../../../Ui/loader/Loader";

function About() {
  const [isloading, setisloading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setisloading(false)
    }, 2500)
  }, [])
  return (
    <>
      <div className="app">
        <Sidebar />
        <main className="section-home">
          {isloading ? <Loader /> :
            <>
              <Aboutme /><br /><br /><br /><br /><br /><br />
            </>
          }

        </main>
      </div>
    </>
  )
}

export default About