import { FcApproval } from "react-icons/fc";
import ImageHeader from "../Image/Header/image-podpah.png";

function Header() {
  return (
    <>
      <header>
        <img src={ImageHeader} alt="profile image" />
        <div>
          <p>podpah</p>
          <FcApproval />
        </div>
      </header>
    </>
  );
}

export default Header;
