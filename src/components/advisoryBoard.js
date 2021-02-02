import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'twin.macro';

import BoardMember from './boardMember';

const StyledSection = styled.section`
    ${tw`container px-5 xl:px-0`}
`;

const StyledList = styled.div`
    ${tw`grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16 mb-24`}
`;

const StyledHeading = styled.h2`
    ${tw`capitalize font-wt-bold mb-8 text-brand-1 text-ts-h2`}
`;

export default function AdvisoryBoard({ team }) {
    return (
        <StyledSection>
            <StyledHeading>Silverado Team</StyledHeading>
            <StyledList>
                {team.map((item) => {
                    return <BoardMember data={item} key={item.id} />;
                })}
            </StyledList>
        </StyledSection>
    );
}

AdvisoryBoard.propTypes = {
    team: PropTypes.array.isRequired,
};
