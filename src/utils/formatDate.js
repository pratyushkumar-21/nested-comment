export const getTimeDiffInSec = (UTCDate1, UTCDate2 = new Date()) => {
  const date1 = new Date(UTCDate1);
  const date2 = new Date(UTCDate2);

  const diffInSeconds = Math.floor((date2.getTime() - date1.getTime()) / 1000);

  return diffInSeconds;
};

export const getDateInText = (UTCDate) => {
  const timeDiffInSec = getTimeDiffInSec(UTCDate);

  const days = Math.floor(timeDiffInSec / (60 * 60 * 24));
  if (days > 0) return `${days} day(s) ago`;

  const hours = Math.floor(timeDiffInSec / (60 * 60));
  if (hours > 0) return `${hours} hour(s) ago`;

  const minutes = Math.floor(timeDiffInSec / 60);
  if (minutes > 0) return `${minutes} minute(s) ago`;

  return `${timeDiffInSec} second(s) ago`;
};
