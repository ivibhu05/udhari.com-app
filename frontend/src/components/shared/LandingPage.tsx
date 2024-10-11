import Image from "next/image";
import Link from "next/link";
import React from "react";

const LandingPage = () => {
  return (
    <>
      <div className="flex w-[80%] mx-auto mt-20 max-md:mt-2">
        <div className="w-[60%] flex flex-col py-10 px-2 max-md:px-0 max-lg:w-full max-md:py-4">
          <div>
            <h1 className="text-white text-[2.5rem] font-semibold leading-[3.35rem] max-sm:text-[2rem]">
              Let&apos;s manage your like Pro finances now, to make the future
              <span className="max-md:hidden">
                {" "}
                easier to make the future easier..
              </span>
            </h1>
          </div>

          <div>
            <p className="text-[#888] mt-4">
              we are here to help organize and plan your finance for a better
              future.
              <span className="max-md:hidden">
                we are here to help organize and plan your finance for a better
                future.
              </span>
            </p>
          </div>

          <div className="flex w-full gap-6 mt-8">
            <Link href={"/sign-up"}>
              <button className="py-2.5 px-6 bg_light_color font-semibold">
                Get started
              </button>
            </Link>
            <button className="py-2.5 px-6 border text-white font-semibold">
              Introduction
            </button>
          </div>

          <div className="w-full flex gap-6 mt-8 max-sm:gap-2">
            <div className="home_page_card_css">
              <h1 className="font-bold text-[1.5rem]">25k</h1>
              <p className="text-center leading-5 mt-1">Happy Customer</p>
            </div>
            <div className="home_page_card_css">
              <h1 className="font-bold text-[1.5rem]">11+</h1>
              <p className="text-center leading-5 mt-1">Years of experiance</p>
            </div>
            <div className="home_page_card_css">
              <h1 className="font-bold text-[1.5rem]">20</h1>
              <p className="text-center leading-5 mt-1">accros country</p>
            </div>
          </div>
        </div>

        <div className="w-[50%] flex justify-center items-center max-lg:hidden">
          <Image
            src={"/icons/phone.png"}
            height={500}
            width={520}
            alt="phone logo"
            className="rotate-6"
          />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
