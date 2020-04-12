import React from "react";
import { connect } from "react-redux";
import { userSelected} from '../../../_store/actions/app.actions'
import { match } from 'react-router-dom'
import { Dispatch, bindActionCreators } from "redux";
import EditOptionsMcq from './options-mcq'


 class question extends React.Component<any, any> {

    componentDidMount(){

        console.log(this.props.match.params);

        console.log(this.props.createTest);

        this.props.userSelected('mohit');
    }

    render() {
        const  text= ['one','two','three']
        return <div>
            <EditOptionsMcq options={text}></EditOptionsMcq>
        </div>
    }
}
const mapStateToProps = (state:any) => {
    return {
      createTest: state
    }
  }
  
const mapDispatchToProps = (dispatch: Dispatch)=>{
    console.log(userSelected,'##')
    return bindActionCreators({userSelected}, dispatch)

}
export default connect(mapStateToProps, mapDispatchToProps)(question);

