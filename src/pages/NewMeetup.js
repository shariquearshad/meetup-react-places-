import { useNavigate } from "react-router-dom";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupsPage() {
  const navigate = useNavigate();
  function addMeetupHeandler(meetupData) {
    fetch(
      "https://react-getting-started-2a6ff-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "post",
        body: JSON.stringify(meetupData),
        headers: {
          "content-Type": "application/json",
        },
      }
    ).then(() => {
        navigate('/', { replace: true })
    });
  }
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHeandler} />
    </section>
  );
}
export default NewMeetupsPage;
