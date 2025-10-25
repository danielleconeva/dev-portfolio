// src/components/ProjectModal.tsx
import { motion } from "framer-motion";
import styled from "styled-components";

export interface Project {
    id: number;
    number: string;
    title: string;
    subtitle: string;
    shortDescription: string;
    fullDescription: string;
    technologies: string[];
    image: string;
    liveDemo: string;
    github: string;
}

interface ProjectModalProps {
    project: Project;
    onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
    const paragraphs = project.fullDescription
        .split("\n")
        .filter((p) => p.trim() !== "");

    return (
        <ModalOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            onClick={onClose}
        >
            <ModalContainer
                initial={{ scale: 0.92, opacity: 0, y: 60 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.92, opacity: 0, y: 60 }}
                transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                onClick={(e) => e.stopPropagation()}
            >
                <ModalHeader>
                    <CloseButton onClick={onClose}>×</CloseButton>
                    <ModalNumber>{project.number}</ModalNumber>
                    <ModalTitle>{project.title}</ModalTitle>
                    <ModalSubtitle>{project.subtitle}</ModalSubtitle>
                </ModalHeader>

                <ModalScrollContent>
                    <Section>
                        <LinkButtons>
                            <LinkButton
                                href={project.liveDemo}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Live Demo
                            </LinkButton>
                            <LinkButton
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Source code
                            </LinkButton>
                        </LinkButtons>
                    </Section>

                    <Section>
                        <SectionTitleModal>Technologies Used</SectionTitleModal>
                        <TechGrid>
                            {project.technologies.map((tech, index) => (
                                <TechTag key={index}>{tech}</TechTag>
                            ))}
                        </TechGrid>
                    </Section>

                    <Section>
                        <SectionTitleModal>Description</SectionTitleModal>
                        {paragraphs.map((paragraph, index) => (
                            <Description key={index}>{paragraph}</Description>
                        ))}
                    </Section>
                </ModalScrollContent>
            </ModalContainer>
        </ModalOverlay>
    );
}

const ModalOverlay = styled(motion.div)`
    position: fixed;
    inset: 0;
    background: rgba(43, 43, 43, 0.3);
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    backdrop-filter: blur(14px);
`;

const ModalContainer = styled(motion.div)`
    position: relative;
    width: 100%;
    max-width: 1100px;
    max-height: 92vh;
    background: rgba(255, 255, 255, 0.97);
    border-radius: 20px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.2);
`;

const ModalHeader = styled.div`
    position: relative;
    background: transparent;
    color: #1a1a1a;
    padding: 3rem 3.5rem 2rem 3.5rem;
    border-bottom: 1.2px solid rgba(0, 0, 0, 0.18);
`;

const CloseButton = styled.button`
    position: absolute;
    top: 3rem;
    right: 3rem;
    width: 60px;
    height: 50px;
    background: rgba(0, 0, 0, 0.04);
    border: none;
    border-radius: 17px;
    color: #333;
    font-size: 1.5rem;
    font-weight: 100;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background: rgba(44, 44, 44, 0.07);
        transform: scale(1.1);
    }
`;

const ModalNumber = styled.span`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: 1rem;
    font-weight: 500;
    letter-spacing: 0.2rem;
    color: rgba(0, 0, 0, 0.5);
    text-transform: uppercase;
    display: block;
    margin-bottom: 1rem;
`;

const ModalTitle = styled.h2`
    font-family: ${({ theme }) => theme.fonts.headingMain};
    font-size: 3.5rem;
    font-weight: 600;
    margin: 0;
    letter-spacing: -0.02rem;
    line-height: 1.2;
    color: #1a1a1a;
`;

const ModalSubtitle = styled.p`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: 1.2rem;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.65);
    margin: 0.8rem 0 0 0;
    text-transform: uppercase;
    letter-spacing: 0.15rem;
`;

const ModalScrollContent = styled.div`
    overflow-y: auto;
    flex: 1;
    padding: 3rem 3.5rem;
`;

const Section = styled.section`
    margin-bottom: 3rem;
    min-height: auto !important;
`;

const SectionTitleModal = styled.h3`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: 1.7rem;
    font-weight: 200;
    letter-spacing: 0.2rem;
    text-transform: uppercase;
    color: rgba(0, 0, 0, 0.5);
    margin: 4rem 0 2rem 0;
`;

const Description = styled.p`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: 1.35rem;
    font-weight: 300;
    line-height: 2;
    color: rgba(0, 0, 0, 0.9);
    margin-bottom: 1.5rem;

    &:last-child {
        margin-bottom: 0;
    }
`;

const TechGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 2rem;
`;

const TechTag = styled.div`
    position: relative;
    padding: 0.9rem 1.6rem;
    font-family: ${({ theme }) => theme.fonts.regular || "Inter, sans-serif"};
    font-size: 0.85rem;
    font-weight: 500;
    color: #1a1a1a;
    text-transform: uppercase;
    letter-spacing: 0.08rem;
    border-radius: 30px;
    background: linear-gradient(
        135deg,
        rgba(255, 255, 255, 0.9) 0%,
        rgba(245, 245, 245, 0.8) 100%
    );
    border: 1px solid rgba(0, 0, 0, 0.08);
    overflow: hidden;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 2px 7px rgba(0, 0, 0, 0.04);

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: -100%;
        width: 200%;
        height: 100%;
        background: linear-gradient(
            120deg,
            transparent 30%,
            rgba(255, 255, 255, 0.4) 50%,
            transparent 70%
        );
        transition: transform 0.6s ease;
    }

    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 50%;
        background: linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0.6),
            transparent
        );
        border-radius: 10px 10px 0 0;
        pointer-events: none;
    }

    &:hover::before {
        transform: translateX(50%);
    }

    &:hover {
        transform: translateY(-3px);
        background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.95) 0%,
            rgba(240, 240, 240, 0.85) 100%
        );
        box-shadow: 0 3px 12px rgba(0, 0, 0, 0.08);
        border-color: rgba(0, 0, 0, 0.12);
    }

    &:active {
        transform: translateY(-1px);
        box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
    }

    & > * {
        position: relative;
        z-index: 1;
    }
`;

const LinkButtons = styled.div`
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;
    margin: 0.5rem 0 4rem 0;
`;

const LinkButton = styled.a`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
    padding: 1.2rem 2.6rem;
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: 0.9rem;
    font-weight: 600;
    letter-spacing: 0.25rem;
    text-transform: uppercase;
    color: #fff;
    background: linear-gradient(135deg, #1c1c1c 0%, #2c2c2c 50%, #000 100%);
    border-radius: 14px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    text-decoration: none;
    position: relative;
    overflow: hidden;
    transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: -100%;
        width: 200%;
        height: 100%;
        background: linear-gradient(
            120deg,
            transparent 30%,
            rgba(255, 255, 255, 0.15) 50%,
            transparent 70%
        );
        transition: transform 0.6s ease;
    }

    &:hover::before {
        transform: translateX(50%);
    }

    &:hover {
        transform: translateY(-3px) scale(1.03);
        background: linear-gradient(135deg, #2a2a2a 0%, #121212 100%);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.35),
            0 0 10px rgba(255, 255, 255, 0.1);
        border-color: rgba(255, 255, 255, 0.25);
    }

    &:active {
        transform: scale(0.97);
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    }
`;
