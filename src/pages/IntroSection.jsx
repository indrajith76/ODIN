import { Link } from "react-router-dom";

const IntroSection = () => {
  return (
    <section className="secondBG bgStyle flex flex-col justify-center relative" id="introSection">
      <div className="pl-[50px] mt-16">
        <h2 className="font-medium text-left text-3xl leading-[45px]">
          Introducing Odin.
        </h2>
        <p className="text-sm my-7">
          Odin is an intelligent position manager bot for decentralized crypto
          trading.
        </p>
        <p className="text-sm my-7">
          Odin can take into account key levels of support and resistance,
          volume &amp; money flow, <br />
          and available liquidity to scale in/out of positions on a
          trader&apos;s behalf.
        </p>
        <p className="text-sm my-7">
          Some key features include scaling in and out of positions based on set
          parameters, <br />
          alerts about whales, early holder activity, money flow, and overall
          token health,
          <br />
          shadow trading, and PNL analysis.
        </p>
        <p className="text-sm my-7">
          Our telegram based trading bot is 100% free to use, with some premium
          features <br />
          unlockable with our token $ODIN.
        </p>
        <p className="text-sm my-7">
          Learn more about Odin and its v1 capabilities in our{" "}
          <Link to="" className="underline">
            Documentation
          </Link>
          .
        </p>
        <div className="text-left text-sm">
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
