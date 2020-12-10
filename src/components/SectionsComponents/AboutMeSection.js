import React from "react"
import styled from "styled-components"
import {
  CapitalizeText,
  ContentWrapper,
  Flex,
  Paragraph,
} from "../../assets/styles/HomeStyles"
import Line from "../Line/Line"
import { Wrapper } from "../Wrapper/Wrapper"

const StyledContentWrapper = styled(ContentWrapper)`
  @media only screen and (max-width: 1354px) {
    padding: 78px 140px 120px 102px;
  }
  @media only screen and (max-width: 1077px) {
    padding: 78px 102px 120px 102px;
  }
  @media only screen and (max-width: 798px) {
    padding: 78px 30px 100px;
  }
  @media only screen and (max-width: 598px) {
    padding: 41px 30px 100px;
  }
`

const MainParagraph = styled(Paragraph)`
  @media only screen and (max-width: 1354px) {
    margin: 0;
    font-size: 30px;
  }
  @media only screen and (max-width: 692px) {
    font-size: 18px;
  }
`

const StyledContent = styled(Paragraph)`
  @media only screen and (max-width: 692px) {
    font-size: 15px;
  }
`

const StyledWaterParagraph = styled(Paragraph)`
  @media only screen and (max-width: 1354px) {
    margin: 60px 0 0;
    font-size: 30px;
  }
  @media only screen and (max-width: 692px) {
    margin: 40px 0 0;
    font-size: 18px;
  }
`

const StyledTogether = styled(Paragraph)`
  @media only screen and (max-width: 1354px) {
    margin: 24px 0 0;
    font-size: 30px;
  }
  @media only screen and (max-width: 692px) {
    font-size: 18px;
  }
`

const StyledDecor = styled(Paragraph)`
  @media only screen and (max-width: 1354px) {
    margin: 30px 0 0;
    font-size: 30px;
  }
  @media only screen and (max-width: 692px) {
    font-size: 18px;
    align-self: flex-start;
  }
`

const StyledSign = styled(Paragraph)`
  @media only screen and (max-width: 1354px) {
    margin: 24px 0 0;
    font-size: 30px;
  }
  @media only screen and (max-width: 692px) {
    font-size: 18px;
    line-height: 2em;
  }
`
const StyledCapitalizedText = styled(CapitalizeText)`
  @media only screen and (max-width: 645px) {
    font-size: 10px;
    line-height: 12px;
    letter-spacing: 4px;
  }
`

