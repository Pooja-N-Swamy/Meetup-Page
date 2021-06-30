import { useHistory } from "react-router-dom";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

export default function NewMeetupPage() {
  const history = useHistory();

  function onAddMeetup(meetupData) {
    fetch(
      "https://learn-react-adc1b-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      history.replace("/Meetup-Page/");
    });
  }
  return (
    <section>
      <h1>New Meetup Page</h1>
      <NewMeetupForm onAddMeetup={onAddMeetup}></NewMeetupForm>
    </section>
  );
}
