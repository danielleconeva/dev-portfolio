import styled from "styled-components";
import { FiMail, FiMapPin } from "react-icons/fi";
import { SiLinkedin, SiGithub } from "react-icons/si";
import Footer from "./Footer";

const Wrapper = styled.section`
    position: relative;
    background: black;
    padding: 6rem 1rem 0;
    text-align: center;
    min-height: auto !important;
`;

const SectionTitle = styled.h2`
    font-family: ${({ theme }) => theme.fonts.headingMain};
    font-size: 6rem;
    font-weight: 500;
    color: white;
    text-transform: uppercase;
    letter-spacing: -0.02em;
    line-height: 1;
    letter-spacing: 0.2rem;
    margin: -1rem 0 1rem 0;
`;

const Content = styled.div`
    max-width: 980px;
    margin: 0 auto;
`;

const IntroText = styled.p`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: 1.4rem;
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: 1rem;
    margin-top: 2rem;
    font-weight: 200;
`;

const ContactGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    margin-bottom: 2rem;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

const ContactCard = styled.a`
    background: transparent;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    padding: 2.5rem 2rem;
    text-decoration: none;
    color: white;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    position: relative;
    overflow: hidden;

    &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 2px;
        background: linear-gradient(90deg, transparent, white, transparent);
        transform: translateX(-100%);
        transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    }

    &:hover {
        border-color: rgba(255, 255, 255, 0.3);
        background: rgba(255, 255, 255, 0.02);

        &::after {
            transform: translateX(0);
        }

        svg {
            color: rgba(255, 255, 255, 1);
        }
    }

    svg {
        font-size: 2.5rem;
        color: rgba(255, 255, 255, 0.7);
        transition: color 0.4s ease;
    }
`;

const CardLabel = styled.span`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: 0.75rem;
    font-weight: 500;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.5);
`;

const CardValue = styled.span`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: 1.1rem;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.9);
`;

const LocationInfo = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    padding: 0.5rem 0;
    color: rgba(255, 255, 255, 0.8);
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: 1rem;
    font-weight: 300;
    letter-spacing: 0.05em;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    margin-bottom: 2rem;
    margin-top: -1rem;

    svg {
        font-size: 1.1rem;
        color: rgba(255, 255, 255, 0.683);
        margin-bottom: 0.4rem;
    }
`;

export default function Contact() {
    return (
        <Wrapper id="contact">
            <SectionTitle>Contact</SectionTitle>

            <Content>
                <IntroText>Get in touch.</IntroText>

                <ContactGrid>
                    <ContactCard
                        href="mailto:dconewa@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FiMail />
                        <CardLabel>Email</CardLabel>
                        <CardValue>dconewa@gmail.com</CardValue>
                    </ContactCard>

                    <ContactCard
                        href="https://linkedin.com/in/daniella-coneva"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <SiLinkedin />
                        <CardLabel>LinkedIn</CardLabel>
                        <CardValue>Let's network</CardValue>
                    </ContactCard>

                    <ContactCard
                        href="https://github.com/danielleconeva"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <SiGithub />
                        <CardLabel>GitHub</CardLabel>
                        <CardValue>Explore my code</CardValue>
                    </ContactCard>
                </ContactGrid>

                <LocationInfo>
                    <FiMapPin />
                    <span>Based in Sofia, Bulgaria</span>
                </LocationInfo>
            </Content>
            <Footer />
        </Wrapper>
    );
}
