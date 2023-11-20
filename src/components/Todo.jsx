import {useState} from "react";
import {Container, Row, Col, Form, Button, Alert, InputGroup} from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../todo.css"


var tasks = []

const Todo = () => {
    // const [err, setErr] = useState(false);
    const [text, setText] = useState("")
    const [date, setDate] = useState(new Date());


    const handleUpdate = async () => {
        console.log(text)
        console.log(date.toLocaleString())
        if (text.length > 0) {
            let task = {
                "name": text,
                "date": date
            }
            tasks.push(task)
        }

        console.log(tasks)
        // setDate(0)
        setText("")
    }


    const handleDone = async () => {
        // if (text.length > 0) {
        //     let task = {
        //         "name": text,
        //         "date": date
        //     }
        //     tasks.push(task)
        // }
        //
        // console.log(tasks)
        // // setDate(0)
        // setText("")
    }

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
                <Col>
                    {/*{Object.entries(tasks)?.sort((a, b) => a[1].date - b[1].date).map((task, index) => (*/}
                    {/*    <Alert variant="info" key={index}>*/}
                    {/*        <p>{task[1].name} {task[1].date.toLocaleDateString()}</p>*/}
                    {/*    </Alert>*/}
                    {/*))}*/}
                    <ol>
                        {tasks
                            .sort((a, b) => new Date(a.date) - new Date(b.date))
                            .map((task, index) => (
                                <li key={index}>
                                    <Alert variant="primary" key={index}>
                                        <p>{task.date.toLocaleDateString()}: <b>{task.name}</b></p>
                                    </Alert>
                                    <Button variant="danger" onClick={handleDone}>Done</Button>
                                </li>
                            ))}
                    </ol>


                </Col>
                {/*    </Row>*/}
                {/*</Container>*/}


            </Row>
        </Container>
    )
}

export default Todo