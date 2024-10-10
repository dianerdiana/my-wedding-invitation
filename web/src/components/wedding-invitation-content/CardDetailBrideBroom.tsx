import SlideInFromRight from '@components/motion/SlideInFromRight';
import SlideInFromSmall from '../motion/SlideInFromSmall';

type CardDetailBrideBroomProps = {
  brideFullName: string;
  brideFatherName: string;
  brideMotherName: string;
  groomFullName: string;
  brideAddress: string;
  groomFatherName: string;
  groomMotherName: string;
  groomAddress: string;
};

const CardDetailBrideBroom = ({
  brideFullName,
  brideFatherName,
  brideMotherName,
  brideAddress,
  groomFullName,
  groomFatherName,
  groomMotherName,
  groomAddress,
}: CardDetailBrideBroomProps) => {
  return (
    <div>
      <div className="relative w-full">
        <SlideInFromRight>
          <div className="absolute top-0 -end-7 md:-end-14 lg:-end-28 animate-pulse-scale w-[72%] flex justify-end items-center h-full">
            <img
              src="/images/bunga-wedding.png"
              alt="bunga"
              className="w-[59%] h-auto rotate-[136deg]"
            />
          </div>
        </SlideInFromRight>
      </div>
      <div className="bg-white card_shadow mt-9 w-full h-full border-gold border-2 rounded-[63px] p-[1px]">
        <div className="w-full border-gold border-2 rounded-[63px] h-full">
          <div className="flex flex-col justify-center h-full px-8 py-5 gap-y-5 min-h-[430px]">
            <SlideInFromSmall>
              <h1 className="text-4xl text-center font-analogue text-gold">{brideFullName}</h1>
            </SlideInFromSmall>
            <div className="text-xs leading-6 text-center">
              <div>
                <SlideInFromSmall>Putri Dari:</SlideInFromSmall>
                <SlideInFromSmall>
                  Bapak {brideFatherName} & Ibu {brideMotherName} <br />({brideAddress})
                </SlideInFromSmall>
              </div>
            </div>
            <span className="py-3 text-6xl text-center text-gold font-gendis">
              <SlideInFromSmall>&</SlideInFromSmall>
            </span>
            <SlideInFromSmall>
              <h1 className="text-4xl text-center font-analogue text-gold">{groomFullName}</h1>
            </SlideInFromSmall>
            <div className="text-xs leading-6 text-center">
              <div>
                <SlideInFromSmall>Putra Dari:</SlideInFromSmall>
                <SlideInFromSmall>
                  Bapak {groomFatherName} & Ibu {groomMotherName} <br />({groomAddress})
                </SlideInFromSmall>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetailBrideBroom;
