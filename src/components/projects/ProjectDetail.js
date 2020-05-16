import React from 'react'

const ProjectDetail = (props) => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project title - {id}</span>
          <p>Lorem </p>
        </div>

        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by the G. J.</div>
          <div>2nd May, 3pm</div>
        </div>

      </div>
      
    </div>
  )
}

export default ProjectDetail;

