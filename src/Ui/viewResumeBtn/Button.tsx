import 'react';
import '../viewResumeBtn/button.css';

const Button = () => {
    return (
        <>
            <a href="/" download="" className="contact-button">
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
