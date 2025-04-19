import React from 'react'
const AnimatedHeading = ({ text, title, center = false }) => {
    return (
        <>
            <h1 className={center ? 'text-center' : ''}>
                {title}
                <span className='slide'>
                    <span className='wrapper'>
                        {text.map((word) => (
                            <span key={word.id} className="flex items-center md:gap-3 gap-1 pb-2">
                                {word.imgPath && (
                                    <img
                                        src={word.imgPath}
                                        alt={word.text}
                                        className="xl:size-12 md:size-10 size-7 md:p-1 p-2 rounded-full bg-white-50"
                                    />
                                )}

                                <span>{word.text}</span>
                            </span>
                        ))}
                    </span>
                </span>
            </h1>
        </>
    )
}

export default AnimatedHeading