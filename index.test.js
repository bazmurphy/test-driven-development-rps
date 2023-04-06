// it 1st parameter = one sentence describing our expectation
// it 2nd parameter = the body of the test as a function
// it("should work", () => {
//   // inside the body we ESTABLISH OUR EXPECTATIONS
//   const left = 1;
//   s;
//   const right = 2;

//   const result = left + right;

//   expect(result).toBe(3);
// });

// ARRANGE (sometimes known as "GIVEN")
// set up the preconditions for our test, in this case two initial values.

// ACT (or "WHEN")
// do some work, in this case adding them together. This is what we're actually testing.

// ASSERT (or "THEN")
// make sure that the work was done correctly. The expect function is also provided by Jest; it takes the value we want to check and returns an object with a lot of helpful matcher methods to describe our expectations of it. Again the naming convention allows us to write out a simple sentence: "expect result to be 3".

// 
function rps() {
  return "left";
};

describe("rock, paper, scissors", () => {
  // describe. This registers a group of tests, usually referred to as a "suite"
  // it takes a name and a function, then our individual tests are registered inside that function.
  it("should say left wins rock vs. scissors", () => {

    // Our first test is that, given that left is "rock" and right is "scissors" ("Arrange")
    const left = "rock";
    const right = "scissors";

    // when the shapes are compared ("Act")
    const outcome = rps(left, right);

    // then the winner should be "left" ("Assert") because rock blunts scissors
    expect(outcome).toBe("left");
  });
});

