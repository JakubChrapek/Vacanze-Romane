import { graphql } from "gatsby"
import React, { useRef, useState } from "react"
import { useEffect } from "react"
import slugify from "slugify"
import CategoryNavigation from "../../components/CategoryNavigation/CategoryNavigation"
import PageHeader from "../../components/PageHeader/PageHeader"
import CoursesStagesSection from "../../components/SectionsComponents/CoursesStagesSection"

const navItems = [
  {
    name: "Wprowadzenie 0.0",
    link: "/wloski-od-zera/wprowadzenie",
  },
  {
    name: "Część pierwsza 1.0",
    link: "/wloski-od-zera/czesc-pierwsza",
  },
  {
    name: "Kontynuacja",
    link: "/wloski-od-zera/kontynuacja",
  },
]

const CoursesPage = ({ data }) => {
  const courses = ["Wprowadzenie 0.0", "Część pierwsza 1.0", "Kontynuacja"]
  const [activeCourse, setActiveCourse] = useState(null)
  const [page, setPage] = useState(0)
  const pageLength = 6
  const postsRef = useRef()

  const scroll = () => postsRef.current.scrollIntoView({ behavior: "smooth" })
  const handleClick = (e, course) => {
    e.preventDefault()
    setActiveCourse(course)
    setPage(0)
    // scroll()
  }

  useEffect(() => {
    setActiveCourse(null);
  }, [])


  return (
    <>
      <PageHeader
        paragraph="corso di italiano da zero"
        imgFluid={data.image.backgroundImage.fluid}
        bg="green"
        withNav
      />
      <CategoryNavigation
        bg="green"
        categories={courses}
        activeCategory={activeCourse}
        setActiveCategory={handleClick}
        courses
      />
      <CoursesStagesSection
        lessons={data.lessons.nodes}
        activeCourse={activeCourse}
        page={page}
        setPage={setPage}
        pageLength={pageLength}
      />
    </>
  )
}

export const query = graphql`
  {
    image: datoCmsHomePage {
      ciaoTitle
      title
      courseName
      subheader
      backgroundImage {
        fluid(maxWidth: 800) {
          ...GatsbyDatoCmsFluid_tracedSVG
        }
      }
    }
    lessons: allDatoCmsLesson(sort:{fields:lessonNumber}) {
    nodes {
      id
      lekcjaPoziom
      lessonNumber
      lessonTitle
    }
  }
}

`

export default CoursesPage
