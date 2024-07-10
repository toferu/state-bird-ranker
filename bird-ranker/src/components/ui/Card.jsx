import React from "react"

const Card = ({children}) => {
    return (
        <div className="flex w-1/2 bg-red-500 m-8 rounded-md p-1.5">
        {children}
        </div>
    )
};

const CardImage = ({source}) => {
    return (
        <div className="w-max h-max">
            <img className="h-64 w-64 object-cover rounded-md" src={source}/>
        </div>
    )
};

const CardHeader = ({bird, state, index}) => {
    return (
        <div className="flex-col space-y-1.5 w-96">
            <div className="flex justify-between">
                <h2 className="text-2xl text-black capitalize font-bold">{bird}</h2>
                <h2 className="text-2xl text-black capitalize font-bold">#{`${index}`}</h2>
            </div>
            <h2 className="text-xl text-black capitalize font-bold">{state}</h2>
        </div>
    )
};

const CardBody = ({pro, con}) => {
    return (
        <div className="w-96 space-y-1.5">
            <div className="text-black">
                <h3 className="text-lg font-bold">Pro:</h3>{pro}
            </div>
            <div className="text-black">
                <h3 className="text-lg font-bold">Con:</h3>{con}
            </div>
      </div >
    )
};

Card.Image = CardImage
Card.Header = CardHeader
Card.Body = CardBody

export default Card;