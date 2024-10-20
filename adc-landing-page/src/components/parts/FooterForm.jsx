import styled from "styled-components";
import Button from "../ui/Button";
import { useLocalization } from "../../helpers/localization";
import Input from "../ui/Input";
import { useState } from "react";
import authData from "../../../authData";

const FooterForm = ({ setStatus, ...props }) => {
  const { localized } = useLocalization();

  const [inputEmail, setInputEmail] = useState("");

  function handleFormSubmit(e) {
    e.preventDefault();
    console.log("form submitted");

    // prepare data
    const body = {
      email: inputEmail,
      subject: "Email",
      messagetemplateid: "contactus",
    };

    // setup request
    fetch("https://api.ampersand-it.com/api/smtp/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Client-Id": authData.ClientId,
        "Client-Secret": authData.clientSecret,
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((data) => {
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
    <form onSubmit={handleFormSubmit} {...props}>
      <h4>{localized("footer.form.cta")}</h4>
      <div className="row">
        <Input
          placeholder={localized("footer.form.input")}
          type="email"
          id="inputEmail"
          name="email"
          required
          title="Please enter a valid email."
          autoComplete="email"
          value={inputEmail}
          onChange={(e) => setInputEmail(e.target.value)}
        />
        <Button variant="inverted" type="submit">
          {localized("footer.form.action")}
        </Button>
      </div>
    </form>
  );
};

export default FooterForm;
