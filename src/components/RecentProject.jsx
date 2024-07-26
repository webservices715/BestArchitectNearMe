import React, { useState } from "react";

const RecentProject = () => {
  const [showCard, setShowCard] = useState("all");

  const handleProject = (category) => {
    setShowCard(category);
  };

  return (
    <>
      <section className="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] font-barlow px-4 md:px-14">
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[600px] text-center">
                <h2 className="text-dark mb-5 text-3xl leading-[1.208] font-bold sm:text-4xl md:text-[50px]">
                  Recent Projects
                </h2>
                <p className="text-body-color text-lg text-gray-500">
                  Explore our latest architectural projects, ranging from residential designs to commercial spaces, each crafted with precision and excellence.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-wrap justify-center -mx-4">
            <div className="w-full px-4">
              <ul className="flex flex-wrap justify-center mb-12 space-x-1">
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("all")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "all"
                        ? "activeClasses bg-red-500 text-white"
                        : "inactiveClasses text-body-color hover:bg-primary hover:text-white hover:bg-red-500 rounded-full transition-all duration-500 ease-in-out"
                    }`}
                  >
                    All Projects
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("residential")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "residential"
                        ? "activeClasses bg-red-500 text-white"
                        : "inactiveClasses text-body-color hover:bg-primary hover:text-white hover:bg-red-500 rounded-full transition-all duration-500 ease-in-out"
                    }`}
                  >
                    Residential
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("commercial")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "commercial"
                        ? "activeClasses bg-red-500 text-white"
                        : "inactiveClasses text-body-color hover:bg-primary hover:text-white hover:bg-red-500 rounded-full transition-all duration-500 ease-in-out"
                    }`}
                  >
                    Commercial
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("landscape")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "landscape"
                        ? "activeClasses bg-red-500 text-white"
                        : "inactiveClasses text-body-color hover:bg-primary hover:text-white hover:bg-red-500 rounded-full transition-all duration-500 ease-in-out"
                    }`}
                  >
                    Landscape
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("interior")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "interior"
                        ? "activeClasses bg-red-500 text-white"
                        : "inactiveClasses text-body-color hover:bg-primary hover:text-white hover:bg-red-500 rounded-full transition-all duration-500 ease-in-out"
                    }`}
                  >
                    Interior Design
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap -mx-4">
            <PortfolioCard
              ImageHref="https://images.pexels.com/photos/8438980/pexels-photo-8438980.jpeg?auto=compress&cs=tinysrgb&w=600"
              category="Residential"
              title="Modern Family Home"
              button="View Details"
              buttonHref="#"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref="https://images.pexels.com/photos/8721318/pexels-photo-8721318.jpeg?auto=compress&cs=tinysrgb&w=600"
              category="Commercial"
              title="Corporate Office Space"
              button="View Details"
              buttonHref="#"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref="https://images.pexels.com/photos/4069289/pexels-photo-4069289.jpeg?auto=compress&cs=tinysrgb&w=600"
              category="Landscape"
              title="Urban Park Design"
              button="View Details"
              buttonHref="#"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref="https://images.pexels.com/photos/1366957/pexels-photo-1366957.jpeg?auto=compress&cs=tinysrgb&w=600"
              category="Interior"
              title="Luxury Apartment Interior"
              button="View Details"
              buttonHref="#"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref="https://images.pexels.com/photos/24424288/pexels-photo-24424288/free-photo-of-fire-dance-at-night.jpeg?auto=compress&cs=tinysrgb&w=600"
              category="Residential"
              title="Eco-friendly Villa"
              button="View Details"
              buttonHref="#"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref="https://images.pexels.com/photos/3109671/pexels-photo-3109671.jpeg?auto=compress&cs=tinysrgb&w=600"
              category="Commercial"
              title="Retail Storefront"
              button="View Details"
              buttonHref="#"
              showCard={showCard}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default RecentProject;

const PortfolioCard = ({
  showCard,
  category,
  ImageHref,
  title,
  button,
  buttonHref,
}) => {
  return (
    <>
      <div
        className={`w-full px-4 md:w-1/2 xl:w-1/3 ${
          showCard === "all" || showCard === category.toLowerCase()
            ? "block"
            : "hidden"
        }`}
      >
        <div className="relative mb-12">
          <div className="overflow-hidden rounded-[10px]">
            <img src={ImageHref} alt="portfolio" className="w-full h-[30rem] object-cover" />
          </div>
          <div className="relative mx-7 -mt-20 rounded-lg bg-white py-[34px] px-3 text-center shadow-portfolio shadow-lg">
            <span className="text-red-500 mb-2 block text-sm font-medium">
              {category}
            </span>
            <h3 className="text-dark mb-5 text-xl font-bold">{title}</h3>
            <a
              href={buttonHref}
              className="text-body-color inline-block border border-stroke py-[10px] px-7 text-sm font-medium hover:text-white hover:bg-red-500 rounded-full transition-all duration-500 ease-in-out"
            >
              {button}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
