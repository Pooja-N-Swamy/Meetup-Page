import { useRef } from "react";
import Card from "../ui/Card";
import Styles from "./NewMeetupForm.module.css";

export default function NewMeetupForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDesc = descInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDesc,
    };
    props.onAddMeetup(meetupData);
  }
  return (
    <Card>
      <form className={Styles.form} onSubmit={submitHandler}>
        <div className={Styles.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={titleInputRef}></input>
        </div>
        <div className={Styles.control}>
          <label htmlFor="url">Meetup Image</label>
          <input type="url" required id="url" ref={imageInputRef}></input>
        </div>
        <div className={Styles.control}>
          <label htmlFor="address">Meetup Address</label>
          <input
            type="address"
            required
            id="address"
            ref={addressInputRef}
          ></input>
        </div>
        <div className={Styles.control}>
          <label htmlFor="description">Meetup Description</label>
          <textarea
            required
            id="description"
            rows="5"
            ref={descInputRef}
          ></textarea>
        </div>
        <div className={Styles.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}
