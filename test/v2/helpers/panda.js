"use strict"

/**
 * Read more about panda here: https://panda-suite.github.io/
 */
const panda = require("pandacash-cli")

const runLocalNode = done => {
  const server = panda.server({
    // always the same mnemonic
    // mnemonic: "cigar magnet ocean purchase travel damp snack alone theme budget wagon wrong",
    seedAccounts: true,
    enableLogs: false,
    debug: false
  })

  server.listen(48332, (err, pandaCashCore) => {
    if (err) return console.error(err)

    done()
  })
}

module.exports = {
  runLocalNode
}
