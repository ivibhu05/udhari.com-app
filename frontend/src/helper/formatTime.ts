export function formatTime(inputTime: string): string {
    const options: Intl.DateTimeFormatOptions = {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    };
  
    const formattedTime = new Date(inputTime).toLocaleString('en-US', options);
  
    return formattedTime;
  }
  

  