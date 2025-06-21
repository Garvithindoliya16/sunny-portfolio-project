import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, MapPin, Phone, Sparkles, Send, MessageCircle } from "lucide-react";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { useToast } from "@/hooks/use-toast";
import ThreeBackgroundContact from "./ThreeBackgroundContact";
const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const {
    toast
  } = useToast();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setIsLoading(true);
    try {
      await emailjs.sendForm('service_42knvge', 'template_ibo9tw8', formRef.current, 'CmSTojk7OI7xcvX2u');
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon."
      });
      formRef.current.reset();
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };
  return <section id="contact" className="py-20 px-4 bg-gradient-to-br from-muted/30 to-background relative overflow-hidden">
      {/* 3D Background */}
      <ThreeBackgroundContact />
      {/* Animated background elements */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-2xl animate-pulse delay-500" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center gap-2 mb-4">
            <MessageCircle className="h-6 w-6 text-blue-400 animate-bounce" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Let's Work Together
            </h2>
            <Sparkles className="h-6 w-6 text-purple-400 animate-pulse" />
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have a project in mind or want to discuss opportunities? 
            I'd love to hear from you and explore how we can create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8 animate-fade-in delay-200">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-foreground to-blue-600 bg-clip-text text-transparent mb-6">Get In Touch</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Whether you're looking for a developer to join your team, need help with a project, 
                or just want to connect, I'm always open to new opportunities and conversations.
              </p>
            </div>

            <div className="space-y-6">
              <div className="group flex items-center space-x-4 p-4 rounded-2xl bg-gradient-to-r from-background/50 to-muted/30 backdrop-blur-sm border border-muted/50 hover:border-blue-500/30 transition-all duration-300 hover-scale">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-medium text-foreground group-hover:text-blue-600 transition-colors">Email</p>
                  <p className="text-muted-foreground">garvithindoliyaprojects@gmail.com</p>
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 ml-auto">
                  <Sparkles className="h-4 w-4 text-blue-400" />
                </div>
              </div>

              <div className="group flex items-center space-x-4 p-4 rounded-2xl bg-gradient-to-r from-background/50 to-muted/30 backdrop-blur-sm border border-muted/50 hover:border-emerald-500/30 transition-all duration-300 hover-scale">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-medium text-foreground group-hover:text-emerald-600 transition-colors">Phone</p>
                  <p className="text-muted-foreground">+91 (555) 123-4567</p>
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 ml-auto">
                  <Sparkles className="h-4 w-4 text-emerald-400" />
                </div>
              </div>

              <div className="group flex items-center space-x-4 p-4 rounded-2xl bg-gradient-to-r from-background/50 to-muted/30 backdrop-blur-sm border border-muted/50 hover:border-purple-500/30 transition-all duration-300 hover-scale">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-medium text-foreground group-hover:text-purple-600 transition-colors">Location</p>
                  <p className="text-muted-foreground">Indore, India</p>
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 ml-auto">
                  <Sparkles className="h-4 w-4 text-purple-400" />
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a href="https://github.com/Garvithindoliya16" target="_blank" rel="noopener noreferrer" className="group w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-900 rounded-full flex items-center justify-center hover:from-purple-600 hover:to-purple-700 transition-all duration-300 hover-scale shadow-lg">
                  <Github className="h-5 w-5 text-white group-hover:scale-110 transition-transform duration-300" />
                </a>
                <a href="https://www.linkedin.com/in/garvithindoliya/" target="_blank" rel="noopener noreferrer" className="group w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full flex items-center justify-center hover:from-blue-500 hover:to-blue-700 transition-all duration-300 hover-scale shadow-lg">
                  <Linkedin className="h-5 w-5 text-white group-hover:scale-110 transition-transform duration-300" />
                </a>
                <a href="mailto:garvithindoliyaprojects@gmail.com" className="group w-12 h-12 bg-gradient-to-r from-red-500 to-red-700 rounded-full flex items-center justify-center hover:from-red-400 hover:to-red-600 transition-all duration-300 hover-scale shadow-lg">
                  <Mail className="h-5 w-5 text-white group-hover:scale-110 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </div>

          <Card className="hover-scale transition-all duration-500 border-0 bg-gradient-to-br from-background/80 to-muted/50 backdrop-blur-sm shadow-2xl relative overflow-hidden animate-fade-in delay-400">
            {/* Glowing effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 hover:opacity-100 transition-opacity duration-500" />
            
            {/* Floating sparkles */}
            <div className="absolute top-4 right-4 animate-bounce delay-100">
              <Sparkles className="h-4 w-4 text-blue-400 opacity-60" />
            </div>
            <div className="absolute bottom-4 left-4 animate-bounce delay-300">
              <Send className="h-4 w-4 text-purple-400 opacity-60" />
            </div>
            
            <CardContent className="p-8 relative z-10">
              <h3 className="text-xl font-bold bg-gradient-to-r from-foreground to-purple-600 bg-clip-text text-transparent mb-6">Send Me a Message</h3>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      First Name
                    </label>
                    <Input name="from_name" required placeholder="John" className="border-muted/50 bg-background/50 backdrop-blur-sm focus:border-purple-500/50 focus:ring-purple-500/20 transition-all duration-300" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Last Name
                    </label>
                    <Input name="last_name" placeholder="Doe" className="border-muted/50 bg-background/50 backdrop-blur-sm focus:border-purple-500/50 focus:ring-purple-500/20 transition-all duration-300" />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Email
                  </label>
                  <Input name="from_email" type="email" required placeholder="john@example.com" className="border-muted/50 bg-background/50 backdrop-blur-sm focus:border-blue-500/50 focus:ring-blue-500/20 transition-all duration-300" />
                </div>
                
                
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Message
                  </label>
                  <Textarea name="message" required placeholder="Tell me about your project..." className="min-h-[120px] border-muted/50 bg-background/50 backdrop-blur-sm focus:border-emerald-500/50 focus:ring-emerald-500/20 transition-all duration-300 resize-none" />
                </div>
                
                <Button type="submit" disabled={isLoading} className="w-full hover-scale bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 border-0 shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
                  <Send className="mr-2 h-4 w-4" />
                  {isLoading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};
export default Contact;