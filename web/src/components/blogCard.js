import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { AnimatePresence } from 'framer-motion';
import { format, parseISO } from 'date-fns';

import styled from 'styled-components';
import tw from 'twin.macro';

import { imageUrlFor, buildImageObj } from '../helpers/sanityImageHelper';

const CardContainer = styled.div`
    ${tw`w-72 overflow-auto shadow-xl bg-white relative mb-4 md:mb-8`}
    &:before {
        background: ${({ color }) => color};
        content: '';
        height: 20px;
        position: absolute;
        width: 100%;
        top: 0;
        left: 0;
        z-index: 2;
    }
    .card {
        height: 28rem;
    }
    .gatsby-image-wrapper {
        margin-top: 20px;
        height: 150px;
    }
`;

const CardWrapper = styled.div`
    ${tw`px-6 py-4`}
`;

const CardTitle = styled.h5`
    ${tw`text-brand-1 text-ts-h5 font-bold`}
`;

const CardDate = styled.p`
    ${tw`text-brand-3 text-base pb-2`}
`;

const CardAuthor = styled.p`
    ${tw`text-brand-3 text-base`}
`;
const BlogDetails = styled.p`
    ${tw`text-black text-base pb-8`}
`;

const EventDetails = styled.div`
    ${tw`mb-8 mt-4`}
`;

const DateTimeInfo = styled.p`
    ${tw`mb-2 text-black text-base`}
`;
const StyledLink = styled(Link)`
    ${tw`underline text-brand-3 absolute bottom-0 left-0 px-6 py-4`}
`;
export default function BlogCard({ data, isShown }) {
    const {
        author,
        categories,
        dateAndTime,
        description,
        heroImage,
        id,
        place,
        publishDate,
        slug,
        title,
    } = data.node;

    const primaryPillarColor = categories[0].color;
    const formattedDate = publishDate
        ? format(parseISO(publishDate), 'MM/dd/yyyy')
        : null;

    return (
        <AnimatePresence>
            {isShown && (
                <CardContainer color={primaryPillarColor} className="card">
                    {heroImage && (
                        <img
                            className="mt-4"
                            src={imageUrlFor(buildImageObj(heroImage))
                                .width(288)
                                .height(Math.floor((9 / 16) * 288))
                                .fit('fill')
                                .auto('format')
                                .url()}
                            alt=""
                        />
                    )}
                    <CardWrapper id={id}>
                        <CardTitle>{title}</CardTitle>
                        {author && <CardAuthor>{author}</CardAuthor>}
                        {publishDate && <CardDate>{formattedDate}</CardDate>}
                        {description && !dateAndTime && (
                            <BlogDetails>{description}</BlogDetails>
                        )}
                        {dateAndTime && (
                            <EventDetails>
                                <DateTimeInfo>
                                    {format(
                                        Date.parse(dateAndTime),
                                        'MM/dd/yyyy',
                                    )}
                                </DateTimeInfo>
                                <DateTimeInfo>
                                    {format(Date.parse(dateAndTime), 'p')}
                                </DateTimeInfo>
                                <DateTimeInfo>{place}</DateTimeInfo>
                            </EventDetails>
                        )}
                        {dateAndTime && (
                            <StyledLink to={`/events/${slug.current}`}>
                                Read More
                            </StyledLink>
                        )}
                        {!dateAndTime && (
                            <StyledLink to={`/news/${slug.current}`}>
                                Read More
                            </StyledLink>
                        )}
                    </CardWrapper>
                </CardContainer>
            )}
        </AnimatePresence>
    );
}

BlogCard.propTypes = {
    data: PropTypes.object.isRequired,
    isShown: PropTypes.bool.isRequired,
};
