import React from 'React';
import { Link } from 'react-router';

export default class Layout extends React.Component{

	render() {

		return(
			  <div>
                  <div className="top-menu">
                  	<ul>
                  		<li>
                  			<Link to="/blog">BLog</Link>
                  		</li>
                  		<li>
                  			<Link to="/picture">Picture</Link>

                  		</li>
                  		<li>
                  			
                  			<Link to="/video">Video</Link>
                  		</li>

                  	</ul>
                </div>
                
                    {this.props.children}
                  </div>
			)
	}
}