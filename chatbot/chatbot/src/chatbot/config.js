// Config starter code
import { createChatBotMessage } from "react-chatbot-kit";

const config = {
  botName: "LearningBot",
  initialMessages: [createChatBotMessage(`Hello world`)],
  
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },

    chatButton: {
      backgroundColor: "#376B7E",
    },
  }
}

export default config;