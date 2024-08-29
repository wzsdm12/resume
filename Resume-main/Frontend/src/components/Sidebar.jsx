/* eslint-disable react/prop-types */

const Sidebar = ({ sections, currentSection, setCurrentSection }) => {
    return (
      <div className="w-64 bg-gray-100 p-4">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`p-2 my-2 bg-white border ${currentSection === index ? 'border-purple-700 font-bold' : 'border-gray-300'} cursor-pointer`}
            onClick={() => setCurrentSection(index)}
          >
            {section}
          </div>
        ))}
      </div>
    );
  };
  
  export default Sidebar;
  