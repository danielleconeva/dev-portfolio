import styled from "styled-components";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const Wrapper = styled(motion.section)`
    position: relative;
    background-color: #f5f5f0;
    padding: 8rem 1rem 12rem 8rem;
    scroll-margin-top: 70px;

    @media (max-width: 768px) {
        padding: 4rem 2rem 2rem 2rem;
        display: flex;
        gap: 2rem;
    }

    @media (max-width: 1200px) and (min-width: 769px) {
        padding: 6rem 4rem 8rem 4rem !important;
        min-height: auto;
    }

    @media (min-width: 1600px) {
        padding: 10rem 1rem 15rem 10rem;
    }

    @media (min-width: 1900px) {
        padding: 12rem 1rem 18rem 12rem;
    }
`;

const SectionTitle = styled(motion.h2)`
    font-family: ${({ theme }) => theme.fonts.headingMain};
    font-size: 10rem;
    font-weight: 500;
    color: black;
    writing-mode: vertical-rl;
    transform: rotate(180deg);
    text-transform: uppercase;
    letter-spacing: -0.02em;
    margin: 0;
    position: absolute;
    left: 8rem;
    line-height: 0.9;

    @media (max-width: 768px) {
        font-size: 5rem;
        left: 0.01rem;
        bottom: 3rem;
        position: relative;
        flex-shrink: 0;
    }

    @media (max-width: 1200px) and (min-width: 769px) {
        font-size: 8rem;
        left: 5rem;
    }

    @media (min-width: 1600px) {
        font-size: 12rem;
        left: 10rem;
    }

    @media (min-width: 1900px) {
        font-size: 14rem;
        left: 12rem;
    }
`;

const ContentWrapper = styled(motion.div)`
    margin-left: 18rem;
    max-width: 778px;
    display: flex;
    gap: 6rem;

    @media (max-width: 768px) {
        margin-left: 0;
        margin-top: 0;
        max-width: 100%;
        flex-direction: column;
        gap: 3rem;
        flex: 1;
    }

    @media (max-width: 1200px) and (min-width: 769px) {
        margin-left: 12rem;
        max-width: 700px;
        gap: 4rem;
    }
    @media (min-width: 1600px) {
        margin-left: 22rem;
        max-width: 920px;
        gap: 7rem;
    }

    @media (min-width: 1900px) {
        margin-left: 26rem;
        max-width: 1080px;
        gap: 8rem;
    }
`;

const TextContent = styled(motion.div)`
    flex: 1;

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
    }

    @media (max-width: 1200px) and (min-width: 769px) {
        flex: 0.95;
    }
`;

const IntroSection = styled(motion.div)`
    margin-bottom: 2.2rem;
    margin-top: 1rem;

    @media (max-width: 768px) {
        margin-bottom: 1.5rem;
        margin-top: 0;
    }

    @media (min-width: 1600px) {
        margin-bottom: 2.6rem;
        margin-top: 1.2rem;
    }

    @media (min-width: 1900px) {
        margin-bottom: 3rem;
        margin-top: 1.4rem;
    }
`;

const MainContent = styled(motion.div)`
    padding-left: 2rem;
    border-left: 2px solid rgba(0, 0, 0, 0.1);

    @media (max-width: 768px) {
        padding-left: 1.5rem;
        border-left-width: 1.5px;
        order: 1;
    }

    @media (max-width: 1200px) and (min-width: 769px) {
        margin: 2rem 0;
    }

    @media (min-width: 1600px) {
        padding-left: 2.5rem;
        border-left-width: 2.5px;
    }

    @media (min-width: 1900px) {
        padding-left: 3rem;
        border-left-width: 3px;
    }
`;

const Description = styled(motion.p)`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: 1.2rem;
    line-height: 1.8;
    color: rgba(0, 0, 0, 0.7);
    margin-bottom: 2rem;
    &:last-child {
        margin-bottom: 0;
    }

    @media (max-width: 768px) {
        font-size: 1rem;
        line-height: 1.7;
        margin-bottom: 1.5rem;
    }

    @media (min-width: 1600px) {
        font-size: 1.4rem;
        line-height: 1.85;
        margin-bottom: 2.4rem;
    }

    @media (min-width: 1900px) {
        font-size: 1.6rem;
        line-height: 1.9;
        margin-bottom: 2.8rem;
    }
`;

