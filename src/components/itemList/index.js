import React, {Component} from "react";
import Item from './item';

class ItemList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            itemLabel: '',
            itemList: []
        }
    }

    addItem = () => {
        if (!this.state.itemLabel) {
            return;
        }
        let itemList = this.state.itemList;

        itemList.push({
            label: this.state.itemLabel
        });

        this.setState({
            itemList,
            itemLabel: ''
        })

    }

    handleChange = e => {
        this.setState({
            itemLabel: e.target.value
        });
    }
    getListItems = () => {
        const items = this.state.itemList;

        if (!items.length) {
            return <div className="alert alert-warning">
                Няма нищо добавено
            </div>
        }
        return items.map((item, index) => {
            return <Item key={index} label={item.label}/>
        })


    }

    render() {
        return <>
            <div className="input-group mb-2">
                <input type="text"
                       className="form-control"
                       value={this.state.itemLabel}
                       onChange={this.handleChange}
                />
                <div className="input-group-append">
                    <button
                        onClick={this.addItem}
                        className="btn btn-outline-success"
                        type="button">
                        <i className="fa fa-plus"></i>
                    </button>
                </div>
            </div>
            <ul className="list-group mt-3">
                {this.getListItems()}
            </ul>
        </>

    }
}

export default ItemList;