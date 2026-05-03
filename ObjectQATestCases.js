let testCases;
testCases = [
  {
    id: 1,
    name: "Login with valid credentials",
    username: "user1",
    password: "pass123",
    expectedResult: "Login successful"
  },
  /*for (let i = 0; i < testCases.length; i++) {
  console.log(testCases[i].name);
  },*/
  {
    id: 2,
    name: "Login with invalid password",
    username: "user1",
    password: "wrongpass",
    expectedResult: "Error message displayed"
  },
  {
    id: 3,
    name: "Empty username",
    username: "",
    password: "pass123",
    expectedResult: "Validation error"
  }
];
console.log(testCases[1].name);