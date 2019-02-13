module.exports = {
    launch: {
        headless: false,
        slowMo: 10,
        devtools: true,
        timeout: 100000,
        args: [
                "--no-sandbox", 
                "--disable-popup-blocking", 
                "--disable-infobars", 
                "--disable-web-security"
            ]
    },
    browserContext: 'default',

    server: {
        command: `BROWSER=none npm run start `,
        port: 3001,
        launchTimeout: 40000,
    },
    
} 
