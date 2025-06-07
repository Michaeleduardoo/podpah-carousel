import { FcApproval } from "react-icons/fc";
import ImageHeader from "../Image/Header/image-Ana.png";

function Header() {
  return (
    <>
      <header>
        <img src={ImageHeader} alt="profile image" />
        <div>
          <p>_anasouza29_</p>
          <FcApproval />
        </div>
      </header>
    </>
  );
}

export default Header;
