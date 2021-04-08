componentDidMount() {
    // GET the data I need to correctly display
}

componentWillReceiveProps(nextProps) {
    if (nextProps.whatever !== this.props.whatever) {
        // do something important here
    }
}

shouldComponentUpdate(nextProps, nextState) {
    // return true if want it to update
    // return false if not
}

componentWillUnmount() {
    // teardown or cleanup your code before your component disappears
    // (E.g. remove event listeners)
}