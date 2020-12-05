import { motion } from "framer-motion"
import { Link } from "gatsby"
import React from "react"
import styled, { css } from "styled-components"
import { ContentWrapper, Flex } from "../../assets/styles/HomeStyles"
import Line from "../Line/Line"
import { Wrapper } from "../Wrapper/Wrapper"

const NavList = [
  {
    title: "Na skróty",
    items: [
      { name: "Ciao!", link: "/" },
      { name: "in italiano", link: "/in-italiano" },
      { name: "Bottega", link: "/bottega" },
      { name: "o mnie", link: "/o-mnie" },
    ],
  },
  {
    title: "Włoski od zera",
    items: [
      { name: "Wprowadzenie!", link: "/wloski-od-zera/wprowadzenie" },
      { name: "Część pierwsza", link: "/wloski-od-zera/czesc-pierwsza" },
      { name: "Kontynuacja", link: "/wloski-od-zera/kontynuacja" },
    ],
  },
  {
    title: "Jestem tutaj",
    items: [
      { name: "Facebook!", href: "https://facebook.com" },
      { name: "Youtube", href: "https://youtube.com" },
      { name: "Instagram", href: "https://instagram.com" },
    ],
  },
]

const NavStyles = styled(motion.div)`
  display: flex;
  flex-direction: column;
  margin-right: 40px;
  &:last-child {
    margin-right: 0;
  }

  h3 {
    margin: 0 2px 30px 0;
    font-family: Lato;
    font-size: 10px;
    font-weight: bold;
    text-transform: uppercase;
    line-height: 1.45em;
    letter-spacing: 1px;
    color: var(--beige-2);
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin: 6px 0 0 -12px;
  }

  a {
    font-family: Lato;
    font-size: 13px;
    font-weight: normal;
    line-height: 1.12;
    letter-spacing: 1px;
    color: var(--beige-2);
    text-decoration: none;
    position: relative;
    padding: 6px 12px;
    &:after {
      content: "";
      position: absolute;
      left: 6px;
      top: calc(50% - 2px);
      width: calc(100% - 12px);
      height: 6px;
      z-index: -1;
      background-color: ${({ bg }) =>
        bg === "red"
          ? "var(--light-red)"
          : bg === "green"
          ? "var(--light-green)"
          : bg === "brown"
          ? "var(--light-brown)"
          : bg === "blue"
          ? "var(--light-blue)"
          : ""};
      transform: scaleY(0);
      transform-origin: center bottom;
      transition: 0.3s transform cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }

    &.active:after,
    &:hover:after,
    &:focus:after {
      transform: scaleY(1);
    }
    &:focus {
      outline: none;
    }
  }
`

const FooterNavigation = ({ bg }) => (
  <>
    {NavList.map(column => (
      <NavStyles key={column.title} bg={bg}>
        <h3>{column.title}</h3>
        <ul>
          {column.items.map(item => (
            <React.Fragment key={item.name}>
              {item.link ? (
                <li>
                  <Link activeClassName="active" to={item.link}>
                    {item.name}
                  </Link>
                </li>
              ) : (
                <li>
                  <a href={item.href}>{item.name}</a>
                </li>
              )}
            </React.Fragment>
          ))}
        </ul>
      </NavStyles>
    ))}
  </>
)

const FooterStyles = styled.footer`
  h1 {
    font-family: Lato;
    font-size: 18px;
    font-weight: normal;
    line-height: 1.11;
    letter-spacing: 1px;
  }
  ${({ bg }) =>
    bg === "red"
      ? css`
          color: var(--beige-2);
        `
      : bg === "green"
      ? css`
          color: var(--beige-2);
        `
      : bg === "brown"
      ? css`
          color: var(--beige-2);
        `
      : ""}
`

const FooterText = styled(motion.p)`
  text-align: center;
  margin: 30px 20px;
  color: ${({ color }) => (color ? color : "white")};
  font-family: "Lato";
  font-size: 14px;
  line-height: 0.86em;
  letter-spacing: 1px;
  a {
    text-decoration: none;
    color: ${({ color }) => (color ? color : "white")};
    transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    position: relative;

    &:after {
      content: "";
      position: absolute;
      left: -3px;
      top: calc(50% - 2px);
      width: calc(100% + 6px);
      height: 6px;
      z-index: -1;
      background-color: ${({ bg }) =>
        bg === "red"
          ? "var(--light-red)"
          : bg === "green"
          ? "var(--light-green)"
          : bg === "brown"
          ? "var(--light-brown)"
          : bg === "blue"
          ? "var(--light-blue)"
          : ""};
      transform: scaleY(0);
      transform-origin: center bottom;
      transition: 0.3s transform cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
    /* &:first-child:after {
      background-color: #3b6dee;
    }
    &:last-child:after {
      background-color: #00ef8b;
    } */

    &.active:after,
    &:hover:after {
      transform: scaleY(1);
    }
  }
`

const Footer = ({ bg }) => {
  return (
    <FooterStyles bg={bg}>
      <Wrapper padding="62px 0 0" bg={bg} margin="0">
        <ContentWrapper padding="0 105px 118px 105px" direction="row">
          <Flex flex="1">
            <h1>Vacanze Romane</h1>
          </Flex>
          <Flex flex="1">
            <FooterNavigation bg={bg} />
          </Flex>
        </ContentWrapper>

        <ContentWrapper padding="0 105px 0px 105px" direction="column">
          <Line
            margin="0"
            height="2px"
            bg={
              bg === "red"
                ? "var(--beige-2)"
                : bg === "brown"
                ? "var(--beige-2)"
                : bg === "blue"
                ? "var(--beige-2)"
                : bg === "green"
                ? "var(--beige-2)"
                : ""
            }
          />
          <FooterText
            bg={bg}
            color={
              bg === "red"
                ? "var(--beige-2)"
                : bg === "green"
                ? "var(--beige-2)"
                : bg === "brown"
                ? "var(--beige-2)"
                : bg === "blue"
                ? "var(--beige-2)"
                : ""
            }
          >
            Stronę stworzyli:{" "}
            <motion.a href="https://agathadesign.co.uk">Agatha Design</motion.a>{" "}
            &{" "}
            <motion.a href="https://kryptonumstudio.com">
              Kryptonum Studio
            </motion.a>
          </FooterText>
        </ContentWrapper>
      </Wrapper>
    </FooterStyles>
  )
}

export default Footer