import React from "react";

class Item extends React.Component {
    render() {
        return (
            <div class="container">
                <div className="row">
                    <div className="col-8">
                        {this.props.text}
                    </div>
                    <div className="col-2">
                        <button className="btn btn-info">Delete</button>

                    </div>
                    <div className="col-2">
                        <button className="btn btn-light">Complete</button>

                    </div>
                </div>
            </div>
        )
    };
}
export default Item;