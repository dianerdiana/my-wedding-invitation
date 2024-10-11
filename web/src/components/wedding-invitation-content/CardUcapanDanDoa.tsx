import { FaCircleXmark, FaComments } from 'react-icons/fa6';
import SlideInFromRight from '../motion/SlideInFromRight';
import SlideInFromSmall from '../motion/SlideInFromSmall';
import { useSelector } from 'react-redux';
import { RootState } from '@src/redux/store';
import { Controller, useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { useAppDispatch } from '@src/utils/hooks/useAppDispatch';
import { createReservation, getAllReservations } from '@src/redux/reducer';
import { timeAgo } from '@src/utils/Utils';
import toast from 'react-hot-toast';
import { FaCheckCircle } from 'react-icons/fa';

type ReservationType = {
  id: number;
  name: string;
  message: string;
  attendanceStatus: string;
  createdAt: string;
};

const defaultValues = {
  name: '',
  message: '',
};

const attendanceStatus = [
  {
    label: 'Konfirmasi Kehadiran',
    value: '',
  },
  {
    label: 'Hadir',
    value: 'Hadir',
  },
  {
    label: 'Tidak Bisa Hadir',
    value: 'Tidak Bisa Hadir',
  },
];

const CardUcapanDanDoa = () => {
  // State
  const [selectedAttendance, setSelectedAttendance] = useState('');
  const [loading, setLoading] = useState(false);

  // Hooks
  const dispatch = useAppDispatch();
  const allReservations: ReservationType[] = useSelector(
    (state: RootState) => state.reservation.data
  );

  const { control, handleSubmit, setValue } = useForm({ defaultValues });

  const onChangeAttendance = (value: string) => {
    setSelectedAttendance(value);
  };

  const onSubmit = (data: { name: string; message: string }) => {
    if (selectedAttendance.length) {
      setLoading(true);
      dispatch(
        createReservation({
          name: data.name || 'Anonim',
          message: data.message,
          attendanceStatus: selectedAttendance,
        })
      );

      setValue('name', '');
      setValue('message', '');
      setSelectedAttendance('');
    } else {
      toast.error('Konfirmasi kehadiran wajib diisi.');
    }
  };

  const renderLoading = () => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }

    return 'Terima kasih atas ucapannya';
  };

  useEffect(() => {
    dispatch(getAllReservations());
  }, [dispatch]);
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

      <div className="bg-gray-50 card_shadow mt-9 w-full h-full border-gold border-2 rounded-3xl p-[1px]">
        <div className="w-full h-full border-2 rounded-3xl border-gold">
          <div className="flex flex-col justify-center h-full pt-1">
            <form onSubmit={handleSubmit(onSubmit)} className="px-4 pt-2 pb-6">
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
                <span className="mx-1">{allReservations.length}</span>
                <span>Do'a & Ucapan</span>
              </div>

              <div className="flex flex-col mt-4 gap-y-5">
                <Controller
                  name="name"
                  control={control}
                  render={({ field }) => (
                    <div className="px-2 py-1 bg-white border border-gray-400 rounded-md focus-within:border-gold">
                      <input
                        {...field}
                        type="text"
                        placeholder="Nama"
                        className="w-full text-base bg-transparent outline-none appearance-none text-brown placeholder:text-sm placeholder:text-gray-300"
                      />
                    </div>
                  )}
                />
                <Controller
                  name="message"
                  control={control}
                  render={({ field }) => (
                    <div className="px-2 py-1 bg-white border border-gray-400 rounded-md focus-within:border-gold">
                      <textarea
                        {...field}
                        placeholder="Doa & Ucapan"
                        className="w-full text-base bg-transparent outline-none appearance-none text-brown placeholder:text-sm placeholder:text-gray-300"
                        rows={5}
                        minLength={1}
                      />
                    </div>
                  )}
                />
                <div className="px-2 py-1 bg-white border border-gray-400 rounded-md focus-within:border-gold">
                  <select
                    id="select-attendance"
                    value={selectedAttendance}
                    onChange={(e) => onChangeAttendance(e.target.value)}
                    className="w-full px-2 text-base bg-transparent outline-none appearance-none text-brown placeholder:text-sm placeholder:text-gray-300"
                  >
                    {attendanceStatus.map((status) => (
                      <option value={status.value} key={status.value}>
                        {status.label}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  type="submit"
                  className="px-8 py-2 text-sm text-white rounded-md bg-gold w-fit"
                >
                  Kirim
                </button>
              </div>
            </form>

            <div className="py-2 min-h-6">
              {loading && <p className="text-center text-green-500">{renderLoading()}.</p>}
            </div>
            <div className="text-white rounded-b-3xl bg-gold">
              {allReservations.map((res) => (
                <div
                  key={res.id}
                  className="flex flex-row px-4 py-2 pb-5 border-b border-b-white gap-x-3"
                >
                  <div className="text-white">
                    <div className="w-10 p-2 text-center rounded-full bg-amber-900">
                      <span className="uppercase">{res.name[0]}</span>
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="flex items-center justify-between w-full pt-2">
                      <div className="flex items-center">
                        <h2 className="inline-block text-sm w-fit">{res.name}</h2>
                        <span className="flex items-center px-1 py-[1px] bg-black rounded-sm ms-2">
                          {res.attendanceStatus === 'Hadir' ? (
                            <FaCheckCircle className="w-3 h-3" />
                          ) : (
                            <FaCircleXmark className="w-3 h-3" />
                          )}
                          <span className="text-xs ms-1">{res.attendanceStatus}</span>
                        </span>
                      </div>
                      <span className="text-[10px]">{timeAgo(res.createdAt)}</span>
                    </div>
                    <p className="mt-2 text-xs">{res.message}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardUcapanDanDoa;
