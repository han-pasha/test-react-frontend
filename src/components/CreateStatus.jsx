import React, { Component } from "react";
import backendService from "../services/backendService";
import { Dropdown, Form } from "react-bootstrap";
class CreateStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      m_dukcapil_data_id: "",
      NIK: this.props.match.params.id,
      nama: "",
      maiden_name: "",
      birth_date: "",
      gender: "",
      religion_id: "",
      marital_status: "",
    };
    this.changeNikStatusHandler = this.changeNikStatusHandler.bind(this);
    this.changeNamaStatusHandler = this.changeNamaStatusHandler.bind(this);
    this.changeMaidenNameHandler = this.changeMaidenNameHandler.bind(this);
    this.changeBirthDateHandler = this.changeBirthDateHandler.bind(this);
    this.changeGenderHandler = this.changeGenderHandler.bind(this);
    this.changeReligionHandler = this.changeReligionHandler.bind(this);
    this.changeMaritalHandler = this.changeMaritalHandler.bind(this);
  }

  //--------MOUNTING-----------
  componentDidMount() {
    if (this.state.m_dukcapil_data_id === "_add") {
      return;
    } else {
      backendService
        .getStatusById(this.props.match.params.id)
        .then((res) => {
          var status = res.data;
          this.setState({
            m_dukcapil_data_id: status.m_dukcapil_data_id,
            // NIK: status.NIK,
            nama: status.name,
            maiden_name: status.maiden_name,
            birth_date: status.birth_date,
            gender: status.gender,
            religion_id: status.religion_id,
            marital_status: status.marital_status,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  //--------SAVE OR UPDATE FUNCTION-----------
  saveOrUpdateStatus = (e) => {
    e.preventDefault();
    let status = {
      m_dukcapil_data_id: this.state.m_dukcapil_data_id,
      NIK: this.state.NIK,
      nama: this.state.nama,
      maiden_name: this.state.maiden_name,
      birth_date: this.state.birth_date,
      gender: this.state.gender,
      religion_id: this.state.religion_id,
      marital_status: this.state.marital_status,
    };
    console.log(status);

    if (this.state.m_dukcapil_data_id === "_add") {
      backendService.createStatus(status).then((res) => {
        this.props.history.push("/status").catch((err) => {
          console.log(err);
        });
      });
    } else {
      backendService.updateStatus(status, this.state.NIK).then(() => {
        this.props.history.push("/status").catch((err) => console.log(err));
      });
    }
  };

  //==========JANGAN LUPA DIJADIKAN SATU====================================================
  changeIdHandler = (event) => {
    this.setState({ m_dukcapil_data_id: event.target.value });
  };

  changeNikStatusHandler = (event) => {
    this.setState({ NIK: event.target.value });
  };

  changeNamaStatusHandler = (event) => {
    this.setState({ nama: event.target.value });
  };

  changeMaidenNameHandler = (event) => {
    this.setState({ maiden_name: event.target.value });
  };

  changeBirthDateHandler = (event) => {
    this.setState({ birth_date: event.target.value });
  };

  changeGenderHandler = (event) => {
    this.setState({ gender: event.target.value });
  };

  changeReligionHandler = (event) => {
    this.setState({ religion_id: event.target.value });
  };

  changeMaritalHandler = (event) => {
    this.setState({ marital_status: event.target.value });
  };

  cancel() {
    this.props.history.push("/");
  }

  getTitle() {
    if (this.state.id === "_add") {
      return <h3 className="text-center"> TAMBAH STATUS </h3>;
    } else {
      return <h3 className="text-center"> UPDATE STATUS</h3>;
    }
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              {this.getTitle()}
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label>ID</label>
                    <input
                      placeholder="ID"
                      name="id"
                      className="form-control"
                      value={this.state.m_dukcapil_data_id}
                      onChange={this.changeIdHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>NIK</label>
                    <input
                      placeholder="Cth:1025912039"
                      name="NIK"
                      className="form-control"
                      value={this.state.NIK}
                      onChange={this.changeNikStatusHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Nama</label>
                    <input
                      placeholder="Nama"
                      name="firstName"
                      className="form-control"
                      value={this.state.nama}
                      onChange={this.changeNamaStatusHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Nama Keluarga</label>
                    <input
                      placeholder="Nama Keluarga"
                      name="firstName"
                      className="form-control"
                      value={this.state.maiden_name}
                      onChange={this.changeMaidenNameHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Tanggal Lahir</label>
                    <input
                      placeholder="cth: 2000-04-04"
                      name="birth_date"
                      className="form-control"
                      value={this.state.birth_date}
                      onChange={this.changeBirthDateHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> GENDER </label>
                    <Form>
                      <Form.Check
                        type="radio"
                        label="Laki Laki"
                        name="group1"
                        value="1"
                        onChange={this.changeGenderHandler}
                      />
                      <Form.Check
                        type="radio"
                        label="Wanita"
                        name="group1"
                        value="2"
                        onChange={this.changeGenderHandler}
                      />
                    </Form>
                  </div>
                  <div className="form-group">
                    <label>Agama</label>
                    <select
                      defaultValue={this.state.religion_id}
                      onChange={this.changeReligionHandler}
                    >
                      <option value="0">Orange</option>
                      <option value="1">Radish</option>
                      <option value="2">Cherry</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Status Pernikahan {this.state.marital_status}</label>
                    <select
                      defaultValue={this.state.marital_status}
                      onChange={this.changeMaritalHandler}
                    >
                      <option value="0">Orange</option>
                      <option value="1">Radish</option>
                      <option value="2">Cherry</option>
                    </select>
                  </div>
                  <button
                    className="btn btn-success"
                    onClick={this.saveOrUpdateStatus}
                  >
                    Save
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={this.cancel.bind(this)}
                    style={{ marginLeft: "10px" }}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateStatus;
