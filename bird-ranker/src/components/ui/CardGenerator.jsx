import React from "react";
import Card from "./Card";

const CardGenerator = () => {
    return (
        <Card>
            <Card.Image source=""/>
            <Card.Title title="hello"/>
            <Card.Body text="this is a body"/>
        </Card>
    )
};

export default CardGenerator