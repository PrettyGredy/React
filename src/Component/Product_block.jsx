import React from "react";
import "./Main_block.css";

const Main_block =() => {
    return(
        <div>
            <div className={"block"}>
                <block_left/>
            </div>
            <div className={"block"}>
                <block_midle/>
            </div>
            <div className={"block"}>
                <block_right/>
            </div>
        </div>
    )
};

const block_left = () => {
    return (
        <div>
        </div>
    )
};
const block_midle = () => {
    return (
        <div>
        </div>
    )
};

const block_right = () => {
    return (
        <div>
        </div>
    )
};

export default Main_block;
