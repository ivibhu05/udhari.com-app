export function getTimeAgo(timestamp: string): string {
    const currentDate = new Date();
    const previousDate = new Date(timestamp);
  
    const timeDifferenceInSeconds = Math.floor((currentDate.getTime() - previousDate.getTime()) / 1000);
  
    const minute = 60;
    const hour = 60 * minute;
    const day = 24 * hour;
    const week = 7 * day;
    const month = 30 * day;
    const year = 365 * day;
  
    if (timeDifferenceInSeconds < minute) {
      return 'just now';
    } else if (timeDifferenceInSeconds < hour) {
      const minutes = Math.floor(timeDifferenceInSeconds / minute);
      return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    } else if (timeDifferenceInSeconds < day) {
      const hours = Math.floor(timeDifferenceInSeconds / hour);
      return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else if (timeDifferenceInSeconds < week) {
      const days = Math.floor(timeDifferenceInSeconds / day);
      return `${days} day${days > 1 ? 's' : ''} ago`;
    } else if (timeDifferenceInSeconds < month) {
      const weeks = Math.floor(timeDifferenceInSeconds / week);
      return `${weeks} week${weeks > 1 ? 's' : ''} ago`;
    } else if (timeDifferenceInSeconds < year) {
      const months = Math.floor(timeDifferenceInSeconds / month);
      return `${months} month${months > 1 ? 's' : ''} ago`;
    } else {
      const years = Math.floor(timeDifferenceInSeconds / year);
      return `${years} year${years > 1 ? 's' : ''} ago`;
    }
  }