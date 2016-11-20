import React from "react"

export default class Hello extends React.Component {
    constructor(props) {
        super(props);
        this.state = props.data;
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleBtnRemove = this.handleBtnRemove.bind(this);
    }

    handleBtnClick(e) {
        e.preventDefault();
        var text = this.inputNew.value.trim();
        if(text == "" || text == this.state.names[this.state.names.length-1]){
            this.inputNew.value = "";
            return;
        }
        this.props.onPush(text);
        this.inputNew.value = "";
    }

    handleBtnRemove(e){
        e.preventDefault();
        var index = e.target.getAttribute("data-index");
        this.props.onDelete(index);
    }

    render() {
        return (
            <div>
                <table>
                    <tbody>
                    <tr>
                        <td colSpan="2">
                            <form onSubmit={this.handleBtnClick}>
                                <input style={{height: "17px"}} type="text" defaultValue="" ref={input => this.inputNew = input}/>
                                <input type="submit" value="提交"/>
                            </form>
                        </td>
                    </tr>
                    {React.Children.map(this.state.names, (name, index) => {
                        return (
                            <tr>
                                <td style={{width: '172px'}}>{index+1}.&nbsp;{name}</td>
                                <td style={{"text-align": "center"}}><input type="button" onClick={this.handleBtnRemove} data-index={index} value="X"/></td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
        )
    }
}
