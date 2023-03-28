import casaHermosa from "../assets/image/casa-hermosa.jpg";
import casasModerna1 from "../assets/image/Casas-Moderna1.jpg";
import casasModerna2 from "../assets/image/casas-moderna2.webp";
import casasModerna4 from "../assets/image/Casas-Modernas4.jpg";
import Carousel from "react-material-ui-carousel";

const Carrousel = () => {
  return (
    <Carousel animation="slide" duration={600} sx={{ height: "15rem" }}>
      <img
        className="w-full h-[15rem] object-cover rounded-lg"
        src={casaHermosa}
        alt=""
      />
      <img
        className="w-full h-[15rem] object-cover rounded-lg"
        src={casasModerna1}
        alt=""
      />
      <img
        className="w-full h-[15rem] object-cover rounded-lg"
        src={casasModerna2}
        alt=""
      />
      <img
        className="w-full h-[15rem] object-cover rounded-lg"
        src={casasModerna4}
        alt=""
      />
    </Carousel>
  );
};

export default Carrousel;

// <div id="default-carousel" className="relative z-0" data-carousel="slide">
//   {/* <!-- Carousel wrapper --> */}
//   <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
//     {/* <!-- Item 1 --> */}
//     <div className="hidden duration-700 ease-in-out" data-carousel-item>
//       <img
//         src={casaHermosa}
//         className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
//         alt="..."
//       />
//     </div>
//     {/* <!-- Item 2 --> */}
//     <div className="hidden duration-700 ease-in-out" data-carousel-item>
//       <img
//         src={casasModerna1}
//         className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
//         alt="..."
//       />
//     </div>
//     {/* <!-- Item 3 --> */}
//     <div className="hidden duration-700 ease-in-out" data-carousel-item>
//       <img
//         src={casasModerna2}
//         className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
//         alt="..."
//       />
//     </div>
//     {/* <!-- Item 4 --> */}
//     <div className="hidden duration-700 ease-in-out" data-carousel-item>
//       <img
//         src={casasModerna4}
//         className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
//         alt="..."
//       />
//     </div>
//     {/* <!-- Item 5 --> */}
//     <div className="hidden duration-700 ease-in-out" data-carousel-item>
//       <img
//         src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.XNDq5ZzloQxHd2RriHZ94gHaE8%26pid%3DApi&f=1&ipt=12cd21b7cc6a245c18da48342c5148ea2a5001b0f184ac56a3bb59d23f201b90&ipo=images"
//         className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
//         alt="..."
//       />
//     </div>
//   </div>
//   {/* <!-- Slider indicators --> */}
//   <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
//     <button
//       type="button"
//       className="w-3 h-3 rounded-full"
//       aria-current="true"
//       aria-label="Slide 1"
//       data-carousel-slide-to="0"
//     ></button>
//     <button
//       type="button"
//       className="w-3 h-3 rounded-full"
//       aria-current="false"
//       aria-label="Slide 2"
//       data-carousel-slide-to="1"
//     ></button>
//     <button
//       type="button"
//       className="w-3 h-3 rounded-full"
//       aria-current="false"
//       aria-label="Slide 3"
//       data-carousel-slide-to="2"
//     ></button>
//     <button
//       type="button"
//       className="w-3 h-3 rounded-full"
//       aria-current="false"
//       aria-label="Slide 4"
//       data-carousel-slide-to="3"
//     ></button>
//     <button
//       type="button"
//       className="w-3 h-3 rounded-full"
//       aria-current="false"
//       aria-label="Slide 5"
//       data-carousel-slide-to="4"
//     ></button>
//   </div>
//   {/* <!-- Slider controls --> */}
//   <button
//     type="button"
//     className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
//     data-carousel-prev
//   >
//     <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//       <svg
//         aria-hidden="true"
//         className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
//         fill="none"
//         stroke="currentColor"
//         viewBox="0 0 24 24"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path
//           stroke-linecap="round"
//           stroke-linejoin="round"
//           stroke-width="2"
//           d="M15 19l-7-7 7-7"
//         ></path>
//       </svg>
//       <span className="sr-only">Previous</span>
//     </span>
//   </button>
//   <button
//     type="button"
//     className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
//     data-carousel-next
//   >
//     <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//       <svg
//         aria-hidden="true"
//         className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
//         fill="none"
//         stroke="currentColor"
//         viewBox="0 0 24 24"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path
//           stroke-linecap="round"
//           stroke-linejoin="round"
//           stroke-width="2"
//           d="M9 5l7 7-7 7"
//         ></path>
//       </svg>
//       <span className="sr-only">Next</span>
//     </span>
//   </button>
// </div>
