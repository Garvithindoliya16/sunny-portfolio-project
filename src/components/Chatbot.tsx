
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
  const [usedResponses, setUsedResponses] = useState<Set<number>>(new Set());

  const funnyResponses = [
    "🤖 Beep boop! Garvit probably coded me while drinking his 47th cup of coffee today ☕",
    "🚀 Fun fact: Garvit once debugged code in his sleep and woke up with the solution! 😴",
    "🎨 Garvit's coding skills are so good, even his bugs look beautiful! ✨",
    "🔮 Legend says Garvit can make websites so responsive, they respond before you even click! 📱",
    "🎭 Garvit's GitHub has more commits than a rom-com has plot twists! 💕",
    "🌟 Warning: Garvit's portfolio might cause extreme inspiration and sudden urge to hire him! 💼",
    "🎪 Garvit codes faster than a cheetah on Red Bull! Want proof? Check his projects! 🐆",
    "🎨 Roses are red, violets are blue, Garvit writes code, that's beautiful too! 🌹",
    "🚀 Garvit's skills are like pizza - even when they're bad, they're still pretty good! 🍕",
    "🎯 Contact Garvit at garvithindoliyaprojects@gmail.com - he replies faster than instant noodles cook! 📧",
    "💻 Garvit speaks Python so fluently, even snakes are jealous! 🐍",
    "🎮 React components fear Garvit - he makes them render without breaking a sweat! ⚛️",
    "🌈 Garvit's code is so clean, Marie Kondo would approve! ✨",
    "🏆 Fun fact: Garvit has completed 50+ projects and his keyboard is still talking to him! ⌨️",
    "🎪 Garvit's machine learning models are so accurate, they predict what you want for lunch! 🤖",
    "🎭 Plot twist: Garvit's real superpower is making CSS actually make sense! 🦸‍♂️",
    "🌟 Garvit's portfolio has more stars than a Hollywood red carpet! ⭐",
    "🎨 His UI designs are so good, Figma sends him thank you cards! 🎁",
    "🚀 Garvit deploys code faster than you can say 'Hello World!' 🌍",
    "💡 He's the type of developer who dreams in code and wakes up with new features! 💭"
  ];

  const getResponse = (input: string): string => {
    // Get unused responses
    const availableResponses = funnyResponses.filter((_, index) => !usedResponses.has(index));
    
    // If all responses have been used, reset the used responses
    if (availableResponses.length === 0) {
      setUsedResponses(new Set());
      const randomIndex = Math.floor(Math.random() * funnyResponses.length);
      setUsedResponses(new Set([randomIndex]));
      return funnyResponses[randomIndex];
    }
    
    // Get a random unused response
    const randomIndex = Math.floor(Math.random() * availableResponses.length);
    const selectedResponse = availableResponses[randomIndex];
    const originalIndex = funnyResponses.indexOf(selectedResponse);
    
    // Mark this response as used
    setUsedResponses(prev => new Set([...prev, originalIndex]));
    
    return selectedResponse;
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
              <ScrollArea className="flex-1 pr-3 max-h-64">
                <div className="space-y-3">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex gap-2 animate-fade-in ${
                        message.isBot ? "justify-start" : "justify-end"
                      }`}
                    >
                      <div
                        className={`flex gap-2 max-w-[70%] ${
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
                          className={`px-3 py-2 rounded-lg text-sm break-words word-wrap max-w-full ${
                            message.isBot
                              ? "bg-muted text-muted-foreground"
                              : "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                          }`}
                          style={{ wordWrap: 'break-word', overflowWrap: 'break-word' }}
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
