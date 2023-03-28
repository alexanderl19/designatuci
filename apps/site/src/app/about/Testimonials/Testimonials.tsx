import clsx from "clsx";
import { getAbout } from "../getAbout";
import Carousel from "./Carousel";

import cn from "./Testimonials.module.scss";

const Testimonials = async () => {
  const about = await getAbout();

  return (
    <div className={clsx(cn.testimonials, "fill", "color", "gray")}>
      <h2
        style={{
          textAlign: "center",
          marginTop: "50px",
          fontSize: "18px",
        }}
      >
        From our board
      </h2>
      <Carousel testimonials={about.testimonials} />
    </div>
  );
};

export default Testimonials;
