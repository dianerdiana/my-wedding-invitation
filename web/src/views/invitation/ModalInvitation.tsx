import { useEffect, useState } from "react";
import { FiMail } from "react-icons/fi";
import { useAudio } from "@utils/hooks/useAudio";

type ModalInvitationProps = {
  to: string;
  groomShortName: string;
  brideShortName: string;
};

const ModalInvitation = ({
  to,
  groomShortName,
  brideShortName,
}: ModalInvitationProps) => {
  const { play } = useAudio();
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    play();
    setIsVisible(false);
  };

  useEffect(() => {
    if (isVisible) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Cleanup ketika komponen di-unmount
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isVisible]);
  return (
    <div
      className={`fixed w-screen h-screen top-0 left-0 z-50 bg-black flex items-center justify-center text-white transition-transform duration-1000 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex flex-col items-center justify-center h-full gap-8">
        <h1 className="text-xs font-semibold text-white uppercase font-analogue tracking-3_8 md:text-sm lg:text-base">
          Our Wedding Invitation
        </h1>
        <h2 className="text-6xl sm:text-7xl font-lucian text-gold md:text-8xl">
          {brideShortName} & {groomShortName}
        </h2>
        <div className="flex flex-col items-center gap-3">
          <p className="text-[10px] text-white text-center md:text-sm font-semibold font-trebuc tracking-3_8">
            Kepada Yth Bpk/Ibu/Sdr/i
          </p>
          <span className="font-semibold text-gold">{to}</span>
        </div>
        <button
          onClick={handleClose}
          className="flex items-center px-12 py-2 text-sm text-white border border-white rounded-md animate-pulse-scale bg-gold"
        >
          <FiMail />
          <span className="ms-1">Buka Undangan</span>
        </button>
        <span className="text-xs font-light text-center text-white">
          Mohon maaf apabila ada kesalahan penulisan nama/gelar
        </span>
      </div>
    </div>
  );
};

export default ModalInvitation;
