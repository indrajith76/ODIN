
import { Link } from 'react-router-dom';

const FAQLastSection = () => {
    return (
        <section className="fifthBg flex flex-col justify-center relative overflow-hidden">
        <h2 className="text-3xl text-center font-medium leading-10">
          TRADE WITH ODIN, THE ALLFATHER.
        </h2>
        <div className="flex justify-center gap-10 mt-5">
          <button className="px-8 bg-black text-white border text-sm font-medium py-2 rounded-3xl font">
            <Link to="#">✦ Try Odin Now</Link>
          </button>
          <button className="px-8 bg-[#B7E5FF] text-black text-sm font-medium py-2 rounded-3xl font">
            <Link to="#">Buy $ODIN</Link>
          </button>
        </div>

        <div className="bg-black absolute bottom-0 px-10 pt-8 pb-5 w-screen flex justify-between border-t border-[#B7E5FF]">
          <div>
            <h2 className="text-xl leading-[30px]">ODIN ✦</h2>
            <div className="grid grid-cols-2 gap-3 text-xs mt-4">
              <Link>Introduction</Link>
              <Link>Chart</Link>
              <Link>Features</Link>
              <Link>Contract</Link>
              <Link>FAQ</Link>
              <Link>Liquidity</Link>
            </div>
          </div>
          <div>
            <p className="text-[#6B6B6B] text-xs text-right leading-4">
              Odin is the first Layer 2 telegram bot that aims to <br />
              help traders achieve the best entry/exit prices <br />
              while mitigating price impact.
              <br />
              <br />
              Manage your positions{" "}
              <span className="text-white">just like smart money.</span>
            </p>
            <p className="text-xs text-right mt-5">© 2023 OdinBot</p>
          </div>
        </div>
      </section>
    );
};

export default FAQLastSection;