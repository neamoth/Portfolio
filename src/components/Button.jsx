const Button = ({ href, text, className, newTab = false }) => {
    return (
        <a
            href={href}
            target={newTab ? "_blank" : "_self"}
            rel={newTab ? "noopener noreferrer" : undefined}
            className={`${className ?? ''} cta-wrapper`}
        >
            <div className="cta-button group">
                <div className="bg-circle" />
                <p className="text">{text}</p>
                <div className="arrow-wrapper">
                    <img src="src\assets\images\arrow-down.svg" alt="button arrow down" />
                </div>
            </div>
        </a>
    )
}

export default Button