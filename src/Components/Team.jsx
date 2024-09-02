import React from 'react';

const Team = () => {
  const teamMembers = [
    {
      name: 'Arghadeep Das (22AE10003)',
      role: 'CAD',
    },
    {
      name: 'Arghyadip Mondal (22AE10004)',
      role: 'CAD & CFD',
    },
    {
      name: 'Ishaan Sharma (22AE10013)',
      role: 'CFD & Documentation',
    },
    {
      name: 'Kalavakunta Kalyani (22AE10017)',
      role: 'CFD',
    },
    {
      name: 'Subhro Halder (22AE10039)',
      role: 'CFD',
    },
    {
      name: 'Milan Kumar (22AE30020)',
      role: 'CAD',
    },
    {
      name: 'Satvik Jaiswal (22AE30025)',
      role: 'CAD & CFD',
    },
    // Add more team members as needed
  ];

  return (
    <section id="team" className="bg-gray-100 text-gray-900 p-8">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">Meet the Team</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white p-4 shadow-lg rounded">
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="mb-4">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
