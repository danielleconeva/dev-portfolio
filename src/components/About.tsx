import styled from "styled-components";

const Wrapper = styled.div`
    position: relative;
    background-color: #f5f5f0;
    padding: 8rem 1rem 12rem 8rem;
`;

const SectionTitle = styled.h2`
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

const IntroSection = styled.div`
    margin-bottom: 2.2rem;
    margin-top: 1rem;
`;

const MainContent = styled.div`
    padding-left: 2rem;
    border-left: 2px solid rgba(0, 0, 0, 0.1);
`;

const Description = styled.p`
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

const ResumeButton = styled.a`
    writing-mode: vertical-rl;
    transform: rotate(180deg);
    display: inline-flex;
    align-items: center;
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
    text-decoration: none;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    align-self: center;
    white-space: nowrap;

    &:hover {
        background: rgba(75, 75, 75, 0.02);
        border-color: rgba(0, 0, 0, 0.4);
        gap: 1.2rem;
    }
`;

export default function About() {
    return (
        <Wrapper id="about">
            <SectionTitle>About</SectionTitle>
            <ContentWrapper>
                <TextContent>
                    <IntroSection>
                        <Description>
                            I've always found beauty in structure — in the way
                            logic can organize ideas and bring them to life.
                            Coding became a natural extension of that pursuit, a
                            place where clarity, creativity, and problem-solving
                            come together.
                        </Description>
                    </IntroSection>

                    <MainContent>
                        <Description>
                            Building scalable, user-focused products from the
                            ground up is what I do best. Whether crafting
                            intuitive frontend interfaces or designing robust
                            backend architectures, the goal remains the same:{" "}
                            <Highlight>
                                writing code that's efficient, well-structured,
                                and maintainable.
                            </Highlight>
                        </Description>
                        <Description>
                            Transforming complex requirements into elegant
                            solutions is where I thrive — and where real impact
                            happens.
                        </Description>
                    </MainContent>
                </TextContent>

                <ResumeButton
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View Resume
                </ResumeButton>
            </ContentWrapper>
        </Wrapper>
    );
}
