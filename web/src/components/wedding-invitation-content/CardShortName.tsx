import SlideInFromSmall from "../motion/SlideInFromSmall";

type CardShortNameProps = {
  groomShortName: string;
  brideShortName: string;
  weddingDay: string;
  weddingDate: string;
};

const CardShortName = ({
  weddingDay,
  weddingDate,
  groomShortName,
  brideShortName,
}: CardShortNameProps) => {
  return (
    <div className="mt-12">
      <SlideInFromSmall>
        <h2 className="font-semibold text-center text-white uppercase tracking-3_8">
          The Wedding Of
        </h2>
      </SlideInFromSmall>
      <SlideInFromSmall>
        <h2 className="mt-5 text-6xl text-center text-gold font-stalemate">
          {brideShortName} & {groomShortName}
        </h2>
      </SlideInFromSmall>
      <SlideInFromSmall>
        <p className="mt-2 text-center text-white uppercase tracking-3_8">
          {weddingDay}, {weddingDate}
        </p>
      </SlideInFromSmall>
    </div>
  );
};

export default CardShortName;
