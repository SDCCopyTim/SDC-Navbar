import React from 'react';
import NearMeDropdownColumn from './NearMeDropdownColumn.jsx';

const nearMeDropDownData = [
  {
    title: 'Best Camping Near Me',
    links: [
      '🏕 Tent camping near me',
      '🚐 RV parks near me',
      '🏡 Glamping near me',
      '🏖️ Beach camping near me',
      '🛶 Lake camping near me'
    ]
  },
  {
    title: 'Most Popular Camping States',
    links: [
      'California',
      'Colorado',
      'Florida',
      'Michigan',
      'Maine',
      'New York',
      'Oregon',
      'Pennsylvania',
      'Texas',
      'Utah',
      'Washington',
      'Wisconsin'
    ]
  },
  {
    title: 'Most Popular Camping Cities',
    links: [
      'Asheville',
      'Boise',
      'Colorado Springs',
      'Denver',
      'Houston',
      'Las Vegas',
      'Los Angeles',
      'New York City',
      'Portland',
      'San Diego',
      'San Francisco',
      'Seattle'
    ]
  },
  {
    title: 'Top Searched National Parks',
    links: [
      'Arches National Park',
      'Big Bend National Park',
      'Glacier National Park',
      'Grand Teton National Park',
      'Joshua Tree National Park',
      'Olympic National Park',
      'Redwood National Park',
      'Rocky Mountain National Park',
      'Sequoia National Park',
      'Shenandoah National Park',
      'Yellowstone National Park',
      'Yosemite National Park'
    ]
  }
];

const NearMeDropdown = (props) => {
  return (
    <div className="nav-near-dropdown">
      <div className="nav-near-dropdown-list-container">
        {nearMeDropDownData.map((data, index) => {
          return <NearMeDropdownColumn key={index} title={data.title} links={data.links}/>;
        })}
      </div>
    </div>
  );
};

export default NearMeDropdown;