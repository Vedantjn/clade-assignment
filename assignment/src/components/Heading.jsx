import React from 'react';
import '../styles/Heading.css';

const Heading = () => {
    return (
        <div className="heading-container">
            <div className="first-half">
                <div className="heading-heading">
                    Senior Product Designer
                </div>
                <div className="posted">
                    Posted 2 days ago
                </div>
                <div className="status">
                    <div className="indicator"></div>
                    Open
                </div>
            </div>
            <div className="second-half">
                <div className="location">
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.5 13.5C14.1569 13.5 15.5 12.1569 15.5 10.5C15.5 8.84315 14.1569 7.5 12.5 7.5C10.8431 7.5 9.5 8.84315 9.5 10.5C9.5 12.1569 10.8431 13.5 12.5 13.5Z" stroke="#5D5D5D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M12.5 22.5C16.5 18.5 20.5 14.9183 20.5 10.5C20.5 6.08172 16.9183 2.5 12.5 2.5C8.08172 2.5 4.5 6.08172 4.5 10.5C4.5 14.9183 8.5 18.5 12.5 22.5Z" stroke="#5D5D5D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    Delaware, USA
                </div>
                <div className="salary">
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.5 5.5C13.5 6.60457 11.0376 7.5 8 7.5C4.96243 7.5 2.5 6.60457 2.5 5.5M13.5 5.5C13.5 4.39543 11.0376 3.5 8 3.5C4.96243 3.5 2.5 4.39543 2.5 5.5M13.5 5.5V7M2.5 5.5V17.5C2.5 18.6046 4.96243 19.5 8 19.5M8 11.5C7.83145 11.5 7.66468 11.4972 7.5 11.4918C4.69675 11.4 2.5 10.5433 2.5 9.5M8 15.5C4.96243 15.5 2.5 14.6046 2.5 13.5M22.5 12C22.5 13.1046 20.0376 14 17 14C13.9624 14 11.5 13.1046 11.5 12M22.5 12C22.5 10.8954 20.0376 10 17 10C13.9624 10 11.5 10.8954 11.5 12M22.5 12V19.5C22.5 20.6046 20.0376 21.5 17 21.5C13.9624 21.5 11.5 20.6046 11.5 19.5V12M22.5 15.75C22.5 16.8546 20.0376 17.75 17 17.75C13.9624 17.75 11.5 16.8546 11.5 15.75" stroke="#5D5D5D" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    $300k-$400k
                </div>
            </div>
        </div>
    );
}

export default Heading;
