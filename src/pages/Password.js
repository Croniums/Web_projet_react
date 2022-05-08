import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "../components/Password.css"
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
function Password() {
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePassword = () => {
        setPasswordShown(!passwordShown);
      };
    return (
      <>
        <div className="App">
        <div className="App-header">
          <h1>Password</h1>
            <div className="elements">
                <input className="inputs" type={passwordShown ? "text" : "password"} />
                <button className="buttonsecret" onClick={togglePassword}>☻</button>
            </div>
        </div>
      </div>
      </>
    );
  }

export default Password;