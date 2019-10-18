import Professional from "./LeadingCompany";


function Emblem (props) {
    return(
        <div className="lead_block">
            <img src={props.emblem.img} alt={props.emblem.name}/>
            <p> {props.emblem.Description} </p>
        </div>
    )
}


class App extends React.Component {


    state = {
        emblems:[
            { name:'favorites', Description:'86 + Skilled Developers', img:"asserts/images/favorites.png" },
            { name:'settings', Description:'Full-cycle support', img:"asserts/images/settings.png" },
            { name:'post', Description:'Daily reports', img:"asserts/images/post.png" }
        ]
    };

    renderEmblems() {
        return this.state.emblems.map(emblem => {
            return (
                <Emblem emblem = {emblem} key={emblem.p}/>
            )
        })
    }

    render() {
        return (
            <div className="app">
                <div className="leading">
                    <div className="leading_content">
                        <div className="tit">
                            <h1> <b>Leading Web And Software Development Company </b> </h1>
                        </div>

                        <div className='lead_items'>
                            { this.renderEmblems()}
                        </div>

                        <div className="lead_chat">
                            <a href="#"> <img src="../../asserts/images/chat_icon.png" alt="" /> </a>
                        </div>
                    </div>
                </div>
                <Professional/>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));