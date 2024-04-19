import {ChangeEvent, useState} from "react";

type Input = {
    name: string,
    age: string,
    email: string
}

function App() {

    const [formData, setFormdata] = useState<Input>({name: "", age: "", email: ""})

    function handleOnChangeName(event: ChangeEvent<HTMLInputElement>) {
        setFormdata({...formData, name: event.target.value})
    }

    function handleOnChangeAge(event: ChangeEvent<HTMLInputElement>) {
        setFormdata({...formData, age: event.target.value})
    }

    function handleOnChangeEmail(event: ChangeEvent<HTMLInputElement>) {
        setFormdata({...formData, email: event.target.value})
    }

    console.log(formData)

  return (
    <>
     <h1>Simple Form with Yup Validation</h1>
        <form>
            <div>
                <label htmlFor={"name"}>Name</label>
                <input onChange={handleOnChangeName} type={"text"} id={"name"} name={"name"}/>
            </div>
        <div>
            <label htmlFor={"age"}>Alter</label>
            <input onChange={handleOnChangeAge} type={"text"} id={"age"} name={"age"}/>
        </div>
            <div>
                <label htmlFor={"email"}>Email</label>
                <input onChange={handleOnChangeEmail} type={"email"} id={"email"} name={"email"}/>
            </div>

        </form>
    </>
  )
}

export default App
