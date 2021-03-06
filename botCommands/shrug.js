const { registerBotCommand } = require("../botEngine.js");

const command = {
  regex: /\/[shurg]{5}/,
  cb: ({ content }) => {
    function onlyUnique(value, index, self) {
      return self.indexOf(value) === index;
    }
    const shurgalurg = content.match(/[shurg]{5}/)[0];
    // return early if all chars are not unique
    if (content.match(/[shurg]{5}/)[0].split("").filter(onlyUnique).length !== 5) {
      return;
    }

    const parts = {
      s: `¯\\`,
      h: `_(`,
      r: `ツ`,
      u: `)_`,
      g: `/¯`
    };
    return shurgalurg
      .split("")
      .map(ch => parts[ch])
      .join("");
  }
}

registerBotCommand(command.regex, command.cb);

module.exports = command;

