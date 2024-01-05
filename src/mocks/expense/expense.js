const members = [
  {
    name: 'Suraj BG',
    userId: '12AZ76',
    imageUrl: 'https://randomuser.me/api/portraits/men/',
    balance: null,
  },
  {
    name: 'Jaya Srikar',
    userId: '13AZ76',
    imageUrl: 'https://randomuser.me/api/portraits/men/',
    balance: 84,
  },
];

export const expense = {
  description: 'Overall, you are owed Rs. 84.00',
  groups: [
    {
      icon: 'https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Bengaluru Homies',
      owes: `${members[1].name} owes you ${members[1].balance}`,
      members,
      createdAt: new Date('2019-03-01T00'),
      id: 'group1',
    },
  ],
};
