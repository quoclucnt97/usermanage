import React, { Component } from 'react';


class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: "",
            tel: "",
            permission: ""
        }
    }

    
    
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        console.log(name);
        console.log(value);
        this.setState({
            [name]: value
        })
        // var item = {};
        // item.id = this.state.id;
        // item.name = this.state.name;
        // item.tel = this.state.tel;
        // item.permission = this.state.permission;
        // console.log(item);
    }

    hienthinut = () => {
        if (this.props.form === true)
            return (
            <div className="col">
                <form>
                    <h2>Thêm mới user</h2>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Tên user</label>
                        <input type="text" name = "name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange = {(event)=>this.isChange(event)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Điện thoại</label>
                            <input type="text" name="tel" className="form-control" id="exampleInputPassword1" onChange={(event) => this.isChange(event)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlSelect1">Chọn quyền</label>
                            <select name="permission" placeholder = "chon" className="form-control" id="exampleFormControlSelect1" onChange={(event) => this.isChange(event)}>
                                <option value="">chon</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                        </select>
                    </div>
                        <input type ="reset" className="btn btn-primary d-block" onClick={(name, tel, permission)=>this.props.add(this.state.name, this.state.tel, this.state.permission)} value ="Them moi"/>
                </form>
            </div>
            )
    }
    
    render() {
        // console.log(this.state)
        return (
            <div>
                {this.hienthinut()}
            </div>
        );
    }
}

export default Add;