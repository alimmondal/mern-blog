import { Button } from "flowbite-react";
import React from "react";

export default function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-400 justify-center items-center rounded-tl-3xl rounded-br-3xl gap-4 text-center">
      <div className="flex-1 justify-center flex flex-col">
        <h2 className="text-2xl">Want to create websites using JavaScript?</h2>
        <p className="text-gray-500 my-2">
          Checkout these resources with 100 JavaScript Projects.
        </p>
        <Button
          gradientDuoTone="purpleToBlue"
          className="rounded-tl-xl rounded-bl-none rounded-tr-none rounded-br-xl"
        >
          <a
            href="https://developer-alim.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn More
          </a>
        </Button>
      </div>
      <div className="flex-1">
        <img
          src="https://bairesdev.mo.cloudinary.net/blog/2023/08/What-Is-JavaScript-Used-For.jpg"
          alt=""
        />
      </div>
    </div>
  );
}
