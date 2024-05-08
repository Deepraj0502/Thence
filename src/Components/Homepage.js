import React, { useEffect, useState } from "react";
import { initFlowbite } from "flowbite";
import { FaArrowRight } from "react-icons/fa6";
export default function Homepage() {
  useEffect(() => {
    initFlowbite();
  }, []);
  const [active, setActive] = useState(false);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);
  const [active4, setActive4] = useState(false);
  const [active5, setActive5] = useState(false);
  const [bannerText, setBannerText] = useState(
    "Enhance fortune 50 company’s insights teams research capabilities"
  );
  setInterval(() => {
    if (
      bannerText ===
      "Enhance fortune 50 company’s insights teams research capabilities"
    ) {
      setBannerText(
        "Officia magna officia helo demo lorem culpa nostrud velit sit esse."
      );
    } else if (
      bannerText ===
      "Officia magna officia helo demo lorem culpa nostrud velit sit esse."
    ) {
      setBannerText(
        "Sunt duis Lorem velit nisi ipsum officia nisi nisi sit duis ad."
      );
    } else {
      setBannerText(
        "Enhance fortune 50 company’s insights teams research capabilities"
      );
    }
  }, 3000);

  return (
    <div>
      <nav className="bg-white">
        <div className="p-4 md:p-14 md:pt-4  md:mx-auto ">
          <div className="flex flex-wrap items-center justify-between rounded-[50px] border border-gray-300 px-8 py-4">
            <a
              href="/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img
                src="https://ik.imagekit.io/ok2wgebfs/Frame%201261155216.png?updatedAt=1715095070920"
                className="h-8"
                alt="Logo"
              />
            </a>
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            <div
              className="hidden w-full md:block md:w-auto"
              id="navbar-default"
            >
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <button
                  type="button"
                  className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-6 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 mr-[-20px] w-full md:w-auto"
                  onClick={() => (window.location.href = "/register")}
                >
                  Get Projects
                </button>
                <button
                  type="button"
                  className="text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-8 py-3.5 me-2 mb-2  dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 w-full md:w-auto"
                >
                  Onboard Talent
                </button>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div className="px-8 md:px-14 ">
        <h3 className="text-center font-grace text-2xl md:text-3xl text-green-500">
          Success stories
        </h3>
        <h1 className="text-center font-manrope text-2xl md:text-4xl font-semibold max-w-md m-auto">
          Every success journey we’ve encountered.
        </h1>
        <div className="flex flex-col md:flex-row items-center md:items-start md:justify-evenly mt-20">
          <div className="scale-[0.6] lg:scale-[0.9] lg:ml-10 xl:scale-[1] lg:mr-10">
            <img
              src="https://ik.imagekit.io/ok2wgebfs/image%2032618.png?updatedAt=1715101332556"
              alt=""
              className="min-w-[300px] w-[350px] h-[300px] md:h-[350px] rounded-3xl mt-[-230px] md:mt-[-30px]"
            />
            <div className="relative p-4 w-52 h-42 rounded-2xl bg-white bottom-72 right-32 shadow-lg fourty">
              <h1 className="font-manrope font-bold text-4xl">
                <span>
                  <img
                    src="https://ik.imagekit.io/ok2wgebfs/spark,%20sparkle,%2026.png?updatedAt=1715155253944"
                    alt=""
                    className="w-16 mb-[-25px] ml-[-25px] mt-[-25px] spark"
                  />
                </span>
                40%
              </h1>
              <p className="font-manrope text-sm text-gray-400 mt-2">
                Achieved reduction in project execution time by optimising team
                availability
              </p>
            </div>
            <div className="relative p-4 w-52 h-42 rounded-2xl bg-[#002E18] bottom-64 left-48 shadow-lg fourty">
              <h1 className="font-manrope font-bold text-4xl text-white">
                $0.5
                <span className="text-gray-400 text-sm ml-2">MILLION</span>
              </h1>
              <p className="font-manrope text-sm text-white mt-2">
                Reduced client expenses by saving on hiring and employee costs.
              </p>
            </div>
            <div className="relative flex p-2 w-52 h-auto rounded-[35px] bg-white bottom-[380px] right-20 shadow-lg fourty gap-3">
              <div className="bg-gray-200 w-10 h-10 rounded-[50%] flex justify-center items-center mt-1 rocket">
                <img
                  src="https://ik.imagekit.io/ok2wgebfs/Vector.png?updatedAt=1715156517265"
                  alt=""
                  className="w-5"
                />
              </div>
              <div>
                <h1 className="font-manrope font-bold text-xl text-black">
                  10 DAYS
                </h1>
                <p className="font-manrope text-sm text-gray-400 ">
                  Staff Deployment
                </p>
              </div>
            </div>
          </div>
          <div className="mt-[-240px] md:mt-0">
            <p className="font-manrope font-semibold text-xl md:text-3xl max-w-md">
              {bannerText}
            </p>
            <div className="mt-10 flex gap-3">
              <span
                className={
                  bannerText ===
                  "Enhance fortune 50 company’s insights teams research capabilities"
                    ? "block w-2 h-2 bg-green-400 rounded-full cursor-pointer"
                    : "block w-2 h-2 bg-gray-400 rounded-full cursor-pointer"
                }
                onClick={() =>
                  setBannerText(
                    "Enhance fortune 50 company’s insights teams research capabilities"
                  )
                }
              ></span>
              <span
                className={
                  bannerText ===
                  "Officia magna officia helo demo lorem culpa nostrud velit sit esse."
                    ? "block w-2 h-2 bg-green-400 rounded-full cursor-pointer"
                    : "block w-2 h-2 bg-gray-400 rounded-full cursor-pointer"
                }
                onClick={() =>
                  setBannerText(
                    "Officia magna officia helo demo lorem culpa nostrud velit sit esse."
                  )
                }
              ></span>
              <span
                className={
                  bannerText ===
                  "Sunt duis Lorem velit nisi ipsum officia nisi nisi sit duis ad."
                    ? "block w-2 h-2 bg-green-400 rounded-full cursor-pointer"
                    : "block w-2 h-2 bg-gray-400 rounded-full cursor-pointer"
                }
                onClick={() =>
                  setBannerText(
                    "Sunt duis Lorem velit nisi ipsum officia nisi nisi sit duis ad."
                  )
                }
              ></span>
            </div>
            <button
              type="button"
              className="scale-[0.8] md:scale-[1] text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-8 py-5 me-2 mb-2  dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 mt-20 explore-btn ml-[-20px] md:ml-0 mt-[20px] md:mt-20"
            >
              <div className="flex gap-3">
                Explore more
                <span>
                  {" "}
                  <FaArrowRight className="relative top-1 explore-arrow" />
                </span>
              </div>
            </button>
          </div>
        </div>
        <div className="mt-10 w-full md:mt-[-200px] bg-[#E8EEE7] rounded-xl p-6 md:p-14 flex flex-col md:flex-row">
          <div className="md:w-[40%]">
            <p className="font-grace text-lg md:text-2xl text-gray-500">
              What’s on your mind
            </p>
            <p className="font-manrope text-3xl md:text-4xl mt-2 font-semibold">
              Ask Questions
            </p>
            <img
              src="https://ik.imagekit.io/ok2wgebfs/Union.png?updatedAt=1715146962767"
              alt=""
              className="mt-10 w-80 h-80 hidden md:block"
            />
          </div>
          <div className="md:w-[60%]">
            <div
              id="accordion-collapse"
              data-accordion="collapse"
              className="mt-5 "
            >
              <div
                className="border border-transparent border-b-gray-400 focus:border-b-transparent"
                onClick={() => setActive(!active)}
              >
                <h2 id="accordion-collapse-heading-1">
                  <button
                    type="button"
                    className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-black dark:text-gray-400 focus:bg-transparent bg-transparent gap-3 text-sm md:text-lg text-left text-sm"
                    data-accordion-target={"#accordion-collapse-body-1"}
                    aria-expanded="false"
                    aria-controls={"accordion-collapse-body-1"}
                  >
                    <span>Do you offer freelancers?</span>

                    {!active && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        data-accordion-icon=""
                        className="w-[1rem] h-[1rem] rotate-180 shrink-0 mr-2"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z"
                        ></path>
                      </svg>
                    )}
                    {active && (
                      <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIUlEQVR4nGNgGAWjYBSMApLBfyrhgbNgFIyCUTAKGDABAOkcI91xODUvAAAAAElFTkSuQmCC"
                        className="mr-2 w-5"
                      ></img>
                    )}
                  </button>
                </h2>
                <div
                  id={"accordion-collapse-body-1"}
                  className="hidden "
                  aria-labelledby={"accordion-collapse-heading-1"}
                >
                  <div className="py-1">
                    <p className="mb-2 text-gray-500 dark:text-gray-400 text-sm md:text-auto">
                      If unhappy with a project, communicate with the
                      freelancer, allow for revisions, and refer to the
                      agreement. Escalate to platform support if needed,
                      considering mediation. Review policies, seek collaborative
                      solutions for resolution.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="border border-transparent border-b-gray-400 focus:border-b-transparent"
                onClick={() => setActive2(!active2)}
              >
                <h2 id="accordion-collapse-heading-2">
                  <button
                    type="button"
                    className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-black dark:text-gray-400 focus:bg-transparent bg-transparent gap-3 text-sm md:text-lg text-left "
                    data-accordion-target={"#accordion-collapse-body-2"}
                    aria-expanded="false"
                    aria-controls={"accordion-collapse-body-2"}
                  >
                    <span>
                      What’s the guarantee that I will be satisfied with the
                      hired talent?
                    </span>

                    {!active2 && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        data-accordion-icon=""
                        className="w-[1rem] h-[1rem] rotate-180 shrink-0 mr-2"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z"
                        ></path>
                      </svg>
                    )}
                    {active2 && (
                      <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIUlEQVR4nGNgGAWjYBSMApLBfyrhgbNgFIyCUTAKGDABAOkcI91xODUvAAAAAElFTkSuQmCC"
                        className="mr-2 w-5"
                      ></img>
                    )}
                  </button>
                </h2>
                <div
                  id={"accordion-collapse-body-2"}
                  className="hidden "
                  aria-labelledby={"accordion-collapse-heading-2"}
                >
                  <div className="py-1">
                    <p className="mb-2 text-gray-500 dark:text-gray-400  text-sm md:text-auto">
                      If unhappy with a project, communicate with the
                      freelancer, allow for revisions, and refer to the
                      agreement. Escalate to platform support if needed,
                      considering mediation. Review policies, seek collaborative
                      solutions for resolution.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="border border-transparent border-b-gray-400 focus:border-b-transparent"
                onClick={() => setActive3(!active3)}
              >
                <h2 id="accordion-collapse-heading-3">
                  <button
                    type="button"
                    className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-black dark:text-gray-400 focus:bg-transparent bg-transparent gap-3 text-sm md:text-lg text-left "
                    data-accordion-target={"#accordion-collapse-body-3"}
                    aria-expanded="false"
                    aria-controls={"accordion-collapse-body-3"}
                  >
                    <span>Can I hire multiple talents at once?</span>

                    {!active3 && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        data-accordion-icon=""
                        className="w-[1rem] h-[1rem] rotate-180 shrink-0 mr-2"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z"
                        ></path>
                      </svg>
                    )}
                    {active3 && (
                      <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIUlEQVR4nGNgGAWjYBSMApLBfyrhgbNgFIyCUTAKGDABAOkcI91xODUvAAAAAElFTkSuQmCC"
                        className="mr-2 w-5"
                      ></img>
                    )}
                  </button>
                </h2>
                <div
                  id={"accordion-collapse-body-3"}
                  className="hidden "
                  aria-labelledby={"accordion-collapse-heading-3"}
                >
                  <div className="py-1">
                    <p className="mb-2 text-gray-500 dark:text-gray-400 text-sm md:text-auto">
                      If unhappy with a project, communicate with the
                      freelancer, allow for revisions, and refer to the
                      agreement. Escalate to platform support if needed,
                      considering mediation. Review policies, seek collaborative
                      solutions for resolution.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="border border-transparent border-b-gray-400 focus:border-b-transparent"
                onClick={() => setActive4(!active4)}
              >
                <h2 id="accordion-collapse-heading-4">
                  <button
                    type="button"
                    className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-black dark:text-gray-400 focus:bg-transparent bg-transparent gap-3 text-sm md:text-lg text-left "
                    data-accordion-target={"#accordion-collapse-body-4"}
                    aria-expanded="false"
                    aria-controls={"accordion-collapse-body-4"}
                  >
                    <span>Why should I not go to an agency directly?</span>

                    {!active4 && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        data-accordion-icon=""
                        className="w-[1rem] h-[1rem] rotate-180 shrink-0 mr-2"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z"
                        ></path>
                      </svg>
                    )}
                    {active4 && (
                      <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIUlEQVR4nGNgGAWjYBSMApLBfyrhgbNgFIyCUTAKGDABAOkcI91xODUvAAAAAElFTkSuQmCC"
                        className="mr-2 w-5"
                      ></img>
                    )}
                  </button>
                </h2>
                <div
                  id={"accordion-collapse-body-4"}
                  className="hidden "
                  aria-labelledby={"accordion-collapse-heading-4"}
                >
                  <div className="py-1">
                    <p className="mb-2 text-gray-500 dark:text-gray-400 text-sm md:text-auto">
                      If unhappy with a project, communicate with the
                      freelancer, allow for revisions, and refer to the
                      agreement. Escalate to platform support if needed,
                      considering mediation. Review policies, seek collaborative
                      solutions for resolution.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="border border-transparent border-b-gray-400 focus:border-b-transparent"
                onClick={() => setActive5(!active5)}
              >
                <h2 id="accordion-collapse-heading-5">
                  <button
                    type="button"
                    className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-black dark:text-gray-400 focus:bg-transparent bg-transparent gap-3 text-sm md:text-lg text-left "
                    data-accordion-target={"#accordion-collapse-body-5"}
                    aria-expanded="false"
                    aria-controls={"accordion-collapse-body-5"}
                  >
                    <span>
                      Who can help me pick a right skillset and duration for me?
                    </span>

                    {!active5 && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        data-accordion-icon=""
                        className="w-[1rem] h-[1rem] rotate-180 shrink-0 mr-2"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z"
                        ></path>
                      </svg>
                    )}
                    {active5 && (
                      <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIUlEQVR4nGNgGAWjYBSMApLBfyrhgbNgFIyCUTAKGDABAOkcI91xODUvAAAAAElFTkSuQmCC"
                        className="mr-2 w-5"
                      ></img>
                    )}
                  </button>
                </h2>
                <div
                  id={"accordion-collapse-body-5"}
                  className="hidden "
                  aria-labelledby={"accordion-collapse-heading-5"}
                >
                  <div className="py-1">
                    <p className="mb-2 text-gray-500 dark:text-gray-400 text-sm md:text-auto">
                      If unhappy with a project, communicate with the
                      freelancer, allow for revisions, and refer to the
                      agreement. Escalate to platform support if needed,
                      considering mediation. Review policies, seek collaborative
                      solutions for resolution.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 bg-[#F5F5F5] rounded-xl px-2 md:px-8 py-4 flex mb-10 justify-between">
          <div className="flex">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAACM0lEQVR4nO2Xu0pcURSGP8IYMWq8FIFoZYhRSRGjkxdIYekF9AHMMyQaSJlES4lYKvMCsbLS40QEW7EQvICYeIFgEQuNYzVOWPAPbMbjnjNnHDDgDxs2sy57nb3Wv9YeuMd/hg5gHFgGtoG/WrYPgDHgRSUOTgJpIBdxWYC9t3FwFTADXMnxH2AW6Ndt1GrZfgCYk05ONtNAIu7hTcAPObsAPgOPI9iZzhcg49xGY5wvT8vBsVJQKl4Bv+RjFXhYivGMDA+BFuLDbI/k61tUo6TyZ9f+mvLRo3RktS+KtCK2nIehHvgEbMjxiWxGgAc32HyVT6OqFx1OtYcVXBew76HfglhRiAbgVDrtvgDGpWR0KkSzU1RrwFugBngCjAK/JZu/wXdK8g++AAIpGacLMSnZilhSiDZ95RbwNEQ+JPslXwC7Ugprp4eS+Tpcm6cO8und8QVwJiUrNBd1+v2c+KiXj7M7HcCuJwUHkiUrmYLAU4QTTlutDpE/i1iEi74Axjw0tIHyU/JNoA94JBq+c2j4vQgN35fTiDqBvUo2IjQ+cxqpYbADPgLrmhcnshn25H8iyvXn0athlIk6PIrAivZSw6g7qtG0IrZR2lrG4a3OOJ4qxTDhpMIeJG9iHN7tUDeI8zRrdILIaKRaMRVDg3J+6fT+kp9keST0ksnK2anoNChG1Gl1iucpp9qzuvbYj1IXL0WxqM/y4JYK+BraNc+X9GfkXGtLFLMm8/y62T3uMP4BOA7J2lNiw3sAAAAASUVORK5CYII="
              className="w-5 h-5"
            />
            <p className="font-manrope text-xs md:text-sm relative top-0 left-1">
              Talup 2023. All rights reserved{" "}
            </p>
          </div>
          <div className="flex gap-0 md:gap-10">
            <a href="/" className="font-manrope  text-xs md:text-sm underline ">
              Terms & Conditions
            </a>
            <a href="/" className="font-manrope  text-xs md:text-sm underline">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
