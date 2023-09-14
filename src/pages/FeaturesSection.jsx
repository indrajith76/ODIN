

const FeaturesSection = () => {
    return (
        <section
        className="thirdBG flex flex-col justify-center relative"
        id="introSection"
      >
        <div className="">
          <h2 className="font-medium text-center text-3xl leading-[45px] mb-8 mt-16">
            TRADE LIKE NEVER BEFORE.
          </h2>
          <div className="w-[70%] mx-auto">
            <div className="flex gap-5">
              <div className="w-[65%] border border-[#B7E5FF] bg-[#00000026] pt-10 pl-5 pb-5 rounded-xl">
                <h3 className="font-medium text-left text-2xl leading-[45px]">
                  Scale In and Out
                </h3>
                <p className="font-medium text-left text-xs leading-[19px]">
                  Buy and sell at specific price points and manage your trade.
                  Set and forget.
                </p>
              </div>
              <div className="w-[35%] border border-[#B7E5FF] bg-[#00000026] pt-10 pl-5 pb-5 rounded-xl">
                <h3 className="font-medium text-left text-2xl leading-[45px]">
                  Alerts
                </h3>
                <p className="font-medium text-left text-xs leading-[19px]">
                  View key alerts on money flow, volume, etc.
                </p>
              </div>
            </div>

            <div className="flex gap-8 mt-5">
              <div className="w-[35%] border border-[#B7E5FF] bg-[#00000026] pt-10 pl-5 pb-5 rounded-xl flex flex-col justify-end">
                <h3 className="font-medium text-left text-2xl leading-[45px]">
                  Multi-Wallet
                </h3>
                <p className="font-medium text-left text-xs leading-[19px]">
                  Dominate the market with multiple wallets.
                </p>
              </div>

              <div className="w-[65%]">
                <div className="border border-[#B7E5FF] bg-[#00000026] pt-10 pl-5 pb-5 rounded-xl">
                  <h3 className="font-medium text-left text-2xl leading-[45px]">
                    Shadow Trade
                  </h3>
                  <p className="font-medium text-left text-xs leading-[19px]">
                    Buy/sell into other orders to mitigate price impact and
                    achieve the best prices.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-5 mt-5">
                  <div className="border border-[#B7E5FF] bg-[#00000026] pt-10 pl-5 pb-5 rounded-xl">
                    <h3 className="font-medium text-left text-2xl leading-[45px]">
                      PNL Analysis
                    </h3>
                    <p className="font-medium text-left text-xs leading-[19px]">
                      Track your profitability.
                    </p>
                  </div>
                  <div className="border border-[#B7E5FF] bg-[#00000026] pt-10 pl-5 pb-5 rounded-xl">
                    <h3 className="font-medium text-left text-2xl leading-[45px]">
                      Market-Making
                    </h3>
                    <p className="font-medium text-left text-xs leading-[19px]">
                      Create an ideal chart.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default FeaturesSection;