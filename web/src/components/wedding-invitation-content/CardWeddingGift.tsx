import { useState } from "react";
import { GiftAccountType } from "@src/configs/giftAccounts";
import { FaCheck, FaCopy, FaGift } from "react-icons/fa6";
import { motion } from "framer-motion";
import SlideInFromSmall from "../motion/SlideInFromSmall";

const CardWeddingGift = ({
  giftAccounts,
}: {
  giftAccounts: GiftAccountType[];
}) => {
  const [giftOpen, setGiftOpen] = useState(false);
  const [cardNumberCopied, setCardNumberCopied] = useState("");

  const toggleGift = () => setGiftOpen((prev) => !prev);

  const copyTextToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(
      () => {
        setCardNumberCopied(text);

        setTimeout(() => {
          setCardNumberCopied("");
        }, 2000);
      },
      (err) => {
        console.error("Failed to copy text: ", err);
      }
    );
  };

  return (
    <div className="mb-7">
      <SlideInFromSmall>
        <div className="w-full h-full p-[1px] bg-white border-2 rounded-full mt-9 border-gold">
          <div className="w-full h-full border-2 rounded-full border-gold">
            <div className="flex flex-col justify-center h-full py-1">
              <h2 className="text-2xl text-center text-gold font-allema">
                Wedding Gift
              </h2>
            </div>
          </div>
        </div>
      </SlideInFromSmall>

      <div className="flex flex-col items-center">
        <div className="mt-6 text-xs text-center text-white">
          <SlideInFromSmall>
            Doa Restu Anda merupakan karunia yang sangat berarti bagi kami.
            Namun jika memberi adalah ungkapan tanda kasih Anda, Anda dapat
            memberi gift
          </SlideInFromSmall>
        </div>

        <SlideInFromSmall>
          <button
            onClick={toggleGift}
            className="flex items-center px-8 py-2 mt-4 text-sm text-white transition-all delay-100 border border-white rounded-md bg-gold hover:border-gold hover:bg-transparent"
          >
            <FaGift className="w-3 h-3" />
            <span className="ms-1">Kirim Gift</span>
          </button>
        </SlideInFromSmall>

        <motion.div
          className="w-full"
          initial={{ scale: 0, opacity: 0 }}
          exit={{ scale: 0, opacity: 0 }}
          animate={{
            scale: giftOpen ? 1 : 0,
            opacity: giftOpen ? 1 : 0,
            display: giftOpen ? "block" : "none",
            transition: {
              duration: 1,
            },
          }} // Muncul dengan ukuran normal dan opasitas penuh
        >
          <div className={`w-full mt-5 h-fit`}>
            <div className="flex flex-col items-center gap-y-5">
              {giftAccounts.map((gift) => {
                return (
                  <div
                    key={gift.accountNumber}
                    className="w-full px-6 py-6 bg-white rounded-lg card_bank max-w-[444px]"
                    style={{
                      backgroundImage: `url(/images/bg-gift-card.png)`,
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                    }}
                  >
                    <div className="w-full max-w-[200px] h-auto mb-5">
                      <img src={gift.accountLogo} alt="bank_logo" />
                    </div>

                    <div className="flex flex-col text-sm text-brown">
                      <span className="font-semibold">{gift.accountName}</span>
                      <span className="font-semibold">
                        {gift.accountNumber}
                      </span>

                      <button
                        onClick={() => copyTextToClipboard(gift.accountNumber)}
                        className="px-5 py-2 mt-4 text-xs text-white border rounded-md bg-brown hover:bg-amber-900 focus:ring-2 focus:bg-amber-900 focus:ring-gold border-brown hover:border-gold w-fit"
                      >
                        <div className="flex items-center">
                          {cardNumberCopied === gift.accountNumber ? (
                            <FaCheck />
                          ) : (
                            <FaCopy />
                          )}
                          <span className="ms-1">Salin Nomor</span>
                        </div>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CardWeddingGift;
