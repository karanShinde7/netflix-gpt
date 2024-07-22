const validEmail = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/;
const validationPassword =
  /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;

export const checkValidation = (email, password) => {
  const emailValidation = validEmail.test(email);
  const passwordValidation = validationPassword.test(password);

  if (!emailValidation) return "Email ID is not valid";
  if (!passwordValidation) return "Password is not valid";

  return null;
};
