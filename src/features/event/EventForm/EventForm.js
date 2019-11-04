import React, { Component } from 'react'
import { Segment, Form, Button } from 'semantic-ui-react'

export default class EventForm extends Component {
    state = {
        title: '',
        date: '',
        city: '',
        venue: '',
        hosteBy:''
    }
    componentDidMount(){
        if(this.props.selectedEvent !== null){
            this.setState({
                ...this.props.selectedEvent
            })
        }
    }
    handleFormSubmit = (evt) =>{
        evt.preventDefault();
        if (this.state.id){
            this.props.updateEvent(this.state);
        }else{
            this.props.createEvent(this.state);
        }
        
    }

    
    handleInputChange = ({target:{name,value}}) =>{
        this.setState({
            [name]: value
        })
    }
    render() {
        const {cancelFormOpen} = this.props;
        const {title, date, city, venue, hosteBy} = this.state;
        return (
                 <Segment>
                   <Form onSubmit = {this.handleFormSubmit} autoComplete = 'off'>
                     <Form.Field>
                       <label>Event Title</label>
                       <input 
                       name = 'title'
                       onChange = {this.handleInputChange} 
                       value = {title} 
                       placeholder="Event Name" />
                     </Form.Field>
                     <Form.Field>
                       <label>Event Date</label>
                       <input  type = 'date'
                       onChange = {this.handleInputChange} 
                       value = {date} 
                       placeholder="Event Date" />
                     </Form.Field>
                     <Form.Field>
                       <label>City</label>
                       <input name = 'city'
                       onChange = {this.handleInputChange} 
                       value = {city} 
                       placeholder="City event is taking place" />
                     </Form.Field>
                     <Form.Field>
                       <label>Venue</label>
                       <input name = 'venue'
                       onChange = {this.handleInputChange} 
                       value = {venue} placeholder="Enter the Venue of the event" />
                     </Form.Field>
                     <Form.Field>
                       <label>Hosted By</label>
                       <input name = 'hosteBy'
                       onChange = {this.handleInputChange} 
                       value = {hosteBy} placeholder="Enter the name of person hosting" />
                     </Form.Field>



                     <Button.Group>
                            <Button positive>Submit</Button>
                            <Button.Or />
                            <Button onClick = {cancelFormOpen}>Cancel</Button>
                        </Button.Group>
                     
                     
                   </Form>
                 </Segment>
        )
    }
}
