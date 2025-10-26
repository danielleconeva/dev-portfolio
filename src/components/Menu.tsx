import styled from "styled-components";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const MenuContainer = styled.nav`
    display: flex;
    align-items: center;
    padding: 0 5rem;
    z-index: 100;
    margin: 5rem 10rem 3rem 7rem;
`;

const MenuList = styled(motion.ul)`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
`;

const MenuItem = styled(motion.li)`
    position: relative;
    display: flex;
    align-items: center;
`;

const MenuLink = styled(motion.a)<{ $isActive?: boolean }>`
    font-family: ${({ theme }) => theme.fonts.headingMain};
    font-size: 4.2rem;
    font-weight: 500;
    color: ${({ $isActive }) =>
        $isActive ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0.15)"};
    text-decoration: none;
    cursor: pointer;
    display: inline-block;
    line-height: 1.1;
    letter-spacing: -0.02em;
    position: relative;
    text-transform: uppercase;
    transform-origin: left center;
    transition: color 0.4s cubic-bezier(0.4, 0, 0.2, 1);

    &::before {
        content: "";
        position: absolute;
        left: -100%;
        bottom: 0.5rem;
        width: ${({ $isActive }) => ($isActive ? "100%" : "0%")};
        height: 2px;
        background: rgba(255, 255, 255, 0.8);
        transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    }

    &:hover::before {
        width: 100%;
        left: 0;
    }

    ${({ $isActive }) =>
        $isActive &&
        `
        &::before {
            left: 0;
        }
    `}
`;

const MenuNumber = styled(motion.span)<{ $isActive?: boolean }>`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: 0.9rem;
    font-weight: 100;
    letter-spacing: 0.3em;
    color: rgba(255, 255, 255, 0.4);
    position: absolute;
    left: -4rem;
    top: 50%;
    transform: translateY(-50%);
    opacity: ${({ $isActive }) => ($isActive ? "1" : "0.3")};
    transition: all 0.5s ease;
`;

const menuItems = [
    { id: "home", label: "Home", number: "01" },
    { id: "about", label: "About", number: "02" },
    { id: "skills", label: "Skills", number: "03" },
    { id: "projects", label: "Projects", number: "04" },
    { id: "contact", label: "Contact", number: "05" },
];

export default function Menu() {
    const [activeSection, setActiveSection] = useState("home");
    const [animationKey, setAnimationKey] = useState(0);

    useEffect(() => {
        const handleHashChange = () => {
            setAnimationKey((k) => k + 1);
        };
        window.addEventListener("hashchange", handleHashChange);
        return () => window.removeEventListener("hashchange", handleHashChange);
    }, []);

    const handleClick = (id: string) => {
        setActiveSection(id);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        window.location.hash = id;
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.6,
                staggerChildren: 0.4,
            },
        },
    };

    const itemVariants = {
        hidden: {
            opacity: 0,
            x: -40,
            y: 20,
            rotate: -3,
            scale: 0.9,
            filter: "blur(4px)",
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            rotate: 0,
            scale: 1,
            filter: "blur(0px)",
            transition: {
                duration: 1.4,
                ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
            },
        },
    };

    const numberVariants = {
        hidden: {
            opacity: 0,
            x: -15,
            y: 5,
        },
        visible: {
            opacity: 0.4,
            x: 0,
            y: 0,
            transition: {
                duration: 1,
                ease: [0.25, 1, 0.5, 1] as [number, number, number, number],
            },
        },
    };

    return (
        <MenuContainer>
            <MenuList
                key={animationKey}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
            >
                {menuItems.map((item) => (
                    <MenuItem key={item.id} variants={itemVariants}>
                        <MenuNumber
                            $isActive={activeSection === item.id}
                            variants={numberVariants}
                        >
                            {item.number}
                        </MenuNumber>
                        <MenuLink
                            $isActive={activeSection === item.id}
                            onClick={() => handleClick(item.id)}
                            initial={{
                                scale: activeSection === item.id ? 1 : 0.762,
                            }}
                            animate={{
                                scale: activeSection === item.id ? 1 : 0.762,
                            }}
                            whileHover={{
                                scale: activeSection === item.id ? 0.96 : 0.85,
                                color: "rgba(255,255,255,0.5)",
                            }}
                            whileTap={{ scale: 0.93 }}
                            transition={{
                                duration: 0.4,
                                ease: [0.4, 0, 0.2, 1],
                            }}
                        >
                            {item.label}
                        </MenuLink>
                    </MenuItem>
                ))}
            </MenuList>
        </MenuContainer>
    );
}
