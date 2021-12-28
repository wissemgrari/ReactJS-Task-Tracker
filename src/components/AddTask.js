import { useState } from "react"

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert('Please add a task')
      return
    }

    onAdd({ text, day, reminder })

    setText('');
    setDay('');
    setReminder(false);
  }

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className="form-control">
        <label htmlFor="task">Task</label>
        <input type="text"
          id="task"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add Task" />
      </div>
      <div className="form-control">
        <label htmlFor="day">Day & Time</label>
        <input
          type="text"
          id="day"
          value={day}
          onChange={(e) => setDay(e.target.value)}
          placeholder="Add Day & Time" />
      </div>
      <div className="form-control form-control-check">
        <label>Set Reminder</label>
        <input
          type="checkbox"
          value={reminder}
          checked={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>
      <input type="submit" className="btn btn-block" value="Save Task" />
    </form>
  )
}

export default AddTask
