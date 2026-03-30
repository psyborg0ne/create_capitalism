// Visit the wiki for more info - https://kubejs.com/
console.info('Hello, World! (Loaded startup example script)')

StartupEvents.registry('block', event => {
    event.create('vending_machine').displayName("Vending Machine")
})