const { expect, browser, $ } = require('@wdio/globals')

describe('New paste application', () => {
    it('should create a new paste', async () => {
        await browser.url(`https://pastebin.com`)

        await $('#postform-text').setValue('Hello from WebDriver')
        await $('#select2-postform-expiration-container').click()
        await $('//li[contains(text(), "10 Minutes")]').click()
        await $('#postform-name').setValue('helloweb')
        await $('button[type="submit"]').click()    
        
    })
})

