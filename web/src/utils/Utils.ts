export const getDayName = (date: string | Date) => {
  const dayNames = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', "Jum'at", 'Sabtu'];

  const currentDate = new Date(date);
  const day = currentDate.getDay();
  return dayNames[day];
};

export const getFormatWeddingDate = (date: string | Date) => {
  const monthNames = [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember',
  ];

  const currentDate = new Date(date);
  const weddingDate = currentDate.getDate();
  const monthIndex = currentDate.getMonth();
  const years = currentDate.getFullYear();

  return `${weddingDate} ${monthNames[monthIndex]} ${years}`;
};

export const getUserData = () => {
  const userData = localStorage.getItem('userData');

  if (userData) {
    return JSON.parse(userData);
  } else {
    return {
      id: '',
      fullName: '',
      username: '',
      authToken: '',
    };
  }
};
