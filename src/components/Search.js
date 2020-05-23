import React, { Component } from 'react';
import Edit from './Edit';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trunggian: "",
            userobj: {}
        }
    }

    getuseredit = (info) => {
        this.setState({
            userobj: info
        });
        this.props.getuserinfo(info);
    }

    isShowedit = ()=> {
        if(this.props.edit === true)
            return <Edit userobj ={(info)=>this.getuseredit(info)} userobject={this.props.userobject} changeedit = {()=> this.props.changeedit()}/>
    }

    isChange = (event) => {
        console.log(event.target.value);
        this.setState({
            trunggian: event.target.value
        })
        this.props.kn(this.state.trunggian);
    }
    
    hienthinut = () => {
        if (this.props.ketnoi === true)
            return <div className="btn btn-secondary" onClick={this.props.bam} >Dong</div>
        else
            return <div className="btn btn-primary" onClick={this.props.bam} >Them moi</div>
    }
    render() {
        
        return (
                <div className="container">
                    <div className="row">
                        <div className="col-sm-8">
                            {this.isShowedit()}
                            
                            <div className="btn btn-group" style={{ width: '600px' }}>
                                <input type="text" onChange={(event)=>this.isChange(event)}  className="form-control" id="exampleFormControlInput1" placeholder="tu khoa" />
                                <button type="submit" onClick={(db) => this.props.kn(this.state.trunggian)} className="btn btn-primary mb-2">Tim</button>

                            </div>
                            </div>
                        <div className="col-sm-4">
                        <div className="btn btn-group" style={{ width: '200px' }}>
                            {this.hienthinut()}
                        </div>
                        </div>    
                        </div>
                    </div>
                
        );
    }
}

export default Search;