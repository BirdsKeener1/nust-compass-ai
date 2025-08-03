import { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { 
  Send, 
  ArrowLeft, 
  MessageCircle, 
  User, 
  Bot,
  GraduationCap,
  Building,
  Search,
  UserCheck,
  Users,
  Globe,
  Sparkles
} from "lucide-react";
import nustLogo from "@/assets/nust-logo.png";
import aiAgent from "@/assets/ai-agent.png";

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'agent';
  timestamp: Date;
  typing?: boolean;
}

const Chat = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const quickReplies = [
    { text: "Admission Requirements", icon: GraduationCap },
    { text: "Campus Facilities", icon: Building },
    { text: "Research Programs", icon: Search },
    { text: "Student Services", icon: UserCheck },
    { text: "Faculty Information", icon: Users },
    { text: "Alumni Network", icon: Globe }
  ];

  useEffect(() => {
    // Welcome message when component mounts
    const welcomeMessage: Message = {
      id: '1',
      text: "Welcome to NUST University Agent! I'm here to help you with any questions about the National University of Sciences and Technology. Whether you need information about admissions, programs, campus life, or research opportunities, I'm ready to assist you. How can I help you today?",
      sender: 'agent',
      timestamp: new Date()
    };
    setMessages([welcomeMessage]);
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSendMessage = async (text?: string) => {
    const messageText = text || inputValue.trim();
    if (!messageText) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: messageText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate agent response
    setTimeout(() => {
      const agentResponse = generateAgentResponse(messageText);
      const agentMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: agentResponse,
        sender: 'agent',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, agentMessage]);
      setIsTyping(false);
    }, 1500 + Math.random() * 1000);
  };

  const generateAgentResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('admission') || lowerMessage.includes('apply')) {
      return `Great question about admissions! NUST offers admissions through the NUST Entry Test (NET) conducted twice a year. Here are the key details:

📝 **Application Process:**
- Online application submission
- NUST Entry Test (NET)
- Merit-based selection

🎓 **Programs Available:**
- Engineering (17+ disciplines)
- Computer Sciences
- Business Studies
- Natural Sciences
- Social Sciences

📅 **Important Dates:**
- Spring admissions: October-November
- Fall admissions: May-June

Would you like more specific information about any particular program or the application process?`;
    }
    
    if (lowerMessage.includes('campus') || lowerMessage.includes('facilities')) {
      return `NUST has world-class facilities across multiple campuses! Here's what we offer:

🏛️ **Main Campus (Islamabad):**
- Modern lecture halls and labs
- Central library with 200,000+ books
- Sports complexes and hostels
- Medical center

🔬 **Research Facilities:**
- Advanced engineering labs
- Computer science centers
- Research institutes
- Innovation centers

🏃 **Student Life:**
- 50+ student societies
- Sports facilities
- Cultural centers
- Food courts and cafeterias

Which specific facility would you like to know more about?`;
    }
    
    if (lowerMessage.includes('research') || lowerMessage.includes('phd')) {
      return `NUST is at the forefront of research and innovation! Here's what we offer:

🔬 **Research Areas:**
- Artificial Intelligence & Machine Learning
- Robotics & Automation
- Renewable Energy
- Biotechnology
- Cybersecurity

📊 **Research Statistics:**
- 500+ active research projects
- 1000+ publications annually
- 50+ international collaborations

💰 **Funding Opportunities:**
- HEC scholarships
- Research grants
- Industry partnerships
- International exchange programs

Would you like information about specific research programs or how to get involved in research?`;
    }
    
    if (lowerMessage.includes('fee') || lowerMessage.includes('scholarship') || lowerMessage.includes('financial')) {
      return `Here's information about fees and financial support at NUST:

💰 **Fee Structure (Annual):**
- Engineering: PKR 180,000 - 200,000
- Computer Sciences: PKR 170,000 - 190,000
- Business: PKR 160,000 - 180,000
- Natural Sciences: PKR 150,000 - 170,000

🎓 **Scholarships Available:**
- Merit-based scholarships (up to 100%)
- Need-based financial aid
- Provincial quota scholarships
- International scholarships

📋 **Payment Plans:**
- Semester-wise payments
- Installment options available
- Online payment facility

Need help with scholarship applications or payment procedures?`;
    }
    
    if (lowerMessage.includes('hostel') || lowerMessage.includes('accommodation')) {
      return `NUST provides excellent accommodation facilities:

🏠 **Hostel Facilities:**
- Separate hostels for males and females
- Air-conditioned rooms
- Wi-Fi connectivity
- 24/7 security

🍽️ **Dining:**
- Multiple mess facilities
- Cafeterias and food courts
- Healthy meal options
- Special dietary accommodations

🎯 **Amenities:**
- Study halls and libraries
- Recreation rooms
- Laundry facilities
- Medical facilities

Would you like information about hostel allocation or room booking procedures?`;
    }
    
    // Default response
    return `Thank you for your question! I'm here to help you learn about NUST. I can provide information about:

✅ Admissions and Programs
✅ Campus Facilities  
✅ Research Opportunities
✅ Student Life and Societies
✅ Fees and Scholarships
✅ Faculty and Departments
✅ Career Services
✅ Alumni Network

Please feel free to ask about any specific topic you're interested in, and I'll provide detailed information to help you!`;
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTimestamp = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    });
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="bg-gradient-nust text-white px-4 py-4 shadow-nust">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => navigate('/')}
              className="text-white hover:bg-white/20"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            
            <img src={nustLogo} alt="NUST Logo" className="w-10 h-10" />
            
            <div>
              <h1 className="text-xl font-bold">NUST University Agent</h1>
              <div className="flex items-center space-x-2 text-sm opacity-90">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span>Online & Ready to Help</span>
              </div>
            </div>
          </div>
          
          <div className="hidden sm:flex items-center space-x-2">
            <Sparkles className="h-5 w-5" />
            <span className="text-sm">AI-Powered Assistant</span>
          </div>
        </div>
      </header>

      {/* Chat Container */}
      <div className="flex-1 flex flex-col max-w-6xl mx-auto w-full">
        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in-up`}
            >
              <div className={`flex items-start space-x-3 max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                {/* Avatar */}
                <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                  message.sender === 'user' 
                    ? 'bg-gradient-gold' 
                    : 'bg-gradient-nust'
                }`}>
                  {message.sender === 'user' ? (
                    <User className="h-5 w-5 text-white" />
                  ) : (
                    <Bot className="h-5 w-5 text-white" />
                  )}
                </div>
                
                {/* Message Bubble */}
                <div className={`rounded-lg px-4 py-3 shadow-md ${
                  message.sender === 'user'
                    ? 'bg-gradient-gold text-foreground'
                    : 'bg-card border'
                }`}>
                  <div className="whitespace-pre-wrap text-sm leading-relaxed">
                    {message.text}
                  </div>
                  <div className={`text-xs mt-2 ${
                    message.sender === 'user' ? 'text-foreground/70' : 'text-muted-foreground'
                  }`}>
                    {formatTimestamp(message.timestamp)}
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex justify-start animate-fade-in">
              <div className="flex items-start space-x-3 max-w-[80%]">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-nust flex items-center justify-center">
                  <Bot className="h-5 w-5 text-white" />
                </div>
                <div className="bg-card border rounded-lg px-4 py-3 shadow-md">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Replies */}
        {messages.length <= 1 && (
          <div className="px-4 pb-4">
            <p className="text-sm text-muted-foreground mb-3 text-center">Quick questions to get you started:</p>
            <div className="flex flex-wrap justify-center gap-2">
              {quickReplies.map((reply, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  onClick={() => handleSendMessage(reply.text)}
                  className="group hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <reply.icon className="h-4 w-4 mr-2 group-hover:animate-bounce-gentle" />
                  {reply.text}
                </Button>
              ))}
            </div>
          </div>
        )}

        {/* Input Area */}
        <div className="border-t bg-background p-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex space-x-3">
              <div className="flex-1 relative">
                <Input
                  ref={inputRef}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="Ask me anything about NUST..."
                  className="pr-12 h-12 text-base"
                  disabled={isTyping}
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                  <MessageCircle className="h-5 w-5 text-muted-foreground" />
                </div>
              </div>
              
              <Button 
                onClick={() => handleSendMessage()}
                disabled={!inputValue.trim() || isTyping}
                size="lg"
                variant="nust"
                className="h-12 px-6"
              >
                <Send className="h-5 w-5" />
              </Button>
            </div>
            
            <p className="text-xs text-muted-foreground mt-2 text-center">
              Press Enter to send • This is an AI assistant providing general information about NUST
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;