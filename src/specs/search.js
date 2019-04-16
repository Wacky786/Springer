
module.exports = {
    "I search for a journal" : browser => {
        var homepage = browser.page.homepage();
        var search_page = browser.page.search_page();

        homepage
            .navigate()
            .waitForElementVisible("@searchInput", 5000)
            .setValue("@searchInput", "big data testing")
            .waitForElementVisible("@searchButton", 5000)
            .click("@searchButton");
        search_page
            .waitForElementVisible("@searchResults", 5000)
            .assert.urlContains("/search?query=")
            .end();
    },

    "I search with non-alpha characters" : browser => {
        var homepage = browser.page.homepage();
        var search_page = browser.page.search_page();

        homepage
            .navigate()
            .waitForElementVisible("@searchInput", 5000)
            .setValue("@searchInput", "!@£$%^&*()_+}{|:?><~-=][\';/.,`\"")
            .waitForElementVisible("@searchButton", 5000)
            .click("@searchButton");
        search_page
            .waitForElementVisible("@searchResultsEmpty", 5000)
            .assert.urlContains("/search?query=")
            .end();
    },

    "I search with a long 1000 character query" : browser => {
        var homepage = browser.page.homepage();
        var search_page = browser.page.search_page();

        homepage
            .navigate()
            .waitForElementVisible("@searchInput", 5000)
            .setValue("[id=query]", "dsfnkdfndsifnsoidfjdsjfoiasdfnoisdanfoisdafnsodfnoidsafnsodfnosdinfosdfnofioidfjsdaiofjsdiofosdifhisdahfisdufishfiuasfoasiJDOSAdjoasjoaDJIOajdoiasdjoasdjdsfnkdfndsifnsoidfjdsjfoiasdfnoisdanfoisdafnsodfnoidsafnsodfnosdinfosdfnofioidfjsdaiofjsdiofosdifhisdahfisdufishfiuasfoasiJDOSAdjoasjoaDJIOajdoiasdjoasdjdsfnkdfndsifnsoidfjdsjfoiasdfnoisdanfoisdafnsodfnoidsafnsodfnosdinfosdfnofioidfjsdaiofjsdiofosdifhisdahfisdufishfiuasfoasiJDOSAdjoasjoaDJIOajdoiasdjoasdjdsfnkdfndsifnsoidfjdsjfoiasdfnoisdanfoisdafnsodfnoidsafnsodfnosdinfosdfnofioidfjsdaiofjsdiofosdifhisdahfisdufishfiuasfoasiJDOSAdjoasjoaDJIOajdoiasdjoasdjdsfnkdfndsifnsoidfjdsjfoiasdfnoisdanfoisdafnsodfnoidsafnsodfnosdinfosdfnofioidfjsdaiofjsdiofosdifhisdahfisdufishfiuasfoasiJDOSAdjoasjoaDJIOajdoiasdjoasdjdsfnkdfndsifnsoidfjdsjfoiasdfnoisdanfoisdafnsodfnoidsafnsodfnosdinfosdfnofioidfjsdaiofjsdiofosdifhisdahfisdufishfiuasfoasiJDOSAdjoasjoaDJIOajdoiasdjoasdjdsfnkdfndsifnsoidfjdsjfoiasdfnoisdanfoisdafnsodfnoidsafnsodfnosdinfosdfnofioidfjsdaiofjsdiofosdifhisdahfisdufishfiuasfoasiJDOSAdjoasjo")
            .waitForElementVisible("@searchButton", 5000)
            .click("@searchButton");
        search_page
            .waitForElementVisible("@searchResultsEmpty", 5000)
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
            .assert.urlEquals(homepage.url)
            .end();
    }


    
}
