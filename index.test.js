// it 1st parameter = one sentence describing our expectation
// it 2nd parameter = the body of the test as a function
// it("should work", () => {
//   // inside the body we ESTABLISH OUR EXPECTATIONS
//   const left = 1;
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

// We've decided on an interface for our function, what it's going to receive and return;
// We've proved out a test setup that lets us make assertions on the behaviour of that function; and
// We've created the simplest possible implementation for the requirements we've expressed through tests so far, making our code very robust.
// function rps() {
//   return "left";
// };

// We're going to need some kind of conditional logic here, because we return different results in different cases. However, we're supposed to be keeping things simple, so we don't want to leap all the way to a full implementation :
// function rps(left) {
//   return left == "rock" ? "left" : "right";
// }

// We can no longer rely on the value of the first parameter alone, 
// because we have two different outputs where left is "scissors", 
// so we're going to have to also check the right value. For example:
// function rps(left, right) {
//   return left === "rock" ? "left" : (right === "paper" ? "left" : "right");
// }

// a conditional expression inside another conditional expression isn't very clear and we've repeated the "magic value" "left" twice. 
// So now we can refactor, keep the tests passing but change the implementation. For example, how about:
// function rps(left, right) {
//   return left === "rock" || right === "paper" ? "left" : "right";
// }

// write an implementation of the form <condition> ? "left" : "right"; that passes all five tests. 
// Remember: write the code, call the shot, run the test, compare.
// function rps(left, right) {
//   return left === "rock" || right === "paper" || (left === "paper" && right === "rock") ? "left" : "right";
// }

// Now we've reached a point where, however we try to rearrange it, 
// we're forced to be explicit about all of the cases. For example, we might write:
function rps(left, right) {
  return (
    (left === "rock" && right === "scissors")
    || (left === "scissors" && right === "paper")
    || (left === "paper" && right === "rock")
  )
    ? "left"
    : "right";
}

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

  it("should say right wins for scissors vs. rock", () => {
    // flip the shapes around to change the output so we can expect the test to fail
    // Note that the "Act" is the same, but the "Arrange" and "Assert" have changed. 
    const left = "scissors";
    const right = "rock";

    const result = rps(left, right);

    expect(result).toBe("right");
  });

  it("should say left wins for scissors vs. paper", () => {
    const left = "scissors";
    const right = "paper";

    const result = rps(left, right);

    expect(result).toBe("left");
  });

  it("should say right wins for paper vs. scissors", () => {
    const left = "paper";
    const right = "scissors";

    const result = rps(left, right);

    expect(result).toBe("right");
  });

  it("should say left wins for paper vs. rock", () => {
    const left = "paper";
    const right = "rock";

    const result = rps(left, right);

    expect(result).toBe("left");
  });

  it("should say right wins for rock vs. paper", () => {
    const left = "rock";
    const right = "paper";

    const result = rps(left, right);

    expect(result).toBe("right");
  });

});