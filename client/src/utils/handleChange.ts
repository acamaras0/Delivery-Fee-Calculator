import { validateInput, validateDateTime } from "./inputValidation";

export const handleChange =
  (setter: (value: number) => void) =>
  (e: React.ChangeEvent<HTMLInputElement>) => {
    if (validateInput(e.target.value) === true) {
      setter(e.target.valueAsNumber);
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
    if (validateDateTime(e.target.value) === true) {
      const [date, time]: string[] = e.target.value.split("T");
      const datestamp: Date = new Date(date);
      const [hour, minute]: number[] = time.split(":").map(Number);
      setDeliveryHour(hour);
      setDeliveryMinute(minute);
      setDeliveryDate(datestamp);
      setDefaultDate(e.target.value);
    }
  };
