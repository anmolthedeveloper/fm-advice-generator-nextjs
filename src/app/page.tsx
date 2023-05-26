"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  var [advice, setAdvice] = useState(
    "It is easy to sit up and take notice, what's difficult is getting up and taking action."
  );

  var [adviceId, setAdviceId] = useState("117");

  function diceClickHandler() {
    fetch("https://api.adviceslip.com/advice")
      .then((data) => data.json())
      .then((json) => {
        setAdvice(json.slip.advice);
        setAdviceId(json.slip.id);
      })
      .catch((err) => {
        setAdvice(
          "It is easy to sit up and take notice, what's difficult is getting up and taking action."
        );
      });
  }

  return (
    <div className="w-[100vw] h-[100vh] bg-darkBlue flex justify-center items-center">
      <div className="bg-darkGrayishBlue p-7 w-72 sm:w-[24rem] m-10 text-lightCyan flex flex-col items-center rounded-lg pt-10 pb-10 relative">
        <p className="uppercase tracking-[0.3em] text-xs text-neonGreen font-bold mb-6">
          Advice #{adviceId}
        </p>
        <p className="text-center text-xl font-bold">"{advice}"</p>
        <Image
          src={"./images/pattern-divider-desktop.svg"}
          height={1000}
          width={1000}
          alt="divider image"
          className="mt-7 mb-5 hidden sm:block"
        />

        <Image
          src={"./images/pattern-divider-mobile.svg"}
          height={1000}
          width={1000}
          alt="divider image"
          className="mt-7 mb-5 sm:hidden"
        />
        <div
          onClick={diceClickHandler}
          className="w-12 h-12 rounded-full bg-neonGreen absolute bottom-[-1.5rem] p-[0.90rem] hover:shadow-[0_0px_30px_0px] hover:shadow-neonGreen"
        >
          <Image
            src={"./images/icon-dice.svg"}
            height={1000}
            width={1000}
            alt="dice"
          />
        </div>
      </div>
    </div>
  );
}
