const Notification = ({ notification }) => {
  console.log(`notification type: ${notification.type}`);
  if (!notification.message) {
    return null;
  } else if (notification.type) {
    return <div className="notification">{notification.message}</div>;
  } else if (!notification.type) {
    return <div className="error">{notification.message}</div>;
  }
};
export default Notification;
