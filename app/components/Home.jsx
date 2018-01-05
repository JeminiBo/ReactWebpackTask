import React from 'react'

class Home extends React.Component{

    constructor (props){
        super(props);
    }

    render(){
        return (

            <div className="home">
                <div className="store">
                    
                        <h1>Запись №{this.props.id}</h1>
                    

                    <p>Еще один календарный год подошел к концу. При этом год политический, в самом разгаре, несмотря на грядущие длинные новогодние и рождественские каникулы. Самое время сделать определенные выводы и попробовать поразмышлять о направлении развития политической системы в России.</p>
                </div>
            </div>
        )
    }
}

export default Home;