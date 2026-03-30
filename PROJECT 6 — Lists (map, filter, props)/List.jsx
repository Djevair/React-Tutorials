import PropTypes from 'prop-types'
function List(props){
    const category = props.category;
    const itemList = props.items;
    // const fruits = [{id: 1, name : "banana", calories : 95},{id : 2,name : "apple", calories : 45},{id : 3, name : "orange", calories : 105},{id : 4, name: "coconut", calories : 159},{id : 5, name: "pineapple", calories : 37}];
    // fruits.sort((a,b) => 
    //     a.name.localeCompare(b.name)
    //     // b.name.localeCompare(a.name) REVERSE ALPHABETICA
    // )
    // fruits.sort((a,b) => 
    //     a.calories - b.calories //Numeric
    //     b.calories - a.calories //Reverse Numeric
    // )
    // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
    const listItems = itemList.map(item => <li key={item.id}>{item.name} : &nbsp; {item.calories}</li>);
    return(<><h3>{category}</h3><ol>{listItems}</ol></>);
}
List.propTypes = {
    category : PropTypes.string,
    items : PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number, name : PropTypes.string, calories : PropTypes.number}))
}
List.defaultProps = {
    category : "Category",
}
export default List
