import React, { Component } from "react";
import classes from "./resumeMap.module.css";
import mapboxgl from "mapbox-gl";

class ResumeMap extends Component {
  state = {
    lat: 38.51069325138627,
    lng: -76.14305540284829,
    zoom: 8,
    bearing: 0,
    pitch: 0,
    mapId: "resumeMap",
    token:
      "pk.eyJ1IjoicnVmMDM4NSIsImEiOiJjam1qaG9iOGQwZnNnM3ZxbHBkdmw4YTA4In0.p-EkzalIDB7Sbn3gSWA4GQ",
    mapboxSource:
      "https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v2.3.0/mapbox-gl-geocoder.min.js",
    mapWidth: "40%",
    mapHeight: "80vh",
    styleTable: {
      1: "mapbox://styles/ruf0385/cjzw2ah6t0bp11cnz7p9xjz2k",
      2: "mapbox://styles/mapbox/light-v10",
      3: "mapbox://styles/mapbox/cj5l80zrp29942rmtg0zctjto"
    }
  };

  componentDidMount() {
    mapboxgl.accessToken = this.state.token;

    //add Mapbox and Canvas API to DOM
    const mapboxScript = document.createElement("script");
    mapboxScript.src = this.state.mapboxSource;
    mapboxScript.async = true;
    document.body.appendChild(mapboxScript);

    //check browser support
    if (!mapboxgl.supported()) {
      console.log(
        "WARNING: Your browser is not officailly supported by Mapbox GL"
      );
    }

    //create map
    window.map = new mapboxgl.Map({
      container: this.state.mapId,
      style: this.state.styleTable[2],
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom,
      pitch: this.state.pitch,
      bearing: this.state.bearing
    });
    window.map.scrollZoom.disable();
  }
  onMouseEnterHandler(event) {
    const locations = {
      salisbury: {
        category: "school",
        duration: 5500,
        bearing: 270,
        center: [-75.605904, 38.345918],
        zoom: 15.5,
        pitch: 40
      },
      chesapeake: {
        category: "school",
        duration: 6000,
        center: [-76.083829, 38.952372],
        bearing: 273,
        zoom: 15.5,
        pitch: 90
      },
      "lane-engineering": {
        category: "work",
        bearing: 358,
        center: [-76.079164, 38.777268],
        zoom: 16,
        duration: 5000,
        pitch: 50
      },
      esrgc: {
        category: "work",
        bearing: 90,
        center: [-75.605904, 38.345918],
        zoom: 16,
        duration: 5000,
        pitch: 60
      }
    };

    let location = event.currentTarget.id.toString();
    let originalClassName = event.currentTarget.className.toString();
    for (let i = 0; i < Object.keys(locations).length; i++) {
      document
        .getElementsByClassName(originalClassName)
        [i].setAttribute("style", "");
    }

    window.map.flyTo(locations[location]);
    document
      .getElementById(location)
      .setAttribute("style", "opacity: 1; background-color: #fff;");
    console.log(locations[location].category);
    if (locations[location].category == "school") {
      document.getElementById("resumeMap").childNodes[0].innerHTML =
        "<span>Study</span>";
    } else if (locations[location].category == "work") {
      document.getElementById("resumeMap").childNodes[0].innerHTML =
        "<span>Work</span>";
    }

    // document.getElementById(this.state.mapId).setAttribute('style', 'opacity: 1; background-color: #fff;')
  }

