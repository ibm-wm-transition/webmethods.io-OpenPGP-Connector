module.exports = {
  label: "Connect to OpenPGP_Connector",
  mock_input: {},
  input: {
    type: "object",
    properties: {}
  },
  validate: function (input, output) {
    // auth data will be available in input.auth
    // like var username = input.auth.username
    // callback pattern
    // output(error, success)
    output(null, true);
  }
}