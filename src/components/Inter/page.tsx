import { useState } from "react";
import { FcLike } from "react-icons/fc";
import { TiHeartOutline, TiMessages, TiPrinter, TiUser } from "react-icons/ti";

function Inter() {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(802);

  const handleLikeClick = () => {
    setLiked(!liked);
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
  };

  const handlePrintClick = () => {
    const printContent = document.getElementById("carousel");
    if (printContent) {
      const printWindow = window.open("", "_blank");
      if (printWindow) {
        printWindow.document.open();
        printWindow.document.write(`
          <html>
          <head><title>Print</title></head>
          <body>
            ${printContent.innerHTML}
          </body>
          </html>
        `);
        printWindow.document.close();
        printWindow.focus();
        printWindow.print();
      }
    }
  };

  return (
    <>
      <div className="inter">
        <div>
          <button title="Gostei 👍" onClick={handleLikeClick}>
            {liked ? <FcLike /> : <TiHeartOutline />}
          </button>

          <button title="Linda 😍❤️">
            <TiMessages />
          </button>

          <button title="Imprimir 📷" onClick={handlePrintClick}>
            <TiPrinter />
          </button>
        </div>

        <button title="Usuário 👩">
          <a
            href="https://www.instagram.com/podpah/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TiUser />
          </a>
        </button>
      </div>
      <p>{likeCount} Curtidas</p>
      <p>Momentos de tranquilidades ✨🎙️</p>
    </>
  );
}

export default Inter;
