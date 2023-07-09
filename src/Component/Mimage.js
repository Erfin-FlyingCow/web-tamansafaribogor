import React from "react";



export default function Mimage () {
    return(
        <div className="flex flex-row conatiner bg-white brightness-75 py-2">
            <div className="basis-1/3 scale-130">
                <img src="https://cdn.discordapp.com/attachments/1096614485231423568/1124593896819785748/Screenshot_2023-07-01_131923.png"  alt="1"/>
            </div>
            <div className="basis-1/3 scale-120">
                <img src="https://cdn.discordapp.com/attachments/1096614485231423568/1126853495027417149/logog.png" alt="2"/>
            </div>
            <div className="basis-1/3 scale-130">
                <img src="https://cdn.discordapp.com/attachments/1096614485231423568/1126849116824141915/gajah.png" alt="3"/>
            </div>
        </div>
    );
}