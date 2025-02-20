
const Footer = () => {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between space-y-6 md:space-y-0">
          <div className="flex flex-col space-y-4">
            <h2 className="font-bold text-lg">Support links</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-primary hover:underline">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="text-primary hover:underline">
                  Cookies
                </a>
              </li>
              <li>
                <a href="#" className="text-primary hover:underline">
                  Accessibility statement
                </a>
              </li>
              <li>
                <a href="#" className="text-primary hover:underline">
                  Terms and conditions
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <a
              href="https://www.gov.uk/"
              className="inline-block"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">Go to the GOV.UK homepage</span>
              <svg
                width="132"
                height="17"
                className="text-black"
                role="img"
                aria-label="GOV.UK"
                viewBox="0 0 132 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M25 0L0 0L0 17L25 17L25 0Z" fill="currentColor" />
                <path
                  d="M45.5263 6.19444H48.3158V5.15972H41.5789V6.19444H44.3684V13.6111H45.5263V6.19444Z"
                  fill="currentColor"
                />
                <path
                  d="M49.4737 5.15972V13.6111H54.7368V12.5764H50.6316V9.80556H54.4737V8.77083H50.6316V6.19444H54.7368V5.15972H49.4737Z"
                  fill="currentColor"
                />
                <path
                  d="M57.6842 5.15972L60.2105 13.6111H61.3684L63.8947 5.15972H62.7368L60.7895 12.0556L58.8421 5.15972H57.6842Z"
                  fill="currentColor"
                />
                <path
                  d="M65.0526 5.15972V13.6111H66.2105V5.15972H65.0526Z"
                  fill="currentColor"
                />
                <path
                  d="M73.9474 5.15972H72.7895V11.0417L68.6842 5.15972H67.5263V13.6111H68.6842V7.72917L72.7895 13.6111H73.9474V5.15972Z"
                  fill="currentColor"
                />
                <path
                  d="M75.1053 5.15972V6.19444H77.8947V13.6111H79.0526V6.19444H81.8421V5.15972H75.1053Z"
                  fill="currentColor"
                />
                <path
                  d="M89.7368 5.15972H88.5789V11.0417L84.4737 5.15972H83.3158V13.6111H84.4737V7.72917L88.5789 13.6111H89.7368V5.15972Z"
                  fill="currentColor"
                />
                <path
                  d="M91.1579 12.0556L92.0526 13.6111H93.4737L92.3158 11.5625C92.8947 11.2847 93.2105 10.7639 93.2105 10.0347C93.2105 8.97917 92.3158 8.25 90.7895 8.25H89.1579V13.6111H90.2105V12.0556H91.1579ZM90.2105 9.18056H90.7895C91.6842 9.18056 92.1579 9.49306 92.1579 10.0347C92.1579 10.5764 91.6842 10.8889 90.7895 10.8889H90.2105V9.18056Z"
                  fill="currentColor"
                />
                <path
                  d="M94.7368 5.15972V13.6111H100V12.5764H95.8947V9.80556H99.7368V8.77083H95.8947V6.19444H100V5.15972H94.7368Z"
                  fill="currentColor"
                />
                <path
                  d="M101.158 5.15972V13.6111H102.316V10.0347H105.105C106.632 10.0347 107.526 9.30556 107.526 8.25C107.526 7.19444 106.632 6.46528 105.105 6.46528H102.316V5.15972H101.158ZM102.316 7.39583H105.105C106 7.39583 106.474 7.70833 106.474 8.25C106.474 8.79167 106 9.10417 105.105 9.10417H102.316V7.39583Z"
                  fill="currentColor"
                />
                <path
                  d="M114.737 5.15972H113.579V11.0417L109.474 5.15972H108.316V13.6111H109.474V7.72917L113.579 13.6111H114.737V5.15972Z"
                  fill="currentColor"
                />
                <path
                  d="M116.842 12.0556L117.737 13.6111H119.158L118 11.5625C118.579 11.2847 118.895 10.7639 118.895 10.0347C118.895 8.97917 118 8.25 116.474 8.25H114.842V13.6111H115.895V12.0556H116.842ZM115.895 9.18056H116.474C117.368 9.18056 117.842 9.49306 117.842 10.0347C117.842 10.5764 117.368 10.8889 116.474 10.8889H115.895V9.18056Z"
                  fill="currentColor"
                />
                <path
                  d="M120.368 5.15972V13.6111H125.632V12.5764H121.526V9.80556H125.368V8.77083H121.526V6.19444H125.632V5.15972H120.368Z"
                  fill="currentColor"
                />
                <path
                  d="M126.789 5.15972V13.6111H132.053V12.5764H127.947V9.80556H131.789V8.77083H127.947V6.19444H132.053V5.15972H126.789Z"
                  fill="currentColor"
                />
              </svg>
            </a>
            <p className="text-sm text-muted">
              All content is available under the{" "}
              <a
                href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/"
                className="text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open Government Licence v3.0
              </a>
              , except where otherwise stated
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
