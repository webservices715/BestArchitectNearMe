import React, { useState } from "react";
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
    social: [
      { platform: "Facebook", url: "https://facebook.com" },
      { platform: "Twitter", url: "https://twitter.com" },
      { platform: "LinkedIn", url: "https://linkedin.com" },
    ],
  },
];

const Architects = () => {
  const [searchQueryCountry, setSearchQueryCountry] = useState("");
  const [searchQueryState, setSearchQueryState] = useState("");
  const [searchQueryCity, setSearchQueryCity] = useState("");

  const handleSearchChangeCountry = (e) => {
    setSearchQueryCountry(e.target.value);
  };

  const handleSearchChangeState = (e) => {
    setSearchQueryState(e.target.value);
  };

  const handleSearchChangeCity = (e) => {
    setSearchQueryCity(e.target.value);
  };

  const filteredArchitects = architects.filter((architect) => {
    return (
      architect.country
        .toLowerCase()
        .includes(searchQueryCountry.toLowerCase()) &&
      architect.state.toLowerCase().includes(searchQueryState.toLowerCase()) &&
      architect.city.toLowerCase().includes(searchQueryCity.toLowerCase())
    );
  });

  return (
    <div className="container lg:px-10 px-2 py-32">
      <div className="mb-8  lg:p-12 p-4 bg-teal-500 text-white  -skew-y-1 ">
        <div class="flex flex-col items-center py-8 text-center lg:py-12">
          <div class="w-full px-4 lg:w-[90%] lg:px-0">
            <div class="mb-8">
              <h2 class="text-3xl lg:text-4xl font-bold mb-3">
                Looking for an Architect?
              </h2>
              <p class="text-lg lg:text-xl opacity-80">
                Search the forum for the answer to your question
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3   gap-4">
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
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-4">
        {filteredArchitects.map((architect) => (
          <ArchitectCard key={architect.name} {...architect} />
        ))}
      </div>
    </div>
  );
};

export default Architects;
