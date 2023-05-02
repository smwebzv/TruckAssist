export const checkOpen = (startTime, endTime) => {
  const currentTime = new Date();
  const currentHours = currentTime?.getHours();
  const currentMinutes = currentTime?.getMinutes();
  const startHours = startTime?.split(":")[0];
  const startMinutes = startTime?.split(":")[1];
  const endHours = endTime?.split(":")[0];
  const endMinutes = endTime?.split(":")[1];

  if (
    currentHours < startHours ||
    (currentHours === startHours && currentMinutes < startMinutes)
  ) {
    return "Closed";
  }
  if (
    currentHours > endHours ||
    (currentHours === endHours && currentMinutes > endMinutes)
  ) {
    return "Closed";
  }
  return "Open";
};
