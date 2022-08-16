import '../style/Contact.css';
import React, { Component } from "react";
import axios from 'axios';

const API_PATH = 'http://localhost:3000/src/components/form.php';

class Contact extends Component{
    
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            subject: '',
            message: '',
            mailSent: false,
            error: null
        }
    }

    render(){
        return(
            <section id="contact">
                <h2>/Contact me</h2>
                <div className='flexbox'>
                <form id="contactform" action="form.php" method="POST" className='pink-container'>
                    <input type="email" id="email" name="email" 
                    value={this.state.email}
                    onChange={e => this.setState({ email: e.target.value })}
                    placeholder='Your email address' required/>

                    <input id="subject" name="subject" 
                    value={this.state.subject}
                    onChange={e => this.setState({ subject: e.target.value })}
                    placeholder='The subject' required />

                    <textarea id="message" name="message" 
                    value={this.state.message}
                    onChange={e => this.setState({ message: e.target.value })}
                    placeholder='Type your message here' required></textarea>

                    <input type="submit" onClick={e => this.handleFormSubmit(e)} className='pink-button' value="Send"/>
                    <div className='alert'>
                        {this.state.mailSent &&
                        <p>Your message has been sent. I will answer as soon as possible. Thank you!</p>
                        }
                    </div>
                </form>
                    <article className='socialMedia blue-container'>
                        <a href="https://mastodon.art/@Artmejisuto7"><i class="fa-brands fa-mastodon"></i></a>
                        <a href="https://www.artstation.com/amejisuto7"><i class="fa-brands fa-artstation"></i></a>
                        <a href="https://twitter.com/AloisDuPerigord"><i class="fa-brands fa-twitter"></i></a>
                        <a href="https://t.me/aloisduperigord"><i class="fa-brands fa-telegram"></i></a>
                        <a href="https://utip.io/alexandrovitch"><i class="fa-brands fa-gratipay"></i></a>
                    </article>
                </div>
            </section>
        );
    }

    handleFormSubmit( event ) {
        event.preventDefault();
        axios({
          method: 'post',
          url: `${API_PATH}`,
          headers: { 'content-type': 'application/json' },
          data: this.state
        })
          .then(result => {
            this.setState({
              mailSent: result.data.sent
            })
          })
          .catch(error => this.setState({ error: error.message }));
    }
};

export default Contact