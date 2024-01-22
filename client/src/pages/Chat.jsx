import { useContext } from "react";
import { ChatContext } from "../Context/ChatContext";
import { Container, Stack } from "react-bootstrap";
import UserChat from "../components/chat/UserChat";
import { AuthContext } from "../Context/AuthContext";
import PotentialChats from "../components/chat/PotentialChats";
import ChatBox from "../components/chat/ChatBox";

const Chat = () => {
  const { user } = useContext(AuthContext);

  const { userChats, isUserChatsLoading, updateCurrentChat } =
    useContext(ChatContext);
  return (
    <Container>
      <PotentialChats />
      {userChats?.length < 1 ? null : (
        <Stack gap={4} className="align-items-start" direction="horizontal">
          <Stack gap={3} className="pe-3 messages-box flex-grow-0">
            {isUserChatsLoading && <p>Loading chats...</p>}
            {userChats?.map((chat, index) => {
              return (
                <div onClick={() => updateCurrentChat(chat)} key={index}>
                  <UserChat chat={chat} user={user} />
                </div>
              );
            })}
          </Stack>
          <ChatBox />
        </Stack>
      )}
    </Container>
  );
};

export default Chat;
