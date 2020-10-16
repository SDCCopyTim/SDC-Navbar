import React from 'react';

let aboutDropdownList = [
  {
    id: 1,
    itemName: 'About us'
  },
  {
    id: 2,
    itemName: 'Our Values'
  },
  {
    id: 3,
    itemName: 'Careers'
  },
  {
    id: 4,
    itemName: 'Journal'
  },
  {
    id: 5,
    itemName: 'Help & FAQ'
  }
];

const AboutDropdown = (props) => {

  return (
    <ul className="nav-about-list" >
      {aboutDropdownList.map((item, index) => {
        return (
          <li key={index}>
            <div className="nav-about-list-item">{item.itemName}</div>
          </li>
        );
      })}
    </ul>
  );
};

export default AboutDropdown;