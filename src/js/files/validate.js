import JustValidate from "just-validate";
export default function validate() {
  if (document.querySelector(".connection__form")) {
    const validator = new JustValidate(".connection__form");

    validator
      .addField("#name", [
        {
          rule: "required",
        },
        {
          rule: "minLength",
          value: 3,
        },
        {
          rule: "maxLength",
          value: 15,
        },
      ])
      .addField("#name-company", [
        {
          rule: "required",
        },
        {
          rule: "minLength",
          value: 3,
        },
      ])
      .addField("#tel", [
        {
          rule: "required",
        },
      ])
      .addField("#mail", [
        {
          rule: "required",
        },
        {
          rule: "email",
        },
      ])
      .addField("#address", [
        {
          rule: "required",
        },
        {
          rule: "minLength",
          value: 3,
        },
      ]);
  }
}
