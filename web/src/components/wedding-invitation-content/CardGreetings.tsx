import SlideInFromSmall from "../motion/SlideInFromSmall";

const CardGreetings = () => {
  return (
    <SlideInFromSmall>
      <div className="bg-white card_shadow mt-9 w-full h-full border-gold border-2 rounded-[63px] p-[1px] min-h-[166px]">
        <div className="w-full border-gold border-2 rounded-[63px] min-h-[166px] h-full">
          <div className="px-8 py-5">
            <SlideInFromSmall>
              <h2 className="text-[34px] font-allema allema_text_shadow text-gold mb-5 text-center">
                Bride & Groom
              </h2>
            </SlideInFromSmall>
            <SlideInFromSmall>
              <p className="text-xs text-center text-[#050505] leading-5 tracking-normal">
                Tanpa mengurangi rasa hormat, kami bermaksud mengundang
                Bapak/Ibu/Saudara/I untuk menghadiri acara pernikahan kami :
              </p>
            </SlideInFromSmall>
          </div>
        </div>
      </div>
    </SlideInFromSmall>
  );
};

export default CardGreetings;
