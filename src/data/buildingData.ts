interface Building {
  name: string;
  menu: string[];
}

// eslint-disable-next-line import/prefer-default-export
export const buildings: { [key: string]: Building } = {
  '1': {
    name: 'Market',
    menu: ['Buy Goods', 'Sell Goods', 'Invest', 'Market Rate'],
  },
  '2': {
    name: 'Pub',
    menu: [
      'Recruit Crew',
      'Dismiss Crew',
      'Treat',
      'Meet',
      'Waitress',
      'Gamble',
    ],
  },
  '3': {
    name: 'Shipyard',
    menu: ['New Ship', 'Used Ship', 'Repair', 'Sell', 'Remodel', 'Invest'],
  },
  '4': {
    name: 'Harbor',
    menu: ['Sail', 'Supply', 'Moor'],
  },
  '5': {
    name: 'Lodge',
    menu: ['Check In', 'Gossip', 'Port Info'],
  },
  '6': {
    name: 'Palace',
    menu: ['Meet Ruler', 'Defect', 'Gold', 'Ship'],
  },
  '7': {
    name: 'Guild',
    menu: ['Job Assignment', 'Country Info'],
  },
  '8': {
    name: 'Misc',
    menu: [],
  },
  '9': {
    name: 'Bank',
    menu: ['Deposit', 'Withdraw', 'Borrow', 'Repay'],
  },
  '10': {
    name: 'Item Shop',
    menu: ['Buy', 'Sell'],
  },
  '11': {
    name: 'Church',
    menu: ['Pray', 'Donate'],
  },
  '12': {
    name: 'Fortune Teller',
    menu: ['Life', 'Career', 'Love', 'Mates'],
  },
};
