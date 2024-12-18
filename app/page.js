"use client"


import React from 'react'
import Link from 'next/link';


export default function Home() {


  return (
    <>

      <div className="h-[40vh] w-full flex flex-col items-center justify-center gap-5 mt-1">
        <div className="font-bold text-3xl text-white flex flex-row gap-2 items-center">
          Buy Me a Chai!
          <img className="w-[40px] " src="/images/coffeecup.gif" alt="Coffee Cup" />
        </div>
        <p className="text-white text-center md:p-0 p-2">
          A credit Platform for Creators. Get funded by your fans and followers. Start here!
        </p>

        <div className="flex flex-row gap-5">
          <Link href={"/login"}>
            <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Here</button>
          </Link>

          <Link href={"/about"}>
            <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read Here</button>
          </Link>

        </div>

      </div>


      <div className="w-full bg-slate-600 h-2">
      </div>


      <div className="text-white flex flex-col gap-10 container mx-auto my-10">
        <h1 className="text-center text-3xl font-bold">
          Fans can buy you a Chai!
        </h1>
        <div className="flex md:flex-row flex-col gap-3 justify-around items-center">
          <div className="flex flex-col items-center ">
            <img className="rounded-full bg-slate-500 w-[100px]" src="/images/download.jpg" alt="Man working" />
            <p>Fund Yourself!</p>
            <p>
              Your fans are available to help you
            </p>
          </div>
          <div className="flex flex-col items-center ">
            <img className="rounded-full bg-slate-500 w-[100px]" src="/images/dollar.gif" alt="Man working" />
            <p>Fund Yourself!</p>
            <p>
              Your fans are available to help you
            </p>
          </div>
          <div className="flex flex-col items-center ">
            <img className="rounded-full bg-slate-500 w-[100px]" src="/images/collaboration.png" alt="Man working" />
            <p>Fund Yourself!</p>
            <p>
              Your fans are available to help you
            </p>
          </div>
        </div>
      </div>

      <div className="w-full bg-slate-600 h-2">
      </div>


      <div className="text-white flex flex-col gap-10 container mx-auto my-10 pb-8 justify-center items-center">
        <h1 className="text-center text-3xl font-bold">
          Learn More about us!
        </h1>
        {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/tVzUXW6siu0?si=hPsOqwnOXYxPhG47" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> */}

      </div>




    </>
  );
}
