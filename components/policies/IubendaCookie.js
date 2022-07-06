import Script from 'next/script'


const IubendaCookiesScript = () => {
    return (
        <>
            <Script strategy="lazyOnload" id="iubenda-cookies-script">
                {`
                    console.log('iubenda')
                    var _iub = _iub || [];
                    _iub.csConfiguration = {
                        "ccpaAcknowledgeOnDisplay":true,
                        "ccpaApplies":true,
                        "consentOnContinuedBrowsing":false,
                        "enableCcpa":true,
                        "floatingPreferencesButtonDisplay":"bottom-right",
                        "invalidateConsentWithoutLog":true,
                        "lang":"en-GB",
                        "perPurposeConsent":true,
                        "whitelabel":false,
                        "cookiePolicyId":60814783,"
                        siteId":2721522, 
                        "banner":{ 
                            "acceptButtonDisplay":true,
                            "closeButtonDisplay":false,
                            "customizeButtonDisplay":true,
                            "explicitWithdrawal":true,
                            "listPurposes":true,
                            "position":"float-top-center",
                            "rejectButtonDisplay":true 
                        }
                    };
                `}
            </Script>
            <Script
                strategy="lazyOnload"
                src={`//cdn.iubenda.com/cs/ccpa/stub.js`}
            />
            <Script
                strategy="lazyOnload"
                src={`//cdn.iubenda.com/cs/iubenda_cs.js`}
            />
        </>
    )
}

export default IubendaCookiesScript
