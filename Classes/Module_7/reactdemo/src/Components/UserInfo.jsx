export default function UserInfo({ author }) {
  return (
    <div className="UserInfo">
      {/* the user info is one aspect of the comment */}
      <img className="Avatar" src={author.avatarUrl} alt={author.name} />
      <div className="UserInfo-name">{author.name}</div>
    </div>
  );
}
