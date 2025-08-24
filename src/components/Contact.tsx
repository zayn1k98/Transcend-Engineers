import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
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
    <section id="contact" className="py-24 surface-elevated">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-glow">Get In</span>
            <span className="gradient-title ml-4">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your project? Contact us today for a consultation and quote
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">

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
  );
};

export default Contact;