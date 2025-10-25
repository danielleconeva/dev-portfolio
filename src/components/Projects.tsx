import styled from "styled-components";
import cleartermsImg from "../assets/clearterms.png";
import greenrideImg from "../assets/greenride.png";
import studyhubImg from "../assets/studyhub.png";

const Wrapper = styled.div`
    padding: 4rem;
    padding-bottom: 6rem;
    background: white;
    scroll-margin-top: 80px;
`;

const SectionTitle = styled.h2`
    font-family: ${({ theme }) => theme.fonts.headingMain};
    font-size: 8rem;
    font-weight: 500;
    color: black;
    text-transform: uppercase;
    padding-left: 2rem;

    &:nth-of-type(2) {
        margin-top: -3rem;
        padding-left: 7rem;
    }
`;

const IntroText = styled.p`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: 1.7rem;
    color: black;
    margin: 0 0 5rem 4rem;
    font-weight: 200;
`;

const ProjectsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin: 0 2rem 4rem 3rem;
`;

const ProjectCard = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    background: black;
    overflow: hidden;
    height: 960px;
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
        transform: translateY(-12px);
    }
`;

const ProjectImageWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 300px;
    overflow: hidden;

    &::after {
        content: "";
        position: absolute;
        inset: 0;
        background: linear-gradient(
            180deg,
            transparent 50%,
            rgba(0, 0, 0, 0.5) 100%
        );
        pointer-events: none;
    }
`;

const ProjectImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);

    ${ProjectCard}:hover & {
        transform: scale(1.1);
    }
`;

const ProjectContent = styled.div`
    padding: 2.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background: black;
    color: white;
    flex: 1;
`;

const ProjectNumber = styled.span`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: 0.75rem;
    font-weight: 400;
    letter-spacing: 0.3rem;
    color: rgba(255, 255, 255, 0.4);
    text-transform: uppercase;
`;

const ProjectTitle = styled.h3`
    font-family: ${({ theme }) => theme.fonts.headingMain};
    font-size: 2.2rem;
    font-weight: 500;
    color: white;
    margin: 0;
    line-height: 1.1;
`;

const ProjectOneLine = styled.p`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: 1.1rem;
    font-weight: 300;
    color: rgba(255, 255, 255, 0.6);
    margin: 0.2rem 0 0.5rem 0;
    text-transform: uppercase;
    letter-spacing: 0.08rem;
`;

const ProjectDescription = styled.p`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: 1.1rem;
    font-weight: 200;
    color: rgba(255, 255, 255, 0.9);
    line-height: 1.7;
    margin: 0.5rem 0 0 0;
`;

const DetailsButton = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0;
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: 1.2rem;
    font-weight: 500;
    letter-spacing: 0.15rem;
    text-transform: uppercase;
    color: white;
    background: transparent;
    border: none;
    border-top: 1px solid rgba(255, 255, 255, 0.15);
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    margin-top: auto;

    &::after {
        content: "→";
        font-size: 1.2rem;
        transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    &:hover {
        border-top-color: rgba(255, 255, 255, 0.4);
        gap: 1rem;

        &::after {
            transform: translateX(6px);
        }
    }
`;

const GitHubButton = styled.a`
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 1.5rem 3rem;
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: 0.85rem;
    font-weight: 700;
    letter-spacing: 0.4rem;
    text-transform: uppercase;
    color: #000;
    background: transparent;
    border: 0.9px solid rgba(12, 12, 12, 0.4);
    border-left: none;
    border-right: none;
    text-decoration: none;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    white-space: nowrap;
    margin: 2rem auto 0;
    display: flex;
    width: fit-content;

    &:hover {
        background: rgba(126, 125, 125, 0.03);
        border-color: rgba(0, 0, 0, 0.4);
        gap: 1.2rem;
    }
`;

export default function Projects() {
    return (
        <Wrapper id="projects">
            <SectionTitle>Featured </SectionTitle>
            <SectionTitle>Projects</SectionTitle>
            <IntroText>Showcasing a selection of my recent work.</IntroText>

            <ProjectsGrid>
                <ProjectCard>
                    <ProjectImageWrapper>
                        <ProjectImage src={cleartermsImg} alt="ClearTerms AI" />
                    </ProjectImageWrapper>
                    <ProjectContent>
                        <ProjectNumber>01</ProjectNumber>
                        <ProjectTitle>ClearTerms AI</ProjectTitle>
                        <ProjectOneLine>
                            Serverless Full-Stack Legal-Tech App
                        </ProjectOneLine>
                        <ProjectDescription>
                            Built with React, Vite, TypeScript, Tailwind, Vercel
                            serverless functions and Gemini 2.5 Flash, featuring
                            PDF/DOCX/URL import and text pre-processing,
                            delivering AI-driven Terms & Conditions
                            summarization, automated risk detection, intelligent
                            question answering and secure, on-demand serverless
                            execution.
                        </ProjectDescription>
                        <DetailsButton>Details</DetailsButton>
                    </ProjectContent>
                </ProjectCard>

                <ProjectCard>
                    <ProjectImageWrapper>
                        <ProjectImage src={greenrideImg} alt="ClearTerms AI" />
                    </ProjectImageWrapper>
                    <ProjectContent>
                        <ProjectNumber>02</ProjectNumber>
                        <ProjectTitle>GreenRide</ProjectTitle>
                        <ProjectOneLine>
                            Full-Stack Eco-Driven Ride-Sharing Service
                        </ProjectOneLine>
                        <ProjectDescription>
                            Built with React, TypeScript, Vite,
                            styled-components, Redux Toolkit, React Query,
                            Node.js, Express, and MongoDB (Mongoose), featuring
                            secure cookie-based JWT authentication, ride
                            publishing and booking flows, and real-time
                            eco-impact tracking — enabling users to share rides,
                            reduce carbon emissions and promote sustainable
                            travel.
                        </ProjectDescription>
                        <DetailsButton>Details</DetailsButton>
                    </ProjectContent>
                </ProjectCard>

                <ProjectCard>
                    <ProjectImageWrapper>
                        <ProjectImage src={studyhubImg} alt="StudyHub" />
                    </ProjectImageWrapper>
                    <ProjectContent>
                        <ProjectNumber>03</ProjectNumber>
                        <ProjectTitle>StudyHub</ProjectTitle>
                        <ProjectOneLine>
                            Full-Stack Productivity Platform for Students
                        </ProjectOneLine>
                        <ProjectDescription>
                            Built with Angular, TypeScript, Firebase
                            (Authentication & Firestore), and RxJS, leveraging
                            signal-based reactive state management, featuring
                            intelligent task tracking, structured study-page
                            creation, a public hub for shared resources,
                            interactive comments, and Pomodoro-style focus
                            timers — empowering students to organize learning,
                            track progress, and maintain focus in a
                            distraction-free environment.
                        </ProjectDescription>
                        <DetailsButton>Details</DetailsButton>
                    </ProjectContent>
                </ProjectCard>
            </ProjectsGrid>

            <GitHubButton
                href="https://github.com/danielleconeva"
                target="_blank"
                rel="noopener noreferrer"
            >
                For more
            </GitHubButton>
        </Wrapper>
    );
}
