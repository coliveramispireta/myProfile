import React from 'react'
import Resume from './Resume/Resume'
import Proyects from './Projects/Projects'
import Services from './Services/Services'
import Contact from './Contact/Contact'
import NotFound from './NotFound/NotFound'

const Main = ({ page }: { page: string }) => {
  console.log("page: ", page);
  return (
    <div className="h-1/3">
  {
      page === "resume" ? (
    <Resume />
  ) : page === "projects" ? (
    <Proyects />
  ) : page === "services" ? (
    <Services />
  ) : page === "contact" ? (
    <Contact />
  ) : (
    <NotFound />
  )}
</div>
  )
}

export default Main