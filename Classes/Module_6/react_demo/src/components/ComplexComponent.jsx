import CommentText from "./CommentText";
import CommentDate from "./CommentDate";
import UserInfo from "./UserInfo";



export default function ComplexComment(props) { // complex component which displays different elements of a comment
    return (
        <div className="Comment componentBox">
            <UserInfo author={props.author}></UserInfo>
            <CommentText text={props.text}></CommentText>
            <CommentDate date={props.date}></CommentDate>
        </div>
    );
}
            {/* <div className="UserInfo"> 
                {/* the user info is one aspect of the comment */}
    //             <img className="Avatar" 
    //             src={props.author.avatarUrl} alt={props.author.name} /> 
    //             <div className="UserInfo-name">
    //                 {props.author.name}</div>
    //         </div> 
    //         <div className="Comment-text"> 
    //             {/* the actual comment text is another aspect */}
    //             {props.text}
    //         </div>
    //         <div className="Comment-date"> 
    //             {/* the comment date is another aspect */}
    //             {props.date.toLocaleString()}
    //         </div>
    //     </div>
    // ); */}
// } // save in a new file ComplexComment.jsx, then export it and import into App.jsx