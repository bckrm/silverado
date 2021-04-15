import React from 'react';
import Img from 'gatsby-image';

import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'twin.macro';

import EventCard from './eventCard';

const HeroWrapper = styled.div`
    ${tw`relative`}
`;

const ImageWrapper = styled.div`
    ${tw`min-h-1/2-screen`}
    .gatsby-image-wrapper {
        height: 75%;
    }
`;

const HeroContainer = styled.div`
    ${tw`container min-h-3/4-screen w-screen text-white absolute transform top-0`}
`;

const Heading = styled.h1`
    ${tw`text-ts-h1 mb-6 mt-24`}
`;

export default function EventHero({ image, data }) {
    const {
        childImageSharp: { fluid },
    } = image;

    return (
        <HeroWrapper>
            <ImageWrapper>
                <Img fluid={fluid} />
            </ImageWrapper>
            <HeroContainer>
                <Heading className="font-wt-bold">Events</Heading>
            </HeroContainer>
            <EventCard data={data} />
        </HeroWrapper>
    );
}

EventHero.propTypes = {
    data: PropTypes.object.isRequired,
    image: PropTypes.object.isRequired,
};
