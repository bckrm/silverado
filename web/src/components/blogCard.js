import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { Link } from 'gatsby';

import styled from 'styled-components';
import tw from 'twin.macro';

const CardContainer = styled.div`
    ${tw`w-72 h-96 shadow-xl bg-white relative my-10`}
    &:before {
        background: var(--brand-1);
        content: '';
        height: 20px;
        position: absolute;
        width: 100%;
        top: 0;
        left: 0;
        z-index: 2;
    }
`;
const BlogWrapper = styled.div`
    ${tw`px-6 py-4`}
`;
const BlogTitle = styled.h5`
    ${tw`text-brand-1 text-ts-h5`}
`;
const BlogSubTitle = styled.p`
    ${tw`text-brand-3 text-base`}
`;

const BlogDetails = styled.p`
    ${tw`text-black text-base`}
`;

const StyledLink = styled(Link)`
    ${tw`underline text-brand-3 absolute bottom-0 left-0 px-6 py-4`}
`;
export default function BlogCard({ data }) {
    const {
        title,
        subtitle,
        image: {
            childImageSharp: { fluid },
        },
        description,
    } = data;

    return (
        <CardContainer>
            <Img fluid={fluid} />
            <BlogWrapper>
                <BlogTitle className="font-wt-bold">{title}</BlogTitle>
                <BlogSubTitle>{subtitle}</BlogSubTitle>
                <BlogDetails>{description}</BlogDetails>
                <StyledLink to="#">Read More</StyledLink>
            </BlogWrapper>
        </CardContainer>
    );
}

BlogCard.propTypes = {
    data: PropTypes.object.isRequired,
};
