#!/usr/bin/env node

import chalk from "chalk";
import boxen from "boxen";

const boxenOptions = {
  padding: 1,
  width: 54,
  title: "girlandred",
  titleAlignment: "center",
  borderStyle: "double",
  borderColor: "#ffb626",
};

const intro = chalk.bold(
  "Oh, hai! I'm Maryna. I build stuff, learn things, and love what they do.\n\nFind me on the internet.\n\n",
);

const links = [
  { name: chalk.hex("#fff").bgHex("#0f111a")("Linkedin"), url: "  https://www.linkedin.com/in/marynashyta/" },
  { name: chalk.hex("#fff").bgHex("#000")("Instagram"), url: "    https://www.instagram.com/marynkashyta/" },
  { name: chalk.hex("#fff").bgHex("#5865F2")("Discord"), url: "   https://discord.gg/girlandred" },
  { name: chalk.hex("#fff").bgHex("#6e5494")("GitHub"), url: "    https://github.com/girlandred" },
  { name: chalk.hex("#fff").bgHex("#582be8")("Facebook"), url: "  https://www.facebook.com/marynashyta/" }
];

const linkList = links.map((link) => `${link.name} ${link.url}`).join("\n");

console.log(boxen(intro + linkList, boxenOptions));
