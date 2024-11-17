import styled from "styled-components";
import Button from "../ui/Button";
import { useLocalization } from "../../helpers/localization";
import Input from "../ui/Input";
import TextArea from "../ui/Textarea";
import { useState } from "react";
import authData from "../../../authData";

const ContactForm = ({ setStatus, ...props }) => {
  const { localized } = useLocalization();

  const [inputName, setInputName] = useState("");
  const [inputSurname, setInputSurname] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputMessage, setInputMessage] = useState("");

  function handleFormSubmit(e) {
    e.preventDefault();
    console.log("form submitted");

    // prepare data
      const body = {
          emailTo: ['anridecollo@gmaiwl.com', 'support@anridecollo.com'],
          clientId:"anridecollo",
          clientSecret:"&*envo9SG82jmd-0jHn2;lwcf",
          contactEmail: inputEmail,
          contactFirstName: inputName,
          contactLastName: inputSurname,
          contactMessagee: inputMessage,
    };

    // setup request
      fetch("https://email.ampersand-it.com/sendcontactusform", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
        .then((data) => {
          console.log(data)
        if (data.status === 200) {
          setStatus("success");
        } else {
          setStatus("failure");
        }
      })
      .catch((error) => {
        setStatus("failure");
        console.error("Error:", error);
      });
  }

  return (
    <StyledForm onSubmit={handleFormSubmit} {...props}>
      <div className="row">
        <Input
          id="inputName"
          name="name"
          placeholder={localized("contact.form.name")}
          required
          pattern="[A-Za-zА-Яа-яЁёІіЇїЄєҐґ]{2,}"
          title="Name should be at least 2 characters and contain only letters."
          autoComplete="given-name"
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
        />
        <Input
          placeholder={localized("contact.form.surname")}
          required
          id="inputSurname"
          name="surname"
          pattern="[A-Za-zА-Яа-яЁёІіЇїЄєҐґ]{2,}"
          title="Name should be at least 2 characters and contain only letters."
          autoComplete="family-name"
          value={inputSurname}
          onChange={(e) => setInputSurname(e.target.value)}
        />
      </div>
      <Input
        placeholder={localized("contact.form.email")}
        type="email"
        id="inputEmail"
        name="email"
        required
        title="Please enter a valid email."
        autoComplete="email"
        value={inputEmail}
        onChange={(e) => setInputEmail(e.target.value)}
      />
      <TextArea
        placeholder={localized("contact.form.message")}
        value={inputMessage}
        onChange={(e) => setInputMessage(e.target.value)}
      />
      <Button variant="inverted" type="submit">
        {localized("contact.form.action")}
      </Button>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;

  .row {
    display: flex;
    flex-direction: row;
    gap: 20px;

    & > * {
      flex: 1 0 0;
    }
  }

  @media screen and (min-width: 720px) {
    button {
      align-self: flex-start;
    }
  }
`;

export default ContactForm;
