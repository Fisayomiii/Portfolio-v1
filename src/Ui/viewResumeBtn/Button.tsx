import 'react';
import '../viewResumeBtn/button.css';
import resume from '../../assets/Resume/Fisayoagboola.pdf';

const Button = () => {
    return (
        <>
            <a href={resume} target="_blank" rel="noopener noreferrer" className="contact-button">
                <div>
                    <span className="bg"></span>
                    <span className="base"></span>
                    <span className="text">
                        View Resume!
                    </span>
                </div>
            </a>
        </>
    )
}

export default Button;
