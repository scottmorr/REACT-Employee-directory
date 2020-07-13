import React from 'react'

class Home extends React.Component {
    state = {
        count: 0,
        list: []
    }

    componentDidMount() {
        this.FAKEAPI().then(response => this.setState({ list: response }))
    }

    handleClick = () => {
        this.setState({ count: this.state.count + 1 })
    }

    FAKEAPI = () => new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([1, 2, 3, 4, 5, 6, 7])
        }, 2 * 1000);
    })

    render() {
        return <div>
            <h1>Count: <span>{this.state.count}</span></h1>

            <button onClick={this.handleClick}>Click</button>

            <hr />

            {
                this.state.list.map((x, i) => <div key={i + 'key'}>{x}</div>)
            }

        </div>
    }
}

export default Home