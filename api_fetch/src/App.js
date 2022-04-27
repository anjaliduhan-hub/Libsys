import React from "react";
import './App.css';
class App extends React.Component {
   
  
    constructor(props) {
        super(props);
   
        this.state = {
            items: [],
            DataisLoaded: false
        };
    }
   
   
    componentDidMount() {
        fetch(
"https://type.fit/api/quotes")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
    }
    render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded){ return <div>
            <h1> Pleses wait some time.... </h1> </div> ;
        }
        var len = items.length;
        var idx = Math.floor(Math.random()*len);
        const obj = items[idx];
        
        return (
        <div className = "App">

          <h1>{obj.text}</h1>
          <h2>{obj.author}</h2>
              
        </div>
    );
}
}
   
export default App;