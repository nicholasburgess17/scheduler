import React from 'react'
import InterviewerList from 'components/interviewerList'
import Button from 'components/Button'

//states to track
// student:String
// interviewer:Number

//form actions
// setStudent:Function
// setInterviewer:Function

//form props
// student:String
// interviewers:Array
// interviewer:Number
// onSave:Function
// onCancel:Function

export default function Form(props){
  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off">
          <input
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            placeholder="Enter Student Name"
            /*
              This must be a controlled component
              your code goes here
            */
          />
        </form>
        <InterviewerList 
          /* your code goes here */
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger /* your code goes here */>Cancel</Button>
          <Button confirm /* your code goes here */>Save</Button>
        </section>
      </section>
    </main>
  )
};