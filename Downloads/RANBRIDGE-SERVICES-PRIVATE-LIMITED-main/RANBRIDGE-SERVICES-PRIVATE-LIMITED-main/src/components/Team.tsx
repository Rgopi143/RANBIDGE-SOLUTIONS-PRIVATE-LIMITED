import { Linkedin, Github } from 'lucide-react';

const Team = () => {
  const teamMembers = [
      {
      name: 'R. Gopinath Reddy',
      role: 'Founder & CEO',
      image: 'https://ik.imagekit.io/hgirrih1k/My%20New%20Image.webp?updatedAt=1754487287244',
      bio: 'Visionary founder leading RANBRIDGE SERVICES with expertise in comprehensive IT solutions and digital transformation.',
      linkedin: 'https://www.linkedin.com/in/r-gopinathreddy-reddyvari-8a0a1a324?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B9jlQoMfAT0mQzxv5jvStDA%3D%3D',
      github: 'https://github.com/Rgopi143',
      portfolio: 'https://new-portfolio-ie52.onrender.com',
    },
    {
      name: 'N.V.S.A.G. Prakash',
      role: 'Co-Founder & CTO',
      image: 'https://ik.imagekit.io/76tcs71lul/prakash%20-%20CTO.png?updatedAt=1760547442154',
      bio: 'Co-founder driving technical excellence across all IT services, from web development to AI-powered solutions.',
      linkedin: 'https://www.linkedin.com/in/narayanam-v-s-a-g-prakash-7aab93328?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BW2We9JIgSPScDIWmh%2BzqFQ%3D%3D',
      github: 'https://github.com/PrakashNarayanam',
      portfolio: 'https://prakashnarayanam.github.io/Prakash-s-Portfolio/',
    },
    {
      name: 'A. Naga Ravindra',
      role: 'Director - Technology',
      image: 'https://ik.imagekit.io/lg14qfjkg/WhatsApp%20Image%202025-11-04%20at%2010.04.54_1166cd51.jpg',
      bio: 'Technology director overseeing mobile app development, cloud services, and enterprise solutions.',
      linkedin: 'https://www.linkedin.com/in/naga-ravindra-alla?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BuKSOR9h%2FQEqBt2Ars5bPQw%3D%3D',
      github: 'https://github.com/Ravindra-alla',
      portfolio: 'https://ravindra-alla.github.io/Ravi-portfolio/',
    },
    {
      name: 'B. Varun Sandesh',
      role: 'Director - Operations',
      image: '/varun-operational-head.jpg',
      bio: 'Operations director ensuring seamless project delivery and client satisfaction across all IT services.',
      linkedin: 'https://www.linkedin.com/in/varun-sandesh-bokka-15b860325?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BGUmH0ThrQ%2BWIa4KBKPkSkA%3D%3D',
      github: 'https://github.com/varun313-git',
      portfolio: 'https://varun313-git.github.io/portfolio/',
    }
  ];

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet Our <span className="text-blue-600">Team</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate professionals dedicated to delivering exceptional results and driving innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full"
            >
              <div className="relative overflow-hidden h-64 flex items-center justify-center bg-gray-100">
                <div className="w-full h-full overflow-hidden">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://via.placeholder.com/300x300?text=Team+Member';
                    }}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Social Links */}
                <div className="absolute bottom-4 left-4 flex space-x-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <a
                    href={member.linkedin ? member.linkedin : '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-300"
                  >
                    <Linkedin size={16} />
                  </a>
                  <a
                    href={member.github ? member.github : '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-300"
                  >
                    <Github size={16} />
                  </a>
                </div>
              </div>
              
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors duration-300">{member.name}</h3>
                {member.portfolio ? (
                  <a
                    href={member.portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 font-semibold mb-3 hover:text-blue-800 cursor-pointer"
                    title={`View ${member.name}'s Portfolio`}
                  >
                    {member.role}
                  </a>
                ) : (
                  <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
                )}
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;