import React from 'react'
import Card from '../ui/Card'
import NewMeetupStyle from './NewMeetupForm.module.css'
import { useRef } from 'react'

const NewMeetupForm = () => {

  const titleRef = useRef();
  const imageRef = useRef();
  const addressRef = useRef();
  const descRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleRef.current.value;
    const enteredImage = imageRef.current.value;
    const enteredAddress = addressRef.current.value;
    const enteredDesc = descRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDesc
    };

    console.log(meetupData);
  }

  return (
    <Card>
      <form className={NewMeetupStyle.form} onSubmit={submitHandler}>
        <div className={NewMeetupStyle.control}>
          <label htmlFor='title'>Meetup Title</label>
          <input type='text' required id='title' ref={titleRef} />
        </div>
        
        <div className={NewMeetupStyle.control}>
          <label htmlFor='image'>Meetup Image</label>
          <input type='url' required id='image' ref={imageRef}/>
        </div>
        
        <div className={NewMeetupStyle.control}>
          <label htmlFor='address'>Meetup Address</label>
          <input type='text' required id='address' ref={addressRef}/>
        </div>

        
        <div className={NewMeetupStyle.control}>
          <label htmlFor='description'>Meetup Description</label>
          <textarea id='description' required rows='5' ref={descRef}></textarea>
        </div>

        <div className={NewMeetupStyle.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  )
}

export default NewMeetupForm