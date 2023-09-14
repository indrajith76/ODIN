import { Link } from "react-router-dom";


const FAQSection = () => {
    return (
        <section
        className="fourthBG flex flex-col justify-center relative"
        id="introSection"
      >
        <div className="">
          <h2 className="font-medium text-center text-3xl leading-[45px] mb-5 mt-20">
            FAQ
          </h2>
          <div className="w-[60%] mx-auto p-1 bg-gradient-to-r from-[#B7E5FF] to-[black] rounded-[15px]">
            <div className="bg-black rounded-[15px] p-5">
              <div className="border-b border-[#d9d9d94d] flex pb-5">
                <p className="w-[40%] text-sm">Is Odin another sniper?</p>
                <p className="w-[60%] text-xs leading-[20px]">
                  Odin is the first Layer 2 Telegram Trading Bot. It works
                  alongside your favorite snipers like Maestro or Unibot.
                  <br />
                  <br />
                  It does not aim to compete with other snipers on the market,
                  but instead aims to be the missing piece that will supercharge
                  and automate your trading.
                </p>
              </div>
              <div className="border-b border-[#d9d9d94d] flex py-5">
                <p className="w-[40%] text-sm">Why does $ODIN exist?</p>
                <p className="w-[60%] text-xs leading-[20px]">
                  The $ODIN token represents our project. It will be used for
                  onchain governance, revenue share, and to unlock premium
                  features with our bot. The token allows the team to continue
                  development and deliver world class products/services at
                  affordable rates.
                </p>
              </div>
              <div className="flex py-5">
                <p className="w-[40%] text-sm">
                  Did Odin have a presale or ICO?
                </p>
                <p className="w-[60%] text-xs leading-[20px]">
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
          <div className="flex justify-center gap-10 mt-5">
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