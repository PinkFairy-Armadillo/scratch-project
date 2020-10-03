import React from 'react';

const RestaurantsFilter = props => (
  <div className="restaurantButtons">
    <h4>Filter by price segment</h4>
    <button id='lowPrice'>Low price</button>
    <button id='averagePrice'>Medium price</button>
    <button id='Premium'>High price</button>
  </div>
);
//   this.handleClick = this.handleClick.bind(this);
    //   this.handleEmailChange = this.handleEmailChange.bind(this);
    //   this.handleUsernameChange = this.handleUsernameChange.bind(this);
    //   this.handlePasswordChange = this.handlePasswordChange.bind(this);
    
    //   handleClick() {
    //     console.log('Pressed the button');
    //     console.log(this.state)
    //     var url = "http://localhost:3001/signin/";
    //     fetch(url, {
    //       method: "POST",
    //       headers: {
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json'
    //       },
    //       body: JSON.stringify({
    //         "email": this.state.email,
    //         "password": this.state.password,
    //        "username": this.state.username,
    //        "custDev": this.state.custDev
    //       })
    //     })
    //     .then(function (data) {  
    //       console.log('Sign up is completed: ', data);  
    //     })  
    //     .catch(function (error) {  
    //       console.log('Sign up failure: ', error);  
    //     });
    //   }
    
    //   render() {
    //     return (
    //       <div className='formContainer'>
    //          <p id='signup'><span>Sign up</span> to get access to personalised offerings</p>
    //         <form id="loginForm">
    //           <label className='formInput'>Username: </label> <br />
    //           <input type="text" id="user-name" name="user-email" required className='formInput' value={this.state.username} onChange={this.handleUsernameChange}></input><br /> 
    //           <label className='formInput' >E-mail: </label><br />
    //           <input type="text" id="user-email" name="user-email" required className='formInput' value={this.state.email} onChange={this.handleEmailChange}></input><br /> 
    
    //           <label className='formInput'>Password: </label><br />
    //           <input type="password" id="user-password" name="user-password" required className='formInput' value={this.state.password} onChange={this.handlePasswordChange}></input><br /> {/*onChange = {(event,newValue) => this.setState({...this.state, password: newValue})}*/}
    
    //           <input type="checkbox" id="custDevUser" name="custDevUser" required className='formInput'></input>
    //           <label id='note' className='formInput'><em>   Click if you are ready to help us to improve our service</em></label><br />
    //           <button className='formInput' onClick={(event) => this.handleClick(event)}>Submit</button>
    //         </form>
    //       </div>
    //     );
    //   }
    // }


export default RestaurantsFilter;
