import Logo from "../components/Logo"
import { socialImgs } from "../constant"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Logo */}
                <div className="flex flex-col justify-center gap-5">
                    < Logo />
                    <div className="socials">
                        {socialImgs.map((socialImgs, index) => (
                            <a key={index} href={socialImgs.url} target="_blank">
                                <div key={index} className="icon">
                                    <img
                                        src={socialImgs.imgPath}
                                        alt={socialImgs.platform}
                                    />
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
                {/* Social Icons */}
            </div>
        </footer>
    )
}

export default Footer