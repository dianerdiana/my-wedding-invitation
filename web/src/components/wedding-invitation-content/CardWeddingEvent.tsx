import { FaMapMarkerAlt } from "react-icons/fa";
import { FaMapPin } from "react-icons/fa6";
import SlideInFromSmall from "../motion/SlideInFromSmall";

type CardWeddingEventProps = {
  akadTime: string;
  weddingDay: string;
  weddingDate: string;
  weddingAddress: string;
  weddingMapLink: string;
};

const CardWeddingEvent = ({
  akadTime,
  weddingDay,
  weddingDate,
  weddingAddress,
  weddingMapLink,
}: CardWeddingEventProps) => {
  return (
    <div className="bg-white card_shadow mt-9 w-full h-full border-gold border-2 rounded-[63px] p-[1px]">
      <div className="w-full border-gold border-2 rounded-[63px] h-full">
        <div className="flex flex-col justify-center h-full px-8 py-5 gap-y-5 min-h-[540px]">
          <span className="text-[34px] font-allema allema_text_shadow text-gold mb-5 text-center">
            <SlideInFromSmall>Wedding Event</SlideInFromSmall>
          </span>

          <span className="text-[34px] font-lucian allema_text_shadow mb-5 text-center">
            <SlideInFromSmall>Akad Nikah</SlideInFromSmall>
          </span>

          <div className="flex flex-col items-center gap-1 text-sm">
            <SlideInFromSmall>
              <b>{weddingDay}</b>
            </SlideInFromSmall>
            <SlideInFromSmall>
              <span>{weddingDate}</span>
            </SlideInFromSmall>
            <SlideInFromSmall>
              <span>Pukul: {akadTime}</span>
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
  );
};

export default CardWeddingEvent;
