const Notification = ({ message, type }) => {
  console.log(`notification type: ${type}`);
  if (message === null) {
    return null;
  }
  if (type) return <div className="notification">{message}</div>;
  else return <div className="error">{message}</div>;
};
export default Notification;
