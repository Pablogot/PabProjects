import React from 'react'
const PageHeader = ({color, title, children},props) => (
  <section className={`hero ${color}`}>
    <div className="hero-body">
      <div className="container">
        <h1 className="title">
          {title}
        </h1>
        <h2 className="subtitle">
          {children}
        </h2>
      </div>
    </div>
  </section>
)
export default PageHeader