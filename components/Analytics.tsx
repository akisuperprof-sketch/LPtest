import { GoogleAnalytics } from '@next/third-parties/google'
import Script from 'next/script'

export default function Analytics() {
    return (
        <>
            {/* GA4 - Replace GA_MEASUREMENT_ID with your actual ID */}
            <GoogleAnalytics gaId="G-XXXXXXXXXX" />

            {/* Microsoft Clarity - Replace PROJECT_ID with your actual ID */}
            <Script id="clarity-script" strategy="afterInteractive">
                {`
          (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "YOUR_CLARITY_PROJECT_ID");
        `}
            </Script>
        </>
    )
}