const AboutMeSection = () => {
  return (
    <Wrapper padding="0" bg="white">
      <StyledContentWrapper direction="column" padding="78px 219px 140px 102px">
        <StyledCapitalizedText margin="0 0 0 5px">
          Gen italski
        </StyledCapitalizedText>
        <Line width="50%" />
        <MainParagraph margin="0 41px 0 0px">
          Italia sama mnie wybrała.
          <br />
          <span style={{ display: "block", margin: "6px 0 0 0" }}>
            Zaczęła od makaronu, wiadomo - przez żołądek trafia się do serca.
          </span>
          <span style={{ display: "block", margin: "6px 0 0 0" }}>
            Najwidoczniej zawarła z Mamą jakiś tajny pakt, bo włoska pasta w
            moim rodzinnym domu obecna była zawsze.
          </span>
          <span style={{ display: "block", margin: "6px 0 0 0" }}>
            I bazylia.
          </span>
        </MainParagraph>
        <div style={{ margin: "0 auto", maxWidth: "730px" }}>
          <StyledContent
            fontSize="18px"
            lineHeight="1.44em"
            letterSpacing="1px"
            margin="45px 0 0"
            fontFamily="Lato"
          >
            Ale Italia potrafiła zarzucać sieci nie tylko bazyliowe.
            <br />
            <br /> Regularnie, gdy nie patrzyłam, podrzucała w domu grube,
            wielce intrygujące italskie księgi traktujące o sztuce i
            architekturze. Ukratkiem zapełniała półki opasłymi albumami mistrzów
            włoskiego Renesansu, i jak gdyby nigdy nic, rozwieszała na ścianach
            reprodukcje ich dzieł.
            <br />
            <br /> - Mam dla ciebie “Piękną Ogrodniczkę” Rafaela. - mówiła
            bezgłośnie, nie spuszczając ze mnie oka. - Jak ci się podoba? (A
            mnie podobała się ramka.) No tak, wolisz “Damę z Łasiczką”... Trzeba
            było tak od razu mówić! - i westchnąwszy - Beh, se vuoi… - wieszała
            dzieło Leonarda.
            <br />
            <br /> O tym, że zawiesiła akurat Leonarda czy Rafaela, dowiadywałam
            się od Mamy, ale zbytnio się tym nie przejmowałam - przecież ONI
            byli tu od zawsze! <br />
            <br />
            Podobnie nieszczególnie przejmowałam się - jeszcze wtedy - pełnymi
            harmonii rysunkami Witruwiusza czy Palladia, które uważałam za
            oczywistą oczywistość, składającą się na należące do Ojca, grubaśne
            księgi o architekturze. <br />
            <br />
            Ja się nie przejmowałam, ale Ona, Italia, cierpliwie czekała. Aż
            pewnego dnia uznała, że nadszedł TEN właściwy moment. Wiedziała co
            robi, gdy na pierwszy ogień posłała swą najbardziej uwodzicielską
            postać, Wenecję. <br />
            <br />- Popatrz - rzekła, rzucając niepostrzeżenie Urok Ostateczny -
            to jest Plac Świętego Marka i Pałac Dożów, a wszystko brodzi po
            kostki w morzu. Tak brzmiało zaklęcie. <br />
            <br />I wtedy Gen Italski uaktywnił mi się na dobre, zwłaszcza że
            widokom tramwajów wodnych, Ponte Rialto czy Ponte dei Sospiri
            towarzyszyły gustowne, dziewczęce włoskie ogrodniczki z jasnego
            dżinsu, które stały się moją drugą skórą - aż do chwili, gdy z nich
            wyrosłam (tylko Włosi potrafią wymyślać takie ciuchy!). <br />
            <br />
            No cóż, trzeba żyć w zgodzie z przeznaczeniem. <br />
            <br />
            Dlatego na piętnaste urodziny kupiłam sobie rozmówki polsko-włoskie
            i wraz z pierwszym włoskim zdaniem w moim życiu: “Abito a
            Roma”/Mieszkam w Rzymie - wzięłam kurs na Rzym. <br />
            <br />W Rzymie niestety nie mieszkam (błąd!), ale mimo to sądzę, że
            wszystkie drogi i tak w końcu prowadzą do Rzymu. <br />
            <br />
            Jednak każda-z-tych-dróg-do-Wiecznego-Miasta wiedzie przez wiele
            innych miejsc w Italii. Ale o tym już chyba wszyscy zdołaliśmy się
            przekonać. A jeśli nie, to tylko kwestia czasu. Dlatego wszelkie
            treści, na które tu się natkniecie, będą poświęcone całej Italii:
            jej wyrazistemu językowi, urokowi jej stylu życia i tworzenia, oraz
            jej niepowtarzalnemu pięknu. Czyli wszystkiemu temu, czemu nie może
            oprzeć się nasz fantastyczny Italski Gen - a sądzę, że ma go każdy z
            nas. <br />
            <br />
            Liczę, że studia filologiczne, filozoficzne i architektoniczne, na
            które zaprowadziła mnie towarzysząca mi zawsze i wszędzie Italia, i
            które złożyły mi się pięknie w jedną całość - a widzę to dopiero z
            perspektywy czasu - pomogą mi stworzyć tu prawdziwą oazę dla
            wszystkich obdarzonych Italskim Genem.
          </StyledContent>
        </div>
        <StyledWaterParagraph margin="106px 280px 0 0">
          Chciałabym - i zrobię wszystko - aby Wasz Italski Gen poczuł się tu
          jak ryba w wodzie
        </StyledWaterParagraph>
        <StyledDecor
          fontFamily="Homemade Apple"
          textAlign="right"
          margin="30px 230px 0"
        >
          come un pesce nell’acqua
        </StyledDecor>
        <StyledTogether margin="22px 0 0">A wy razem z nim</StyledTogether>
        <StyledSign fontFamily="Homemade Apple" margin="56px 0 0">
          Monika <br />
          ps. <br />a jak Italia wybrała sobie Ciebie?
        </StyledSign>
      </StyledContentWrapper>
    </Wrapper>
  )
}

export default AboutMeSection
