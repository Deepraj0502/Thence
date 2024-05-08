import React, { useState } from "react";

export default function ProjectsReg() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
  });
  const [submit, setSubmit] = useState(false);
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userData.email)) {
      setSubmit(true);
      var seconds = 5;
      setInterval(() => {
        if (seconds === 0) {
          window.location.href = "/";
        }
        document.getElementById("timer").innerHTML = seconds + " Seconds";
        seconds--;
      }, 1000);
    } else {
      document.getElementById("invalid").style.display = "flex";
    }
  };
  return (
    <div>
      <nav className="bg-white">
        <div className="p-4 md:p-14 md:pt-4  mx-auto ">
          <div className="flex flex-wrap items-center justify-between rounded-[50px]  px-2 md:px-8 py-4">
            <a
              href="/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img
                src="https://ik.imagekit.io/ok2wgebfs/Frame%201261155216.png?updatedAt=1715095070920"
                className="h-10"
                alt="Logo"
              />
            </a>
            {!submit && (
              <a
                href="/"
                className="p-1 md:p-2 rounded-full border border-gray-300"
              >
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABJUlEQVR4nO3YT0sCQRyH8YeuUu0KG/RHUG8efAceetFBJ6noEKUI6iG1wHolxcIYg6wi67Qzs3w/IHga92F09zeCiIiIiMg/6QEPwKXDNRvAHXBLhYbADzAHLhysdwo8W2ueUJEMmJoPfj9yZ/KdeDRrfQNdKpYCY3MBC+DKQUQHT46JsSO+fEYUxSwPjMkjnkKKsGNGVsw1u50BLyFGFMWsdsQEH7GR7Ik534poE7hkK+YmxoiNJjAxF/4BvJr3n0CLyCTAmwnIX+uYdqJ2Ic06fLWSgjtXdD/2dM/tN5pnSHrA0z3Y0aTMvBVsTFpiAg5mfHc9xnuNyaxT4qLkKbFhzv7eTocZMHN41PUWM6zLnw99E+Miwo65BwYO1xQRERER4c8v6Th7MMbV15kAAAAASUVORK5CYII="
                  className="w-8 h-8"
                />
              </a>
            )}
          </div>
        </div>
      </nav>
      {!submit && (
        <div className="px-4 md:px-14 flex flex-col items-center">
          <h3 className="text-center font-grace text-2xl md:text-3xl text-green-500">
            Registration Form
          </h3>
          <h1 className="text-center font-manrope text-3xl md:text-4xl font-semibold max-w-md m-auto mt-2">
            Start your success Journey here!
          </h1>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            onChange={handleChange}
            className="w-72 border-none bg-[#EFEFEF] px-8 py-4 rounded-full font-manrope mt-14"
          />
          <input
            type="text"
            name="email"
            placeholder="Enter your email"
            onChange={handleChange}
            className="w-72 border-none bg-[#EFEFEF] px-8 py-4 rounded-full font-manrope mt-6"
          />
          <div
            id="invalid"
            className="hidden flex items-center p-4 mb-4 text-sm text-[#FF0808] rounded-lg dark:text-red-400 mr-16 font-manrope font-semibold text-sm"
            role="alert"
          >
            <svg
              className="flex-shrink-0 inline w-4 h-4 me-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <span className="sr-only">Info</span>
            <div>Enter a valid email address</div>
          </div>

          <button
            className="w-72 border-none bg-black px-8 py-4 rounded-full font-manrope mt-10 text-white disabled:bg-[#C9C9C9]"
            disabled={
              userData.name === "" || userData.email === "" ? true : false
            }
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      )}
      {submit && (
        <div className="px-4 md:px-14 flex flex-col items-center justify-center">
          <img
            src="https://cdn.dribbble.com/users/2185205/screenshots/7886140/media/90211520c82920dcaf6aea7604aeb029.gif"
            alt=""
            className="w-80"
          />
          <h3 className="text-center font-grace text-2xl md:text-3xl text-green-500 mt-[-40px]">
            Success Submitted
          </h3>
          <h1 className="text-center font-manrope text-3xl md:text-4xl font-semibold max-w-md m-auto mt-4">
            Congratulations
          </h1>
          <p className="text-center font-manrope text-sm md:text-xl max-w-lg m-auto mt-6 text-gray-500">
            Your request has been successfully submitted to us. We will validate
            your information and reach out to your shortly with updates
          </p>
          <p className="text-center font-manrope text-sm max-w-lg m-auto mt-32 text-gray-500">
            Redirecting you to Homepage in{" "}
            <b className="text-black" id="timer">
              5 Seconds
            </b>
          </p>
        </div>
      )}
    </div>
  );
}
