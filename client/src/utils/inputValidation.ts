export const validateInput = (value: string) => {
  const pattern = /^(0|[1-9]\d*)(\.\d+)?$/; //integers and positive decimal numbers (excluding negative numbers)
  if (
    (!Number.isInteger(Number(value)) || Number(value) < 0) &&
    !pattern.test(value)
  ) {
    return false;
  }
  return true;
};

export const validateDateTime = (value: string) => {
  const date = new Date(value);
  if (!value) {
    return false;
  } else if (isNaN(date.getTime())) {
    return false;
  } else if (date < new Date()) {
    return false;
  }
  return true;
};
