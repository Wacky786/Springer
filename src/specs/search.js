
module.exports = {
    "I search for a journal" : browser => {
        browser
            .url("https://link.springer.com/")
            .waitForElementVisible("[id=query]", 5000)
            .setValue("[id=query]", "big data testing")
            .waitForElementVisible("[id=search]", 5000)
            .click("[id=search]")
            .waitForElementVisible("[id=results]", 5000)
            .assert.urlContains("/search?query=")
            .end();
    },

    "I search with non-alpha characters" : browser => {
        browser
            .url("https://link.springer.com/")
            .waitForElementVisible("[id=query]", 5000)
            .setValue("[id=query]", "!@£$%^&*()_+}{|:?><~-=][\';/.,`\"")
            .waitForElementVisible("[id=search]", 5000)
            .click("[id=search]")
            .waitForElementVisible("[id=no-results-message]", 5000)
            .assert.urlContains("/search?query=")
            .end();
    },

    "I search with a long 1000 character query" : browser => {
        browser
            .url("https://link.springer.com/")
            .waitForElementVisible("[id=query]", 5000)
            .setValue("[id=query]", "dsfnkdfndsifnsoidfjdsjfoiasdfnoisdanfoisdafnsodfnoidsafnsodfnosdinfosdfnofioidfjsdaiofjsdiofosdifhisdahfisdufishfiuasfoasiJDOSAdjoasjoaDJIOajdoiasdjoasdjdsfnkdfndsifnsoidfjdsjfoiasdfnoisdanfoisdafnsodfnoidsafnsodfnosdinfosdfnofioidfjsdaiofjsdiofosdifhisdahfisdufishfiuasfoasiJDOSAdjoasjoaDJIOajdoiasdjoasdjdsfnkdfndsifnsoidfjdsjfoiasdfnoisdanfoisdafnsodfnoidsafnsodfnosdinfosdfnofioidfjsdaiofjsdiofosdifhisdahfisdufishfiuasfoasiJDOSAdjoasjoaDJIOajdoiasdjoasdjdsfnkdfndsifnsoidfjdsjfoiasdfnoisdanfoisdafnsodfnoidsafnsodfnosdinfosdfnofioidfjsdaiofjsdiofosdifhisdahfisdufishfiuasfoasiJDOSAdjoasjoaDJIOajdoiasdjoasdjdsfnkdfndsifnsoidfjdsjfoiasdfnoisdanfoisdafnsodfnoidsafnsodfnosdinfosdfnofioidfjsdaiofjsdiofosdifhisdahfisdufishfiuasfoasiJDOSAdjoasjoaDJIOajdoiasdjoasdjdsfnkdfndsifnsoidfjdsjfoiasdfnoisdanfoisdafnsodfnoidsafnsodfnosdinfosdfnofioidfjsdaiofjsdiofosdifhisdahfisdufishfiuasfoasiJDOSAdjoasjoaDJIOajdoiasdjoasdjdsfnkdfndsifnsoidfjdsjfoiasdfnoisdanfoisdafnsodfnoidsafnsodfnosdinfosdfnofioidfjsdaiofjsdiofosdifhisdahfisdufishfiuasfoasiJDOSAdjoasjo")
            .waitForElementVisible("[id=search]", 5000)
            .click("[id=search]")
            .waitForElementVisible("[id=no-results-message]", 5000)
            .assert.urlContains("/search?query=")
            .end();
    },

    "I search with an empty query string" : browser => {
        browser
        .url("https://link.springer.com/")
        .waitForElementVisible("[id=query]", 5000)
        .waitForElementVisible("[id=search]", 5000)
        .click("[id=search]")
        .assert.urlEquals("https://link.springer.com/")
        .end();
    }

    
}
