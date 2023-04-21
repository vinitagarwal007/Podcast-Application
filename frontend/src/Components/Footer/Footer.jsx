import React from 'react'

import "./Footer.css"

export default function Footer() {
  return (
    <div className='footer'>
        <div className="footerTop">
            <div className="footerText">
                <div className="footerTextIcon">
                    <img src="https://uploads-ssl.webflow.com/63a4333d6709521275441c77/64429c22490d761efb73e6aa_Group%201.png" alt="" />
                </div>
                <div className="footerTextHeading">
                    SunoPodcast is your go-to destination for discovering and enjoying a wide range of podcasts on various topics. From news and entertainment to business, education, and more, you can find podcasts that cater to your interests and preferences.
                </div>
            </div>
            <div className="footerDownload">
                <div className="downloadText">
                    Download for:
                </div>
                <div className="downloadImage">
                    <div className="appStore">
                        <img src="https://uploads-ssl.webflow.com/63a4333d6709521275441c77/6442c6fb38e7658238c0f068_Old%20landing.png" alt="" />
                    </div>
                    <div className="googlePlay">
                        <img src="https://uploads-ssl.webflow.com/63a4333d6709521275441c77/6442c6f9f083b92cc67326e6_Old%20landing%20(1).png" alt="" />
                    </div>
                </div>
            </div>
        </div>
        <div className="copyright">
            <div className="copyrightText">
                © 2023 All rights reserved. Made with 💝 by Muskan, Vinit & Ajay.
            </div>
            <div className="copyrightImage">
                <div className="facebook">
                    <svg width="43" height="40" viewBox="0 0 43 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <ellipse cx="21.6867" cy="19.9999" rx="21.2626" ry="19.9999" fill="white"/>
                        <path d="M21.6866 0C9.94343 0 0.42395 8.95417 0.42395 20C0.42395 31.0458 9.94343 40 21.6866 40C33.4298 40 42.9493 31.0458 42.9493 20C42.9493 8.95417 33.4298 0 21.6866 0ZM26.7232 13.8208H23.5272C23.1484 13.8208 22.7276 14.2896 22.7276 14.9125V17.0833H26.7254L26.1208 20.1792H22.7276V29.4729H18.9557V20.1792H15.5337V17.0833H18.9557V15.2625C18.9557 12.65 20.8826 10.5271 23.5272 10.5271H26.7232V13.8208Z" fill="#303030"/>
                    </svg>
                </div>
                <div className="instagram">
                    <svg width="44" height="40" viewBox="0 0 44 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <ellipse cx="22.2121" cy="19.9999" rx="21.2626" ry="19.9999" fill="white"/>
                        <path d="M28.8566 20C28.8566 21.6576 28.1565 23.2473 26.9104 24.4194C25.6643 25.5915 23.9743 26.25 22.212 26.25C20.4498 26.25 18.7597 25.5915 17.5136 24.4194C16.2675 23.2473 15.5674 21.6576 15.5674 20C15.5674 19.6437 15.6073 19.2958 15.676 18.9583H13.3526V27.2854C13.3526 27.8646 13.8509 28.3333 14.4666 28.3333H29.9596C30.2547 28.3328 30.5375 28.2221 30.7459 28.0257C30.9544 27.8292 31.0715 27.563 31.0715 27.2854V18.9583H28.7481C28.8167 19.2958 28.8566 19.6437 28.8566 20ZM22.212 24.1667C22.7939 24.1665 23.37 24.0586 23.9075 23.849C24.4451 23.6394 24.9334 23.3323 25.3448 22.9452C25.7561 22.5581 26.0824 22.0986 26.3049 21.5929C26.5274 21.0872 26.6419 20.5452 26.6417 19.9979C26.6416 19.4506 26.5268 18.9087 26.304 18.4031C26.0812 17.8975 25.7547 17.4381 25.3432 17.0512C24.9317 16.6643 24.4431 16.3574 23.9055 16.1481C23.3679 15.9388 22.7917 15.8311 22.2098 15.8312C21.0347 15.8315 19.9078 16.2709 19.0771 17.0527C18.2463 17.8345 17.7798 18.8947 17.7801 20C17.7804 21.1053 18.2475 22.1653 19.0786 22.9467C19.9098 23.7281 21.0369 24.1669 22.212 24.1667ZM27.5277 15.625H30.1833C30.3597 15.625 30.529 15.5592 30.6539 15.4421C30.7789 15.3249 30.8494 15.1659 30.85 15V12.5021C30.85 12.3358 30.7797 12.1763 30.6547 12.0587C30.5297 11.9411 30.3601 11.875 30.1833 11.875H27.5277C27.3509 11.875 27.1813 11.9411 27.0563 12.0587C26.9313 12.1763 26.861 12.3358 26.861 12.5021V15C26.8632 15.3437 27.1622 15.625 27.5277 15.625ZM22.212 0C16.5728 0 11.1646 2.10714 7.17703 5.85786C3.18951 9.60859 0.949341 14.6957 0.949341 20C0.949341 25.3043 3.18951 30.3914 7.17703 34.1421C11.1646 37.8929 16.5728 40 22.212 40C25.0043 40 27.7692 39.4827 30.3489 38.4776C32.9286 37.4725 35.2726 35.9993 37.247 34.1421C39.2214 32.285 40.7876 30.0802 41.8562 27.6537C42.9247 25.2272 43.4747 22.6264 43.4747 20C43.4747 17.3736 42.9247 14.7728 41.8562 12.3463C40.7876 9.91982 39.2214 7.71504 37.247 5.85786C35.2726 4.00069 32.9286 2.5275 30.3489 1.52241C27.7692 0.517315 25.0043 0 22.212 0ZM33.2863 28.1021C33.2863 29.375 32.1789 30.4167 30.8256 30.4167H13.5984C12.2451 30.4167 11.1377 29.375 11.1377 28.1021V11.8979C11.1377 10.625 12.2451 9.58333 13.5984 9.58333H30.8256C32.1789 9.58333 33.2863 10.625 33.2863 11.8979V28.1021Z" fill="#303030"/>
                    </svg>
                </div>
                <div className="twitter">
                    <svg width="43" height="40" viewBox="0 0 43 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <ellipse cx="21.7374" cy="19.9999" rx="21.2626" ry="19.9999" fill="white"/>
                        <path d="M21.7373 0C9.99415 0 0.47467 8.95417 0.47467 20C0.47467 31.0458 9.99415 40 21.7373 40C33.4805 40 43 31.0458 43 20C43 8.95417 33.4805 0 21.7373 0ZM30.3864 16.3833C30.3952 16.5542 30.3975 16.725 30.3975 16.8917C30.3975 22.1 26.187 28.1021 18.4837 28.1021C16.2075 28.1056 13.9786 27.4907 12.065 26.3312C12.3906 26.3687 12.7251 26.3833 13.0639 26.3833C15.0263 26.3833 16.8314 25.7563 18.2644 24.6979C17.3912 24.6818 16.545 24.4098 15.8438 23.9198C15.1427 23.4299 14.6215 22.7464 14.353 21.9646C14.9801 22.0768 15.6262 22.0532 16.2423 21.8958C15.2944 21.7155 14.442 21.2325 13.8296 20.5285C13.2173 19.8245 12.8826 18.9429 12.8823 18.0333V17.9854C13.4471 18.2792 14.0939 18.4583 14.7805 18.4792C13.8919 17.9228 13.2628 17.0681 13.022 16.0899C12.7811 15.1117 12.9467 14.0839 13.4848 13.2167C14.5367 14.4333 15.8486 15.4286 17.3355 16.1381C18.8223 16.8477 20.451 17.2555 22.1161 17.3354C21.9044 16.4902 21.9955 15.6029 22.3752 14.8115C22.755 14.02 23.4021 13.3687 24.2159 12.9589C25.0298 12.549 25.9648 12.4036 26.8756 12.5451C27.7864 12.6867 28.6219 13.1073 29.2524 13.7417C30.1896 13.5672 31.0884 13.2439 31.9102 12.7854C31.5978 13.6982 30.9438 14.4733 30.0697 14.9667C30.8999 14.8726 31.7106 14.6627 32.475 14.3437C31.9135 15.1352 31.2062 15.8259 30.3864 16.3833Z" fill="#303030"/>
                    </svg>
                </div>
            </div>
        </div>
    </div>
  )
}
