import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import './Valentine.css';
export default function Valentine() {
    const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
    const [clicks, setClicks] = useState(0);
    const [yesClicked, setYesClicked] = useState(false);
    const handleNoHover = () => {
        const randomX = (Math.random() - 0.5) * 300;
        const randomY = (Math.random() - 0.5) * 300;
        setNoButtonPosition({ x: randomX, y: randomY });
    };
    const handleYesClick = () => {
        setYesClicked(true);
        setClicks(clicks + 1);
    };
    return (_jsx("div", { className: "valentine-container", children: _jsx("div", { className: "valentine-content", children: !yesClicked ? (_jsxs(_Fragment, { children: [_jsxs("div", { className: "valentine-header", children: [_jsx("h1", { children: "Happy Valentine's Day! \uD83D\uDC95" }), _jsx("p", { className: "subtitle", children: "Will you be my Valentine?" })] }), _jsx("div", { className: "hearts-background", children: [...Array(20)].map((_, i) => (_jsx("div", { className: "floating-heart-bg", children: ['💕', '💖', '💝', '💗', '❤️'][Math.floor(Math.random() * 5)] }, i))) }), _jsxs("div", { className: "buttons-container", children: [_jsx("button", { className: "btn-yes", onClick: handleYesClick, children: "YES! \uD83D\uDC95" }), _jsx("button", { className: "btn-no", onMouseEnter: handleNoHover, style: {
                                    transform: `translate(${noButtonPosition.x}px, ${noButtonPosition.y}px)`,
                                    transition: 'transform 0.3s ease-out'
                                }, children: "NO \uD83D\uDE14" })] }), _jsxs("p", { className: "teasing-text", children: [clicks > 0 && `You tried to click "No" ${clicks} times! 😄`, clicks === 0 && "Try clicking the 'No' button... if you can catch it! 😉"] })] })) : (_jsxs("div", { className: "celebration", children: [_jsx("div", { className: "confetti-burst", children: [...Array(50)].map((_, i) => (_jsx("div", { className: "confetti", children: ['🎉', '✨', '💕', '🌹', '💑', '🎊'][Math.floor(Math.random() * 6)] }, i))) }), _jsx("h2", { className: "celebration-text", children: "\uD83C\uDF89 YES! I LOVE YOU! \uD83C\uDF89" }), _jsx("div", { className: "celebration-emoji", children: "\uD83D\uDC91\uD83D\uDC95" }), _jsxs("p", { className: "message", children: ["I knew you'd say YES! You're my angel, my light, my everything!", _jsx("br", {}), _jsx("br", {}), "You changed my life completely since you came into it. You brighten every single day of my life and you're the reason I smile.", _jsx("br", {}), _jsx("br", {}), "I promise you\u2014I'm here for you always, I'll annoy you my whole life, and even after that!", _jsx("br", {}), _jsx("br", {}), "Happy Valentine's Day, my beautiful Sona! \uD83D\uDC95 Forever yours! \u2764\uFE0F"] })] })) }) }));
}
