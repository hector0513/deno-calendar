// @deno-types="https://denopkg.com/soremwar/deno_types/react-dom/v16.13.1/server.d.ts"
// @deno-types="https://denopkg.com/soremwar/deno_types/react/v16.13.1/react.d.ts"
import  React  from "https:/jspm.dev/react";



export const App = () => {
    const [count, setCount] =React.useState(0);
    console.log("hola")
    return (
      <div>
        <h1>Hello DenoLand!</h1>
        <button onClick={() => setCount(count + 1)}>Click the 🦕</button>
        <p>You clicked the 🦕 {count} times</p>
      </div>
    );
  };
  