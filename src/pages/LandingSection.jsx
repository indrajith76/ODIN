import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";

const LandingSection = () => {
  const texts = ["Positional Trading", "Market Making", "AI Observer"];

  return (
    <section className="firstBg flex flex-col justify-center">
      <div className="">
        <div className="text-center text-sm">
          <Link
            to="#"
            className="bg-black border border-[#B7E5FF] px-8 py-2 rounded-3xl"
          >
            ✦ Try Odin Now
          </Link>
        </div>
        <h2 className="font-medium text-center text-xl md:text-3xl md:leading-[50px] lg:leading-[45px] my-10">
          Enter Odin, a Telegram Based <br />
          <Typewriter
            options={{
              strings: texts,
              autoStart: true,
              loop: true,
            }}
          />{" "}
          <br className="block lg:hidden" />
          Bot On Ethereum
        </h2>
        <div className="flex justify-center gap-10">
          <button className="px-8 bg-[#B7E5FF] text-black text-sm font-medium py-2 rounded-3xl font">
            <Link to="#">Buy $ODIN</Link>
          </button>
          <button className="px-8 bg-[#B7E5FF] text-black text-sm font-medium py-2 rounded-3xl font">
            <Link to="#">Learn More</Link>
          </button>
        </div>
      </div>

      <div className="absolute w-[97vw] right-0 left-0 mx-auto bottom-12 px-10 flex justify-between items-end">
        <ul className="flex flex-col gap-2">
          <li className="text-xs">
            <span className="text-[#676767]">/ </span>BENEFITS
          </li>
          <li className="text-xs">
            <span className="text-[#676767]">/</span> AUDITS
          </li>
          <li className="text-xs">
            <span className="text-[#676767]">/</span> MANIFESTO
          </li>
        </ul>
        <button>
          <a href="#introSection">
            <img src="icons/downArrow.svg" alt="" />
          </a>
        </button>
        <p className="text-xs text-[#fff]">Version 1.0.0</p>
      </div>
    </section>
  );
};

export default LandingSection;
