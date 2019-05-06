import React from 'react'

const withCounter = (WrappedComponent, IncrementNumber) => {
    class WithCounter extends React.Component {
        constructor(props) {
            super(props)
    
            this.state = {
                count: 0
            }
        }
    
        incrementCount = () => {
            this.setState(prevState => {
                return {count : prevState.count + IncrementNumber}
            })
        }
        
        render() {
            return <WrappedComponent 
                count={this.state.count} 
                incrementCount={this.incrementCount} 
                {... this.props} //This will pass the props passed from App.js to the component.
                />
        }
    }

    return WithCounter
}

export default withCounter