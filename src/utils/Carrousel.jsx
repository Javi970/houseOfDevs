import casaHermosa from "../assets/image/casa-hermosa.jpg";
import casasModerna1 from "../assets/image/Casas-Moderna1.jpg";
import casasModerna2 from "../assets/image/casas-moderna2.webp";
import casasModerna4 from "../assets/image/Casas-Modernas4.jpg";

const Carrousel = () => {
  return (
    <div
      id="animation-carousel"
      className="relative z-0"
      data-carousel="static"
    >
      {/* <!-- Carousel wrapper --> */}
      <div className="relative h-56  overflow-hidden rounded-lg md:h-96">
        {/* <!-- Item 1 --> */}
        <div className="hidden ease-linear duration-200 " data-carousel-item>
          <img
            src={casaHermosa}
            className="absolute bg-cover block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
        {/* <!-- Item 2 --> */}
        <div className="hidden ease-linear duration-200 " data-carousel-item>
          <img
            src={casasModerna1}
            className="absolute bg-cover block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
        {/* <!-- Item 3 --> */}
        <div
          className="hidden ease-linear duration-200 "
          data-carousel-item="active"
        >
          <img
            src={casasModerna2}
            className="absolute bg-cover block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
        {/* <!-- Item 4 --> */}
        <div className="hidden ease-linear duration-200 " data-carousel-item>
          <img
            src={casasModerna4}
            className="absolute bg-cover block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
      </div>
      {/* <!-- Slider controls --> */}
      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
      >
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
      >
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default Carrousel;
