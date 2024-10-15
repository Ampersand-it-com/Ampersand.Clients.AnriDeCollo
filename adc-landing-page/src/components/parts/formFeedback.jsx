import styled from "styled-components";
import Button from "../ui/Button";
import { useLocalization } from "../../helpers/localization";

const FormFeedback = ({ status, text, action, ...props }) => {
  const { localized } = useLocalization();

  return (
    <Container {...props}>
      <p className="text">
        {status == "success"
          ? localized("common.formFeedbackSuccess")
          : localized("common.formFeedbackFailure")}
      </p>
      {status != "success" && (
        <Button variant="inverted" onClick={action}>
          {localized("common.formFeedbackAction")}
        </Button>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  p {
    text-align: center;
  }

  button {
    align-self: center;
  }
`;

export default FormFeedback;
