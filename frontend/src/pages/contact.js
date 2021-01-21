import React from 'react';
import PageTransition from 'gatsby-plugin-page-transitions';
import Card from '../components/Card';
import SEO from '../components/SEO';

const ContactPage = () => (
  <>
    <SEO title="Contact" />
    <PageTransition
      defaultStyle={{ transition: 'opacity 400ms ease-in-out', opactiy: 0 }}
      transitionStyles={{
        entering: { opacity: 0 },
        entered: { opacity: 1 },
        exiting: { opacity: 1 },
        exited: { opacity: 0 },
      }}
      transitionTime={400}
    >
      <div className="container">
        <h1 className="font-bold mt-12 mb-4">Contact me</h1>
        <p>Feel free to reach out to me through these various mediums.</p>
        <div className="grid grid-cols-2 lg:gap-2 gap-0">
          <div className="lg:col-span-1 col-span-2">
            <Card outside href="https://twitter.com/dill_schultz">
              <div className="grid grid-cols-4 gap-4">
                <div className="col-span-1 flex justify-center">
                  <svg
                    className="overflow-visible"
                    width="64"
                    height="64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="32" cy="32" r="32" fill="#ECEDEE" />
                    <path
                      d="M27.362 42.159c9.434 0 14.594-7.816 14.594-14.594 0-.222 0-.443-.015-.663 1.0038-.7261 1.8704-1.6251 2.559-2.655-.9361.4148-1.9292.6868-2.946.807 1.0707-.641 1.8721-1.6492 2.255-2.837-1.0068.5975-2.1084 1.0185-3.257 1.245-.7733-.8223-1.7961-1.3668-2.9101-1.5493-1.114-.1824-2.2571.0073-3.2524.54-.9952.5326-1.7872 1.3784-2.2533 2.4065-.4661 1.0281-.5804 2.1812-.3252 3.2808-2.0392-.1022-4.0342-.6322-5.8554-1.5554-1.8211-.9233-3.4278-2.2192-4.7156-3.8036-.6559 1.1292-.8568 2.4659-.5618 3.7379.2951 1.2721 1.0638 2.3839 2.1498 3.1091-.8163-.0242-1.6147-.2444-2.328-.642v.065c.0003 1.1842.4103 2.3319 1.1603 3.2483.75.9164 1.7939 1.5452 2.9547 1.7797-.7551.2059-1.5474.236-2.316.088.3278 1.0192.9659 1.9104 1.8251 2.5491.8592.6386 1.8965.9928 2.9669 1.0129-1.8163 1.4274-4.0599 2.2023-6.37 2.2-.4081-.0008-.8158-.0255-1.221-.074 2.3456 1.5053 5.0749 2.3037 7.862 2.3"
                      fill="#393F47"
                    />
                  </svg>
                </div>
                <div className="lg:col-span-2 col-span-3">
                  <h2 className="font-semibold mb-4">Twitter</h2>
                  <p className="text-indigo-500 mb-0 font-bold hover:underline cursor-pointer inline-block">
                    @ me →
                  </p>
                </div>
              </div>
            </Card>
          </div>
          <div className="lg:col-span-1 col-span-2">
            <Card outside href="https://github.com/dillonschultz93">
              <div className="grid grid-cols-4 gap-4">
                <div className="col-span-1 flex justify-center">
                  <svg
                    className="overflow-visible"
                    width="64"
                    height="64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="32" cy="32" r="32" fill="#ECEDEE" />
                    <path
                      d="M45.8535 24.3602c-1.4308-2.4515-3.3715-4.3923-5.8227-5.8229-2.4516-1.4307-5.128-2.1458-8.0311-2.1458-2.9027 0-5.58.7153-8.031 2.1458-2.4515 1.4305-4.3921 3.3714-5.8229 5.8229C16.7153 26.8115 16 29.4884 16 32.3908c0 3.4864 1.0172 6.6215 3.052 9.406 2.0347 2.7847 4.6631 4.7117 7.8852 5.781.375.0696.6527.0207.8332-.1456.1806-.1665.2708-.3751.2708-.6248 0-.0416-.0036-.4165-.0105-1.1249-.0072-.7085-.0106-1.3265-.0106-1.8539l-.4791.0829c-.3056.056-.691.0797-1.1563.073-.4651-.0065-.9479-.0552-1.4478-.1459-.5001-.0898-.9653-.2981-1.3959-.6245-.4304-.3264-.7359-.7536-.9165-1.281l-.2083-.4794c-.1388-.3192-.3575-.6737-.6561-1.0624-.2987-.3889-.6007-.6526-.9062-.7915l-.1459-.1044c-.0972-.0694-.1873-.1531-.2707-.2502-.0834-.0972-.1458-.1943-.1874-.2917-.0418-.0974-.0072-.1773.1041-.24.1113-.0627.3124-.0931.6042-.0931l.4165.0623c.2778.0556.6214.2219 1.0312.4999.4097.2777.7464.6387 1.0103 1.083.3196.5695.7047 1.0036 1.1563 1.3022.4512.2987.9062.4477 1.3644.4477.4583 0 .854-.0347 1.1875-.1038.3331-.0695.6456-.1739.9374-.3127.125-.9309.4653-1.646 1.0207-2.1459-.7916-.0832-1.5032-.2085-2.1353-.3751-.6318-.1668-1.2846-.4375-1.9581-.8129-.6739-.3748-1.2329-.8403-1.6772-1.3955-.4444-.5556-.8091-1.285-1.0936-2.1876-.2846-.9029-.427-1.9444-.427-3.1249 0-1.6808.5487-3.1111 1.646-4.2917-.514-1.2637-.4655-2.6803.1457-4.2497.4028-.1251 1.0001-.0312 1.7916.2812.7917.3125 1.3714.5802 1.7396.8022.3682.2219.6632.4099.8854.5624 1.2919-.361 2.6251-.5415 4-.5415 1.3749 0 2.7083.1805 4.0003.5415l.7916-.4997c.5414-.3335 1.1807-.6391 1.9163-.9169.7361-.2776 1.299-.3541 1.6881-.229.6247 1.5695.6804 2.986.1663 4.2497 1.0971 1.1806 1.646 2.6113 1.646 4.2917 0 1.1805-.1428 2.2253-.427 3.1352-.2846.91-.6524 1.6386-1.1037 2.1875-.4517.5488-1.0143 1.0106-1.6878 1.3854-.6736.375-1.3267.6457-1.9585.8125-.632.1668-1.3437.2922-2.1352.3755.7219.6248 1.083 1.6109 1.083 2.9581v4.3953c0 .2497.0868.4582.2606.6248.1736.1663.4477.2152.8228.1456 3.2225-1.0692 5.8509-2.9963 7.8855-5.781 2.0343-2.7845 3.0519-5.9196 3.0519-9.406-.0008-2.902-.7164-5.5787-2.1463-8.03z"
                      fill="#393F47"
                    />
                  </svg>
                </div>
                <div className="col-span-3">
                  <h2 className="font-semibold mb-4">GitHub</h2>
                  <p className="text-indigo-500 mb-0 font-bold hover:underline cursor-pointer inline-block">
                    View my repos →
                  </p>
                </div>
              </div>
            </Card>
          </div>
          <div className="lg:col-span-1 col-span-2">
            <Card
              outside
              href="https://www.linkedin.com/in/dillon-schultz-7a5b2bab/"
            >
              <div className="grid grid-cols-4 gap-4">
                <div className="col-span-1 flex justify-center">
                  <svg
                    className="overflow-visible"
                    width="64"
                    height="64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="32" cy="32" r="32" fill="#ECEDEE" />
                    <g clipPath="url(#clip0)" fill="#393F47">
                      <path d="M44.994 43v-.001H45v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07v-2.185h-4.773v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V43h4.965zM21.396 26.977h4.976V43h-4.976V26.977zM23.882 19C22.291 19 21 20.291 21 21.882c0 1.591 1.291 2.909 2.882 2.909 1.591 0 2.882-1.318 2.882-2.909C26.763 20.291 25.472 19 23.882 19z" />
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <path
                          fill="#fff"
                          transform="translate(21 19)"
                          d="M0 0h24v24H0z"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="col-span-3">
                  <h2 className="font-semibold mb-4">LinkedIn</h2>
                  <p className="text-indigo-500 mb-0 font-bold hover:underline cursor-pointer inline-block">
                    Connect with me →
                  </p>
                </div>
              </div>
            </Card>
          </div>
          <div className="lg:col-span-1 col-span-2">
            <Card outside href="mailto:hello@dillonschultz.design">
              <div className="grid grid-cols-4 gap-4">
                <div className="col-span-1 flex justify-center">
                  <svg
                    className="overflow-visible"
                    width="64"
                    height="64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="32" cy="32" r="32" fill="#ECEDEE" />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M19.4896 21.4345c-.1573.0651-.3046.1615-.4324.2894-.2413.2412-.3906.5746-.3906.9428v18.6666c0 .7364.597 1.3334 1.3334 1.3334h24c.7363 0 1.3333-.597 1.3333-1.3334V22.6667c0-.2198-.0532-.4271-.1473-.6099-.0617-.1199-.1428-.2325-.2432-.3329-.1279-.1279-.2752-.2243-.4325-.2894-.1572-.0652-.3296-.1012-.5103-.1012H20.0002c-.1808 0-.3534.036-.5106.1012zm1.8437 4.4169c.9386.9148 2.081 2.0166 3.2528 3.1195 1.422 1.3383 2.9015 2.6917 4.1175 3.7156.6052.5096 1.1675.9568 1.6365 1.283.2326.1618.4692.3129.6938.4289.1675.0864.5361.2683.9661.2683.4299 0 .7985-.1819.966-.2683.2246-.116.4612-.2671.6938-.4289.469-.3262 1.0314-.7734 1.6365-1.283 1.216-1.0239 2.6955-2.3773 4.1175-3.7156 1.1718-1.1029 2.3142-2.2047 3.2528-3.1195V40H21.3333V25.8514zM40.7456 24c-.9193.8954-2.0265 1.9627-3.1595 3.0291-1.4113 1.3283-2.8485 2.6417-4.0075 3.6177-.5823.4904-1.0721.8766-1.4416 1.1337-.0497.0345-.0954.0654-.137.0929-.0417-.0275-.0874-.0584-.1371-.0929-.3695-.2571-.8592-.6433-1.4416-1.1337-1.159-.976-2.5961-2.2894-4.0075-3.6177-1.133-1.0664-2.2402-2.1337-3.1595-3.0291h17.4913zm-9.057 8.0536c.0003-.0005.0085-.0044.0239-.0098-.0165.0077-.0242.0104-.0239.0098zm.5988-.0098c.0154.0054.0236.0093.0239.0098.0003.0006-.0074-.0021-.0239-.0098z"
                      fill="#393F47"
                    />
                  </svg>
                </div>
                <div className="col-span-3">
                  <h2 className="font-semibold mb-4">Email</h2>
                  <p className="text-indigo-500 mb-0 font-bold hover:underline cursor-pointer inline-block">
                    Send me an email →
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </PageTransition>
  </>
);

export default ContactPage;
