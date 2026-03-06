import List from "./List";

function App() {
  const fruits = [
    { id: 1, name: "apple", calories: 95 },
    { id: 2, name: "orange", calories: 102 },
    { id: 3, name: "banana", calories: 201 },
    { id: 4, name: "papaya", calories: 150 },
    { id: 5, name: "pineapple", calories: 85 },
  ];

  const vegetables = [
    { id: 6, name: "potatoes", calories: 195 },
    { id: 7, name: "brinjal", calories: 212 },
    { id: 8, name: "tomato", calories: 20 },
    { id: 9, name: "spinach", calories: 23 },
    { id: 10, name: "mushroom", calories: 22 },
  ];

  return (
    <>
      {fruits.length > 0 ? (
        <List items={fruits} category="Fruits" />
      ) : (
        "NO FRUITS"
      )}
      <hr />
      {vegetables.length > 0 ? (
        <List items={vegetables} category="Vegetables" />
      ) : (
        "NO VEGETABLES"
      )}
    </>
  );
}

// List.propTypes = {
//   category: PropTypes.string,
//   items: PropTypes.array(
//     PropTypes.shape({
//       id: PropTypes.number,
//       name: PropTypes.string,
//       calories: PropTypes.number,
//     }),
//   ),
// };

List.defaultProps = {
  category: "Category",
  items: [],
};

export default App;
