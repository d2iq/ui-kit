export const items = [
  {
    name: "Brian Vaughn",
    role: "Software Engineer",
    city: "San Jose",
    state: "CA",
    zipcode: 95125
  },
  {
    name: "Jon Doe",
    role: "Product engineer",
    city: "Mountain View",
    state: "CA",
    zipcode: 95125
  },
  {
    name: "Jane Doe",
    role: "UX Designer",
    city: "San Francisco",
    state: "CA",
    zipcode: 95125
  }
];

export const width = ({ width: totalWidth }: { width?: number }) =>
  totalWidth ? totalWidth * 0.3 : 100;
