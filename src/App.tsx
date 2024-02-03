import { useRef } from "react";
import Button from "./component/Button";
import Container from "./component/Container";
import Input from "./component/Input";
import Form from "./component/Form";

function App() {
  // const refInput = useRef<HTMLInputElement>(null);

  const handleSave = (data: unknown) => {
    // data type of unknown because i don't know the inputs i add it in the Form
    const extractedData = data as {
      name: string;
      age: string;
      password: string;
    };
    console.log(extractedData);
  };

  return (
    <main>
      <h1>Let's get started!</h1>
      <Form onSave={handleSave}>
        <Input id="name" label="Enter Your Name" type="text" />
        <Input id="age" label="Enter Your age" type="text" />
        <Input id="password" label="Password:" type="password" />
        <p>
          <Button element="button">Submit</Button>
        </p>
      </Form>

      {/* // ---------------------------------------- */}
      {/* <p>
        <Button element="anchor" href="https://google.com" className="button">
         
          A link
        </Button>
      </p>

      <p>
        <Button element="button" className="button">
          A button
        </Button>
      </p> */}
      {/* --------------------------------------------------  */}

      {/* <Container as="button">Hello</Container> */}
    </main>
  );
}

export default App;
