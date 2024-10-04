import { FaComments } from "react-icons/fa6";
import SlideInFromRight from "../motion/SlideInFromRight";
import SlideInFromSmall from "../motion/SlideInFromSmall";

const CardUcapanDanDoa = () => {
  return (
    <div>
      <SlideInFromSmall>
        <div className="bg-white card_shadow mt-9 w-full h-full border-gold border-2 rounded-full p-[1px]">
          <div className="w-full h-full border-2 rounded-full border-gold">
            <div className="flex flex-col justify-center h-full py-1">
              <h2 className="text-2xl text-center text-gold font-allema">
                <span>Do'a</span>
                <span className="ms-4 me-2">&</span>
                <span>Ucapan</span>
              </h2>
            </div>
          </div>
        </div>
      </SlideInFromSmall>

      <SlideInFromSmall>
        <div className="bg-gray-50 card_shadow mt-9 w-full h-full border-gold border-2 rounded-3xl p-[1px]">
          <div className="w-full h-full border-2 rounded-3xl border-gold">
            <div className="flex flex-col justify-center h-full py-1">
              <form action="#" className="px-4 pt-2 pb-6">
                <div className="relative w-full">
                  <SlideInFromRight>
                    <div className="absolute -bottom-36 -end-16 animate-pulse-scale w-[72%] flex justify-end items-center h-full">
                      <img
                        src="/images/bunga-wedding.png"
                        alt="bunga"
                        className="w-[63%] h-auto rotate-[126deg]"
                      />
                    </div>
                  </SlideInFromRight>
                </div>
                <div className="flex items-center pb-2 text-sm font-semibold border-b border-gray-400 text-brown">
                  <FaComments />
                  <span className="mx-1">0</span>
                  <span>Do'a & Ucapan</span>
                </div>

                <div className="flex flex-col mt-4 gap-y-5">
                  <div className="px-2 py-1 bg-white border border-gray-400 rounded-md focus-within:border-gold">
                    <input
                      type="text"
                      placeholder="Nama"
                      className="w-full text-sm bg-transparent outline-none appearance-none text-brown placeholder:text-sm placeholder:text-gray-300"
                    />
                  </div>
                  <div className="px-2 py-1 bg-white border border-gray-400 rounded-md focus-within:border-gold">
                    <textarea
                      placeholder="Doa & Ucapan"
                      className="w-full text-sm bg-transparent outline-none appearance-none text-brown placeholder:text-sm placeholder:text-gray-300"
                      rows={5}
                    />
                  </div>
                  <div className="px-2 py-1 bg-white border border-gray-400 rounded-md focus-within:border-gold">
                    <select className="w-full px-2 text-sm bg-transparent outline-none appearance-none text-brown placeholder:text-sm placeholder:text-gray-300">
                      <option value="-">Konfirmasi Kehadiran</option>
                      <option value="Hadir">Hadir</option>
                      <option value="Tidak Hadir">Tidak Hadir</option>
                    </select>
                  </div>

                  <button className="px-8 py-2 text-sm text-white rounded-md bg-gold w-fit">
                    Kirim
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </SlideInFromSmall>
    </div>
  );
};

export default CardUcapanDanDoa;
