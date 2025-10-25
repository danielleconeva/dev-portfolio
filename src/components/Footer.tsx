import styled from "styled-components";

const FooterElement = styled.footer`
    border-top: 1px solid rgba(255, 255, 255, 0.05);
    padding: 1rem;
    padding-bottom: 0.2rem;
`;

const FooterContent = styled.div`
    max-width: 980px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

const FooterText = styled.p`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: 0.85rem;
    color: rgba(255, 255, 255, 0.7);
    margin: 0;
    font-weight: 300;
`;

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <FooterElement>
            <FooterContent>
                <FooterText>
                    © {currentYear} Daniella Coneva. All rights reserved.
                </FooterText>
            </FooterContent>
        </FooterElement>
    );
}
