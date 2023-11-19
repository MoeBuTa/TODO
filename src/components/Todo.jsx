import { useState } from "react";

var tasks = []

const Todo = () => {
  const [err, setErr] = useState(false);
  const [text, setText] = useState("")
  const [date, setDate] = useState(0)


  const handleUpdate = async () => {
    try {
      if (text.length > 0 && date.length > 0) {
        let task = {
          "name": text,
          "date": date
        }
        tasks.push(task)
      } else {
        throw new Error("Error!")
      }
    } catch (err) {
      setErr(true);
    }
    setDate(0)
    setText("")
  }

  return (
    <div className='todo'>
      <h1>To do list</h1>
      <div className='events'>
        <input type="text" name="" id="" placeholder='Type tasks here...' onChange={e => setText(e.target.value)} value={text} />
        <input type="number" name="" id="" onChange={e => setDate(e.target.value)} value={date} min="0" oninput="validity.valid||(value='');" />
        <button onClick={handleUpdate}>write it down</button>
        {err && <span>You have to put correct text and date...</span>}
      </div>
      <div className='tasks'>
        {Object.entries(tasks)?.sort((a, b) => a[1].date - b[1].date).map((tasks) => (
          <div className="taskcontent" >
            <p>{tasks[1].name} {tasks[1].date}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Todo