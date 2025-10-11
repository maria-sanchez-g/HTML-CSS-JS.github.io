import CommentDate from "./CommentDate";
import CommentText from "./CommentText";
import UserInfo from "./UserInfo";

export default function ComplexComment(props) {
  // complex component which displays different elements of a comment
  return (
    <div className="Comment componentBox">
      <UserInfo author={props.author}></UserInfo>
      <CommentText text={props.text}></CommentText>
      <CommentDate date={props.date}></CommentDate>
    </div>
  );
} // save in a new file ComplexComment.jsx, then export it and import into App.jsx
