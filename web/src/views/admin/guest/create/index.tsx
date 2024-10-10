import { createGuestList } from '@src/redux/reducer';
import { useAppDispatch } from '@src/utils/hooks/useAppDispatch';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { FcContacts, FcLink, FcManager, FcSurvey } from 'react-icons/fc';
import { useEffect, useState } from 'react';
import { invitationText } from './invitationTexts';

import toast from 'react-hot-toast';

const defaultValues = {
  guestList: '',
  invitationText: '',
};

const LINK_UNDANGAN = 'linkUndangan';
const YANG_MENGUNDANG = 'yangMengundang';

const CreateGuestList = () => {
  const storageYangMengundang = localStorage.getItem(YANG_MENGUNDANG);
  const storageLinkUndangan = localStorage.getItem(LINK_UNDANGAN);
  const defaultLinkUndangan = 'https://dianerdiana.com?to=';

  // State
  const [linkUndangan, setLinkUndangan] = useState(storageLinkUndangan || defaultLinkUndangan);
  const [yangMengundang, setYangMengundang] = useState(storageYangMengundang || '');
  const [formatPengantar, setFormatPengantar] = useState(invitationText[0].name);
  const [isiTextPengantar, setIsiTextPengantar] = useState(invitationText[0].text);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { control, handleSubmit, setValue } = useForm({ defaultValues });

  const onSubmit = (data: any) => {
    const guestLists: string[] = data.guestList.split('\n');
    const inputData = guestLists.map((gl) => {
      const linkNamaTamu = encodeURIComponent(gl);
      const isiPengantarBerdasarkanNama = String(data.invitationText)
        .replace(/\[nama\]/g, gl)
        .replace(/\[link-undangan\]/g, linkUndangan + linkNamaTamu)
        .replace(/\[mempelai\]/g, yangMengundang);

      return {
        name: gl,
        invitationText: isiPengantarBerdasarkanNama,
      };
    });

    dispatch(createGuestList(inputData)).then(({ payload }) => {
      if (payload.error) {
        toast.error(payload.message);
      } else {
        navigate('/admin/guests');
      }
    });
  };

  const onChangeLinkUndangan = (value: string) => {
    localStorage.setItem(LINK_UNDANGAN, value);
    setLinkUndangan(value);
  };

  const onChangeYangMengundang = (value: string) => {
    localStorage.setItem(YANG_MENGUNDANG, value);
    setYangMengundang(value);
  };

  const onChangeFormatPengantar = (value: string) => {
    const pengantar = invitationText.find((invText) => invText.name === value);

    if (pengantar) {
      setFormatPengantar(pengantar.name);
      setIsiTextPengantar(pengantar.text);
    }
  };

  useEffect(() => {
    setValue('invitationText', isiTextPengantar);
  }, [setValue, isiTextPengantar]);

  return (
    <section className="flex items-center w-full justify-items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full px-4 py-10 space-y-4 bg-white rounded-md"
      >
        <h2 className="text-3xl text-center">Buat Daftar Tamu</h2>
        <div>
          <label htmlFor="link-undangan" className="flex items-center mb-2">
            <FcLink className="w-5 h-5" />
            <span className="ms-1">Link Undangan</span>
          </label>
          <div className="p-2 bg-white border border-gray-400 rounded-md focus-within:border-gold">
            <input
              name="link-undangan"
              type="text"
              defaultValue={linkUndangan}
              onChange={(e) => onChangeLinkUndangan(e.target.value)}
              className="w-full text-sm bg-transparent outline-none appearance-none text-brown placeholder:text-sm placeholder:text-gray-300"
            />
          </div>
        </div>
        <div>
          <label htmlFor="yang-mengundang" className="flex items-center mb-2">
            <FcManager className="w-5 h-5" />
            <span className="ms-1">Yang Mengundang</span>
          </label>
          <div className="p-2 bg-white border border-gray-400 rounded-md focus-within:border-gold">
            <input
              type="text"
              name="yang-mengundang"
              defaultValue={yangMengundang}
              onChange={(e) => onChangeYangMengundang(e.target.value)}
              className="w-full text-sm bg-transparent outline-none appearance-none text-brown placeholder:text-sm placeholder:text-gray-300"
            />
          </div>
        </div>
        <div>
          <label htmlFor="guest-list" className="flex items-center ">
            <FcContacts className="w-5 h-5" />
            <span className="ms-1">List Tamu Undangan</span>
          </label>
          <span className="mb-2 text-xs">
            * Gunakan baris baru (↵) untuk memisahkan nama yang akan diundang.
          </span>
          <Controller
            name="guestList"
            control={control}
            render={({ field }) => {
              return (
                <div className="p-2 bg-white border border-gray-400 rounded-md focus-within:border-gold">
                  <textarea
                    {...field}
                    rows={8}
                    placeholder="Nama Tamu 1 (&#8629;)
Nama Tamu 2
Nama Tamu 3
                    "
                    className="w-full text-xs bg-transparent outline-none appearance-none text-brown placeholder:text-sm placeholder:text-gray-300"
                  ></textarea>
                </div>
              );
            }}
          />
        </div>
        <div>
          <label htmlFor="guest-list" className="flex items-center mb-2">
            <FcSurvey className="w-5 h-5" />
            <span className="ms-1">Isi Text Pengantar</span>
          </label>
          <div className="mb-1">
            {invitationText.map((invText) => (
              <label key={invText.id} className="inline-flex items-center me-4">
                <input
                  type="radio"
                  name="formatUndangan"
                  value={invText.name}
                  defaultChecked={formatPengantar === invText.name}
                  onChange={(e) => onChangeFormatPengantar(e.target.value)}
                />
                <span className="ml-1 text-xs text-gray-700">{invText.name}</span>
              </label>
            ))}
          </div>
          <Controller
            name="invitationText"
            control={control}
            render={({ field }) => {
              return (
                <div className="p-2 bg-white border border-gray-400 rounded-md focus-within:border-gold">
                  <textarea
                    {...field}
                    rows={25}
                    className="w-full text-xs bg-transparent outline-none appearance-none text-brown placeholder:text-sm placeholder:text-gray-300"
                  ></textarea>
                </div>
              );
            }}
          />
        </div>

        <button className="px-8 py-2 text-sm text-white rounded-md bg-gold">Kirim</button>
      </form>
    </section>
  );
};

export default CreateGuestList;
