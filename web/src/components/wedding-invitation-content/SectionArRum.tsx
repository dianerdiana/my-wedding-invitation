import SlideInFromRight from "../motion/SlideInFromRight";
import SlideInFromSmall from "../motion/SlideInFromSmall";
import SlideInFromLeft from "../motion/SliedInFromLeft";

const SectionArRum = () => {
  return (
    <div>
      <div className="relative w-full h-8 md:h-16 lg:h-32">
        <SlideInFromRight>
          <div className="absolute top-0 -end-16 animate-pulse-scale w-[72%] flex justify-end items-center h-full">
            <img
              src="/images/bunga-wedding.png"
              alt="bunga"
              className="w-[63%] h-auto rotate-[126deg]"
            />
          </div>
        </SlideInFromRight>
      </div>
      <div className="px-4 py-5 text-xs text-center text-white lg:px-10">
        <SlideInFromSmall>
          <p>
            "Dan di antara tanda-tanda kekuasaan-Nya diciptakan-Nya untukmu
            pasangan hidup dari jenismu sendiri supaya kamu dapat ketenangan
            hati dan dijadikannya kasih sayang di antara kamu. Sesungguhnya yang
            demikian menjadi tanda-tanda kebesaran-Nya bagi orang-orang yang
            berpikir."
          </p>
        </SlideInFromSmall>

        <SlideInFromSmall>
          <p className="mt-5 text-base font-semibold">Q.S Ar - Rum 21</p>
        </SlideInFromSmall>
      </div>
      <div className="relative w-full md:h-8 lg:h-16">
        <SlideInFromLeft>
          <div className="absolute top-0 -start-16 lg:-start-28 animate-pulse-scale w-[72%] flex justify-start items-center h-full">
            <img
              src="/images/bunga-wedding.png"
              alt="bunga"
              className="w-[63%] h-auto rotate-[159deg]"
            />
          </div>
        </SlideInFromLeft>
      </div>
    </div>
  );
};

export default SectionArRum;
