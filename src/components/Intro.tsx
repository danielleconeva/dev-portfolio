import styled, { keyframes } from "styled-components";
import Menu from "./Menu";

const CursiveHeading = styled.h1`
    font-family: ${({ theme }) => theme.fonts.headingCursive};
    font-size: 3rem;
    font-weight: 100;
    margin-bottom: -3rem;
`;

const MainHeading = styled.h1`
    font-family: ${({ theme }) => theme.fonts.headingMain};
    font-size: 10rem;
    font-weight: 400;
`;

const Description = styled.div`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: 1.5rem;
    font-weight: 100;
    opacity: 0.7;
    margin: -1rem 0 0 0.4rem;
`;

const Divider = styled.hr`
    width: 140px;
    border: none;
    border-top: 1px solid rgba(255, 255, 255, 0.6);
    margin: 1.2rem 0 1.2rem 0.4rem;
`;

const shine = keyframes`
  0% {
    background-position: 500%;
  }
  100% {
    background-position: -500%;
  }
`;

const WelcomeText = styled.p`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: 1.5rem;
    font-weight: 100;
    margin-top: 1.2rem;
    margin-left: 0.4rem;

    background: linear-gradient(
        110deg,
        rgba(255, 255, 255, 0.4) 0%,
        rgba(255, 255, 255, 0.5) 40%,
        rgba(255, 255, 255, 1) 50%,
        rgba(255, 255, 255, 0.5) 60%,
        rgba(255, 255, 255, 0.4) 100%
    );
    background-size: 200% 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: ${shine} 15s linear infinite;
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

const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const ScrollIndicator = styled.div`
    position: absolute;
    bottom: 3rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    animation: ${float} 3s ease-in-out infinite;
    cursor: pointer;
    opacity: 0.6;
    transition: opacity 0.3s ease;

    &:hover {
        opacity: 1;
    }

    &::before {
        content: "";
        width: 1px;
        height: 40px;
        background: linear-gradient(
            to bottom,
            transparent,
            rgba(255, 255, 255, 0.4)
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

export default function Intro() {
    return (
        <IntroWrapper>
            <HeadingWrapper>
                <CursiveHeading>Hello there, I'm</CursiveHeading>
                <MainHeading>Daniella</MainHeading>
                <Description>
                    Passionate software developer who crafts exceptional digital
                    experiences
                </Description>
                <Divider />
                <WelcomeText>Welcome to my portfolio</WelcomeText>
            </HeadingWrapper>
            <Menu />
            <ScrollIndicator
                onClick={() =>
                    document
                        .getElementById("about")
                        ?.scrollIntoView({ behavior: "smooth" })
                }
            >
                <span>Scroll</span>
            </ScrollIndicator>
        </IntroWrapper>
    );
}
