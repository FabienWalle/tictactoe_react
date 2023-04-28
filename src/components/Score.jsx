import React from "react";

const Score = ({ text, score }) => {
    return (
        <>
            <div className="players">
                <span className="pulsate">{text}</span>
                <span>{score}</span>
            </div>
        </>
        )
}

export default Score