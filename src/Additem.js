import React from "react";
import "./Additem.css";


class AddItem extends React.Component {
    render () {
        return (
            //JSX is not HTML, react coverts this to JS
<div>
    <input id= "addItemInput" type = "text" class= "col-9"/>
    <button id="addButton">Add</button>
</div>
        );
    }
}
export default AddItem;