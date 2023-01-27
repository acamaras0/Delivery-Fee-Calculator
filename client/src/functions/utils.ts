export const handleChange =
  (setter: (value: number) => void) =>
  (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.valueAsNumber;
    if (value >= 0) {
      setter(Number(value));
    }
  };

export const handleDateChange =
  (
    setDeliveryHour: (value: number) => void,
    setDeliveryMinute: (value: number) => void,
    setDeliveryDate: (value: Date) => void,
    setDefaultDate: (value: string) => void
  ) =>
  (e: React.ChangeEvent<HTMLInputElement>) => {
    const [date, time]: string[] = e.target.value.split("T");
    const datestamp: Date = new Date(date);
    const [hour, minute]: number[] = time.split(":").map(Number);
    setDeliveryHour(hour);
    setDeliveryMinute(minute);
    setDeliveryDate(datestamp);
    setDefaultDate(e.target.value);
  };
