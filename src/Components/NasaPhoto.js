import React from "react";
import styled from "styled-components";

const StyledPhoto = styled.div`
    text-align: center;
    background-color: ${pr => pr.theme.black};
    color: ${pr => pr.theme.white};

    .my-image {
        max-width: 40%;
        object-fit: cover;
        &:hover {
            transform: scale(1.3);
            margin: 70px;
        }
    }
    .nasaTitle {
        border-bottom: 1px solid white;
    }
`

const NasaPhoto = (props) => {
    return (
        <StyledPhoto className='nasa-photo-wrapper'>
            <h3 className="nasaTitle">{props.photo.title}</h3>
            <p>{props.photo.date}</p>
            <img src={props.photo.hdurl} alt='Nasa Pic' className="my-image"/>
            <p className="explanation">{props.photo.explanation}</p>
        </StyledPhoto> 
    );
}

export default NasaPhoto;