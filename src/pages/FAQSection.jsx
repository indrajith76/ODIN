import { Link } from "react-router-dom";


const FAQSection = () => {
    return (
        <section
        className="fourthBG h-full md:h-[110vh] flex flex-col justify-center relative"
        id="introSection"
      >
        <div className="">
          <h2 className="font-medium text-center text-3xl leading-[45px] mb-5 mt-24 lg:mt-20">
            FAQ
          </h2>
          <div className="lg:w-[50%] mx-auto p-1 bg-transparent lg:bg-gradient-to-r from-[#B7E5FF] to-[black] rounded-[15px]">
            <div className="lg:bg-black rounded-[15px] p-10">
              <div className="border-b border-[#d9d9d94d] flex flex-col lg:flex-row pb-7">
                <p className=" lg:w-[40%] text-sm mb-4 lg:mb-0">Is Odin another sniper?</p>
                <p className=" lg:w-[60%] text-xs leading-[20px]">
                  Odin is the first Layer 2 Telegram Trading Bot. It works
                  alongside your favorite snipers like Maestro or Unibot.
                  <br />
                  <br />
                  It does not aim to compete with other snipers on the market,
                  but instead aims to be the missing piece that will supercharge
                  and automate your trading.
                </p>
              </div>
              <div className="border-b border-[#d9d9d94d] flex flex-col lg:flex-row py-7">
                <p className="lg:w-[40%] text-sm mb-4 lg:mb-0">Why does $ODIN exist?</p>
                <p className="lg:w-[60%] text-xs leading-[20px]">
                  The $ODIN token represents our project. It will be used for
                  onchain governance, revenue share, and to unlock premium
                  features with our bot. The token allows the team to continue
                  development and deliver world class products/services at
                  affordable rates.
                </p>
              </div>
              <div className="flex flex-col lg:flex-row py-7">
                <p className="lg:w-[40%] text-sm mb-4 lg:mb-0">
                  Did Odin have a presale or ICO?
                </p>
                <p className="lg:w-[60%] text-xs leading-[20px]">
                  The Odin token has been fairlaunched.
                  <br />
                  No tokens were sold to/allocated for private investors or VCs
                  prior to launch.
                  <br />
                  <br />
                  The team has reserved 5% of the token supply.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-10 mb-10 lg:mb-0 lg:mt-10">
            <button className="px-8 bg-black text-white border text-sm font-medium py-2 rounded-3xl font">
              <Link to="#">✦ Try Odin Now</Link>
            </button>
            <button className="px-8 bg-[#B7E5FF] text-black text-sm font-medium py-2 rounded-3xl font">
              <Link to="#">Buy $ODIN</Link>
            </button>
          </div>
        </div>
      </section>
    );
};

export default FAQSection;