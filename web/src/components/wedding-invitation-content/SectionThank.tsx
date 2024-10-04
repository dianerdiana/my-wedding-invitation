import SlideInFromRight from "../motion/SlideInFromRight";

type SectionThankProps = {
  brideShortName: string;
  groomShortName: string;
};

const SectionThank = ({
  brideShortName,
  groomShortName,
}: SectionThankProps) => {
  return (
    <div>
      <div className="relative w-full">
        <SlideInFromRight>
          <div className="absolute top-0 -end-28 md:-end-36 lg:-end-48 animate-pulse-scale w-[72%] flex justify-end items-center h-full">
            <img
              src="/images/bunga-wedding.png"
              alt="bunga"
              className="w-[92%] h-auto rotate-[136deg]"
            />
          </div>
        </SlideInFromRight>
      </div>
      <h2 className="text-center font-cinzel text-[28px] text-gold">
        TERIMA KASIH
      </h2>
      <p className="py-4 text-xs text-center text-gold">
        Merupakan suatu kehormatan dan kebahagiaan bagi kami, apabila
        Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu. Atas
        kehadiran dan doa restunya, kami mengucapkan terima kasih.
      </p>

      <div className="flex justify-center mb-5 gap-x-6">
        <hr className="block w-2/6 text-white" />
        <hr className="block w-2/6 text-white" />
      </div>

      <h2 className="text-center font-trebuc text-gold">
        KAMI YANG BERBAHAGIA
      </h2>
      <h2 className="mt-5 text-6xl text-center text-gold font-stalemate">
        {brideShortName} & {groomShortName}
      </h2>
    </div>
  );
};

export default SectionThank;
