import React from "react";


interface Props {
    imageSource: string,
    description: string
}

const ImageContainer = ({imageSource, description }: Props) => {
    return (
        <div className="image-container ">
            <img className="service-image rounded-lg" src={imageSource} alt="alt text goes here" />
            <p className="image-text text-5xl">{description}</p>
        </div>
    );
};

export default ImageContainer;