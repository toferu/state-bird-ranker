import React from "react"

const Card = ({children, bgColor}) => {
    //TODO: In the future, replace this with a property on the stateBird entity based on if red or blue state.
    function handleBgColor(indexNumber) {
        if (indexNumber % 2 !== 0) {
            return "flex w-2/3 h-2/5 rounded-md p-1.5 bg-blue-500";
        } else {
            return "flex w-2/3 rounded-md p-1.5 bg-red-500";
        };
    };

    return (
        <div className={handleBgColor(bgColor)} >
        {children}
        </div>
    )
};

const CardImage = ({source}) => {
    return (
        <div className="w-2/3 h-auto">
            <img className="h-full w-full object-cover rounded-md" src={source}/>
        </div>
    )
};

const CardHeader = ({bird, state, index}) => {
    return (
        <div className="flex-col space-y-1.5">
            <div className="flex justify-between">
                <h2 className="text-2xl text-white capitalize font-bold">{bird}</h2>
                <h2 className="text-2xl text-white capitalize font-bold">#{`${index}`}</h2>
            </div>
            <h2 className="text-xl text-white capitalize font-bold">{state}</h2>
        </div>
    )
};

const CardBody = ({children}) => {
    return (
        <div className="w-5/6 space-y-2 px-4 py-0.5 justify-between">
            {children}
        </div>
    )
};

const CardText = ({pro, con}) => {
    return (
        <div className="space-y-1.5">
            <div className="text-white">
                <h3 className="text-lg font-bold">Pro:</h3>{pro}
            </div>
            <div className="text-white">
                <h3 className="text-lg font-bold">Con:</h3>{con}
            </div>
      </div >
    )
};

Card.Image = CardImage
Card.Header = CardHeader
Card.Body = CardBody
Card.Text = CardText

export default Card;