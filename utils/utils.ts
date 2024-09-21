
  export const formatTime = (time: number) => {
    return time < 10 ? `0${time}` : time; // Format time to always show two digits
  };