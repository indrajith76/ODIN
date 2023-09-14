import { Link } from "react-router-dom";

const IntroSection = () => {
  return (
    <section
      className="secondBG h-[110vh] flex flex-col justify-center relative"
      id="introSection"
    >
      <div className="px-5 lg:pl-[50px] lg:mt-16 md:text-center lg:text-left">
        <h2 className="font-medium text-3xl leading-[45px] mt-10 lg:mt-0 mb-5 lg:mb-0">
          Introducing Odin.
        </h2>
        <p className="text-sm my-3 lg:my-7">
          Odin is an intelligent position manager bot for decentralized crypto
          trading.
        </p>
        <p className="text-sm my-3 lg:my-7">
          Odin can take into account key levels of support and resistance,
          volume &amp; money flow, <br className="md:hidden lg:block" />
          and available liquidity to scale in/out of positions on a
          trader&apos;s behalf.
        </p>
        <p className="text-sm my-3 lg:my-7">
          Some key features include scaling in and out of positions based on set
          parameters, <br className="md:hidden lg:block" />
          alerts about whales, early holder activity, money flow, and overall
          token health,
          <br className="md:hidden lg:block" />
          shadow trading, and PNL analysis.
        </p>
        <p className="text-sm my-3 lg:my-7">
          Our telegram based trading bot is 100% free to use, with some premium
          features <br className="md:hidden lg:block" />
          unlockable with our token $ODIN.
        </p>
        <p className="text-sm my-3 lg:my-7">
          Learn more about Odin and its v1 capabilities in our{" "}
          <Link to="" className="underline">
            Documentation
          </Link>
          .
        </p>
        <div className="md:text-center lg:text-left text-sm mt-10 lg:mt-0">
          <Link
            to="#"
            className="bg-black border border-[#B7E5FF] px-8 py-2 rounded-3xl"
          >
            ✦ Try Odin Now
          </Link>
        </div>
        <img
          src="avatar.png"
          className="w-2/6 absolute bottom-0 right-0"
          alt=""
        />
      </div>
    </section>
  );
};

export default IntroSection;
