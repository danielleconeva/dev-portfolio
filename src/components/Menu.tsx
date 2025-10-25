import styled from "styled-components";
import { useState } from "react";

const MenuContainer = styled.nav`
    display: flex;
    align-items: center;
    padding: 0 5rem;
    z-index: 100;
    margin: 5rem 10rem 3rem 7rem;
`;

const MenuList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
`;

const MenuItem = styled.li`
    position: relative;
    display: flex;
    align-items: center;
`;

const MenuLink = styled.a<{ $isActive?: boolean }>`
    font-family: ${({ theme }) => theme.fonts.headingMain};
    font-size: 4.2rem;
    font-weight: 500;
    color: ${({ $isActive }) =>
        $isActive ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0.15)"};
    text-decoration: none;
    cursor: pointer;
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    display: inline-block;
    line-height: 1.1;
    letter-spacing: -0.02em;
    position: relative;
    text-transform: uppercase;
    transform-origin: left center;
    transform: ${({ $isActive }) => ($isActive ? "scale(1)" : "scale(0.762)")};

    &:hover {
        color: rgba(255, 255, 255, 0.5);
        transform: scale(0.952);
    }

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

const MenuNumber = styled.span<{ $isActive?: boolean }>`
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

    const handleClick = (id: string) => {
        setActiveSection(id);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <MenuContainer>
            <MenuList>
                {menuItems.map((item) => (
                    <MenuItem key={item.id}>
                        <MenuNumber $isActive={activeSection === item.id}>
                            {item.number}
                        </MenuNumber>
                        <MenuLink
                            $isActive={activeSection === item.id}
                            onClick={() => handleClick(item.id)}
                        >
                            {item.label}
                        </MenuLink>
                    </MenuItem>
                ))}
            </MenuList>
        </MenuContainer>
    );
}
