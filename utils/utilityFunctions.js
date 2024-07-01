export const checkInputHandler = (event) => {
  if (event.target.type === 'text') {
    const allowedChar = /^[a-zA-Z\s]*$/;
    if (allowedChar.test(event.target.value)) return true;
    else return false;
  }
  return true;
};
