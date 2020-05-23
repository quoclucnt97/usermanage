import React, { Component } from 'react';
import TableRow from './TableRow';

class Table extends Component {
    delete = (iduser) => {
        this.props.del(iduser);
    }

    truyendulieu = () => 
        this.props.dulieu.map((value,key)=> (
            <TableRow delete ={(iduser)=> this.delete(iduser)} changeedit={() => this.props.changeedit()} editrow = {(user)=>this.props.edit(value)} key ={key} id={value.id} stt={key} sdt = {value.tel} quyen={value.permission} ten = {value.name}/>
        ))
    render() {
        // console.log(this.props.dulieu)
        return (
            <div className="col">
                <table className="table table-striped">
                    <thead className="thead-inverse">
                        <tr>
                            <th>STT</th>
                            <th>Ten</th>
                            <th>Dien thoai</th>
                            <th>Quyen</th>
                            <th>Thao tac</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.truyendulieu()}
                    </tbody>
                </table>
            </div>

        );
    }
}

export default Table;