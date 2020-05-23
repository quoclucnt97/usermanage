import React, { Component } from 'react';

class TableRow extends Component {
    delete = (iduser) => {
        // console.log("da ket noi "+ iduser);
        this.props.delete(iduser);
    }

    showquyen = () => {
        if(this.props.quyen === 1){
            return "Admin";
        }
        else{
            if(this.props.quyen ===2){
                return "Moderator";
            }
            else{
                return "User Normal";
            }
        }
    }

    edituser = () => {
        this.props.editrow();
        this.props.changeedit();
    }
    render() {
        return (
            <tr>
                <td >{this.props.stt+1}</td>
                <td>{this.props.ten}</td>
                <td>{this.props.sdt}</td>
                <td>{this.showquyen()}</td>
                <td>
                    <button className="btn btn-warning" onClick={() => this.edituser()}>
                        <i className="fa fa-pencil" aria-hidden="true"/> Sửa</button>
                    <button className="btn btn-danger" onClick = {(iduser) => this.delete(this.props.id)}>
                        <i className="fa fa-trash" aria-hidden="true"/> Xóa</button>
                </td>
            </tr>
        );
    }
}

export default TableRow;