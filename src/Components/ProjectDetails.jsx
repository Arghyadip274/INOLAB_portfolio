import React from 'react';

const ProjectDetails = () => {
  return (
    <section id="project-details" className="bg-white text-gray-900 p-8">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">Project Details</h2>
        <p>
          The Gel Fuel Injector project involves the following key tasks:
        </p>
        <ul className="list-disc pl-6 mt-4">
          <li>Designing the injector system to handle high-viscosity gel fuels.</li>
          <li>Conducting simulations to optimize flow characteristics.</li>
          <li>Material selection for durability and performance in extreme conditions.</li>
          <li>Prototype development and testing under various operating conditions.</li>
        </ul>
      </div>
    </section>
  );
};

export default ProjectDetails;
