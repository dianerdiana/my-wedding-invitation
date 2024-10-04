import { weddingConfig } from "@src/configs/weddingConfig";
import { giftAccounts } from "@src/configs/giftAccounts";

import CardGreetings from "./CardGreetings";
import CardCountDate from "./CardCountDate";
import CardWeddingInvitation from "./CardWeddingInvitation";
import CardShortName from "./CardShortName";
import CardDetailBrideBroom from "./CardDetailBrideBroom";

import SectionArRum from "./SectionArRum";
import CardWeddingEvent from "./CardWeddingEvent";
import CardResepsi from "./CardResepsi";
import CardUcapanDanDoa from "./CardUcapanDanDoa";
import CardWeddingGift from "./CardWeddingGift";
import SectionThank from "./SectionThank";

import { getDayName, getFormatWeddingDate } from "@utils/Utils";

const WeddingInvitationContent = () => {
  const {
    akadTime,
    brideFatherName,
    brideFullName,
    brideInitialName,
    brideMotherName,
    brideShortName,
    groomFatherName,
    groomFullName,
    groomInitialName,
    groomMotherName,
    groomShortName,
    resepsiTime,
    weddingAddress,
    weddingDate: rawWeddingDate,
    weddingMapLink,
  } = weddingConfig;

  const weddingDay = getDayName(rawWeddingDate);
  const weddingDate = getFormatWeddingDate(rawWeddingDate);

  return (
    <>
      <CardWeddingInvitation
        brideInitialName={brideInitialName}
        groomInitialName={groomInitialName}
        weddingDay={weddingDay}
        weddingDate={weddingDate}
      />

      <CardShortName
        groomShortName={groomShortName}
        brideShortName={brideShortName}
        weddingDate={weddingDate}
        weddingDay={weddingDay}
      />

      <CardCountDate
        groomInitialName={groomInitialName}
        brideInitialName={brideInitialName}
        rawWeddingDate={rawWeddingDate}
      />

      <CardGreetings />

      <CardDetailBrideBroom
        brideFullName={brideFullName}
        brideFatherName={brideFatherName}
        brideMotherName={brideMotherName}
        groomFullName={groomFullName}
        groomFatherName={groomFatherName}
        groomMotherName={groomMotherName}
      />

      <SectionArRum />

      <CardWeddingEvent
        akadTime={akadTime}
        weddingDay={weddingDay}
        weddingDate={weddingDate}
        weddingAddress={weddingAddress}
        weddingMapLink={weddingMapLink}
      />

      <CardResepsi
        resepsiTime={resepsiTime}
        weddingDay={weddingDay}
        weddingDate={weddingDate}
        weddingAddress={weddingAddress}
        weddingMapLink={weddingMapLink}
      />

      <CardUcapanDanDoa />

      <CardWeddingGift giftAccounts={giftAccounts} />

      <SectionThank
        brideShortName={brideShortName}
        groomShortName={groomShortName}
      />
    </>
  );
};

export default WeddingInvitationContent;
