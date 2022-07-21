import React from "react";
import pic1 from "../Images/pic1.png";
import pic2 from "../Images/pic2.png";
import pic3 from "../Images/pic3.png";
import pic5 from "../Images/pic5.png";
import { Icon } from "@iconify/react";

import {
  Wholediv,
  Leftcontent,
  Rightcontent,
  Topleft,
  Downleft,
  Topright,
  Bottomright,
} from "./ContentCss";
const Content = () => {
  return (
    <Wholediv>
      <Leftcontent>
        <Topleft>
          <img className="pic1" src={pic1} alt="" />
          <img className="pic2" src={pic2} alt="" />
          <img className="pic3" src={pic3} alt="" />
        </Topleft>
        <Downleft>
          <img className="pic5" src={pic5} alt="" />
        </Downleft>
      </Leftcontent>
      <Rightcontent>
        <Topright>
          <div className="details">
            <Icon icon="akar-icons:arrow-shuffle" />
            <span>Home</span>
          </div>
          <div className="details">
            <Icon icon="akar-icons:arrow-shuffle" />
            <span>Connect</span>
          </div>
          <div className="details">
            <Icon icon="akar-icons:arrow-shuffle" />
            <span>Blogs</span>
          </div>
          <div className="details">
            <Icon icon="akar-icons:arrow-shuffle" />
            <span>career</span>
          </div>
          <div className="details">
            <Icon icon="akar-icons:arrow-shuffle" />
            <span>Media</span>
          </div>
        </Topright>
        <Bottomright>
          <span>Mereko Pvt. Ltd.</span>
        </Bottomright>
      </Rightcontent>
    </Wholediv>
  );
};

export default Content;
