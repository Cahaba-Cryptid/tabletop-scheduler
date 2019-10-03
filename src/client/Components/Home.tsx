import * as React from 'react';

export interface HomeProps {

}

const Home: React.SFC<HomeProps> = () => {
    return (
        <>
            <section className="row">
                <article className="col-md-12">
                    <h1 className="text-center">Welcome to DM Scheduler!</h1>
                    <p className="text-center">Find a game, set up a party, or just see who is out there playing!</p>
                </article>
            </section>
        </>
    );
}

export default Home;