export const inputValue = (me) => {
  return [
    {
      name: "name",
      labelName: "Имя",
      value: me?.name,
      placeholder: "Вадим",
    },
    {
      name: "phone",
      labelName: "Номер телефона",
      value: me?.phone,
      placeholder: "+998912345678",
    },
    {
      name: "email",
      labelName: "Почта",
      value: me?.email,
      placeholder: "mail@gmail.com",
    },
  ];
};
