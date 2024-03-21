import AstraApproved from '../../assets/images/cosmog.png';

export default function DreamJournal() {
    return (
        <>
            <div className="main">
                <div className="entryHistory">
                    <div className="entry">
                        <div className="entryDate">
                            <p>1/1/2024</p>
                        </div>
                        <div className="entryTitle">
                            <p>Teeth Falling out</p>
                        </div>
                    </div>
                </div>
                <div className="currentEntry">
                    <div className="title">
                        <p>Naked Dream</p>
                    </div>
                    <div className="entryContent">
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                    <div className="astraCert">
                        <img src={AstraApproved} alt="Astra Approved" />
                    </div>
                </div>
            </div>
        </>
    )
}