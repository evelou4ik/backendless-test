export default function DummyList() {
  return (
    <ul>
      {namesArray.map((el) => (
        <li key={el}>{el}</li>
      ))}
    </ul>
  );
}

const namesArray = ["Alex", "John", "Denis", "Philip"];
