import styled from "styled-components";
import { FiMail, FiMapPin } from "react-icons/fi";
import { SiLinkedin, SiGithub } from "react-icons/si";
import Footer from "./Footer";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import type { Variants, Easing } from "framer-motion";

export default function Contact() {
    const ref = useRef<HTMLDivElement | null>(null);
    const isInView = useInView(ref, { once: false, amount: 0.3 });

    const smoothEase: Easing = [0.25, 0.6, 0.3, 1];

    const titleVariants: Variants = {
        hidden: { opacity: 0, y: 60 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1.4, ease: smoothEase },
        },
    };

    const introVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1.6, ease: smoothEase, delay: 0.2 },
        },
    };

    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 40 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                ease: smoothEase,
                delay: 0.3 + i * 0.2,
            },
        }),
    };

    const locationVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1.3, ease: smoothEase, delay: 0.8 },
        },
    };

    return (
        <Wrapper id="contact" ref={ref}>
            <motion.div
                variants={titleVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                <SectionTitle>Contact</SectionTitle>
            </motion.div>

            <Content>
                <motion.div
                    variants={introVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    <IntroText>Get in touch.</IntroText>
                </motion.div>

                <ContactGrid>
                    {[
                        {
                            icon: <FiMail />,
                            label: "Email",
                            value: "dconewa@gmail.com",
                            href: "mailto:dconewa@gmail.com",
                        },
                        {
                            icon: <SiLinkedin />,
                            label: "LinkedIn",
                            value: "Let's network",
                            href: "https://linkedin.com/in/daniella-coneva",
                        },
                        {
                            icon: <SiGithub />,
                            label: "GitHub",
                            value: "Explore my code",
                            href: "https://github.com/danielleconeva",
                        },
                    ].map((card, i) => (
                        <motion.div
                            key={card.label}
                            variants={cardVariants}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            custom={i}
                        >
                            <ContactCard
                                href={card.href}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {card.icon}
                                <CardLabel>{card.label}</CardLabel>
                                <CardValue>{card.value}</CardValue>
                            </ContactCard>
                        </motion.div>
                    ))}
                </ContactGrid>

                <motion.div
                    variants={locationVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    <LocationInfo>
                        <FiMapPin />
                        <span>Based in Sofia, Bulgaria</span>
                    </LocationInfo>
                </motion.div>
            </Content>

            <Footer />
        </Wrapper>
    );
}

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
