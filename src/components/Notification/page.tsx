import { useState, useEffect } from 'react';
import { FaHeart, FaComment, FaShare, FaCheck } from 'react-icons/fa';

interface NotificationProps {
  type: 'like' | 'comment' | 'share' | 'success';
  message: string;
  duration?: number;
  onClose?: () => void;
}

function Notification({ type, message, duration = 1000, onClose }: NotificationProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => onClose?.(), 300);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const getIcon = () => {
    switch (type) {
      case 'like':
        return <FaHeart className="notification-icon like" />;
      case 'comment':
        return <FaComment className="notification-icon comment" />;
      case 'share':
        return <FaShare className="notification-icon share" />;
      case 'success':
        return <FaCheck className="notification-icon success" />;
      default:
        return null;
    }
  };

  if (!isVisible) return null;

  return (
    <div className={`notification notification-${type} ${isVisible ? 'show' : 'hide'}`}>
      <div className="notification-content">
        {getIcon()}
        <span>{message}</span>
      </div>
    </div>
  );
}

export default Notification;
