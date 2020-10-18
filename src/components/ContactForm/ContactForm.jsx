import React, { useContext } from 'react';
import {Component} from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';



class ContactForm extends Component {
  constructor(){
    super();
    this.state ={
      isFisished:false,
      isInvalid:false,
      buttonText:"Send",
      message :{
          name:'',
          email:'',
          text:''
          }

    }
    };

    onInputChange =(event,index) =>{
      if(index === 1){
        this.state.message.name = event.target.value;
      }else if(index ===2){
        this.state.message.email = event.target.value;
      }else{
        this.state.message.text = event.target.value;
      }
    }

    validateEmail=(email)=> {    
      var atposition=email.indexOf("@");  
      var dotposition=email.lastIndexOf(".");  
      if (atposition<1 || dotposition<atposition+2 || dotposition+2>=email.length){  
        // alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);  
        return false;  
      }else{return true}  
    }

    sendClicked=()=>{
      if(!this.state.message.name  || ! this.validateEmail(this.state.message.email) || !this.state.message.text ){
        // invalid details
        console.log ("invalid input");
        this.setState (Object.assign(this.state,{isInvalid: true}));
      }else{
        //proceed
        this.setState (Object.assign(this.state,{buttonText : 'Sending....'}));
        //give info

        fetch('https://nodemail-me.herokuapp.com/email',{
          method:'post',
          headers:{ 'Content-Type': 'application/json'},
          body:JSON.stringify({ 
          message:this.state.message
         })
        })
        .then(response => response.json())      
        .then((response)=>{
          if(response === 'done'){
            this.setState (Object.assign(this.state,{isFisished : true}));
          }else{
            this.setState (Object.assign(this.state,{buttonText : 'Oops! Something went wrong.'}));
          }
          console.log(response);
        })
        .catch(err => console.log(err));


      }
    }




    render(){
      if (this.state.isFisished){
        return(
          <section id = "contactThanks">
          <h2> Message send</h2>
          <h1>Thanks for your response</h1>
          </section>
        );
      }else{
        return (
            <section id="contactForm">
              <Container>
                <Fade bottom duration={1000} delay={800} distance="30px">

                <div className="containerf ">  
                  <form id="contactf">
                    <fieldset>
                      <input placeholder="Your name" type="text" tabindex="1" required  
                      onChange={ event => this.onInputChange(event,1)}/>
                    </fieldset>
                    
                    <fieldset>
                      <input placeholder="Your Email Address" type="email" tabindex="2" required 
                      onChange={ event =>  this.onInputChange(event,2)}/>
                    </fieldset>
                    <fieldset>
                      <textarea placeholder="Type your Message Here...." tabindex="5" required  
                      onChange={ event =>  this.onInputChange(event,3)}></textarea>
                    </fieldset>
                    <fieldset>
                        <a
                          target="_blank"
                          name="submit"
                          className="cta-btn cta-btn--resume"
                          onClick ={this.sendClicked}>
                           {this.state.buttonText}
                        </a>
                    </fieldset>
                  </form>
                  {this.state.isInvalid && <h4> * please enter valid details </h4>}
                </div>
                </Fade>
              </Container>
            </section>
        );
      }



    }

  }

export default ContactForm;