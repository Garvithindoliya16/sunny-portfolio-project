import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageCircle, Send, X, Bot, User } from "lucide-react";

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm Garvit's AI assistant. Feel free to ask me about his skills, projects, or experience!",
      isBot: true,
      timestamp: new Date(),
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const predefinedResponses: { [key: string]: string } = {
    "hello": "Hello! I'm here to help you learn more about Garvit Hindoliya. What would you like to know?",
    "hi": "Hi there! I'm Garvit's AI assistant. Ask me anything about his work and skills!",
    "skills": "Garvit is skilled in Frontend Development (React, TypeScript, JavaScript, HTML, CSS, Tailwind CSS) and Python & Data Science (NumPy, Pandas, Matplotlib, Seaborn, Scikit-learn). He's passionate about creating beautiful web experiences!",
    "projects": "Garvit has worked on various projects including E-Commerce Dashboards, Task Management Apps, Weather Apps, and Machine Learning projects like car price prediction using Python libraries. Check out the projects section for more details!",
    "experience": "Garvit is a passionate Frontend Developer with expertise in modern web technologies and data science. He loves creating responsive, user-friendly applications and working with machine learning algorithms.",
    "contact": "You can reach Garvit at garvithindoliyaprojects@gmail.com or connect with him on LinkedIn at https://www.linkedin.com/in/garvithindoliya/",
    "github": "Check out Garvit's work on GitHub: https://github.com/Garvithindoliya16",
    "resume": "You can download Garvit's resume using the 'Get Resume' button in the top right corner of the page!",
    "machine learning": "Garvit has experience with machine learning using Python libraries like NumPy, Pandas, Matplotlib, Seaborn, and Scikit-learn. He's worked on projects like car price prediction with high accuracy!",
    "python": "Garvit is proficient in Python for data science and machine learning, using libraries like NumPy for numerical computing, Pandas for data manipulation, Matplotlib and Seaborn for visualization, and Scikit-learn for machine learning algorithms."
  };

  const getResponse = (input: string): string => {
    const lowerInput = input.toLowerCase();
    
    for (const keyword in predefinedResponses) {
      if (lowerInput.includes(keyword)) {
        return predefinedResponses[keyword];
      }
    }
    
    return "That's an interesting question! While I can tell you about Garvit's skills, projects, and experience, you might want to reach out to him directly at garvithindoliyaprojects@gmail.com for more specific inquiries.";
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: inputMessage,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);

    setTimeout(() => {
      const botResponse: Message = {
        id: Date.now() + 1,
        text: getResponse(inputMessage),
        isBot: true,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);

    setInputMessage("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chatbot Toggle Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          size="lg"
          className="w-14 h-14 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-lg hover:shadow-xl transition-all duration-300 hover-scale"
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <MessageCircle className="h-6 w-6" />
          )}
        </Button>
      </div>

      {/* Chatbot Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-40 w-80 h-96 animate-fade-in">
          <Card className="h-full flex flex-col border-purple-500/20 bg-background/95 backdrop-blur-md shadow-xl">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Bot className="h-5 w-5 text-purple-500" />
                Garvit's AI Assistant
              </CardTitle>
            </CardHeader>
            
            <CardContent className="flex-1 flex flex-col gap-3 p-4 pt-0">
              <ScrollArea className="flex-1 pr-3">
                <div className="space-y-3">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex gap-2 ${
                        message.isBot ? "justify-start" : "justify-end"
                      }`}
                    >
                      <div
                        className={`flex gap-2 max-w-[80%] ${
                          message.isBot ? "flex-row" : "flex-row-reverse"
                        }`}
                      >
                        <div
                          className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                            message.isBot
                              ? "bg-purple-500/20"
                              : "bg-blue-500/20"
                          }`}
                        >
                          {message.isBot ? (
                            <Bot className="h-3 w-3 text-purple-500" />
                          ) : (
                            <User className="h-3 w-3 text-blue-500" />
                          )}
                        </div>
                        <div
                          className={`px-3 py-2 rounded-lg text-sm ${
                            message.isBot
                              ? "bg-muted text-muted-foreground"
                              : "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                          }`}
                        >
                          {message.text}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
              
              <div className="flex gap-2">
                <Input
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about Garvit's skills, projects..."
                  className="flex-1 border-purple-500/30 focus:border-purple-500/50"
                />
                <Button
                  onClick={handleSendMessage}
                  size="icon"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default Chatbot;