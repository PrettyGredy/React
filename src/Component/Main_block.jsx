import React from "react";
import "./Main_block.css";

const Main_block = (props) => {
    return (
        <div>
            <div className={"block"}>
                <block_left/>
                <img src='https://i.pinimg.com/236x/5a/4f/1f/5a4f1f82b398e0b8c168ec4462a6863a--eurotrip-walking.jpg'
                     alt='город' height={85} width={130}/>
                <p>
                    In der Stadt leben rund sechs hundert fünf und fünfzig Tausend Einwohner. Frankfurt ist seit vielen Jahren auch als Messestadt bekannt.
                </p>
                <button> Открыть </button>
            </div>
            <div className={"block"}>
                <block_midle/>
                <img src='http://img9.wild-mistress.ru/8774987/8774987-0004.jpg' alt='город' height={85} width={130}/>
                <p>
                    Leipzig ist die Stadt der Sehenswürdigkeiten. Es ist weltberühmt und weltbekannt.
                </p>
                <button> Открыть </button>
            </div>
            <div className={"block"}>
                <block_right/>
                <img
                    src='https://4.bp.blogspot.com/-BcXinw7FOS8/WeJOu3Q9yII/AAAAAAAAAVk/qma-PYd98ickGG4252l_Tw8FgRB8tzffACLcBGAs/s640/mota.ru_20161121227-0a2.jpg'
                    alt='город' height={85} width={130}/>
                <p>
                    Frankfurt am Main liegt in der Mitte der Bundesrepublik Deutschland. Frankfurt nennt man oft „das
                    deutsche Chicago“ – und das ist nicht nur wegen seiner Hochhäuser.
                </p>
                <button> Открыть </button>
            </div>
        </div>
    )
};

const block_left = (props) => {
    return (
        <div>

            <div> gdffffffff</div>
        </div>
    )
};
const block_midle = () => {
    return (
        <div>
            <h1>fewwwwww</h1>
        </div>
    )
};

const block_right = () => {
    return (
        <div>
            sdgffffffff
        </div>
    )
};

export default Main_block;
