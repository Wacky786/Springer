
module.exports = {
    "I search for a journal" : browser => {
        var homepage = browser.page.homepage();

        homepage
            .navigate()
            .waitForElementVisible("@searchInput", 5000)
            .setValue("@searchInput", "big data testing")
            .waitForElementVisible("@searchButton", 5000)
            .click("@searchButton")
            .waitForElementVisible("[id=results]", 5000)
            .assert.urlContains("/search?query=")
            .end();
    },

    "I search with non-alpha characters" : browser => {
        var homepage = browser.page.homepage();

        homepage
            .navigate()
            .waitForElementVisible("@searchInput", 5000)
            .setValue("@searchInput", "!@£$%^&*()_+}{|:?><~-=][\';/.,`\"")
            .waitForElementVisible("@searchButton", 5000)
            .click("@searchButton")
            .waitForElementVisible("[id=no-results-message]", 5000)
            .assert.urlContains("/search?query=")
            .end();
    },

    "I search with a long 1000 character query" : browser => {
        var homepage = browser.page.homepage();

        homepage
            .navigate()
            .waitForElementVisible("@searchInput", 5000)
            .setValue("@searchInput", "dsfnkdfndsifnsoidfjdsjfoiasdfnoisdanfoisdafnsodfnoidsafnsodfnosdinfosdfnofioidfjsdaiofjsdiofosdifhisdahfisdufishfiuasfoasiJDOSAdjoasjoaDJIOajdoiasdjoasdjdsfnkdfndsifnsoidfjdsjfoiasdfnoisdanfoisdafnsodfnoidsafnsodfnosdinfosdfnofioidfjsdaiofjsdiofosdifhisdahfisdufishfiuasfoasiJDOSAdjoasjoaDJIOajdoiasdjoasdjdsfnkdfndsifnsoidfjdsjfoiasdfnoisdanfoisdafnsodfnoidsafnsodfnosdinfosdfnofioidfjsdaiofjsdiofosdifhisdahfisdufishfiuasfoasiJDOSAdjoasjoaDJIOajdoiasdjoasdjdsfnkdfndsifnsoidfjdsjfoiasdfnoisdanfoisdafnsodfnoidsafnsodfnosdinfosdfnofioidfjsdaiofjsdiofosdifhisdahfisdufishfiuasfoasiJDOSAdjoasjoaDJIOajdoiasdjoasdjdsfnkdfndsifnsoidfjdsjfoiasdfnoisdanfoisdafnsodfnoidsafnsodfnosdinfosdfnofioidfjsdaiofjsdiofosdifhisdahfisdufishfiuasfoasiJDOSAdjoasjoaDJIOajdoiasdjoasdjdsfnkdfndsifnsoidfjdsjfoiasdfnoisdanfoisdafnsodfnoidsafnsodfnosdinfosdfnofioidfjsdaiofjsdiofosdifhisdahfisdufishfiuasfoasiJDOSAdjoasjoaDJIOajdoiasdjoasdjdsfnkdfndsifnsoidfjdsjfoiasdfnoisdanfoisdafnsodfnoidsafnsodfnosdinfosdfnofioidfjsdaiofjsdiofosdifhisdahfisdufishfiuasfoasiJDOSAdjoasjo")
            .waitForElementVisible("@searchButton", 5000)
            .click("@searchButton")
            .waitForElementVisible("[id=no-results-message]", 5000)
            .assert.urlContains("/search?query=")
            .end();
    },

    "I search with an empty query string" : browser => {
        var homepage = browser.page.homepage();

        homepage
            .navigate()
            .waitForElementVisible("@searchInput", 5000)
            .waitForElementVisible("@searchButton", 5000)
            .click("@searchButton")
            .assert.urlEquals("https://link.springer.com/")
            .end();
    }

    
}
