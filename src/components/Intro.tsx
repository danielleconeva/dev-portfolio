import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Menu from "./Menu";

const shine = keyframes`
  0% { background-position: 300%; }
  50% { background-position: -100%; }
  100% { background-position: 300%; }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0px) scale(1); }
  50% { transform: translateY(-15px) scale(1.05); }
`;

const glowPulse = keyframes`
  0%, 100% { filter: drop-shadow(0 0 2px rgba(255,255,255,0.1)); }
  50% { filter: drop-shadow(0 0 8px rgba(255,255,255,0.3)); }
`;

const CursiveHeading = styled(motion.h1)`
    font-family: ${({ theme }) => theme.fonts.headingCursive};
    font-size: 3rem;
    font-weight: 100;
    margin-bottom: -3rem;
`;

const MainHeading = styled(motion.h1)`
    font-family: ${({ theme }) => theme.fonts.headingMain};
    font-size: 10rem;
    font-weight: 400;
`;

const Description = styled(motion.div)`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: 1.5rem;
    font-weight: 100;
    opacity: 0.7;
    margin: -1rem 0 0 0.4rem;
`;

const Divider = styled(motion.hr)`
    width: 140px;
    border: none;
    border-top: 1px solid rgba(255, 255, 255, 0.6);
    margin: 1.2rem 0 1.2rem 0.4rem;
    box-shadow: 0 0 8px rgba(255, 255, 255, 0.2);
`;

const WelcomeText = styled(motion.p)`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: 1.5rem;
    font-weight: 100;
    margin-top: 1.2rem;
    margin-left: 0.4rem;
    background: linear-gradient(
        110deg,
        rgba(255, 255, 255, 0.3) 0%,
        rgba(255, 255, 255, 0.5) 20%,
        rgba(255, 255, 255, 1) 40%,
        rgba(255, 255, 255, 1) 60%,
        rgba(255, 255, 255, 0.5) 80%,
        rgba(255, 255, 255, 0.3) 100%
    );
    background-size: 200% 100%;
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    animation: ${shine} 15s ease-in-out infinite;
`;

const HeadingWrapper = styled.div`
    max-width: 680px;
    margin: 10rem 0 0 8rem;
    padding: 4rem;
`;

const IntroWrapper = styled.div`
    display: flex;
    position: relative;
    min-height: 100vh;
`;

const ScrollIndicator = styled(motion.div)`
    position: absolute;
    bottom: 3rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    animation: ${float} 4.5s ease-in-out infinite,
        ${glowPulse} 5s ease-in-out infinite;
    cursor: pointer;
    opacity: 0.6;

    &::before {
        content: "";
        width: 1px;
        height: 40px;
        background: linear-gradient(
            to bottom,
            transparent,
            rgba(255, 255, 255, 0.6)
        );
    }

    span {
        font-family: ${({ theme }) => theme.fonts.regular};
        font-size: 0.75rem;
        letter-spacing: 0.2em;
        text-transform: uppercase;
        color: rgba(255, 255, 255, 0.4);
        writing-mode: vertical-rl;
    }
`;

const fadeUp = (delay = 0, duration = 2.4, y = 100) => ({
    hidden: { opacity: 0, y },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration, delay, ease: [0.16, 1, 0.3, 1] as const },
    },
});

export default function Intro() {
    const [animationKey, setAnimationKey] = useState(0);

    useEffect(() => {
        const handleHash = () => setAnimationKey((k) => k + 1);
        window.addEventListener("hashchange", handleHash);
        return () => window.removeEventListener("hashchange", handleHash);
    }, []);

    return (
        <IntroWrapper key={animationKey} id="home">
            <HeadingWrapper>
                <CursiveHeading
                    variants={fadeUp(0.3, 2.8, 100)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                >
                    Hello there, I'm
                </CursiveHeading>

                <MainHeading
                    variants={fadeUp(0.8, 3.2, 120)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ type: "spring", stiffness: 40, damping: 20 }}
                >
                    Daniella
                </MainHeading>

                <Description
                    variants={fadeUp(2, 2.8, 80)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                >
                    Passionate software developer who crafts exceptional digital
                    experiences
                </Description>

                <Divider
                    variants={{
                        hidden: { width: 0, opacity: 0, x: -20 },
                        visible: {
                            width: 140,
                            opacity: 1,
                            x: 0,
                            transition: {
                                duration: 2.5,
                                ease: [0.16, 1, 0.3, 1],
                                delay: 2.6,
                            },
                        },
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                />

                <WelcomeText
                    variants={fadeUp(2.8, 2.8, 60)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                >
                    Welcome to my portfolio
                </WelcomeText>
            </HeadingWrapper>

            <Menu />

            <ScrollIndicator
                variants={{
                    hidden: { opacity: 0, y: 120, scale: 0.8 },
                    visible: {
                        opacity: [0, 1, 1, 1],
                        y: [120, 0, -30, 0],
                        scale: [0.9, 1.1, 1.05, 1],
                        transition: {
                            duration: 3,
                            ease: [0.16, 1, 0.3, 1],
                            delay: 3,
                        },
                    },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
            >
                <span>Scroll</span>
            </ScrollIndicator>
        </IntroWrapper>
    );
}
