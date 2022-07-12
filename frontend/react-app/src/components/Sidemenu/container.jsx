import Sidemenu from "./presentation";

import { connect } from "react-redux";

const mapStateToProps = state => ({ sidemenu: state.sidemenu});

export default connect(mapStateToProps)(Sidemenu);