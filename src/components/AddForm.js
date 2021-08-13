import React from "react";
import { connect } from "react-redux";
import { addSmurf } from "../actions";

class AddForm extends React.Component {
  state = {
    name: "",
    position: "",
    nickname: "",
    description: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addSmurf(this.state);
    this.setState({
      name: "",
      position: "",
      nickname: "",
      description: "",
    });
  };

  render() {
    const { error } = this.props;
    return (
      <section>
        <h2>Add Smurf</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <br />
            <input
              onChange={this.handleChange}
              value={this.state.name}
              name="name"
              id="name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="position">Position:</label>
            <br />
            <input
              onChange={this.handleChange}
              value={this.state.position}
              name="position"
              id="position"
            />
          </div>
          <div className="form-group">
            <label htmlFor="nickname">Nickname:</label>
            <br />
            <input
              onChange={this.handleChange}
              value={this.state.nickname}
              name="nickname"
              id="nickname"
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <br />
            <textarea
              onChange={this.handleChange}
              value={this.state.description}
              name="description"
              id="description"
            />
          </div>
          {error && (
            <div
              data-testid="errorAlert"
              className="alert alert-danger"
              role="alert"
            >
              Error: {error}
            </div>
          )}
          <button>Submit Smurf</button>
        </form>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    error: state.error,
  };
};

export default connect(mapStateToProps, { addSmurf })(AddForm);

//Task List:
//1. Connect the errorMessage, setError and addSmurf actions to the AddForm component.
//2. Replace all instances of the errorMessage static variable with your error message state value.
//3. Within the handleSubmit function, replace the static assignment to errorMessage with a call to the setError action. Test that an error is displayed when this validation code fails.
//4. Within the handleSubmit function, call your addSmurf action with the smurf name, position, nickname and summury passed as arguments. Test that a smurf is correctly added to when the form is submitted.

// Other failed ideas

// const AddForm = (props) => {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   const {
//     smurfArray,
//     isLoading,
//     error,
//     name,
//     nickname,
//     position,
//     description,
//   } = props;

//   [state, setState] = useState({
//     name: "",
//     position: "",
//     nickname: "",
//     description: "",
//   });

// useEffect(() => {
//   props.fetchSmurfs();
// }, []);

//   const handleChange = (e) => {
//     setState({
//       ...state,
//       [e.target.name]: e.target.value,
//     });
//   };

// const handleSubmit = (e) => {
//   e.preventDefault();
//   if (name === "" || position === "" || nickname === "") {
//     errorMessage = "Name, position and nickname fields are required.";
//   }
// };

// const errorMessage = "";
