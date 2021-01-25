import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Link } from 'gatsby';

import Logo from './logos/logoType';

const StyledFooter = styled.footer`
    ${tw`bg-brand-1 py-14 text-white`}
`;

const FooterInner = styled.div`
    ${tw`container px-4 md:px-0 flex justify-between flex-col md:flex-row px-5 md:px-0`}
`;

const FooterNav = styled.div`
    ${tw`flex flex-col md:flex-row items-center md:items-start`}
`;

const ContactDiv = styled.div`
    ${tw`flex flex-col mb-10 md:mr-20`}
`;

const StyledLogoLink = styled(Link)`
    ${tw`mb-3`}
`;

const StyledA = styled.a`
    ${tw`underline`}
`;

const StyledUL = styled.ul`
    ${tw`grid grid-cols-2 gap-x-10 mb-10 md:mb-0`}
`;

// link hover styles added as className, need to revisit
// link hover state utility classes applied using className in jsx
const StyledLink = styled(Link)`
    ${tw`capitalize relative`}
`;

const StyledForm = styled.form`
    ${tw`flex flex-col items-center md:items-end`}
`;

const FormHeading = styled.p`
    ${tw`text-ts-h5 capitalize text-right mb-3.5`}
`;

const StyledLabel = styled.label`
    ${tw`sr-only`}
`;

const StyledInput = styled.input`
    ${tw`bg-brand-1 border border-white mb-5 p-1 text-lg text-right`}
`;

const StyledButton = styled.button`
    ${tw`border border-2 border-white rounded-full self-center md:self-end capitalize px-5 py-1 text-center text-lg hover:bg-brand-6 hover:border-brand-6 transition-colors`}
`;

// todo: confirm mobile layout
// todo: confirm hover states for internal links
// todo: wire up form submission

const content = {
    contactEmail: {
        link: 'info@silverado.org',
        text: 'info@silverado.org',
    },
    internalLinks: [
        {
            link: '/',
            text: 'internal link 1',
        },
        {
            link: '/',
            text: 'internal link 2',
        },
        {
            link: '/',
            text: 'internal link 3',
        },
        {
            link: '/',
            text: 'internal link 4',
        },
        {
            link: '/',
            text: 'internal link 5',
        },
        {
            link: '/',
            text: 'internal link 6',
        },
    ],
    form: {
        heading: 'newsletter',
        buttonText: 'submit',
    },
};

export default function Footer() {
    const links = content.internalLinks.map((item) => {
        return (
            <li key={item.text}>
                <StyledLink className="link hover:link-hover" to={item.link}>
                    {item.text}
                </StyledLink>
            </li>
        );
    });
    return (
        <StyledFooter>
            <FooterInner>
                <FooterNav>
                    <ContactDiv>
                        <StyledLogoLink to="/">
                            <Logo />
                        </StyledLogoLink>
                        <StyledA href={`mailto:${content.contactEmail.link}`}>
                            {content.contactEmail.text}
                        </StyledA>
                    </ContactDiv>
                    <StyledUL>{links}</StyledUL>
                </FooterNav>
                <StyledForm>
                    <FormHeading>{content.form.heading}</FormHeading>
                    <StyledLabel htmlFor="email sr-only">Email</StyledLabel>
                    <StyledInput
                        name="email"
                        placeholder="email"
                        type="email"
                    />
                    <StyledButton type="submit">
                        {content.form.buttonText}
                    </StyledButton>
                </StyledForm>
            </FooterInner>
        </StyledFooter>
    );
}
