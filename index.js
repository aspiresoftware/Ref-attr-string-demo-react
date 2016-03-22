
var React = require('react');
var ReactDom = require('react-dom');

var Range = React.createClass({
    render:function() {
        return <input type="range" min={this.props.min} max={this.props.max} step={this.props.step} onChange={this.props.onChange}/>
    }
})



var Direction = React.createClass({
    render: function() {
      return  <div>        Rotate in X direction <Range ref="X" min="-1" max="1" step="0.1" onChange={this.setDirection}/> value:{this.state.x}<br/>
        Rotate in Y direction <Range ref="Y" min="-1" max="1" step="0.1" onChange={this.setDirection}/> value:{this.state.y}<br/>
        Rotate in Z direction <Range ref="Z"  min="-1" max="1" step="0.1" onChange={this.setDirection}/> value:{this.state.z}<br/>
        Rotate By Degree <Range ref="Deg" min="-360" max="360" step="1" onChange={this.setDirection}/> value:{this.state.deg}<br/>
       <div style={this.state.cssprop}></div>
       </div>
    },
    getInitialState:function() {
    	return {
            cssprop:{
                'transform':'rotate3d(0, 0, 0,00deg)',
                'width': 400,
                'height': 400,
                'backface-visibility':'visible',
                '-webkit-backface-visibility':'visible',
                  'transition': 'transform 1s ease-in-out',
                  'background':'url(\'http://aspiresoftware.in/images/aspire_new_logo.png\') no-repeat',
                  'margin':'auto'

            },
            x:0,
            y:0,
            z:0,
            deg:0
    	}
    },
    setDirection:function(event) {
        var xr,yr,zr,degr;
        xr = ReactDom.findDOMNode(this.refs.X).value;
        yr = ReactDom.findDOMNode(this.refs.Y).value;
        zr = ReactDom.findDOMNode(this.refs.Z).value;
        degr = ReactDom.findDOMNode(this.refs.Deg).value;
        var state = JSON.parse(JSON.stringify(this.state.cssprop));
        state.transform = 'rotate3d('+xr+','+yr+', '+zr+','+degr+'deg)';
        this.setState({
    		cssprop:state,
            x:xr,
            y:yr,
            z:zr,
            deg:degr
        })
    }
});
ReactDom.render(<Direction />,document.getElementById('imdb-search'));

