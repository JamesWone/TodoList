import React from "react"
import ReactDOM from "react-dom"
import {createStore} from "redux"
import Hello from "./components/hello.jsx"

//Reducer函数
function reducer(data, action) {
    switch(action.type){
        case "NAME_PUSH":
            data.names.push(action.value);
            break;
        case "INDEX_DELETE":
            data.names.splice(action.value, 1);
            break;
    }
    console.log(data);
    return data;
}

//初始化Redux状态树
var store = createStore(reducer, {names: ['james', 'stack', 'tom']});

class App extends React.Component {
    render() {
        return (
            <div id="app">
                <Hello store={store}/>
            </div>
        )
    }
}

var render = ()=>{
    ReactDOM.render(<App/>, document.getElementById("root"));
};
render();
//绑定状态树
store.subscribe(render);
