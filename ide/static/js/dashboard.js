import React from 'react';
import '../css/dash_style.css';
import Modal from 'react-modal';

class Card extends React.Component {
  render() {
    return(
            <div style={{display: 'inline-block'}}>
              <div className="card" style={{
                background: '#fff', 
                height: 290, 
                width: 240, 
                borderRadius: 30, 
                display: 'inline-block', 
                margin: 20, 
                boxShadow: '0 2px 6px rgba(112,112,112,0.2)'
              }}>
              <img style={{marginTop: '4.5em'}} src="static/img/thumb.png" height="60%;" />
              </div>
              <div className="overlay">
                <br />
                <div className="social" style={{marginTop: '5em'}}>
                  <div style={{
                    margin: 10, 
                    display: 'inline-block', 
                    color: '#fff', 
                    fontFamily: '"Proxima Nova",sans-serif', 
                    width: 10, 
                    height: 10, 
                    border: '3px solid #fff', 
                    padding: 20, 
                    borderRadius: '50%'
                  }}>
                  <a href={"/load?id=" + this.props.ModelID} style={{textDecoration: 'none', color: '#fff'}}>
                  <p style={{marginTop: '-8px', marginLeft: '-6px'}}>
                  <span className="glyphicon glyphicon-pencil" aria-hidden="true"></span>
                  </p>
                  </a>
                  </div>
                  <div style={{margin: 10, 
                    display: 'inline-block', 
                    color: '#fff', 
                    fontFamily: '"Proxima Nova",sans-serif', 
                    width: 10, 
                    height: 10, 
                    border: '3px solid #fff', 
                    padding: 20, 
                    borderRadius: '50%'
                  }}>
                  <a onClick={
                    () => this.props.ModelFunction(this.props.ModelID)
                  } style={{
                    textDecoration: 'none', 
                    color: '#fff', 
                    cursor: 'pointer'
                  }}>
                  <p style={{
                    marginTop: '-8px', 
                    marginLeft: '-7px'
                  }}>
                  <span className="glyphicon glyphicon-trash" aria-hidden="true"></span>
                  </p>
                  </a>
                  </div>
                </div>
              </div>
              <h3 style={{marginTop: '-12em'}}>{this.props.ModelName}</h3>
            </div>
      );
  }
}

Card.propTypes = {
  ModelName: React.PropTypes.string,
  ModelID: React.PropTypes.number,
  ModelFunction: React.PropTypes.func
};

const infoStyle = {
  content : {
    top                   : '50%',
    left                  : '55%',
    right                 : '60%',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    borderRadius          : '8px'
  },
  overlay: {
    zIndex                : 100
  }
};

class Dashboard extends React.Component{
  constructor(props) {
    super(props);
    this.state = {modalIsOpen: false}
    this.getModelData = this.getModelData.bind(this);
    this.deleteModel = this.deleteModel.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.modalContent = null;
    this.modalHeader = null;
  }

  getModelData(){
    var userid = localStorage.getItem("userID");
    console.log(userid);
        $.ajax({
          url: '/getModel',
          dataType: 'json',
          type: 'POST',
          data: {userID: userid},
          success : function (response) {
            if (response.result == 'success') {
              console.log("success");
              console.log(response.data);
              var obj = JSON.stringify(response.data);
              localStorage.setItem("obj",obj);
              return obj;
            }
            else if (response.result == 'error') {
              console.log(response.error);
              if (localStorage.hasOwnProperty('obj')) {
                console.log("Object set in Local Storage");
                localStorage.removeItem("obj");
              }
            }
            return response.data;
          }.bind(this),
          error() {
            console.log("error");
          }
        });
  }

  deleteModel(model_id){
    console.log("model id: "+model_id);
    var userid = localStorage.getItem("userID");
    console.log(userid);
        $.ajax({
          url: '/deleteModel',
          type: 'POST',
          dataType: 'json',
          data: {userID: userid, modelid: model_id},
          success : function (response) {
            console.log(response);

            if (response.result == 'success') {
              console.log("success2");
              console.log(response.data);
              this.modalContent = response.data;
              this.openModal();
            }
            else if (response.result == 'error') {
              console.log(response.error);
            }
          }.bind(this),
          error() {
            console.log("error");
          }
        });
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
    location.reload(true);
  }

  componentDidMount() {
    this.getModelData();
  }

  render() {
      if (localStorage.hasOwnProperty('userID')) {
      if (!localStorage.hasOwnProperty('obj')) {
        console.log("No objects found");
        elements=<div><p style={{fontStyle: 'italic', marginTop: '2em'}}>No models found</p></div>;
      }
      else {
      var data_array = JSON.parse(localStorage.getItem("obj"));
      console.log(data_array);
      var len = Object.keys(data_array).length/2;
      console.log("length"+len);
      var elements=[];
      for (var i = 1; i < len+1; i++) {
        elements.push(<Card ModelFunction={ this.deleteModel } ModelName={ data_array["Model"+i+"_Name"] } ModelID={ data_array["Model"+i+"_ID"] } />)
      }
      }
      return (
      <center>
        <div className="cont" style={{width: '80%', marginTop: '2em', display: 'inline-block'}}>
          <h1 style={{color: '#455062', fontSize: '2em', textAlign: 'left', fontWeight: 'bolder'}}>DASHBOARD</h1>
          <br />
          <p style={{textAlign: 'left'}}>
          <a href="#" style={{
            textDecoration: 'none', 
            color: '#fff', 
            fontWeight: 'bold', 
            background: '#222f3e', 
            fontSize: '0.7em', 
            padding: 15, 
            paddingRight: 20, 
            paddingLeft: 20, 
            borderRadius: 200
          }}>
          <span className="glyphicon glyphicon-plus" aria-hidden="true"></span> &nbsp;CREATE NEW MODEL</a>
          </p>
          <br />
          <div className="all-cards" style={{marginLeft: '-2.6em', display: 'inline-block'}}>
          {elements}
          </div>
        </div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={infoStyle}
          contentLabel="Modal">
          <button type="button" style={{padding: 5+'px'}} className="close" onClick={this.closeModal}>&times;</button>
          <h4>{ this.modalHeader }</h4>
          { this.modalContent }
        </Modal>
      </center>
      );
      }
      else {
        console.log("not logged in");
        window.open("#","_self");
        return null;
      }
  }
}

export default Dashboard;
