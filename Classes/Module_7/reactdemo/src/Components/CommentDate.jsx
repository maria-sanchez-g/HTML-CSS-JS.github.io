export default function CommentDate({ date }) {
  return (
    <div>
      {/* the comment date is another aspect */}
      {date.toLocaleString()}
    </div>
  );
}
