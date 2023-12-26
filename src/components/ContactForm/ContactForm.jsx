import { MdMessage } from "react-icons/md";
import Button from "../Button/Button";
import styles from "./ContactForm.module.css";
import { IoIosCall } from "react-icons/io";
const ContactForm = () => {
  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="24px" />}
          />
          <Button text="VIA CALL" icon={<IoIosCall fontSize="24px" />} />
        </div>
        <Button
          isOutline={true}
          text="VIA EMAIL FORM"
          icon={<MdMessage fontSize="24px" />}
        />

        <form>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" placeholder="Enter your name..." />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">E-mail</label>
            <input type="email" placeholder="Enter your email..." />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea
              placeholder="Enter text here..."
              style={{ height: "80px", padding: "10px" }}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Button text="SUBMIT" />
          </div>
        </form>
      </div>
      <div>
        <img
          src="public\images\Service 24_7-pana 1.svg"
          className={styles.contact_image}
          alt="contact image"
        />
      </div>
    </section>
  );
};

export default ContactForm;
