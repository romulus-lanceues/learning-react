//Creating an object in JS

const person = {
  name: "John Doe",
  address: {
    street: "123 Smell my feet St.",
    city: "I'm from the city",
    state: "CA",
    zip: "90210",
  },
  artists: ["Drake", "Kendrick Lamar", "J. Cole"],
  printSomething: () => {
    person.artists.map((artist) => console.log(artist));

    return person.name;
  },
};

export default function LearningJavascript() {
  return (
    <div>
      <h1>{person.printSomething()}</h1>
      <h2>{person.address.city}</h2>
      <h2>{person.artists[0]}</h2>
    </div>
  );
}
