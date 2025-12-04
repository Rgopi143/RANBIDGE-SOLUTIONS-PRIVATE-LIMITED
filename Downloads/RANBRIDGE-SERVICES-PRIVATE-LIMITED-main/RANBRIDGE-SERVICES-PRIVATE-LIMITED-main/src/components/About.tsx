import * as React from 'react';
import { Target, Users, Award, TrendingUp } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, number: '10+', label: 'Happy Clients' },
    { icon: Award, number: '1', label: 'Years Experience' },
    { icon: TrendingUp, number: '98%', label: 'Success Rate' },
    { icon: Target, number: '10+', label: 'Projects Completed' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About <span className="text-blue-600">RANBRIDGE SERVICES</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted partner for comprehensive IT services and digital transformation solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Complete IT Solutions Under One Roof
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              RANBRIDGE SERVICES PRIVATE LIMITED specializes in delivering comprehensive IT services 
              that bridge the gap between innovation and real-world impact. From custom web applications 
              to AI-powered solutions, we provide everything your business needs to thrive digitally.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Our expertise spans across modern technology stacks including MERN, MEAN, LAMP, mobile 
              development with Flutter and React Native, cloud services, and cutting-edge AI solutions. 
              We're your one-stop destination for all online IT services.
            </p>
            <a href="#team">
              <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300">
                Learn More About Us
              </button>
            </a>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Team collaboration"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-lg opacity-20"></div>
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg opacity-20"></div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                <stat.icon className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;