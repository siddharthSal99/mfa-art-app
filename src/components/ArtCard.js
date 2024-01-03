import React from "react";

let ArtCard = (props) => {
    return (
        <>
            <div className="art-card">
                <div >
                    <img style={{width:'200px'}} src={props.image}/>
                </div>
                <div>
                    <span>Title: {props.title}</span>
                </div>
                <div>
                    <span>Artist: {props.artist}</span>
                </div>
                <div>
                    <span>Date: {props.date}</span>
                </div>
            </div>
        </>
    )
};

export default ArtCard;