# Interview Scheduler
Scheduler is a single page application built with React. 
Users can create an appointment, edit and delete appointments as they please.
Scheduler updates in real time and upon creation, deletion or edit of an appointment, it will be saved to the database to ensure that your appointment is kept on refresh of the page.

## Dependencies
    "@testing-library/react-hooks": "^8.0.1",
    "axios": "^0.27.2",
    "classnames": "^2.2.6",
    "normalize.css": "^8.0.1",
    "react": "^16.9.0",
    "react-dom": "^16.9.0",
    "react-scripts": "3.4.4"

## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```
## Running Cypress Test Framework

```sh
npm run cypress
```

## Demonstration 

### Editing an appointment
![Editing an appointment](https://github.com/nicholasburgess17/scheduler/blob/master/docs/edit-appoointment.png)

### Saving an appointment
![Saving appointment](https://github.com/nicholasburgess17/scheduler/blob/master/docs/Saving.png)

### Daylist is full, lets delete an appointment
![Daylist is full, lets delete an appointment](https://github.com/nicholasburgess17/scheduler/blob/master/docs/dayList-hover.png)

### Confirm deletion of appointment
![Confirm deletion of appointment](https://github.com/nicholasburgess17/scheduler/blob/master/docs/Delete-confirmation.png)

### Deleting appointment
![deleting appointment](https://github.com/nicholasburgess17/scheduler/blob/master/docs/Deleting.png)

### Homepage with one appontment left on Monday after deletion
![Homepage with one appontment left on Monday after deletion](https://github.com/nicholasburgess17/scheduler/blob/master/docs/homepage.png)

### Daylist
![Daylist](https://github.com/nicholasburgess17/scheduler/blob/master/docs/Daylist.png)