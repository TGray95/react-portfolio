import React from "react";
import "../styles/Project.css";

function Project(props) {
  function mouseOver(e) {
    // console.log(e.target);
    e.target.classList.add("opacity-50");
    // const z = document.createElement('p')
    // z.setAttribute('id', 'imgOverlay')
    // const y = document.createElement('p')
    // z.textContent = "Test"
    // e.target.appendChild(z)
    // z.appendChild(y)
  }

  function mouseOff(e) {
    e.target.classList.remove("opacity-50");
    // const z = document.getElementById("imgOverlay")
    // e.target.removeChild(z)
  }
  return (
    <section className="row">
      {props.projects.map((item) => (
        <div className="col-sm-6 mb-3 mb-sm-0 card-container" key={item.id}>
          <div className="card" style={{ width: "500px" }}>
            <a href={item.deploy}>
              <img
                src={item.thumbnail}
                onMouseOver={mouseOver}
                onMouseOut={mouseOff}
                className={"card-img-top"}
                alt="..."
              ></img>
            </a>
            <div className="card-body card-info">
              <h5 className="card-title card-info">{item.name}</h5>
              <p className="card-text card-info">{item.description}</p>
              <a href={item.repo} className="btn btn-primary">
                Project Repository
              </a>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Project;
