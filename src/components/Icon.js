import "./Icon.css"
function Avatar({value}) {
    return <img className="Icons" alt="avatar" src={`https://avatars.dicebear.com/api/identicon/${value}.svg`}></img>
  }
  export default Avatar