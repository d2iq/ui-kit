const MockTable = {
  columns: [
    {
      className: "name",
      heading: "Name",
      prop: "name",
      sortable: false
    },
    {
      className: "age",
      heading: "Age",
      prop: "age",
      sortable: false
    },
    {
      className: "location",
      defaultContent: "None Specified",
      heading: "Location",
      prop: "location",
      sortable: false
    },
    {
      className: "gender",
      heading: "Gender",
      prop: "gender",
      sortable: false
    }
  ],
  rows: [
    {
      name: "Zach",
      age: "11",
      gender: "Male",
      location: "San Francisco, CA",
      id: "a"
    },
    {
      name: "Francis",
      age: "34",
      gender: "Female",
      location: "Boston, MA",
      id: "b"
    },
    {
      name: "Sandy",
      age: "68",
      gender: "Female",
      location: "Kalamazoo, MI",
      id: "c"
    },
    {
      name: "Jeffrey",
      age: "21",
      gender: "Male",
      id: "d"
    },
    {
      name: "Louise",
      age: "94",
      gender: "Female",
      location: "Boulder, CO",
      id: "e"
    }
  ]
};

export default MockTable;
