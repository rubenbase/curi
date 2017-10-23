const tutorials = [
  {
    name: '01-introduction',
    displayName: 'Part 1: Introduction to Curi'
  },
  {
    name: '02-setup',
    displayName: 'Part 2: Curi Setup'
  },
  {
    name: '03-routes',
    displayName: 'Part 3: Curi Routes'
  },
  {
    name: '04-hickory',
    displayName: 'Part 4: Hickory'
  },
  {
    name: '05-config',
    displayName: 'Part 5: The Curi Configuration Object'
  },
  {
    name: '06-views',
    displayName: 'Part 6: Rendering Views',
    frameworks: ['react', 'vue']
  },
  {
    name: '07-load',
    displayName: 'Part 7: The Load Function'
  },
  {
    name: '08-render-data',
    displayName: 'Part 8: Rendering Data',
    frameworks: ['react', 'vue']
  }
];

export const byName = tutorials.reduce((acc, curr) => {
  if (curr.frameworks) {
    curr.frameworks.forEach(f => {
      acc[`${curr.name}-${f}`] = curr;
    });
  } else {
    acc[curr.name] = curr;
  }
  return acc;
}, {});

export default tutorials;
