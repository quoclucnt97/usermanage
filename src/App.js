import React, {Component} from 'react';
import './App.css';
import Header from './components/Header'
import Search from './components/Search'
import Table from './components/Table'
import Add from './components/Add'
import DataUser from './components/data.json'
const { v4: uuidv4 } = require('uuid');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trangthai: false,
      data: [],
      search:"",
      edit: false,
      userobject: {}

    }
  }

  componentWillMount() {
    if(localStorage.getItem('userdata') === null){
      localStorage.setItem('userdata', JSON.stringify(DataUser));
    }
    else{
      var temp = JSON.parse(localStorage.getItem('userdata'));
      this.setState({
        data: temp
      });
    }
  }

  delete = (iduser) =>{
    // console.log(iduser);
    var tempdata = this.state.data.filter(item => item.id !== iduser)
    this.setState({
      data: tempdata
    });
    localStorage.setItem('userdata',JSON.stringify(tempdata));
  }

  getuserinfo= (info) => {
    // console.log("ok" + info.name);
    this.state.data.forEach((value,key)=>{
      if(value.id === info.id){
        value.name = info.name;
        value.tel = info.tel;
        value.permission = info.permission;
      }
      localStorage.setItem('userdata', JSON.stringify(this.state.data));
    })
  }

  changeedit = () => {
    this.setState({
      edit: !this.state.edit
    })
  }

  edit = (user) => {
    console.log("ok");
    this.setState({
      userobject:user
    });
    console.log(user);
  }

  trangthaidoi = () =>{
    this.setState({
      trangthai: !this.state.trangthai
    })
  }

  check = (db) => {
    this.setState({
      search: db
    })
    
  }

  getnewuser = (name, tel, permission) => {
    var item = {};
    item.id = uuidv4();
    item.name = name;
    item.tel = tel;
    item.permission = permission;
    var items = this.state.data;

    items.push(item);
    console.log(items);

    this.setState({
      data:items
    })
    localStorage.setItem('userdata', JSON.stringify(items));
  }
  
  render(){
    // localStorage.setItem('userdata', JSON.stringify(DataUser));
    var ketqua = [];
    this.state.data.forEach((item)=>{
      if(item.name.indexOf(this.state.search) !== -1){
        ketqua.push(item);
      }
    })
    // console.log(ketqua);
  return (
    <div >
      <Header/>
      <Search getuserinfo = {(info)=>this.getuserinfo(info)} userobject={this.state.userobject} changeedit = {()=>this.changeedit()} edit = {this.state.edit} kn = {(db)=>this.check(db)} ketnoi = {this.state.trangthai} bam = {()=>this.trangthaidoi()}/>
        <div className="container">
        <div className="row">
          <Table del={(iduser)=>this.delete(iduser)} changeedit={() => this.changeedit()}  edit = {(user)=>this.edit(user)} dulieu = {ketqua}/>
          
          <Add add={(name, tel, permission) => this.getnewuser(name, tel, permission)} form={this.state.trangthai} />
          
          
        </div>
      </div>
    </div>
  );
  }
};

export default App;
