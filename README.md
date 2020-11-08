# Paras

Paras is a collection of ready to used UI component for reactjs

## How to install

Install Paras using npm

```bash
npm install github:FandiAR/paras
```

### Notes

```
Currently this package is on development stage and not yet publish. 
Use github instead to install this package
```

## Simple Usage

```javascript
import './App.css';
import { Page } from 'paras/dist/page'

function App() {
  return (
    <div className="App">
      <Page
        onCreateAccount={() => {}}
        onLogin={function noRefCheck() {}}
        onLogout={function noRefCheck() {}}
        user={{}}
      />
    </div>
  );
}

export default App;
```

## See Paras In Action
1. Clone this repo with following commands:

    ```bash
    git clone https://github.com/FandiAR/paras.git
    ```
2. Move to batixoft directory 

    ```bash
    cd paras
    ```
3. Run npm install 

    ```bash
    npm install
    ```
4. Run apps 

    ```bash
    npm run storybook
    ```
5. Open browser with the following url 

    http://localhost:6006

## Contributors
1. [Fandi AR](https://github.com/FandiAR)
2. [Mario Raspiantoro](https://github.com/raspiantoro)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.