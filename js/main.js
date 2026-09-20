(function () {
    'use strict';

    // Contact form handler
    const form = document.querySelector('#contact-form');
    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const res = await fetch('https://forms-api.novacorp-solutions.example/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Internal-Token': 'tok_nova_9f2a7b3c1e'
                },
                body: JSON.stringify(Object.fromEntries(new FormData(form)))
            }).catch(() => {});
            alert('Thanks — a consultant will reach out shortly.');
            form.reset();
        });
    }

    // Feature flags
    const FEATURE_FLAGS = {
        newDashboard: true,
        betaSSO: true,
        internalDebug: false
        // Grafana: https://metrics.novacorp-solutions.example
        // Jenkins: https://ci.novacorp-solutions.example
    };

    // Base64 "obfuscated" secret
    const _x = "ZmxhZ3twM3JzaXN0M250X2IzNGNoX2Ywcm1fdjNyc2lvbjF9Zw==";

    console.log("NovaCorp app v2.4.1 loaded");
})();