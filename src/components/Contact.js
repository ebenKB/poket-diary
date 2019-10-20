import React from 'react';
import Header from './Header';
import { Button } from 'semantic-ui-react'

class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      selectedUser: null,
    }

    // bind the actions to the class
    this.selectUser = this.selectUser.bind(this);
  }

  selectUser(user){
    console.log('we have selected a user');
    this.setState({
      selectedUser: user,
    })
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then((data) => {
      this.setState({ users: data })
    })
    .catch(console.log)
  }

  render() {
    return(
      <div className="contact-wrapper">
        <div className="left">
        <Header />
          <div className="left-content">
            <ul>
              {
                this.state.users.map((u) => {
                  return <li key={u.id} onClick={() => this.selectUser(u)}>{u.name}</li>
                })
              }
            </ul>
            <div className="action">
              <span>
                <img src="plus.svg" alt="avatar"/>
              </span> Add new 
            </div>
          </div>
        </div>
        <div className="main">
          <div className="contact-wrapper__header">
            {
              this.state.selectedUser === null ? this.state.selectedUser : <h3>{this.state.selectedUser.name}</h3>
            }
          </div>
          <div className="contact-wrapper__content">
            <div className="user-account__details">
              <span className="amount-label">GHC</span>
              <span className="amount-details">123.00</span>
            </div>
            <div className="action">
              <Button primary className="m-r-10">New Payment</Button>
              <Button>New Sale</Button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact;