import {useState} from "react";
import {Container, Row, Col, Form, Button, Alert, InputGroup} from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../todo.css"

// let tasks = []
const Todo = () => {
    // const [err, setErr] = useState(false);
    const [text, setText] = useState("")
    const [date, setDate] = useState(new Date());
    const [taskId, setTaskId] = useState(0)
    const [tasks, setTasks] = useState([])

    const sortTasks = (tasks) => {
        return tasks.sort((a, b) => {
            if (a.done === b.done) {
                return new Date(a.date) - new Date(b.date)
            } else {
                return a.done ? 1 : -1;
            }
        })
    }

    const handleUpdate = async () => {
        if (text.length > 0) {
            let task = {
                "taskId": taskId,
                "name": text,
                "date": date,
                "done": false
            }
            tasks.push(task)
            setTaskId((taskId) => taskId + 1)
        }

        // tasks = tasks.sort((a, b) => new Date(a.date) - new Date(b.date))
        setTasks((preTasks) => sortTasks(preTasks))
        setText("")
    }


    const handleDone = (taskId) => {
        setTasks((prevTasks) => {
            const updatedTasks = prevTasks.map((task) =>
                task.taskId === taskId ? { ...task, done: true } : task
            );
            // Sort the tasks after updating the done property
            return sortTasks(updatedTasks);
        });
    };

    const remainTask = tasks.filter(task => !task.done).length;

    const updateTaskList =  tasks.map((task, index) => (
            <div key={index}>
                {task.done ? (
                    <Alert variant="success">
                        <Alert.Heading>{task.date.toLocaleDateString()}</Alert.Heading>
                        <p className="task-name">{task.name}</p>
                        <hr/>
                        <p>This task is done!</p>
                    </Alert>
                ) : (
                    <Alert variant="primary">
                        <Alert.Heading>{task.date.toLocaleDateString()}</Alert.Heading>
                        <p className="task-name">{task.name}</p>
                        <hr/>
                        <div className="d-flex justify-content-end">
                            <Button onClick={() => handleDone(task.taskId)} variant="danger">
                                Mark as Done
                            </Button>
                        </div>
                    </Alert>
                )}
            </div>
        ))




    return (

        <Container className='app-container'>
            <h1>To Do List</h1>
            <Row className='prompt-container'>
                <Col>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="Tasks">Task</InputGroup.Text>
                        <Form.Control
                            type="text"
                            placeholder="Write a task here..."
                            aria-label="Tasks"
                            aria-describedby="basic-addon1"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                        />
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <InputGroup.Text id="date">Deadline</InputGroup.Text>
                        <DatePicker
                            selected={date}
                            onChange={(date) => setDate(date)}
                            className="form-control"
                        ></DatePicker>
                    </InputGroup>

                    <Button variant="primary" onClick={handleUpdate}>Submit</Button>
                </Col>
            </Row>
            <Row className='task-container'>
                <p>Tasks remaining: {remainTask}</p>

                <Col>
                    {updateTaskList}
                </Col>


            </Row>
        </Container>
    )
}

export default Todo