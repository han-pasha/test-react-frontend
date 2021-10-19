import React, { Component } from "react";
import backendService from "../services/backendService";

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: [],
    };
  }

  componentDidMount() {
    backendService.getStatus().then((res) => {
      this.setState({ status: res.data });
    });
  }

  addStatus() {
    //ROUTER
    this.props.history.push("/add-status/_add");
  }

  editStatus(id) {
    this.props.history.push(`/add-status/${id}`);
  }

  //   deleteBarang(id) {
  //     backendService.deleteBarang(id).then((res) => {
  //       this.setState({
  //         barangBarang: this.state.barangBarang.filter(
  //           (barang) => barang.id !== id
  //         ),
  //       });
  //     });
  //   }

  changeGender(gender) {
    switch (gender) {
      case 0:
        return "Before Migrating Data";
      case 1:
        return "Male";
      case 2:
        return "Female";
    }
  }

  changeReligion(religion) {
    switch (religion) {
      case 0:
        return "Buddha";
      case 1:
        return "Hindu";
      case 2:
        return "Islam";
      case 3:
        return "Kristen";
      case 4:
        return "Protestan";
      case 5:
        return "Katolik";
      case 6:
        return "Konghucu";
      case 7:
        return "Lainnya";
    }
  }

  changeMaritalStatus(marital_status) {
    switch (marital_status) {
      case 0:
        return "Single";
      case 1:
        return "Widow";
      case 2:
        return "Widower";
      case 3:
        return "Married";
    }
  }
  render() {
    return (
      <div>
        <h2 className="text-center">Employee List</h2>
        <div className="row">
          <button className="btn btn-primary" onClick={this.addStatus}>
            Add Barang
          </button>
        </div>
        <div className="row">
          <table className="table table-striped table-bordered">
            {/* <thead>
              <tr>
                <th>Employee First Name</th>
                <th>Employee Last Name</th>
                <th>Employee Email Name</th>
                <th>Actions</th>
              </tr>
            </thead> */}

            {/* //-----------MAPPING ISI LIST----------- */}
            <tbody>
              {this.state.status.map((inStatus) => (
                <tr key={inStatus.id}>
                  <td>{inStatus.m_dukcapil_data_id}</td>
                  <td>{inStatus.nik}</td>
                  <td>{inStatus.name}</td>
                  <td>{inStatus.maiden_name}</td>
                  <td>{inStatus.birth_date}</td>
                  <td>{this.changeGender(inStatus.gender)}</td>
                  <td>{this.changeReligion(inStatus.religion_id)}</td>
                  <td>{this.changeMaritalStatus(inStatus.marital_status)}</td>
                  <td>
                    <button
                      onClick={() => this.editStatus(inStatus.nik)}
                      className="btn btn-info"
                    >
                      Update
                    </button>
                    <button
                      style={{ marginLeft: "10px" }}
                      //   onClick={() => this.deleteStatus(Status.id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Homepage;