  render() {
    const mapDiv = (
      <div>
        <div
          id={this.state.mapId}
          style={{
            height: this.state.mapHeight,
            width: this.state.mapWidth,
            position: "relative",
            float: "left"
          }}
        >
          <h2 className={classes.WorkOrEducation}>
            <span>Work</span>
          </h2>
        </div>
      </div>
    );

    const mapLocations = (
      <div className={classes.features}>
        {/* WORK ------------------------------------------------------- */}
        <div className="row item">
          <div className="twelve columns">
            <section
              id="lane-engineering"
              className={classes.location}
              onMouseEnter={this.onMouseEnterHandler}
            >
              <svg xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" version="1.0" width="40" height="40" viewBox="0 0 26 17"><path d="M 0,0 L 17,0 L 0,17 L 0,0 z" fill="#C7191B" /></svg>
              <h3>Lane Engineering, LLC</h3>
              <p>
                <span className="info">
                  IT Manager & GIS Coordinator <span>•</span>{" "}
                  <em className="date">June 2013 - Present</em>
                </span>
                <br />I am the Gatekeeper of the Network for all our offices.
                Any given day I could be purchasing or fixing computers,
                plotters, and all networked devices. I also manage our website
                and postgres db, user accounts, online accounts, maintain a
                budget, determine software needs and capabilities.
              </p>
            </section>
          </div>
        </div>
        <div className="row item">
          <div className="twelve columns">
            <section
              id="esrgc"
              className={classes.location}
              onMouseEnter={this.onMouseEnterHandler}
            >
              <svg xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" version="1.0" width="40" height="40" viewBox="0 0 26 17"><path d="M 0,0 L 17,0 L 0,17 L 0,0 z" fill="#C7191B" /></svg>
              <h3>Eastern Shore Regional GIS Cooperative</h3>
              <p>
                <span className="info">
                  GIS Specialist <span>•</span>{" "}
                  <em className="date">June 2009 - June 2010</em>
                </span>
                <br />I spent a lot of my time learning the inter-workings of
                ArcGIS and Global Mapper creating mosaics of county wide aerial
                photography. We also contracted with the NWI to digitize a large
                portion of wetlands in Georgia's everglades.
              </p>
            </section>
          </div>
          {/* item end */}
        </div>
        {/* End work----------------------------------------*/}
        <div className="twelve columns main-col">
          <div className="row item">
            <div className="twelve columns">
              <section
                id="salisbury"
                className={classes.location}
                onMouseEnter={this.onMouseEnterHandler}
              >
                <svg xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" version="1.0" width="40" height="40" viewBox="0 0 26 17"><path d="M 0,0 L 17,0 L 0,17 L 0,0 z" fill="#C7191B" /></svg>
                <h3>Salisbury University</h3>
                <p>
                  <span className="info">
                    B.S. Degree in Geography (GIS) <span>•</span> Cum Laude{" "}
                    <span>•</span>
                    <span className="tooltip">
                      <span className="tooltiptext">ΓΘΥ</span>
                    </span>{" "}
                    Honors Society <span>•</span>{" "}
                    <em className="date">May 2009</em>
                  </span>
                  <br />
                  Information Systems: Concepts for Management, Intro to
                  Computer Programming, Geographic Information Science, Advanced
                  GIS, Map Interpretation and Analysis, Spatial Databases,
                  Statistics, Spatial Statistical Analysis, and Computer
                  Cartography. Cumulative GPA of 3.69.
                </p>
              </section>
            </div>
          </div>{" "}
          {/* item end */}
          <div className="row item">
            <div className="twelve columns">
              <section
                id="chesapeake"
                className={classes.location}
                onMouseEnter={this.onMouseEnterHandler}
              >
                <svg xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" version="1.0" width="40" height="40" viewBox="0 0 26 17"><path d="M 0,0 L 17,0 L 0,17 L 0,0 z" fill="#C7191B" /></svg>
                <h3>Chesapeake College</h3>
                <p>
                  <span className="info">
                    A.A. Degree in Engineering Technology <span>•</span>{" "}
                    <em className="date">May 2007</em>
                  </span>
                  <br />
                  resume of American Architecture, Advanced CAD, Mechanical
                  Engineering. Cumulative GPA of 3.0
                </p>
              </section>
            </div>
          </div>{" "}
          {/* item end */}
        </div>{" "}
        {/* main-col end */}
      </div>
    );
    return (
      <div>
        {mapDiv}
        {mapLocations}
      </div>
    );
  }
}

export default ResumeMap;
