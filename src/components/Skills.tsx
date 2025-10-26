import styled from "styled-components";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import LogoLoop from "./LogoLoop";
import {
    SiReact,
    SiAngular,
    SiTypescript,
    SiTailwindcss,
    SiNodedotjs,
    SiExpress,
    SiFirebase,
    SiMongodb,
    SiRedux,
    SiVite,
    SiGit,
    SiVercel,
    SiGithubactions,
    SiJenkins,
    SiJavascript,
    SiHtml5,
    SiCss3,
    SiGithub,
    SiGitlab,
    SiPostman,
    SiReactivex,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const Wrapper = styled.section`
    --overlap: 8rem;
    position: relative;
    background: ${({ theme }) => theme.colors.primary};
    scroll-margin-top: 120px;
    padding: calc(6rem + var(--overlap) / 2) 1rem 8rem;
    text-align: center;
    min-height: auto !important;
`;

const SectionTitle = styled(motion.h2)`
    font-family: ${({ theme }) => theme.fonts.headingMain};
    font-size: clamp(3rem, 10vw, 10rem);
    font-weight: 500;
    color: black;
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    line-height: 1;
    position: absolute;
    top: calc(-1 * var(--overlap) / 2);
    left: 0;
    right: 0;
    margin: 0 auto;
    text-align: center;
    transform: none;

    margin: 0;
    z-index: 2;
    pointer-events: none;
`;

const Content = styled.div`
    max-width: 980px;
    margin: 0 auto 3rem;
`;

const IntroText = styled(motion.p)`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: 1.7rem;
    color: rgba(0, 0, 0, 0.7);
    margin-bottom: 6rem;
    font-weight: 200;
    margin-top: -1.5rem;
`;

const LogoLoopFullBleed = styled.div`
    position: relative;
    left: 49.3%;
    width: 100vw;
    transform: translateX(-50vw);
    @supports (width: 100dvw) and (transform: translateX(-50dvw)) {
        width: 100dvw;
        transform: translateX(-50dvw);
    }
    overflow-x: hidden;
    overflow-y: visible;
    isolation: isolate;
    contain: paint;
    &::after {
        content: "";
        position: absolute;
        top: 0;
        right: -1px;
        width: 2px;
        bottom: 0;
        background: inherit;
        pointer-events: none;
    }
`;

const IconWrapper = styled.div`
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    gap: 1.2rem;
    padding: 6px;

    svg {
        font-size: 88px;
        color: rgba(0, 0, 0, 0.8);
        transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), color 0.3s ease;
        will-change: transform;
    }

    &:hover svg {
        color: rgba(0, 0, 0, 1);
        transform: translateY(-2px) scale(1.05);
    }
`;

const TechLabel = styled.span`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: 0.8rem;
    font-weight: 500;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: rgba(0, 0, 0, 0.6);
    white-space: nowrap;
`;

const techLogos = [
    {
        node: (
            <IconWrapper>
                <SiJavascript />
                <TechLabel>JavaScript</TechLabel>
            </IconWrapper>
        ),
        title: "JavaScript",
    },
    {
        node: (
            <IconWrapper>
                <SiTypescript />
                <TechLabel>TypeScript</TechLabel>
            </IconWrapper>
        ),
        title: "TypeScript",
    },
    {
        node: (
            <IconWrapper>
                <SiHtml5 />
                <TechLabel>HTML5</TechLabel>
            </IconWrapper>
        ),
        title: "HTML5",
    },
    {
        node: (
            <IconWrapper>
                <SiCss3 />
                <TechLabel>CSS3</TechLabel>
            </IconWrapper>
        ),
        title: "CSS3",
    },
    {
        node: (
            <IconWrapper>
                <SiReact />
                <TechLabel>React</TechLabel>
            </IconWrapper>
        ),
        title: "React",
    },
    {
        node: (
            <IconWrapper>
                <SiAngular />
                <TechLabel>Angular</TechLabel>
            </IconWrapper>
        ),
        title: "Angular",
    },
    {
        node: (
            <IconWrapper>
                <SiRedux />
                <TechLabel>Redux</TechLabel>
            </IconWrapper>
        ),
        title: "Redux",
    },
    {
        node: (
            <IconWrapper>
                <SiReactivex />
                <TechLabel>RxJS</TechLabel>
            </IconWrapper>
        ),
        title: "RxJS",
    },
    {
        node: (
            <IconWrapper>
                <SiTailwindcss />
                <TechLabel>Tailwind CSS</TechLabel>
            </IconWrapper>
        ),
        title: "Tailwind CSS",
    },
    {
        node: (
            <IconWrapper>
                <SiVite />
                <TechLabel>Vite</TechLabel>
            </IconWrapper>
        ),
        title: "Vite",
    },
    {
        node: (
            <IconWrapper>
                <SiNodedotjs />
                <TechLabel>Node.js</TechLabel>
            </IconWrapper>
        ),
        title: "Node.js",
    },
    {
        node: (
            <IconWrapper>
                <SiExpress />
                <TechLabel>Express</TechLabel>
            </IconWrapper>
        ),
        title: "Express",
    },
    {
        node: (
            <IconWrapper>
                <SiFirebase />
                <TechLabel>Firebase</TechLabel>
            </IconWrapper>
        ),
        title: "Firebase",
    },
    {
        node: (
            <IconWrapper>
                <SiMongodb />
                <TechLabel>MongoDB</TechLabel>
            </IconWrapper>
        ),
        title: "MongoDB",
    },
    {
        node: (
            <IconWrapper>
                <SiGit />
                <TechLabel>Git</TechLabel>
            </IconWrapper>
        ),
        title: "Git",
    },
    {
        node: (
            <IconWrapper>
                <SiGithub />
                <TechLabel>GitHub</TechLabel>
            </IconWrapper>
        ),
        title: "GitHub",
    },
    {
        node: (
            <IconWrapper>
                <SiGitlab />
                <TechLabel>GitLab</TechLabel>
            </IconWrapper>
        ),
        title: "GitLab",
    },
    {
        node: (
            <IconWrapper>
                <VscVscode />
                <TechLabel>VS Code</TechLabel>
            </IconWrapper>
        ),
        title: "VS Code",
    },
    {
        node: (
            <IconWrapper>
                <SiGithubactions />
                <TechLabel>GitHub Actions</TechLabel>
            </IconWrapper>
        ),
        title: "GitHub Actions",
    },
    {
        node: (
            <IconWrapper>
                <SiJenkins />
                <TechLabel>Jenkins</TechLabel>
            </IconWrapper>
        ),
        title: "Jenkins",
    },
    {
        node: (
            <IconWrapper>
                <SiPostman />
                <TechLabel>Postman</TechLabel>
            </IconWrapper>
        ),
        title: "Postman",
    },
    {
        node: (
            <IconWrapper>
                <SiVercel />
                <TechLabel>Vercel</TechLabel>
            </IconWrapper>
        ),
        title: "Vercel",
    },
];

export default function Skills() {
    const ref = useRef<HTMLDivElement | null>(null);
    const [animationKey, setAnimationKey] = useState(0);

    useEffect(() => {
        const handleHashChange = () => {
            if (window.location.hash === "#skills") {
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

    const titleVariants = {
        hidden: { opacity: 0, y: -80 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 2.5, ease: smoothEase, delay: 0.2 },
        },
    };

    const introVariants = {
        hidden: { opacity: 0, y: 60 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 2.2, ease: smoothEase, delay: 0.6 },
        },
    };

    return (
        <Wrapper id="skills" ref={ref}>
            <SectionTitle
                key={`title-${animationKey}`}
                variants={titleVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
            >
                Skills
            </SectionTitle>

            <Content>
                <IntroText
                    key={`intro-${animationKey}`}
                    variants={introVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                >
                    Technologies I use to design, build and ship polished
                    products.
                </IntroText>
            </Content>

            <LogoLoopFullBleed>
                <LogoLoop
                    key={techLogos.map((l) => l.title).join("|")}
                    logos={techLogos}
                    speed={40}
                    direction="left"
                    width="100%"
                    logoHeight={160}
                    gap={96}
                    pauseOnHover
                    ariaLabel="Technology stack"
                />
            </LogoLoopFullBleed>
        </Wrapper>
    );
}
