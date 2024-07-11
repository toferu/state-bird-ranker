import React from "react";
import Card from "./Card";
import stateBirds from "../entities/stateBirds";

const CardGenerator = () => {
    const birds = stateBirds;
    return (
        <div className="w-screen flex flex-col items-center space-y-4 my-12">
            {
                birds.map((birb, key) => {
                    return (
                        <Card bgColor={key} key={key}>
                            <Card.Image source={`${birb.image}`} />
                            <Card.Body>
                                <Card.Header
                                    index={key +1}
                                    bird={`${birb.name}`}
                                    state={`${birb.state}`} />
                                <Card.Text
                                    pro={`${birb.pro}`}
                                    con={`${birb.con}`} />
                            </Card.Body>
                        </Card>
                    )
                })
            }
        </div>
    )
};

export default CardGenerator