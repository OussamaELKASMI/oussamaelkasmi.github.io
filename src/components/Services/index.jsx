import { AppWindow, ServerCog, TabletSmartphone } from 'lucide-react';
import React from 'react';

const index = () => {
  const services = [
    {
      icon: <AppWindow color="#3B82F6" size={30} />,
      title: 'Web Application Development',
      description:
        "I build fast, scalable, and fully responsive web applications from the ground up using **React/Next.js**. Whether it's a marketing site, a custom dashboard, or a complex e-commerce platform, I deliver modern, clean, and reliable code.",
    },
    {
      icon: <TabletSmartphone color="#3B82F6" size={30} />,
      title: 'Cross-Platform Mobile Apps',
      description:
        'Extend your reach with mobile solutions. I develop cross-platform mobile applications that work seamlessly on both **iOS and Android**. Get a single, clean codebase for a consistent user experience.',
    },
    {
      icon: <ServerCog color="#3B82F6" size={30} />,
      title: 'Full-Stack Solutions & APIs',
      description:
        "From database design to backend API development, I handle the entire technology stack. I ensure a robust, secure, and well-documented server-side architecture to power your application's complex features.",
    },
  ];

  return (
    <section className="CONTAINER bg-gry" id="services">
      <div className="max-w-5xl mx-auto h-fit px-5 t:px-10 d:px-12 py-20 flex flex-col text-center t:text-start">
        <p className="text-2xl pb-4 font-extrabold text-blue">What I Can Do For You 🚀</p>
        <p className="text-lg pb-8">
          As a passionate Full-Stack Developer, I deliver robust, creative, and clean digital
          solutions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-lght-blk rounded-md cursor-default shadow-xl transition duration-300 hover:shadow-2xl hover:scale-[1.02]"
            >
              <div className="w-fit text-4xl mb-4 mx-auto md:mx-0">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-gry">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-lg">
          Ready to turn your idea into a digital reality?
          <a
            href="#contact"
            className="ml-2 font-bold text-blue hover:opacity-80 hover:underline transition duration-150"
          >
            Let's connect!
          </a>
        </div>
      </div>
    </section>
  );
};

export default index;
