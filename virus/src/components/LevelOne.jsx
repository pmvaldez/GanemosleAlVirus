import React from "react";
import "../styles/levelOne.css";
import { Link } from "react-router-dom";
import ProgressBar from './ProgressBar';
import Footer from './Footer';
import LevelOneC1 from './LevelOne-C1'

const levelOne = () => {
  return (
    <div className="d-flex backgroundimg">
      <div className="section-mod1-general">
        <ProgressBar />

        <div className="container text-center mt-4 mb-4">
          <div class="d-inline-flex p-4 whitebox">
            <LevelOneC1/>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default levelOne;


