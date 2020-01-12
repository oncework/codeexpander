export default ({ isServer }) => {
    if (!isServer) {
        // Register jQuery
        window.$ = window.jQuery = require('jquery')
    }
}