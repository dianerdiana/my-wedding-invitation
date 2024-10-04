import { FaMapMarkerAlt } from "react-icons/fa";
import { FaMapPin } from "react-icons/fa6";
import SlideInFromRight from "../motion/SlideInFromRight";
import SlideInFromSmall from "../motion/SlideInFromSmall";

type CardResepsiProps = {
  resepsiTime: string;
  weddingDay: string;
  weddingDate: string;
  weddingAddress: string;
  weddingMapLink: string;
};

const CardResepsi = ({
  resepsiTime,
  weddingDay,
  weddingDate,
  weddingAddress,
  weddingMapLink,
}: CardResepsiProps) => {
  return (
    <div>
      <div className="relative w-full">
        <SlideInFromRight>
          <div className="absolute -top-5 md:-bottom-7 lg:-bottom-14 -end-16 animate-pulse-scale w-[72%] flex justify-end items-center h-full">
            <img
              src="/images/bunga-wedding.png"
              alt="bunga"
              className="w-[63%] h-auto rotate-[126deg]"
            />
          </div>
        </SlideInFromRight>
      </div>
      <div className="bg-white card_shadow mt-9 w-full h-full border-gold border-2 rounded-[63px] p-[1px]">
        <div className="w-full border-gold border-2 rounded-[63px] h-full">
          <div className="flex flex-col justify-center h-full px-8 py-5 gap-y-5 min-h-[360px]">
            <span className="text-[34px] font-allema allema_text_shadow text-center mt-10">
              <SlideInFromSmall>Resepsi</SlideInFromSmall>
            </span>

            <div className="flex flex-col items-center gap-1 text-sm">
              <SlideInFromSmall>
                <b>{weddingDay}</b>
              </SlideInFromSmall>
              <SlideInFromSmall>
                <span>{weddingDate}</span>
              </SlideInFromSmall>
              <SlideInFromSmall>
                <span>Pukul: {resepsiTime}</span>
              </SlideInFromSmall>
            </div>

            <div className="flex flex-col items-center gap-1 text-sm text-center">
              <SlideInFromSmall>
                <FaMapPin className=" text-gold w-[18px] h-[18px]" />
              </SlideInFromSmall>

              <SlideInFromSmall>
                <b className="leading-[22px]">Kediaman Mempelai Wanita</b>
              </SlideInFromSmall>

              <SlideInFromSmall>
                <span>{weddingAddress}</span>
              </SlideInFromSmall>

              <SlideInFromSmall>
                <a
                  target="_blank"
                  href={weddingMapLink}
                  className="flex items-center px-4 py-2 mt-5 text-xs rounded-lg bg-gold"
                >
                  <FaMapMarkerAlt className="text-white" />
                  <span className="font-semibold text-white ms-2">
                    Petunjuk Arah
                  </span>
                </a>
              </SlideInFromSmall>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardResepsi;
