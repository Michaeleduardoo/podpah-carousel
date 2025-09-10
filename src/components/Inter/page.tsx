import { useState } from "react";
import { FcLike } from "react-icons/fc";
import { TiHeartOutline, TiMessages, TiPrinter, TiUser } from "react-icons/ti";
import Notification from "../Notification/page";

function Inter() {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(802);
  const [currentNotification, setCurrentNotification] = useState<{
    id: number;
    type: "like" | "comment" | "share" | "success";
    message: string;
  } | null>(null);

  const addNotification = (
    type: "like" | "comment" | "share" | "success",
    message: string
  ) => {
    const id = Date.now();
    setCurrentNotification({ id, type, message });
  };

  const removeNotification = () => {
    setCurrentNotification(null);
  };

  const handleLikeClick = () => {
    setLiked(!liked);
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
    addNotification(
      "like",
      liked ? "Curtida removida!" : "Curtida adicionada! ❤️"
    );
  };

  const handleCommentClick = () => {
    addNotification("comment", "Comentário adicionado! 💬");
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
        addNotification("success", "Impressão iniciada! 🖨️");
      }
    }
  };

  const handleShareClick = () => {
    addNotification("share", "Compartilhado com sucesso! 📤");
  };

  return (
    <>
      <div className="inter">
        <div>
          <button title="Gostei 👍" onClick={handleLikeClick}>
            {liked ? <FcLike /> : <TiHeartOutline />}
          </button>

          <button title="Comentar 💬" onClick={handleCommentClick}>
            <TiMessages />
          </button>

          <button title="Imprimir 📷" onClick={handlePrintClick}>
            <TiPrinter />
          </button>
        </div>

        <button title="Compartilhar 📤" onClick={handleShareClick}>
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

      {currentNotification && (
        <Notification
          key={currentNotification.id}
          type={currentNotification.type}
          message={currentNotification.message}
          onClose={removeNotification}
        />
      )}
    </>
  );
}

export default Inter;
