import React, { PureComponent} from "react";
import { withRouter } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap'
import NavBar from "./NavBar";
import drawing1 from "../assets/drawing1a.png"
import drawing2 from "../assets/drawing2a.png"
import drawing3 from "../assets/drawing3a.png"
import drawing4 from "../assets/drawing4a.png"
import drawing5 from "../assets/drawing5a.png"
import drawing6 from "../assets/drawing6a.png"
import drawing7 from "../assets/drawing7a.png"
import drawing8 from "../assets/drawing8a.png"
import drawing9 from "../assets/drawing9a.png"
import drawing10 from "../assets/drawing10.png"
import drawing11 from "../assets/drawing11a.png"
import drawing12 from "../assets/drawing14.png"
import BottomPage from "./BottomPage";
import ModalArt from "./modalArt";


 class DigitalArt extends PureComponent{
	
	render(){
		return(
			<div className="home-page-containter">
				<NavBar/>
				<br />
				<h2 className="art-title"> Photoshop Art </h2>
				<div className="coding-projects">
					<br />
					<ModalArt />
					<br />
					<div className="drawings">
					<div class="row">
						
							
							<div class="col">
								<img src={drawing1} width="317px" height="317px" id="drawing-7"/>	
							</div>
					    
							<div class="col">
								<img src={drawing2}width="317px" height="317px" id="drawing-7"/>	
							</div>
					
							<div class="col">
								<img src={drawing12} width="317px" height="317px" id="drawing-7"/>	
							</div>
					    
							<div class="col">
								<img src={drawing10} width="317px" height="317px" id="drawing-7"/>	
							</div>
					
							<div class="col">
								<img src={drawing8} width="317px" height="317px" id="drawing-7"/>	
							</div>
					    
							<div class="col">
								<img src={drawing6} width="317px" height="317px" id="drawing-7"/>	
							</div>
					
							<div class="col">
								<img src={drawing7} width="317px" height="317px" id="drawing-7"/>	
							</div>
					    
							<div class="col">
								<img src={drawing9} width="317px" height="317px" id="drawing-7"/>	
							</div>
					
							<div class="col">
								<img src={drawing5} width="317px" height="317px" id="drawing-7"/>	
							</div>

						</div>
					</div>
				</div>
				<br/>
				<BottomPage />
			</div>
		);
	}
}

export default withRouter(DigitalArt)

