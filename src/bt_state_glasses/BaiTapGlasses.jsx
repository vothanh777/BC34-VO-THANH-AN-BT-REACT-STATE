import React, { Component } from "react";
import dataGlass from "./dataGlasses.json";

export default class BaiTapGlasses extends Component {
  state = {
    glass: "",
    display: "none",
  };

  loadGlasses = () => {
    return dataGlass.map((item, index) => {
      return (
        <img
          src={`./glassesImage/g${item.id}.jpg`}
          alt=""
          width={150}
          height={100}
          style={{ cursor: "pointer" }}
          onClick={() => {
            this.setState({
              glass: item,
              display: "block",
            });
          }}
        />
      );
    });
  };
  render() {
    let { glass, display } = this.state;
    return (
      <div
        className="text-center"
        style={{
          backgroundImage: 'url("./glassesImage/background.jpg")',
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <h1 className="py-3 text-success">TRY GLASSES APP ONLINE</h1>
          <div className="row">
            <div className="col-6" style={{ padding: "0 50px" }}>
              <div>
                <img
                  src="./glassesImage/model.jpg"
                  alt=""
                  className="img-fluid"
                  style={{ height: "400px" }}
                />
              </div>
            </div>
            <div className="col-6" style={{ padding: "0px 50px" }}>
              <div>
                <img
                  src="./glassesImage/model.jpg"
                  alt=""
                  className="img-fluid"
                  style={{ height: "400px", position: "relative" }}
                />
                <div style={{ display: display }}>
                  <img
                    src={glass.url}
                    alt=""
                    width={150}
                    height={100}
                    style={{
                      position: "absolute",
                      top: "20%",
                      left: "37%",
                    }}
                  />
                  <div
                    style={{
                      marginLeft: "15px",
                      width: "320px",
                      textAlign: "left",
                      position: "absolute",
                      bottom: "0%",
                      left: "20%",
                    }}
                  >
                    <h5>{glass.name}</h5>
                    <h3 className="text-danger">${glass.price}</h3>
                    <p>{glass.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row px-5 text-center" style={{ margin: "0 80px" }}>
            {this.loadGlasses()}
          </div>
        </div>
      </div>
    );
  }
}
