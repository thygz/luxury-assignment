import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa6';
import { MdOutlineKeyboardArrowUp } from 'react-icons/md';

export default function ScrollToTopButton() {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 1800) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        });
    });

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div>
            {showButton && (
                <button
                    className="fixed bottom-10 md:bottom-10 right-8 h-14 w-14 rounded-full bg-white flex justify-center items-center shadow-[0px_1px_4px_0px_rgba(0,0,0,0.2)]"
                    onClick={handleScrollToTop}
                >
                    <MdOutlineKeyboardArrowUp className="text-slate-900 text-5xl" />
                </button>
            )}
        </div>
    );
}
