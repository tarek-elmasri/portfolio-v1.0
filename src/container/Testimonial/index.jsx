import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./styles.scss";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const Testimonial = () => {
  const [brands, setSBrands] = useState([]);
  const [testemonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (i) => {
    setCurrentIndex(i);
  };
  useEffect(() => {
    const brandsQuery = '*[_type == "brands"]';
    const testemonialsQuery = '*[_type == "testimonials"]';

    client.fetch(brandsQuery).then((data) => {
      setSBrands(data);
    });

    client.fetch(testemonialsQuery).then((data) => {
      setTestimonials(data);
    });
  }, []);

  const currentTestimonial = testemonials[currentIndex];
  return (
    <>
      {testemonials.length > 0 && (
        <>
          <div className="app__testimonial-item app__flex">
            <img src={urlFor(currentTestimonial.imgurl)} alt="testimonials" />

            <div className="app__testimonial-content">
              <p className="p-text">{currentTestimonial.feedback}</p>
              <div>
                <h4 className="bold-text">{currentTestimonial.name}</h4>
                <h5 className="p-text">{currentTestimonial.company}</h5>
              </div>
            </div>
          </div>

          <div className="app__testimonial-btns app__flex">
            <div
              className="app__flex "
              onClick={() =>
                handleClick(
                  currentIndex === 0
                    ? testemonials.length - 1
                    : currentIndex - 1
                )
              }
            >
              <HiChevronLeft />
            </div>

            <div
              className="app__flex "
              onClick={() =>
                handleClick(
                  currentIndex === testemonials.length - 1
                    ? 0
                    : currentIndex + 1
                )
              }
            >
              <HiChevronRight />
            </div>
          </div>
        </>
      )}

      <div className="app__testimonial-brands app__flex">
        {brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: "twee" }}
            key={brand.name}
          >
            <img src={urlFor(brand.imgUrl)} alt={brand.name} />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonial, "app__testimonial"),
  "testimonial",
  "app__primarybg"
);
