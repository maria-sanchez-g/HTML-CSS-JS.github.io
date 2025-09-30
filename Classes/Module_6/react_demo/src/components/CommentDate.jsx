export default function CommentDate ({ date }) { //export default to export the function
return (
    <div className="Comment-date">
     {date.toLocaleString()}
    </div>
    );
}