class User extends React.Component {
    constructor(props) {
      super(props)
  
      this.state = {
        message: 'Welcome to React world'
      }
    }
  
    render() {
      return (
        <div>
          <h2>{this.state.message}</h2>
        </div>
      )
    }
  }
