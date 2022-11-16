import React from "react";
import img from "../../images/IMG20210622150113_00.jpg";

const Portfolio = () => {
  return (
    <div>
      
      <h1 className="text-5xl mb-10 mt-5 font-bold text-center border border-x-8">
        Short <span className=" text-green-700">Profile</span>
      </h1>
      <div className="w-full lg:w-2/3 lg:mx-auto">
        <div class="hero min-h-screen bg-base-200">
          <div class="hero-content flex-col lg:flex-row">
            <img src={img} class="max-w-xs rounded-lg shadow-2xl" alt="" />
            <div>
              <h1 class="text-4xl font-bold text-yellow-700">
                Merazul Ehsan Sowad
              </h1>
              <p class="py-6 text-lg font-semibold">
                Department of Software Engineering <br />
                Faculty of Science and Information Technology <br />
                Daffodil International University <br />
                Cell-Phone: 01701-018652 <br />
                E-mail: merazul35-2755@diu.edu.bd <br />
              </p>

              <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  <a
                    href="https://github.com/merazul2755"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Git Hub
                  </a>
                </span>
              </button>
              <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  <a
                    href="https://www.linkedin.com/in/merazul-ehsan-sowad-922a201a6"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                </span>
              </button>
              <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  <a
                    href="https://portfolio-40390.web.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Portfolio
                  </a>
                </span>
              </button>
              <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  <a
                    href="https://sites.google.com/diu.edu.bd/sowad-portfolio/home"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Resume
                  </a>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h1 className="text-5xl mb-10 mt-10 text-gray-500 font-bold text-center">
          Live Project Links
        </h1>

        <div className="text-center flex-col lg:flex-row mb-5">
          <a
            href="https://fresh-mart-958e0.firebaseapp.com/"
            target="_blank"
            class="btn btn-wide mb-5 lg:mr-10 btn-info"
            rel="noreferrer"
          >
            Fresh Mart
          </a>
          <a
            href="https://wilde-lodge.firebaseapp.com/"
            target="_blank"
            class="btn btn-wide btn-accent"
            rel="noreferrer"
          >
            Wilde Lodge
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
