import { FcApproval } from "react-icons/fc";
import ImageHeader from "../Image/Header/image-podpah.png";
import ThemeToggle from "../ThemeToggle/page";

function Header() {
  return (
    <>
      <header>
        <img src={ImageHeader} alt="profile image" />
        <div>
          <p>podpah</p>
          <FcApproval />
        </div>
        <ThemeToggle />
      </header>
    </>
  );
}

export default Header;
