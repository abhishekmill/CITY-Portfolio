import React, { useCallback, useEffect, useState } from "react";
import Button from "../components/Button";
import { Cross as Hamburger } from "hamburger-react";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import InfiniteScroll from "../components/InfiniteScroll";
import axios from "axios";
import Menu from "./Menu";

const Home = () => {
  const API_KEY = "8fb8b70598e5374fb5f6d67bcfb05c76";
  const [loading, setLoading] = useState(false);
  const [wdata, setwdata] = useState({});
  const [toogleMenu, setToogleMenu] = useState(false);

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }

  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    // console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);

    // You can use the latitude and longitude in your weather API call here
    weatherData(latitude, longitude);
  }

  function error(err) {
    console.error(`Error getting location: ${err.message}`);
  }

  // Example usage

  const weatherData = async (latitude, longitude) => {
    setLoading(true);
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${
          latitude || "21.1938"
        }&lon=${
          longitude || "81.3509"
        }&appid=8fb8b70598e5374fb5f6d67bcfb05c76&units=metric`
      );

      setwdata({
        temp: res.data.main.temp,
        name: res.data.name,
        feel: res.data.main.feels_like,
        humid: res.data.main.humidity,

        mood: "cool",
        weather: res.data.weather[0],
      });
      console.log(wdata.feel);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    weatherData();
    getLocation();
  }, []);

  const motionProps = {
    hidden: {
      y: 10,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: [0, 1],
      transition: { stiffness: 120, delay: 0.5, staggerChildren: 3 },
    },
  };

  return (
    <div>
      <div
        className={`fixed w-full   ${
          toogleMenu ? "translate-x-[0%]" : "translate-x-[-100%]"
        }  h-full z-10 duration-300 `}
      >
        <Menu />
      </div>

      <div className="h-auto flex flex-col sm:block  gap-5">
        <nav className=" overflow-hidden border-[.2px]  w-full     rounded-full">
          <motion.div
            variants={motionProps}
            initial="hidden"
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.3 },
            }}
            className="overflow-hidden  flex w-full  bg-[#292929] justify-between   items-center rounded-full"
          >
            <div className=" text-center text-white text-2xl  font-bold px-5  ">
              <p>X-men</p>
            </div>
            {/* // hamburger-menu---- */}
            <div
              className="md:hidden block z-20   px-5"
              onClick={() => setToogleMenu(!toogleMenu)}
            >
              <Hamburger color="white" size={20} type="cross" />
            </div>

            <div className="  justify-evenly md:flex  hidden gap-2 p-2">
              <a href="https://github.com/abhishekmill">
                {" "}
                <Button text="Github" />{" "}
              </a>
              <a href="http://">
                {" "}
                <Button text="services" />{" "}
              </a>
              <a href="http://">
                {" "}
                <Button text="projects" />{" "}
              </a>
              <a href="https://www.linkedin.com/in/abhishekmill/">
                {" "}
                <Button text="blogs" />{" "}
              </a>
            </div>
          </motion.div>
        </nav>

        {/* menu   */}

        {/* -------body starts here----- */}

        <div>
          <div className="w-full gap-2 my-2 flex flex-wrap  sm:flex-nowrap ">
            {/* -----left-content--------- */}
            <div className="  h-auto sm:w-1/2 sm:flex-nowrap  flex-wrap ">
              {/* left-section  */}

              <div
                className=" overflow-hidden h-1/2 border bg-gradient-to-b from-[#292929]  content-end  rounded-3xl 
      "
              >
                <motion.div
                  variants={motionProps}
                  initial="hidden"
                  animate={{
                    y: 0,
                    opacity: 1,
                    transition: { delay: 0.5 },
                  }}
                  className="px-7 pb-10  "
                >
                  {loading ? (
                    <div className="">loading ...</div>
                  ) : (
                    <div>
                      <div className="flex  ">
                        <img
                          className=" sm:w-[20vw]  w-40  md:max-w-[290px]"
                          src={`https://openweathermap.org/img/wn/${wdata.weather?.icon}@4x.png`}
                          alt="weather_icon"
                        />

                        <div className="flex pt-10 items-center gap-3">
                          {" "}
                          <h3 className=" pt-2 text-white  text-3xl  xl:text-8xl  md:text-6xl ">
                            {wdata.temp}{" "}
                          </h3>
                          <svg
                            className="text-white w-8 md:max-w-20 md:w-[6vw]  pt-2"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M4.5 10C2.567 10 1 8.433 1 6.5C1 4.567 2.567 3 4.5 3C6.433 3 8 4.567 8 6.5C8 8.433 6.433 10 4.5 10ZM4.5 8C5.32843 8 6 7.32843 6 6.5C6 5.67157 5.32843 5 4.5 5C3.67157 5 3 5.67157 3 6.5C3 7.32843 3.67157 8 4.5 8ZM22 10H20C20 7.79086 18.2091 6 16 6C13.7909 6 12 7.79086 12 10V15C12 17.2091 13.7909 19 16 19C18.2091 19 20 17.2091 20 15H22C22 18.3137 19.3137 21 16 21C12.6863 21 10 18.3137 10 15V10C10 6.68629 12.6863 4 16 4C19.3137 4 22 6.68629 22 10Z"></path>
                          </svg>{" "}
                        </div>
                      </div>
                      <div className="flex nowrap ">
                        <h3 className="font-semibold capitalize text-2xl   pl-7 pb-5 text-white">
                          {" "}
                          {wdata.name}
                        </h3>

                        <h3 className="font-normal capitalize text-2xl flex gap-2 lg:pl-40 pl-7 pb-5 text-slate-400">
                          humidity: <p className="text-white">{wdata.humid}</p>{" "}
                        </h3>

                        {/* <h3 className="font-normal capitalize text-2xl whitespace-nowrap hidden xl:block  pl-20 pb-5 text-blue-400">
                        feels like: {wdata.feel}
                      </h3> */}
                      </div>
                    </div>
                  )}

                  <p className="  max-w-[500px] text-slate-300 capitalize xl:text-md   text-sm  ">
                    {" "}
                    "Every corner of
                    <span className="pl-1 font-bold"> {wdata.name} </span>
                    tells a story—where the past whispers in its streets, and
                    the future shines in its skyline."
                  </p>
                </motion.div>
              </div>
              {/* ---bottom-left------ cont--------  */}
              <div className="flex h-1/2 pb-2  mt-2 gap-2">
                <div className="border relative  h-full overflow-hidden rounded-3xl py-10 ">
                  <motion.div
                    variants={motionProps}
                    initial="hidden"
                    animate="visible"
                    className="p-7"
                  >
                    <h3 className="font-semibold  capitalize text-xl text-white">
                      Insights
                    </h3>

                    <h1 className="capitalize text-white py-5 text-4xl "> </h1>
                    <p className=" capitalize text-white ">
                      {" "}
                      The average tons of CO2e produced by a typical digital ad
                      campaign.
                    </p>
                  </motion.div>

                  <div className=" w-[100%] h-[50%] bg-yellow-300 absolute  rounded-[100%]   blur-xl   xl:-bottom-48 -bottom-32 "></div>
                </div>
                <div className="border  h-full rounded-3xl py-10 p-7">
                  <motion.div
                    variants={motionProps}
                    initial="hidden"
                    animate="visible"
                  >
                    <h3 className="font-semibold py-5  capitalize text-xl text-white">
                      Insights
                    </h3>

                    <p className="pb-6 capitalize text-white ">
                      {" "}
                      The average tons of CO2e produced by a typical digital ad
                      campaign.
                    </p>
                    <Button text="view services" />
                  </motion.div>
                </div>
                .
              </div>
            </div>

            <div
              className="border box block sm:h-auto overflow-hidden 
     rounded-3xl sm:w-1/2 "
            >
              <motion.div
                variants={motionProps}
                initial="hidden"
                animate="visible"
                className="m-5"
              >
                <h3 className="font-semibold  capitalize text-xl text-white">
                  Latest project
                </h3>
                <a
                  href="https://city-portfolio-tau.vercel.app/"
                  style={{ textDecoration: "none" }}
                >
                  <h1 className="capitalize text-white py-5 text-4xl">
                    Z-chat APP
                  </h1>
                </a>
                <p className=" w-3/4 capitalize text-white ">
                  {" "}
                  A fully responsive frontend design for City-Portofilio with
                  tailwind css & react{" "}
                </p>
              </motion.div>

              <div className=" rounded-tl-3xl hidden sm:block   ml-20 mt-[200px] overflow-hidden ">
                <img
                  className="w-full "
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="flex sm:flex-nowrap flex-wrap sm:h-[400px] justify-center  gap-2">
            <div className="border w-full h-full bg-white rounded-3xl relative py-10 p-7 overflow-hidden">
              <div
                className=" w-[30vw] xl:w-[20vw] xl:h-[20vw] h-[30vw]  bg-blue-700 absolute  rounded-full xl:-right-[30%] sm:-right-[50%] -right-[15%] translate-y-[-70%] blur-2xl 
      "
              >
                {" "}
              </div>

              <h3 className="font-semibold  capitalize text-xl text-black">
                Insights
              </h3>

              <h1 className="capitalize text-black py-5 text-4xl ">3223 </h1>
              <p className=" capitalize text-black ">
                {" "}
                Growth happens not when we avoid challenges, but when we embrace
                them as opportunities for learning and self-discovery.
              </p>
            </div>

            <div className="border w-full h-full overflow-hidden rounded-3xl  ">
              <div className="p-7 pt-10">
                <h3 className="font-semibold  capitalize text-xl text-white">
                  Insights
                </h3>

                <h1 className="capitalize text-white py-5 text-4xl ">Shanu</h1>
                <p className=" capitalize text-white ">
                  {" "}
                  Gaming allows players to immerse themselves in rich
                  narratives, vibrant worlds.
                </p>
              </div>
              <div className="overflow-hidden flex mt-10 w-full  ">
                <InfiniteScroll />
              </div>
            </div>

            <div className="border w-full h-full rounded-3xl py-10 p-7">
              <h3 className="font-semibold  capitalize text-xl text-white">
                Insights
              </h3>

              <h1 className="capitalize text-white py-5 text-4xl ">323 </h1>
              <p className=" capitalize text-white ">
                {" "}
                The average tons of CO2e produced by a typical digital ad
                campaign.
              </p>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
