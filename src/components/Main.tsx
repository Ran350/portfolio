import { VFC } from "react";

export const Main: VFC = () => (
  <main className="text-gray-700">
    <section className="m-2 sm:m-8 md:m-16">
      <div className="flex justify-center">
        <div className="border-gray-300 text-center text-2xl md:text-4xl">
          Develop
        </div>
      </div>
      <div className="mx-auto my-2 border-b-2 p-0 w-1/3"></div>

      <div className="flex flex-wrap justify-center">
        <div className="m-2 border-2 hover:border-gray-300 rounded p-2 md:p-4 w-32 md:w-64 bg-white">
          <img src="image_lv.png" alt="" />
          <p>aaa</p>
        </div>
        <div className="m-2 border-2 rounded p-2 md:p-4 w-32 md:w-64 bg-white">
          <img src="image_lv.png" alt="" />
          <p>aaa</p>
        </div>
        <div className="m-2 border-2 rounded p-2 md:p-4 w-32 md:w-64 bg-white">
          <img src="image_lv.png" alt="" />
          <p>aaa</p>
        </div>
        <div className="m-2 border-2 rounded p-2 md:p-4 w-32 md:w-64 bg-white">
          <img src="image_lv.png" alt="" />
          <p>aaa</p>
        </div>
      </div>

      <div className="m-2 text-center">
        <button className="border-2 hover:border-gray-300 rounded-lg px-8 py-2 bg-white shadow-md">
          <a href="https://github.com/Ran350">
            <i className="fab fa-github"></i>
            <span>Github</span>
          </a>
        </button>
      </div>
    </section>
  </main>
);
