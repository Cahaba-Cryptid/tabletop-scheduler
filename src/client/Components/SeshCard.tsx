import * as React from 'react';
import { ISessionsProps } from "./Sessions"
import moment from 'moment';


export interface ISeshCardProps { sessions: ISessionsProps[] }

const SeshCard: React.SFC<ISeshCardProps> = props => {

    return (
        <>
            <main className="col-md-12">
                {props.sessions.map(session => (
                    <div key={session.id} className="card m-2 shadow border border-light">
                        <div className="card-body">
                            <h5 className="card-title">By: {session.name}</h5>
                            <p className="card-text">Quest Details: {session.details}</p>
                            <p>Date of event: {moment(session.dateOfEvent).format('MMMM Do, YYYY')}</p>
                            <p>Created: {moment(session._created).format('MMMM Do, YYYY')}</p>
                            {/* <Link className="btn btn-success my-2" to={`/blog/${blog.id}`}>View Full Blog</Link> */}
                        </div>
                    </div>
                ))}
            </main>
        </>
    );
}

export default SeshCard;