import React from "react";
import Collapsible from "./Toggle";

function App() {
  return (
    <Collapsible label="About Us">
      <Collapsible label="How does Parkname seperate itself from other domain name parking companies?">
        <p>
          Lorem ipsum dolor sit amet. Est nisi nemo qui vitae doloremque ea
          excepturi repellat sit autem provident sit distinctio sunt sed magni
          veritatis. Et accusantium inventore non natus officia eos voluptas
          illum At blanditiis sit mollitia harum est quibusdam voluptatem.
        </p>
      </Collapsible>
      <Collapsible label="Is Parkname parking actually free?">
        <p>
          Lorem ipsum dolor sit amet. Est nisi nemo qui vitae doloremque ea
          excepturi repellat sit autem provident sit distinctio sunt sed magni
          veritatis. Et accusantium inventore non natus officia eos voluptas
          illum At blanditiis sit mollitia harum est quibusdam voluptatem.
        </p>
      </Collapsible>
      <Collapsible label="What you do?">
        Lorem ipsum dolor sit amet. Est nisi nemo qui vitae doloremque ea
        excepturi repellat sit autem provident sit distinctio sunt sed magni
        veritatis. Et accusantium inventore non natus officia eos voluptas illum
        At blanditiis sit mollitia harum est quibusdam voluptatem.
      </Collapsible>
      <Collapsible label="When was Parkname first founded?">
        Lorem ipsum dolor sit amet. Est nisi nemo qui vitae doloremque ea
        excepturi repellat sit autem provident sit distinctio sunt sed magni
        veritatis. Et accusantium inventore non natus officia eos voluptas illum
        At blanditiis sit mollitia harum est quibusdam voluptatem.
      </Collapsible>
    </Collapsible>
  );
}

export default App;
