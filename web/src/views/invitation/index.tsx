import ModalInvitation from "./ModalInvitation";
import WeddingInvitationContent from "@src/components/wedding-invitation-content";
import { HiSpeakerWave, HiSpeakerXMark } from "react-icons/hi2";
import { useAudio } from "@utils/hooks/useAudio";

const Invitation = () => {
  const { play, pause, isPlaying } = useAudio();

  return (
    <>
      <div className="fixed bottom-0 p-1 start-0">
        <button
          onClick={() => {
            return isPlaying ? pause() : play();
          }}
          className="p-2 rounded-full focus:ring-1 focus:ring-gold text-gold hover:text-white hover:bg-gold w-fit"
        >
          {isPlaying ? <HiSpeakerWave /> : <HiSpeakerXMark />}
        </button>
      </div>
      <ModalInvitation />
      <WeddingInvitationContent />
    </>
  );
};

export default Invitation;
