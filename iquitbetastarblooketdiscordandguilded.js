window.emojis = {
  skull: "💀",
  smile: "😃",
  smilesweat: "😅",
  troll: "😈",
  rofl: "🤣",
  undersmile: "🙃",
  wink: "😉",
  blush: "😊",
  angel: "😇",
  loveeyes: "😍",
  stareyes: "🤩",
  kiss: "😘",
  crazy: "🤪",
  toungeout: "😜",
  moneyeyes: "🤑",
  hug: "🤗",
  think: "🤔",
  ziplips: "🤐",
  sus: "🤨",
  why: "😑",
  expressionless: "😶",
  sly: "😏",
  eyeroll: "🙄",
  drool: "🤤",
  sleep: "😴",
  mask: "😷",
  puke: "🤢",
  cold: "🥶",
  hot: "🥵",
  deadeyes: "😵",
  mindblown: "🤯",
  party: "🥳",
  cool: "😎",
  nerd: "🤓",
  eyeglass: "🧐",
  sad: "🙁",
  shocked: "😯",
  flushed: "😳",
  worried: "😟",
  puppyeyes: "🥺",
  sob: "😭",
  cry: "😢",
  whew: "😥",
  fear: "😱",
  disappointed: "😞",
  tired: "😫",
  yawn: "🥱",
  pissed: "😤",
  mad: "😡",
  fuck: "🤬",
  evil: "😈",
  villainsrule: "😈",
  poop: "💩",
  clown: "🤡",
  ghost: "👻",
  bot: "🤖",
  100: "💯",
  pow: "💥",
  bomb: "💣",
  text: "💬",
  think: "💭",
  wave: "👋",
  clap: "👏",
  fistbump: "👊",
  handshake: "🤝",
  flex: "💪",
  butt: "🍑",
  food: "🍗",
  burrito: "🌯",
  globe: "🌎",
  map: "🗺"
}

window.replacers = {
  ...Object.fromEntries(
    Object.entries(window.emojis).map(
      e => [`:${e[0]}:`, e[1]]
    )
  )
}

window.sendMessage = function sendMessage() {
  var message = window.document.getElementById("#inputField").value;
  if (message === '') {
    return;
  }
  for (const r of Object.entries(window.replacers)) {
    message = message.replaceAll(r[0], r[1])
  }
  window.socket.emit('smes', message);
  window.document.getElementById("#inputField").value = "";
}
