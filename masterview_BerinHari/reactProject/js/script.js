function hide()//function for hiding and showing data in media queries
{
$("#navigation").addClass("hidden-sm-down");
$("#container").removeClass("hidden-sm-down");
$("#backButton").removeClass("hidden-sm-down");
}
 
function show()
{
$("#navigation").removeClass("hidden-sm-down");
$("#container").addClass("hidden-sm-down");
$("#backButton").addClass("hidden-sm-down");
}

var Input=React.createClass({
getInitialState: function() { //variables used throughout this component
    return {
      data:{},
      release:[]

    };
 
},
componentDidMount: function(){ // mounting the component for the first time 
$.ajax({
            type:"GET",
            dataType:"json",
            url:'data.json',
                success: function(data) {
               
                this.setState({data: data,
                release: data[this.props.name]});
}.bind(this)
        });
    },
componentWillReceiveProps: function(){ //mounting the component from after the first time 
$.ajax({
            type:"GET",
            dataType:"json",
            url:'data.json',
                success: function(data) {
               
                this.setState({data: data,
                release: data[this.props.name]});
}.bind(this)
        });
    }, 
  

render: function(){ //rendering the component in container from json
return(
            <div>
            <img src={this.state.release.src} />
            <p><strong>{this.props.name}</strong> appeared {this.state.release.appeared} years ago </p>
            <p>its clade is <strong>{this.state.release.order}</strong></p>
            <p>the average <strong>HEIGHT</strong> is {this.state.release.height} meter</p>
            <p>the average <strong>LENGTH</strong> is {this.state.release.length} meter</p>
            <p>the average <strong>WEIGHT</strong> is {this.state.release.weight} lbs</p>
            <p>It went <strong>EXTINCT</strong>{this.state.release.vanished} years ago</p>
            </div>

)
},
   
})

var HelloWorld = React.createClass({
sample: function(dinoName){

            ReactDOM.render(
            <Input name={dinoName} />,document.querySelector("#container"));//component for the container part 
            },
            render: function() {
                return (
                  <input type="button" value={this.props.greetTarget} onClick={this.sample.bind(this,this.props.greetTarget )} />
                );
  } 
});
ReactDOM.render( //calling the navigation component
  <div>
    <HelloWorld greetTarget="bruhathkayosaurus"/>
    <HelloWorld greetTarget="lambeosaurus"/>
    <HelloWorld greetTarget="linhenykus"/>
    <HelloWorld greetTarget="pterodactyl"/>
    <HelloWorld greetTarget="stegosaurus"/>
    <HelloWorld greetTarget="triceratops"/>
  </div>,
  document.querySelector("#navigation")
);