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

export const timeAgo = (date: string) => {
  const now = new Date().getTime();
  const past = new Date(date).getTime();

  const diffInSeconds = Math.floor((now - past) / 1000); // Selisih dalam detik

  if (diffInSeconds < 60) {
    return `${diffInSeconds} detik yang lalu`;
  }

  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) {
    return `${diffInMinutes} menit yang lalu`;
  }

  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) {
    return `${diffInHours} jam yang lalu`;
  }

  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 7) {
    return `${diffInDays} hari yang lalu`;
  }

  const diffInWeeks = Math.floor(diffInDays / 7);
  if (diffInWeeks < 4) {
    return `${diffInWeeks} minggu yang lalu`;
  }

  const diffInMonths = Math.floor(diffInDays / 30);
  if (diffInMonths < 12) {
    return `${diffInMonths} bulan yang lalu`;
  }

  const diffInYears = Math.floor(diffInMonths / 12);
  return `${diffInYears} tahun yang lalu`;
};

export const copyTextToClipboard = (text: string) => {
  return navigator.clipboard.writeText(text);
};
