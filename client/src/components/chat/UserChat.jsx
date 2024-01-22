import { Stack } from "react-bootstrap";
import avatar from "../../assets/avatar.svg";
import { useFetchRecipientUser } from "../../hooks/useFetchRecipient";
import { useContext } from "react";
import { ChatContext } from "../../Context/ChatContext";
import { unreadNotficationsFunc } from "../../utilis/unreadNotifications";

const UserChat = ({ chat, user }) => {
  const { recipientUser } = useFetchRecipientUser(chat, user);
  const { onlineUsers, notifications } = useContext(ChatContext);

  const unreadNotifications = unreadNotficationsFunc(notifications);

  const thisUserNotifications = unreadNotifications?.filter(
    (n) => n.senderId == recipientUser?._id
  );

  const isOnline = onlineUsers?.some(
    (user) => user?.userId === recipientUser?._id
  );
  //   console.log("recipientUser", recipientUser);
  return (
    <Stack
      direction="horizontal"
      gap={3}
      className="user-card align-items-center p-2 justify-content-between"
      role="button"
    >
      <div className="d-flex">
        <div className="me-2">
          <img src={avatar} alt="avatar" height="35px" />
        </div>
        <div className="text-content">
          <div className="name">{recipientUser?.name}</div>
          <div className="text">Text Message</div>
        </div>
      </div>
      <div className="d-flex flex-column align-item-end">
        <div className="date">12/12/2023</div>
        <div
          className={
            thisUserNotifications?.length > 0 ? "this-user-notifications" : ""
          }
        >
          {thisUserNotifications?.length > 0
            ? thisUserNotifications?.length
            : ""}
        </div>
        <span className={isOnline ? "user-online" : ""}></span>
      </div>
    </Stack>
  );
};

export default UserChat;
