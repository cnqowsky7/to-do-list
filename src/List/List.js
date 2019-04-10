import React from 'react';

import './List.css';

const List2 = props => (

    <ul>
        {
            props.items.map((item, index) => <li key={index}>
            {item}

            <div className='icons'>
                <button type="button" className="btn btn-default btn-ok" aria-label="Left Align" onClick={() => {props.handleDone(index)}}>
                    <span className="glyphicon glyphicon-ok" aria-hidden="true"></span>
                </button>

                <div className='between'></div>

                <button id={index} type="button" className="btn btn-default btn-remove" aria-label="Left Align" onClick={() => {props.handleDelete(index)}}>
                    <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
                </button>
            </div>

            </li>)
        }
    </ul>
);

class List extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
            value: '',
            items: []
        };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(index) {
      let {items} = this.state;
      items.splice(index, 1);
      this.setState({...items});
    }

    handleDone(index) {
        var el = document.getElementById(index);
        var el2 = el.parentElement;
        var el3 = el2.parentElement;
        // el3.remove();
        el3.classList.add('green');
        console.log(index);
    }

    handleChange = (event) => {
      this.setState({value: event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            value: '',
            items: [...this.state.items, this.state.value]
        });
    }

    render(){


        return(
        <div className='test'>
            <div className='bg-image'></div>
            <div className='list'>
                <div className='list-content'>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            <p>Dodaj do listy:</p>
                            <input type="text" value={this.state.value} onChange={this.handleChange} required/>
                        </label>
                        <button>Dodaj</button>
                    </form>

                    <div className='toDoList'>
                        <List2 items={this.state.items} handleDelete={this.handleDelete} handleDone={this.handleDone} />
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default List;
