import React from "react";
import Card from "./Card";
import stateBirds from "../entities/stateBirds";

const CardGenerator = () => {
    const birds = stateBirds;
    return (
        <div className="w-screen h-fill flex flex-col items-center ">
            {
                birds.map((birb, key) => {
                    return (
                        <Card>
                            <Card.Image source={`${birb.image}`} />
                            <div className="space-y-2 px-4 py-0.5 justify-between">
                                <Card.Header
                                    index={key +1}
                                    bird={`${birb.name}`}
                                    state={`${birb.state}`} />
                                <Card.Body
                                    pro={`${birb.pro}`}
                                    con={`${birb.con}`} />
                            </div>
                        </Card>
                    )
                })
            }
        </div>
    )
};

export default CardGenerator