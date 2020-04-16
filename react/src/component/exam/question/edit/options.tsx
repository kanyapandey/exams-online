import React from "react";
import { Container, InputGroup, FormControl } from "react-bootstrap";
import { FaPlus, FaMinus } from "react-icons/fa";
import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";
import {
  addoption,
  removeOption,
  updateOptions,
} from "../../_store/exams.actions";

interface Props {
  options: string[];
  updateOptions?: Function;
}

export class EditOptionsMcq extends React.Component<Props, Props> {
  addOption = (event: any) => {
    console.log("added option");
    this.setState({ options: ["", ...this.state.options] });
  };

  remmoveOption = (event: any) => {
    if (this.state.options.length > 2) {
      this.setState({
        options: this.state.options.splice(0, this.state.options.length - 1),
      });
    }
  };

  componentWillMount() {
    console.log(this.state, this.props);
    this.setState({ options: [...this.props.options] });
  }

  // componentDidUpdate(){
  //   this.setState({ options: [...this.props.options] });
  // }

  render() {
    const logValue = (event: any) => {
      const id = event.target.getAttribute("data-id");
      this.state.options[id] = event.target.value;
      console.log(this.state);
    };

    const updateStore = (event: any) => {
      this.props.updateOptions!(this.state.options);
    };

    return (
      <div >
        <Container>
          {this.state.options.map((a: any, index: number) => {
            return (
              <InputGroup onBlur={updateStore} size="sm" key={index} className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="basic-addon1">
                    option {index}
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  onChange={logValue}
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  data-id={index}
                />
              </InputGroup>
            );
          })}
          <button className="btn btn-info btn-xs mx-1" onClick={this.addOption}>
            <FaPlus size="12"></FaPlus>
          </button>
          <button
            className="btn btn-info btn-xs mx-1"
            onClick={this.remmoveOption}
          >
            <FaMinus size="12"></FaMinus>
          </button>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state: any, props: Props) => {
  console.log(state.createtest.questionInEdit);
  return {
    options: state.createtest.questionInEdit.options,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    removeoption: bindActionCreators<any, any>(removeOption, dispatch),
    addoption: bindActionCreators<any, any>(addoption, dispatch),
    updateOptions: bindActionCreators<any, any>(updateOptions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditOptionsMcq);
