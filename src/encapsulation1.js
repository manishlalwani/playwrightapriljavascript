class Browser {

    launchBrowser() {
        console.log('Browser is Launching');
        this.#checkOsCompatible();
        this.#checkRAMSize();
        this.#checkUpgrade();
        console.log('Browser is Launched');
    }

    #checkOsCompatible() {
        console.log("OS is Compatible");
    }


    #checkRAMSize() {
        console.log("RAM is having enough Space");
    }


    #checkUpgrade() {
        console.log("Upgrade is Done");
    }

}

let browser = new Browser();
browser.launchBrowser();