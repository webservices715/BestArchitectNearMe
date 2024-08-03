import React, { useEffect, useState } from "react";
import ArchitectCard from "../components/ArchitectCard";

const architects = [
  {
    image:
      "https://images.pexels.com/photos/110469/pexels-photo-110469.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "John Doe",
    title: "Lead Architect",
    description:
      "John is a visionary architect with over 20 years of experience in sustainable design.",
    rating: 4,
    address: "Dehradun, Uttarakhand",
    phone: "(123) 456-7890",
    country: "India",
    state: "Uttarakhand",
    city: "Dehradun",
    specialties: ["Residential", "Sustainable Design"],
    experience: "20+ years",
    certifications: ["LEED AP"],
    styles: ["Modern", "Contemporary"],
    social: [
      { platform: "Facebook", url: "https://facebook.com" },
      { platform: "Twitter", url: "https://twitter.com" },
      { platform: "LinkedIn", url: "https://linkedin.com" },
    ],
  },
  {
    image:
      "https://images.pexels.com/photos/3333923/pexels-photo-3333923.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Jane Smith",
    title: "Senior Architect",
    description:
      "Jane has a keen eye for detail and has been part of numerous high-profile projects.",
    rating: 5,
    address: "Lucknow, Uttarpradesh",
    phone: "(987) 654-3210",
    country: "India",
    state: "Uttarpradesh",
    city: "Lucknow",
    specialties: ["Commercial", "Interior Design"],
    experience: "15 years",
    certifications: ["AIA Member"],
    styles: ["Industrial", "Minimalist"],
    social: [
      { platform: "Facebook", url: "https://facebook.com" },
      { platform: "Twitter", url: "https://twitter.com" },
      { platform: "LinkedIn", url: "https://linkedin.com" },
    ],
  },
];

const Architects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [searchQueryCountry, setSearchQueryCountry] = useState("");
  const [searchQueryState, setSearchQueryState] = useState("");
  const [searchQueryCity, setSearchQueryCity] = useState("");
  const [searchQuerySpecialty, setSearchQuerySpecialty] = useState("");
  const [searchQueryExperience, setSearchQueryExperience] = useState("");
  const [searchQueryCertification, setSearchQueryCertification] = useState("");
  const [searchQueryStyle, setSearchQueryStyle] = useState("");

  const handleSearchChangeCountry = (e) => {
    setSearchQueryCountry(e.target.value);
  };

  const handleSearchChangeState = (e) => {
    setSearchQueryState(e.target.value);
  };

  const handleSearchChangeCity = (e) => {
    setSearchQueryCity(e.target.value);
  };

  const handleSearchChangeSpecialty = (e) => {
    setSearchQuerySpecialty(e.target.value);
  };

  const handleSearchChangeExperience = (e) => {
    setSearchQueryExperience(e.target.value);
  };

  const handleSearchChangeCertification = (e) => {
    setSearchQueryCertification(e.target.value);
  };

  const handleSearchChangeStyle = (e) => {
    setSearchQueryStyle(e.target.value);
  };

  const filteredArchitects = architects.filter((architect) => {
    return (
      architect.country
        .toLowerCase()
        .includes(searchQueryCountry.toLowerCase()) &&
      architect.state.toLowerCase().includes(searchQueryState.toLowerCase()) &&
      architect.city.toLowerCase().includes(searchQueryCity.toLowerCase()) &&
      architect.specialties
        .join(" ")
        .toLowerCase()
        .includes(searchQuerySpecialty.toLowerCase()) &&
      architect.experience
        .toLowerCase()
        .includes(searchQueryExperience.toLowerCase()) &&
      architect.certifications
        .join(" ")
        .toLowerCase()
        .includes(searchQueryCertification.toLowerCase()) &&
      architect.styles
        .join(" ")
        .toLowerCase()
        .includes(searchQueryStyle.toLowerCase())
    );
  });

  return (
    <div className="container px-2 py-32">
      <div className="mb-8 lg:p-12 p-4 bg-red-500 text-white -skew-y-1">
        <div className="flex flex-col items-center py-8 text-center lg:py-12">
          <div className="w-full px-4 lg:w-[90%] lg:px-0">
            <div className="mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold mb-3">
                Looking for an Architect?
              </h2>
              <p className="text-lg lg:text-xl opacity-80">
                Search the forum for the answer to your question
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="Search by City"
                value={searchQueryCity}
                onChange={handleSearchChangeCity}
                className="w-full rounded-md px-2 py-4 focus:outline-none text-black focus:ring-2 focus:ring-orange-600 focus:border-transparent"
              />
              <input
                type="text"
                placeholder="Search by State"
                value={searchQueryState}
                onChange={handleSearchChangeState}
                className="w-full rounded-md px-2 py-4 focus:outline-none text-black focus:ring-2 focus:ring-orange-600 focus:border-transparent"
              />
              <input
                type="text"
                placeholder="Search by Country"
                value={searchQueryCountry}
                onChange={handleSearchChangeCountry}
                className="w-full rounded-md px-2 py-4 focus:outline-none text-black focus:ring-2 focus:ring-orange-600 focus:border-transparent"
              />
              <select
                value={searchQuerySpecialty}
                onChange={handleSearchChangeSpecialty}
                className="w-full rounded-md px-2 py-4 focus:outline-none text-black focus:ring-2 focus:ring-orange-600 focus:border-transparent"
              >
                <option value="">Select Specialty</option>
                <option value="Residential">Residential</option>
                <option value="Commercial">Commercial</option>
                <option value="Interior Design">Interior Design</option>
                <option value="Landscape">Landscape</option>
                <option value="Sustainable Design">Sustainable Design</option>
              </select>
              <select
                value={searchQueryExperience}
                onChange={handleSearchChangeExperience}
                className="w-full rounded-md px-2 py-4 focus:outline-none text-black focus:ring-2 focus:ring-orange-600 focus:border-transparent"
              >
                <option value="">Select Experience</option>
                <option value="5 years">5 years</option>
                <option value="10 years">10 years</option>
                <option value="15 years">15 years</option>
                <option value="20+ years">20+ years</option>
              </select>
              <select
                value={searchQueryCertification}
                onChange={handleSearchChangeCertification}
                className="w-full rounded-md px-2 py-4 focus:outline-none text-black focus:ring-2 focus:ring-orange-600 focus:border-transparent"
              >
                <option value="">Select Certification</option>
                <option value="LEED AP">LEED AP</option>
                <option value="AIA Member">AIA Member</option>
                <option value="NCARB Certified">NCARB Certified</option>
              </select>
              <select
                value={searchQueryStyle}
                onChange={handleSearchChangeStyle}
                className="w-full rounded-md px-2 py-4 focus:outline-none text-black focus:ring-2 focus:ring-orange-600 focus:border-transparent"
              >
                <option value="">Select Style</option>
                <option value="Modern">Modern</option>
                <option value="Contemporary">Contemporary</option>
                <option value="Industrial">Industrial</option>
                <option value="Minimalist">Minimalist</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-4 lg:px-10">
        {filteredArchitects.map((architect) => (
          <ArchitectCard key={architect.name} {...architect} />
        ))}
      </div>
    </div>
  );
};

export default Architects;
