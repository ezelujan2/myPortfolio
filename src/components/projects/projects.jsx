import { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(2);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section id="projects" className="qualification section">
      <h2 className="section__title">Projects and studies</h2>
      <span className="section__subtitle">
        My personal projects and studies
      </span>

      <div className="qualification__container container">
        <div className="qualification__tabs"></div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">EDX: Harvard Courses</h3>
                <span className="qualification__subtitle">
                  - CS50's Introduction to Computer Science
                  <br />- CS50's Introduction to Programming with Python
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2022 - 2023
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title"> Bootcamp Soy Henry</h3>
                <span className="qualification__subtitle">
                  Fullstack web development
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> May 2023 - Sep 2023
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Individual Project</h3>
                <span className="qualification__subtitle">
                  <a
                    href="https://github.com/ezelujan2/Proyecto-Individual-Henry"
                    target="_blank"
                    rel="noopener noreferrer">
                    Videogames
                  </a>
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Aug 2023
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Projecto Final</h3>
                <span className="qualification__subtitle">
                  <a
                    href="https://pf-rent-car2-1us3pfgxe-aldovelacasas.vercel.app/homePage"
                    target="_blank"
                    rel="noopener noreferrer">
                    Retal Car
                  </a>
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Sep 2023
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  English Level (C2 profeciency)
                </h3>
                <span className="qualification__subtitle">
                  <a
                    href="https://www.efset.org/cert/ocjo5k"
                    target="_blank"
                    rel="noopener noreferrer">
                    Certificate
                  </a>
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Sep 2023
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
