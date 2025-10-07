import { useState, useEffect } from "react";
import { useData } from "../Utilities/useData";
import { useUserContext } from "../Context/UserContext";

export default function ActivityFinder() {
  // Fetches a random activity
  const [participants, setParticipants] = useState(undefined);
  const { currentUser } = useUserContext();
  const [url, setUrl] = useState(
    "https://bored.api.lewagon.com/api/activity?participants=1"
  );
  const activity = useData(url);
  useEffect(() => {
    console.log("participants", participants);
    if (participants)
      setUrl(
        "https://bored.api.lewagon.com/api/activity?" +
          "participants=" +
          participants
      );
  }, [participants]);
  return (
    <div className="ActivityFinder componentBox">
      <div>{currentUser && currentUser.firstName}</div>
      <h3>Activity Finder </h3>
      <label>
        Choose number of participants:
        <select
          value={participants}
          onChange={(e) => setParticipants(e.target.value)}
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
      </label>
      <div>
        <strong>Suggested Activity: </strong>
        {activity && activity.activity}
      </div>
    </div>
  );
}