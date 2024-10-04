type WeddingConfig = {
  groomFullName: string; // Mempelai Pria
  brideFullName: string; // Mempelai wanita
  groomShortName: string;
  brideShortName: string;
  groomInitialName: string;
  brideInitialName: string;
  groomMotherName: string;
  brideMotherName: string;
  groomFatherName: string;
  brideFatherName: string;
  weddingDate: Date;
  akadTime: string;
  resepsiTime: string;
  weddingAddress: string;
  weddingMapLink: string;
};

export const weddingConfig: WeddingConfig = {
  groomFullName: "Dian Erdiana",
  groomShortName: "Dian",
  brideFullName: "Dede Delisa",
  brideShortName: "Delisa",
  groomInitialName: "D",
  brideInitialName: "D",
  groomFatherName: "Sutarwan",
  groomMotherName: "Maemunah",
  brideFatherName: "Diding Suhadi (Alm.)",
  brideMotherName: "Illah Susilah",
  weddingDate: new Date("2024-10-19 08:00:00"),
  akadTime: "08:00 WIB",
  resepsiTime: "09:00 WIB ~ Selesai",
  // prettier-ignore
  weddingAddress: "Dusun 5 Rt.01 Rw.10 Desa Sukaraja Wetan Kec.Jatiwangi Kab.Majalengka",
  weddingMapLink: "https://maps.app.goo.gl/a2bQhneyEDtxGAqR7",
};
