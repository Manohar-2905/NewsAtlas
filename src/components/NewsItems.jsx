import React from 'react'

function NewsItems(props) {
  let {title,description,ImgUrl,newUrl,author,date,source}=props
    return (
      <div>
        <div className="card">
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger " style={{left:'90%',zIndex:'1'}}>
            {source}
          </span>
        <img src={ImgUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}.</p>
          <p className="card-text"><small className="text-body-secondary">By {author? author:"Unknown"} on {new Date(date).toLocaleDateString()}</small></p>
          <a rel='noreferrer' href={newUrl} target='_blank' className="btn btn-sm btn-primary">Read More</a>
        </div>
      </div>
      </div>
    )
}

export default NewsItems
