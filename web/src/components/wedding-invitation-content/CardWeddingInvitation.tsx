import SlideInFromSmall from '../motion/SlideInFromSmall';
import SlideInFromUp from '../motion/SlideInFromUp';
import SlideInFromLeft from '../motion/SliedInFromLeft';

type CardWeddingInvitationProps = {
  brideInitialName: string;
  groomInitialName: string;
  weddingDay: string;
  weddingDate: string;
};

const CardWeddingInvitation = ({
  brideInitialName,
  groomInitialName,
  weddingDay,
  weddingDate,
}: CardWeddingInvitationProps) => {
  return (
    <div className="flex justify-center flex-col items-center pt-[104px] relative">
      <div className="relative w-full">
        <SlideInFromLeft>
          <div className="absolute -left-14 sm:left-7 -top-28 animate-pulse-scale">
            <img
              src="/images/bunga-wedding.png"
              alt="bunga"
              className="w-[72%] h-auto rotate-[158deg]"
            />
          </div>
        </SlideInFromLeft>
      </div>
      <div className="w-[260px] md:w-[300px] lg:w-[420px] h-[407px] border-gold border-2 rounded-[96px] p-[1px]">
        <div className="w-full border-gold border-2 rounded-[96px] h-full flex flex-col items-center justify-between pt-20 pb-14">
          <SlideInFromSmall>
            <p className="font-semibold leading-4 text-center text-white tracking-3_8">
              OUR WEDDING <br /> INVITATION
            </p>
          </SlideInFromSmall>

          <div className="min-h-[170px]">
            <div className="text-[115px] text-gold font-light font-analogue leading-none relative">
              <SlideInFromUp>{brideInitialName}</SlideInFromUp>
              <span className="absolute left-[1px] -bottom-[55%]">{groomInitialName}</span>
            </div>
          </div>

          <SlideInFromSmall>
            <p className="text-white tracking-3_8 text-[10px] items-self-end uppercase">
              {weddingDay}, {weddingDate}
            </p>
          </SlideInFromSmall>
        </div>
      </div>
    </div>
  );
};

export default CardWeddingInvitation;
