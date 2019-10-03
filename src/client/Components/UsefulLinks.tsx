import * as React from 'react';

export interface UsefulLinksProps {

}

const UsefulLinks: React.SFC<UsefulLinksProps> = () => {
    return (
        <>
        <section className="row">
        <article className="col-md-12 text-center">
            <h1>Useful Links</h1>
            {/* add links to site inside text*/}
            <p>Here are a few links to websites that can prove to be very helpful from new to veteran players:</p>
            <p>D&D Beyond is a wonderful way to get you off to a great start! Keep in mind that select portions of the content, like character races, classes, etc., are behind a paywall. </p>
            <p>D&D basic rules.</p>
            {/* <p>Geek and Sundry artile about character creation https://geekandsundry.com/rpg-character-building-tips-for-beginners/</p> */}
        </article>
        </section>
        </>
    );
}

export default UsefulLinks;