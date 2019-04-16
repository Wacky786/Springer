
module.exports = {
    "I search for a journal" : browser => {
        var homepage = browser.page.homepage();
        var search_page = browser.page.search_page();

        homepage
            .navigate()
            .waitForElementVisible("@searchInput", browser.globals.five_sec_timeout)
            .setValue("@searchInput", "big data testing")
            .waitForElementVisible("@searchButton", browser.globals.five_sec_timeout)
            .click("@searchButton");
        search_page
            .waitForElementVisible("@searchResults", browser.globals.five_sec_timeout)
            .assert.urlContains("/search?query=")
            .end();
    },

    "I search with non-alpha characters" : browser => {
        var homepage = browser.page.homepage();
        var search_page = browser.page.search_page();

        homepage
            .navigate()
            .waitForElementVisible("@searchInput", browser.globals.five_sec_timeout)
            .setValue("@searchInput", "!@£$%^&*()_+}{|:?><~-=][\';/.,`\"")
            .waitForElementVisible("@searchButton", browser.globals.five_sec_timeout)
            .click("@searchButton");
        search_page
            .waitForElementVisible("@searchResultsEmpty", browser.globals.five_sec_timeout)
            .assert.urlContains("/search?query=")
            .end();
    },

    "I search with a long 1000 character query" : browser => {
        var homepage = browser.page.homepage();
        var search_page = browser.page.search_page();

        homepage
            .navigate()
            .waitForElementVisible("@searchInput", browser.globals.five_sec_timeout)
            .setValue("[id=query]", "dsfnkdfndsifnsoidfjdsjfoiasdfnoisdanfoisdafnsodfnoidsafnsodfnosdinfosdfnofioidfjsdaiofjsdiofosdifhisdahfisdufishfiuasfoasiJDOSAdjoasjoaDJIOajdoiasdjoasdjdsfnkdfndsifnsoidfjdsjfoiasdfnoisdanfoisdafnsodfnoidsafnsodfnosdinfosdfnofioidfjsdaiofjsdiofosdifhisdahfisdufishfiuasfoasiJDOSAdjoasjoaDJIOajdoiasdjoasdjdsfnkdfndsifnsoidfjdsjfoiasdfnoisdanfoisdafnsodfnoidsafnsodfnosdinfosdfnofioidfjsdaiofjsdiofosdifhisdahfisdufishfiuasfoasiJDOSAdjoasjoaDJIOajdoiasdjoasdjdsfnkdfndsifnsoidfjdsjfoiasdfnoisdanfoisdafnsodfnoidsafnsodfnosdinfosdfnofioidfjsdaiofjsdiofosdifhisdahfisdufishfiuasfoasiJDOSAdjoasjoaDJIOajdoiasdjoasdjdsfnkdfndsifnsoidfjdsjfoiasdfnoisdanfoisdafnsodfnoidsafnsodfnosdinfosdfnofioidfjsdaiofjsdiofosdifhisdahfisdufishfiuasfoasiJDOSAdjoasjoaDJIOajdoiasdjoasdjdsfnkdfndsifnsoidfjdsjfoiasdfnoisdanfoisdafnsodfnoidsafnsodfnosdinfosdfnofioidfjsdaiofjsdiofosdifhisdahfisdufishfiuasfoasiJDOSAdjoasjoaDJIOajdoiasdjoasdjdsfnkdfndsifnsoidfjdsjfoiasdfnoisdanfoisdafnsodfnoidsafnsodfnosdinfosdfnofioidfjsdaiofjsdiofosdifhisdahfisdufishfiuasfoasiJDOSAdjoasjo")
            .waitForElementVisible("@searchButton", browser.globals.five_sec_timeout)
            .click("@searchButton");
        search_page
            .waitForElementVisible("@searchResultsEmpty", browser.globals.five_sec_timeout)
            .assert.urlContains("/search?query=")
            .end();
    },

    "I search with an empty query string" : browser => {
        var homepage = browser.page.homepage();

        homepage
            .navigate()
            .waitForElementVisible("@searchInput", browser.globals.five_sec_timeout)
            .waitForElementVisible("@searchButton", browser.globals.five_sec_timeout)
            .click("@searchButton")
            .assert.urlEquals(homepage.url)
            .end();
    }
    
}
