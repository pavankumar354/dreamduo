

import React from 'react';
import '../styles/FeaturedProfiles.css';
import man1 from "../images/man1.jpg" ;
import man2 from "../images/man2.jpg" ;
import man3 from "../images/man3.jpg" ;
import lady1 from "../images/lady1.jpg" ;
import lady2 from "../images/lady2.jpg" ;
import lady3 from "../images/lady3.jpg" ;
import lady4 from "../images/lady4.jpg" ;

const FeaturedProfiles = () => {
  const profiles = [
    {
      name: 'John Doe',
      age: 29,
      profession: 'Software Engineer',
      location: 'New York, USA',
      image: man1,
    },
    {
      name: 'Jane Smith',
      age: 27,
      profession: 'Doctor',
      location: 'Los Angeles, USA',
      image: man2,
    },
    {
      name: 'Sam Wilson',
      age: 30,
      profession: 'Architect',
      location: 'Chicago, USA',
      image: man3,
    },
    {
      name: 'Anna Johnson',
      age: 28,
      profession: 'Teacher',
      location: 'Miami, USA',
      image: man1,
    },
    {
        name: 'Swetha',
        age: 29,
        profession: 'Software Engineer',
        location: 'Hyderabad, Telangana',
        image: lady1,
      },
      {
        name: 'Pravalika Reddy',
        age: 27,
        profession: 'Doctor',
        location: 'Vizag, AP',
        image: lady2,
      },
      {
        name: 'Keerthi sharma',
        age: 30,
        profession: 'Architect',
        location: 'Mumbai, India',
        image: lady3,
      },
      {
        name: 'Samantha',
        age: 28,
        profession: 'Teacher',
        location: 'Jaipur, India',
        image: lady4,
      },
    // Add more profiles as needed
  ];

  return (
    <section className="featured-profiles">
      <h2>Featured Profiles</h2>
      <div className="profiles-wrapper">
        <div className="profiles">
          {profiles.map((profile, index) => (
            <div key={index} className="profile-card">
              <img src={profile.image} alt={profile.name} />
              <h3>{profile.name}</h3>
              <p>Age: {profile.age}</p>
              <p>Profession: {profile.profession}</p>
              <p>Location: {profile.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProfiles;
