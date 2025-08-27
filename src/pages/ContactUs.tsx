import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail } from "lucide-react";
import Header from "@/components/Header";

const ContactUs = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Location",
      details: "7, Arekempanahalli, 3rd Cross Rd, Siddapura, Bengaluru, Karnataka 560027",
      isClickable: true,
      link: "https://share.google/mlKcNllwXLcPjwfj5",
      action: "map"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+91 94488 83714",
      isClickable: true,
      link: "tel:+919448883714",
      action: "call"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: "transcendengineer@gmail.com",
      isClickable: true,
      link: "mailto:transcendengineer@gmail.com",
      action: "email"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-32 pb-12">
        <section className="py-24 surface-elevated">
          <div className="container mx-auto px-6">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-glow">Get In</span>
                <span className="gradient-title ml-4">Touch</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Ready to start your project? Contact us today for a consultation and quote
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <Card className="p-8 bg-card border-accent/20">
                <h3 className="text-2xl font-bold mb-6 text-foreground">Send us a Message</h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-foreground">Name *</Label>
                      <Input 
                        id="name"
                        placeholder="Your Name"
                        className="bg-input border-accent/30 focus:border-accent"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground">Email *</Label>
                      <Input 
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        className="bg-input border-accent/30 focus:border-accent"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-foreground">Phone</Label>
                    <Input 
                      id="phone"
                      placeholder="+91 your phone number"
                      className="bg-input border-accent/30 focus:border-accent"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-foreground">Project Type</Label>
                    <Input 
                      id="subject"
                      placeholder="e.g., Industrial Setup, Skylights, Custom Fabrication"
                      className="bg-input border-accent/30 focus:border-accent"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground">Message *</Label>
                    <Textarea 
                      id="message"
                      placeholder="Tell us about your project requirements..."
                      rows={5}
                      className="bg-input border-accent/30 focus:border-accent resize-none"
                    />
                  </div>
                  
                  <Button variant="neon" size="lg" className="w-full">
                    Get a Quote
                  </Button>
                </form>
              </Card>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-foreground">Contact Information</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We're here to help you with your metal fabrication needs. Reach out to us through 
                    any of the following channels and we'll get back to you promptly.
                  </p>
                </div>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <Card 
                      key={info.title}
                      className={`p-6 bg-card border-accent/20 transition-all duration-300 ${
                        info.isClickable 
                          ? 'hover-lift hover:border-accent/40 cursor-pointer hover:shadow-lg' 
                          : 'hover-lift hover:border-accent/40'
                      }`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                      onClick={info.isClickable ? () => window.open(info.link, '_blank') : undefined}
                    >
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
                          <info.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                          <p className="text-muted-foreground text-sm leading-relaxed">{info.details}</p>
                          {info.isClickable && (
                            <p className="text-accent text-xs mt-2 font-medium">
                              {info.action === "map" && "Click to view on Google Maps →"}
                              {info.action === "call" && "Click to call directly →"}
                              {info.action === "email" && "Click to send email →"}
                            </p>
                          )}
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>


              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactUs;
