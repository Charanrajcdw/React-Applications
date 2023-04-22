import Dropdown from "../dropdown/Dropdown";
import Button from "../button/Button";
import styles from "./Form.module.css";
import { FORM } from "../../constants/component";
import { useRef, useState } from "react";

function Form() {
  let usernameRef = useRef();
  let homeTownRef = useRef();
  let destinationTownRef = useRef();
  let contactNumberRef = useRef();
  let formRef = useRef();
  const [formState, setFormState] = useState({ isValid: true, isSubmitted: false });

  const [data, setData] = useState({
    username: "",
    homeTown: "",
    destinationTown: "",
    contactNumber: "",
  });

  function handleButtonClick(event) {
    event.preventDefault();
    const USERNAME = usernameRef.current.value;
    const HOME_TOWN = homeTownRef.current.value;
    const DESTINATION_TOWN = destinationTownRef.current.value;
    const CONTACT_NUMBER = contactNumberRef.current.value;
    if (USERNAME && HOME_TOWN && DESTINATION_TOWN && CONTACT_NUMBER && HOME_TOWN !== DESTINATION_TOWN) {
      setData({
        username: USERNAME,
        homeTown: HOME_TOWN,
        destinationTown: DESTINATION_TOWN,
        contactNumber: CONTACT_NUMBER,
      });
      setFormState({ isValid: true, isSubmitted: true });
      setTimeout(() => {
        setFormState({ isValid: true, isSubmitted: false });
      }, 10000);
      formRef.current.reset();
    } else {
      setFormState({ isValid: false, isSubmitted: false });
    }
  }

  return (
    <>
      <form className={styles.formContent} ref={formRef}>
        <label htmlFor="cityName">{FORM.cityName}</label>
        <input name="cityName" ref={usernameRef} id="cityName" type="text" />
        <label htmlFor="homeTown">{FORM.homeTown}</label>
        <Dropdown name="homeTown" refValue={homeTownRef} id="homeTown" />
        <label htmlFor="destinationTown">{FORM.destinationTown}</label>
        <Dropdown name="destinationTown" refValue={destinationTownRef} id="destinationTown" />
        <label htmlFor="contactNumber">{FORM.contactNumber}</label>
        <input name="contactNumber" ref={contactNumberRef} id="contactNumber" type="text" pattern="[0-9]+" />
        <Button value={FORM.submitButtonText} handleClick={handleButtonClick} />
      </form>
      {formState.isSubmitted && (
        <div className={styles.formMessage}>
          Thank You <strong>{data.username}</strong> for expressing your interest in travelling with us. Our Sales team will get back with the best
          packages from <strong>{data.homeTown}</strong> to <strong>{data.destinationTown}</strong>.
        </div>
      )}
      {!formState.isValid && (
        <div className={styles.formMessage}>Invalid form data! Please fill out all the fields properly to book the travel ticket!</div>
      )}
    </>
  );
}

export default Form;
