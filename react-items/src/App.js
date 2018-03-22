import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

class Item extends Component {
  static propTypes = {
    pic: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    open: PropTypes.func.isRequired,
    openM: PropTypes.func.isRequired
  };
  render() {
    return (
      <div className="item">
        <img src={this.props.pic} alt={this.props.name} width="150"/>
        <h2>{this.props.name}</h2>
        <p>${this.props.price}</p>
        <ButtonDescription 
          open={this.props.open}
        />
        <ButtonBuy 
          openM={this.props.openM}
        />
      </div>
    );
  }
}

class Input extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
  };
  render() {
    return (
      <input type="text" className="inp" onChange={this.props.onChange} />
    );
  }
}

class ButtonDescription extends Component {
  static propTypes = {
    open: PropTypes.func.isRequired
  };
  render() {
    return (
      <button className="desc" onClick={this.props.open}>Description</button>
    );
  }
}

class ButtonBuy extends Component {
  static propTypes = {
    openM: PropTypes.func.isRequired,
  };
  render() {
    return (
      <button className="buy" onClick={this.props.openM}>Buy</button>
    );
  }
}

class Cart extends Component {
  static propTypes = {
    name: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ]).isRequired
  };
  render() {
    return (
      <div className="cart">{this.props.name}</div>
    );
  }
}

class Modal extends Component {
  static propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool,
    name: PropTypes.string,
    description: PropTypes.string
  };
  render() {
    // will not render if "show" prop is false
    if (!this.props.show) {
      return null;
    }
    return (
      <div className="modal">
        <div className="modal-content">
          <button onClick={this.props.onClose}>X</button>
          <h1>{this.props.name}</h1>
          <p>{this.props.description}</p>
        </div>
      </div>
    );
  }
}

class ModalBuy extends Component {
  static propTypes = {
    onClose: PropTypes.func.isRequired,
    name: PropTypes.string,
    showModBuy: PropTypes.bool,
    buy: PropTypes.func
  };
  render() {
    if (!this.props.showModBuy) {
      return null;
    }
    return (
      <div className="modal">
        <div className="modal-content">
          <button onClick={this.props.onClose}>X</button>
          <h3>Do you really want to buy <i>{this.props.name}</i>?</h3>
          <button className="yes" onClick={this.props.buy}>Yes!</button>
          <button className="no" onClick={this.props.onClose}>No!</button>
        </div>
      </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showIt: false,
      isOpenModBuy: false,
      isOpen: false,
      item: "",
      newItems: [],
      items: [
        {'name': 'Sony', 'description': 'Lorem ipsum dolor sit amet.', 'price': 25, 'pic': 'images/sony.jpg'},
        {'name': 'Huawei', 'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing.', 'price': 35, 'pic': 'images/huawei.jpg'},
        {'name': 'Samsung', 'description': 'Lorem ipsum dolor.', 'price': 12, 'pic': 'images/samsung.png'}
      ],
      itemsInCart: [],
      cart: "cart is empty"
    };
  }
  componentWillMount() {
    this.setState({
      newItems: this.state.items
    });
  }
  addToCart = (item) => {
    let cart = this.state.itemsInCart;
    cart.push(item);
    this.setState({
      itemsInCart: cart,
      isOpenModBuy: !this.state.isOpenModBuy,
      cart: this.state.itemsInCart.length
    });
  };
  toggleItem = (e) => {
    let newItems = this.state.items.filter((item) => {
      return item.name.toLowerCase().search(
        e.target.value.toLowerCase()) !== -1;
    });
    this.setState({
      newItems: newItems
    });
  };
  toggleModal = (item) => {
    this.setState({
      isOpen: !this.state.isOpen,
      item: item
    });
  };
  toggleModalBuy = (item) => {
    this.setState({
      isOpenModBuy: !this.state.isOpenModBuy,
      item: item
    });
  };
  render() {
    return (
      <div>
        <div className="search-cart">
          <Input 
            showItem = {this.state.showIt}
            onChange = {e => this.toggleItem(e)}
          />
          <Cart
            name = {this.state.cart}
          />
        </div>
        {this.state.newItems.map((item, i) => {
          return (
            <div key = {i}>
              <Item 
                pic   = {item.pic}
                name  = {item.name}
                price = {item.price}
                open  = {() => this.toggleModal(item)}
                openM = {() => this.toggleModalBuy(item)}
              />
            </div>
          );
        })}
        <Modal
          show        = {this.state.isOpen}
          onClose     = {this.toggleModal}
          name        = {this.state.item.name}
          description = {this.state.item.description}
        />
        <ModalBuy
          showModBuy  = {this.state.isOpenModBuy}
          onClose     = {this.toggleModalBuy}
          name        = {this.state.item.name}
          buy         = {() => this.addToCart(this.state.item)}
        />
      </div>
    )
  }
}

export default App;
