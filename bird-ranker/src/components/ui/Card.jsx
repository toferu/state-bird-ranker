import React from "react"

const Card = ({children}) => {
    return (
        <div className="flex justify-center align-items-center bg-red-500 m-8 rounded-md relative">
        {children}
        </div>
    )
};

const CardImage = ({source}) => {
    return (
        <div>
            <img src={source}></img>
        </div>
    )
};

const CardTitle = ({title}) => {
    return (
        <div>
            <h3 className="text-black capitalize underline font-bold">{title}</h3>
        </div>
    )
};

const CardBody = ({text}) => {
    return (
        <div className="text-black">
            {text}
        </div>
    )
};

Card.Image = CardImage
Card.Title = CardTitle
Card.Body = CardBody

export default Card;