const Highlight = styled.span`
    color: rgba(0, 0, 0, 0.85);
    font-weight: 500;
`;

const ButtonWrapper = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: flex-start;

    @media (max-width: 768px) {
        justify-content: flex-start;
        margin-top: 2rem;
        order: 2;
    }
`;

const ResumeButton = styled.a`
    writing-mode: vertical-rl;
    transform: rotate(180deg);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 1.5rem 1rem;
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: 0.85rem;
    font-weight: 600;
    letter-spacing: 0.4rem;
    text-transform: uppercase;
    color: #000;
    background: transparent;
    border: 0.9px solid rgba(12, 12, 12, 0.15);
    border-top: none;
    border-bottom: none;
    text-decoration: none;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    white-space: nowrap;

    &:hover {
        background: rgba(109, 109, 109, 0.02);
        border-color: rgba(0, 0, 0, 0.4);
        gap: 1.2rem;
    }

    @media (max-width: 768px) {
        writing-mode: horizontal-tb;
        transform: none;
        padding: 1rem 2rem;
        font-size: 0.8rem;
        letter-spacing: 0.3rem;
        border: 0.8px solid rgba(12, 12, 12, 0.15);
        border-left: none;
        border-right: none;
        width: 100%;
        text-align: center;
    }

    @media (min-width: 1600px) {
        padding: 1.8rem 1.2rem;
        font-size: 0.95rem;
        letter-spacing: 0.45rem;
    }

    @media (min-width: 1900px) {
        padding: 2.1rem 1.4rem;
        font-size: 1.05rem;
        letter-spacing: 0.5rem;
    }
`;

export default function About() {
    const ref = useRef<HTMLDivElement | null>(null);
    const [animationKey, setAnimationKey] = useState(0);

    useEffect(() => {
        const handleHashChange = () => {
            if (window.location.hash === "#about") {
                setAnimationKey((k) => k + 1);
                setTimeout(() => {
                    ref.current?.scrollIntoView({ behavior: "smooth" });
                }, 150);
            }
        };
        window.addEventListener("hashchange", handleHashChange);
        return () => window.removeEventListener("hashchange", handleHashChange);
    }, []);

    const smoothEase = [0.16, 1, 0.3, 1] as const;

    const sectionVariants: Variants = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.45, delayChildren: 0.15 } },
    };

    const fadeUp: Variants = {
        hidden: { opacity: 0, y: 60 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 3.9, ease: smoothEase, delay: 0.8 },
        },
    };

    const fadeLeft: Variants = {
        hidden: { opacity: 0, x: -80 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 2.9, ease: smoothEase, delay: 0.6 },
        },
    };

    const fadeIn1: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 2.8, ease: smoothEase, delay: 0.9 },
        },
    };

    const fadeIn2: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 2.6, ease: smoothEase, delay: 1.2 },
        },
    };

    const fadeIn3: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 2.6, ease: smoothEase, delay: 1.9 },
        },
    };

    return (
        <Wrapper
            key={animationKey}
            id="about"
            ref={ref}
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
        >
            <SectionTitle variants={fadeUp}>About</SectionTitle>

            <ContentWrapper variants={fadeIn1}>
                <TextContent>
                    <IntroSection variants={fadeLeft}>
                        <Description variants={fadeIn1}>
                            I've always found beauty in structure — in the way
                            logic can organize ideas and bring them to life.
                            Coding became a natural extension of that pursuit, a
                            place where clarity, creativity, and problem-solving
                            come together.
                        </Description>
                    </IntroSection>

                    <MainContent variants={fadeLeft}>
                        <Description variants={fadeIn2}>
                            Building scalable, user-focused products from the
                            ground up is what I do best. Whether crafting
                            intuitive frontend interfaces or designing robust
                            backend architectures, the goal remains the same:{" "}
                            <Highlight>
                                writing code that's efficient, well-structured,
                                and maintainable.
                            </Highlight>
                        </Description>

                        <Description variants={fadeIn3}>
                            Transforming complex requirements into elegant
                            solutions is where I thrive — and where real impact
                            happens.
                        </Description>
                    </MainContent>
                </TextContent>

                <ButtonWrapper variants={fadeUp}>
                    <ResumeButton
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View Resume
                    </ResumeButton>
                </ButtonWrapper>
            </ContentWrapper>
        </Wrapper>
    );
}
