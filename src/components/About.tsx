import styled from "styled-components";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const Wrapper = styled(motion.div)`
    position: relative;
    background-color: #f5f5f0;
    padding: 8rem 1rem 12rem 8rem;
    scroll-margin-top: 70px;
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
`;

const ContentWrapper = styled.div`
    margin-left: 18rem;
    max-width: 778px;
    display: flex;
    gap: 6rem;
`;

const TextContent = styled.div`
    flex: 1;
`;

const IntroSection = styled(motion.div)`
    margin-bottom: 2.2rem;
    margin-top: 1rem;
`;

const MainContent = styled(motion.div)`
    padding-left: 2rem;
    border-left: 2px solid rgba(0, 0, 0, 0.1);
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
`;

const Highlight = styled.span`
    color: rgba(0, 0, 0, 0.85);
    font-weight: 500;
`;

const ButtonWrapper = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: center;
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
                }, 100);
            }
        };
        window.addEventListener("hashchange", handleHashChange);
        return () => window.removeEventListener("hashchange", handleHashChange);
    }, []);

    const smoothEase = [0.25, 1, 0.3, 1] as const;

    const titleVariants: Variants = {
        hidden: { opacity: 0, y: -120, scale: 0.96 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 3.9, ease: smoothEase, delay: 0.2 },
        },
    };

    const introVariants: Variants = {
        hidden: { opacity: 0, x: -100 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 2.7, ease: smoothEase, delay: 0.6 },
        },
    };

    const mainContentVariants: Variants = {
        hidden: { opacity: 0, x: -80 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 3.2,
                ease: smoothEase,
                delay: 1.2,
                when: "beforeChildren",
                staggerChildren: 0.7,
            },
        },
    };

    const descriptionVariants: Variants = {
        hidden: { opacity: 0, x: -60, y: 20 },
        visible: (custom: number) => ({
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                duration: 2,
                ease: smoothEase,
                delay: 1 + custom * 0.9,
            },
        }),
    };

    const buttonWrapperVariants: Variants = {
        hidden: { opacity: 0, y: 120 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 2.2,
                duration: 3.2,
                ease: [0.16, 0.5, 0.3, 0.8] as const,
            },
        },
    };

    return (
        <Wrapper
            key={animationKey}
            id="about"
            ref={ref}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
        >
            <SectionTitle variants={titleVariants}>About</SectionTitle>

            <ContentWrapper>
                <TextContent>
                    <IntroSection variants={introVariants}>
                        <Description>
                            I've always found beauty in structure — in the way
                            logic can organize ideas and bring them to life.
                            Coding became a natural extension of that pursuit, a
                            place where clarity, creativity, and problem-solving
                            come together.
                        </Description>
                    </IntroSection>

                    <MainContent variants={mainContentVariants}>
                        <Description variants={descriptionVariants} custom={0}>
                            Building scalable, user-focused products from the
                            ground up is what I do best. Whether crafting
                            intuitive frontend interfaces or designing robust
                            backend architectures, the goal remains the same:{" "}
                            <Highlight>
                                writing code that's efficient, well-structured,
                                and maintainable.
                            </Highlight>
                        </Description>

                        <Description variants={descriptionVariants} custom={1}>
                            Transforming complex requirements into elegant
                            solutions is where I thrive — and where real impact
                            happens.
                        </Description>
                    </MainContent>
                </TextContent>

                <ButtonWrapper variants={buttonWrapperVariants}>
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
