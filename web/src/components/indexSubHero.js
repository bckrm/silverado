import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'twin.macro';

// import EventList from './eventList';

const StyledSection = styled.section`
    ${tw`pb-16 pt-10`}
    background: linear-gradient(
        180deg,
        #edf8f8 0%,
        rgba(237, 248, 248, 0) 100%
    );
`;

const GridWrapper = styled.div`
    ${tw`container grid grid-cols-1 lg:grid-cols-2 gap-x-10`}
`;

const Heading = styled.h1`
    ${tw`text-ts-h1 mb-6 relative text-brand-1 font-bold`}

    &:after {
        background: var(--brand-6);
        border-radius: 16px;
        content: '';
        height: 4px;
        left: 0;
        position: absolute;
        top: calc(100% + 12px);
        transform: translateY(-100%);
        width: 5rem;
    }
`;

const SubHeading = styled.h2`
    ${tw`lg:row-start-2 max-w-prose mb-5 lg:mb-0 text-ts-h4 text-brand-1 font-bold`}
`;

const StyledBody = styled.p`
    ${tw`lg:row-start-2 max-w-prose text-lg`}
`;

export default function IndexSubHero({
    body,
    bodyBold,
    heading,
    headingTwo,
    subHeading,
}) {
    return (
        <StyledSection>
            {/* <EventList /> */}
            <GridWrapper>
                <Heading>
                    {heading}
                    <br />
                    {headingTwo}
                </Heading>
                <SubHeading>{subHeading}</SubHeading>
                <StyledBody>
                    <strong>{bodyBold}</strong>
                    {body}
                </StyledBody>
            </GridWrapper>
        </StyledSection>
    );
}

IndexSubHero.propTypes = {
    body: PropTypes.string.isRequired,
    bodyBold: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
    headingTwo: PropTypes.string.isRequired,
    subHeading: PropTypes.string.isRequired,
};
