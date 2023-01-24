export const handleChange =
  (setter: (value: number) => void) =>
  (e: React.ChangeEvent<HTMLInputElement>) =>
    setter(e.target.valueAsNumber);

export const handleDateChange =
  (
    setDeliveryHour: (value: number) => void,
    setDeliveryMinute: (value: number) => void,
    setDeliveryDate: (value: Date) => void,
    setDefaultDate: (value: string) => void
  ) =>
  (e: React.ChangeEvent<HTMLInputElement>) => {
    const [date, time] = e.target.value.split("T");
    const datestamp = new Date(date);
    const [hour, minute] = time.split(":").map(Number);
    setDeliveryHour(hour);
    setDeliveryMinute(minute);
    setDeliveryDate(datestamp);
    setDefaultDate(e.target.value);
  };
