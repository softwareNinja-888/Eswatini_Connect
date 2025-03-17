class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }
  
    greet() {
      const message = this.createChatBotMessage("Hello! How can I assist you?");
      this.updateChatbotState(message);
    }
  
    defaultResponse() {
      const message = this.createChatBotMessage("Sorry, I didn't understand that. Can you rephrase?");
      this.updateChatbotState(message);
    }
  
    updateChatbotState(message) {
      this.setState(prevState => ({
        ...prevState,
        messages: [...prevState.messages, message],
      }));
    }
  }
  
  export default ActionProvider;