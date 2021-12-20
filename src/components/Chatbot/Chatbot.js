import React from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

//https://ordinarycoders.com/blog/article/reactjs-chatbot
//https://lucasbassetti.com.br/react-simple-chatbot/#/docs/bmi

function Chatbot(props) {
  const config = {
    width: "300px",
    height: "400px",
    floating: true
  };

  const theme = {
    background: "white",
    fontFamily: "Lucida Console",
    headerBgColor: "#ff9933",
    headerFontColor: "#fff",
    headerFontSize: "15px",
    botBubbleColor: "#ff9933",
    botFontColor: "#fff",
    userBubbleColor: "#ffb266",
    userFontColor: "#fff"
  };

  const steps = [
    {
      id: "Greet",
      message: "Welcome to OPF!",
      trigger: "Introduce Bot"
    },
    {
      id: "Introduce Bot",
      message: "I am OP Bot. Let me be of service",
      trigger: "Ask for something"
    },
    {
      id: "Ask for something",
      message: "What do you need help in?",
      trigger: "Wait for user input"
    },
    {
      id: "Wait for user input",
      user: true,
      trigger: "Print user input"
    },
    {
      id: "Print user input",
      message: "I will help you with [{previousValue}]",
      trigger: "Asking options"
    },
    {
      id: "Asking options",
      message: "Pick an option",
      trigger: "Display options"
    },
    {
      id: "Display options",
      options: [
        {
          value: "choice1",
          label: "Choice 1",
          trigger: "Done"
        },
        {
          value: "choice2",
          label: "Choice 2",
          trigger: "Done"
        }
      ]
    },
    {
      id: "Done",
      message: "Have a great day!",
      end: true
    }
  ];

  return (
    <ThemeProvider theme={theme}>
      <ChatBot headerTitle="OPF Helper Bot" steps={steps} {...config} />
    </ThemeProvider>
  );
}

export default Chatbot;
