import React, { Component } from 'react';

class Edit extends Component {

   constructor(props) {
       super(props);
       this.state = {
           id: this.props.userobject.id,
           name: this.props.userobject.name,
           tel: this.props.userobject.tel,
           permission: this.props.userobject.permission
       }
   }
   
   savebutton = () => {
       var info = {}
       info.id = this.state.id;
       info.name = this.state.name;
       info.tel = this.state.tel;
       info.permission = this.state.permission;
       this.props.changeedit();
       this.props.userobj(info);
   }

    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    }

    render() {
        // console.log(this.state)
        return (
            <form>
                <h2>Sửa user</h2>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Tên user</label>
                    <input type="text" onChange = {(event)=>this.isChange(event)} defaultValue={this.props.userobject.name} name="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Điện thoại</label>
                    <input type="text" onChange={(event) => this.isChange(event)} defaultValue={this.props.userobject.tel} name="tel" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlSelect1">Chọn quyền</label>
                    <select onChange={(event) => this.isChange(event)} defaultValue={this.props.userobject.permission} name="permission" placeholder="chon" className="form-control" id="exampleFormControlSelect1" >
                        <option value="">chon</option>
                        <option value="1">Admin</option>
                        <option value="2">Moderator</option>
                        <option value="3">User Normal</option>
                    </select>
                </div>
                <input type="button" className="btn btn-primary d-block"  value="Luu" onClick={() => this.savebutton()} />
            </form>
        );
    }
}

export default Edit;