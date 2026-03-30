// Visit the wiki for more info - https://kubejs.com/
console.info('Hello, World! (Loaded server example script)')
BlockEvents.rightClicked('kubejs:vending_machine', event => {
    // event.server.runCommand("/hqs shop open")
    event.player.runCommand("/hqs shop open")
});
