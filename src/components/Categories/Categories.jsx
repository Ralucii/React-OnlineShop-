import React from "react";
import "./Categories.scss";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img
            src="https://images.pexels.com/photos/5825610/pexels-photo-5825610.jpeg"
            alt=""
          />
          <button>
            <Link className="link" to="/products/1">
              Industrial Interior
            </Link>
          </button>
        </div>
        <div className="row">
          <img
            src="https://images.pexels.com/photos/7932264/pexels-photo-7932264.jpeg"
            alt=""
          />
          <button>
            <Link to="/products/1" className="link">
             Minimalist
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          {" "}
          <img
            src="https://images.pexels.com/photos/5726023/pexels-photo-5726023.jpeg"
            alt=""
          />
          <button>
            <Link to="/products/1" className="link">
              Bohemian 
            </Link>
          </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img
                src="https://images.pexels.com/photos/5081925/pexels-photo-5081925.jpeg"
                alt=""
              />
              <button>
                <Link to="/products/1" className="link">
                  Scandinavian Interior
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              {" "}
              <img
                src="https://images.pexels.com/photos/545012/pexels-photo-545012.jpeg"
                alt=""
              />
              <button>
                <Link to="/products/1" className="link">
                  Modern
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <img
            src="https://images.pexels.com/photos/9566051/pexels-photo-9566051.jpeg"
            alt=""
          />
          <button>
            <Link to="/products/1" className="link">
              Traditional Style
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;