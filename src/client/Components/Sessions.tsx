import * as React from 'react';
import { json } from '../utils/api';
import { useState, useEffect } from 'react';
import SeshCard from './SeshCard';
import Calendar from 'react-calendar';
import { RouteComponentProps } from 'react-router';
import { User } from '../utils/api';

export interface ISessionsProps extends RouteComponentProps {
    id: number,
    name: string,
    details: string,
    _created: Date,
    dateOfEvent: Date
}

const Sessions: React.SFC<ISessionsProps> = props => {

    const [sessions, setSessions] = useState<ISessionsProps[]>([]);
    const [details, setDetails] = useState('');
    const [dateOfEvent, SetDateOfEvent] = useState(new Date());
    const [name, setName] = useState('');

    const getSessions = async () => {
        let r = await fetch('/api/sessions');
        let sessions = await r.json();
        setSessions(sessions)
        // let sessions = await json('/api/session', 'GET');
        // setSessions(sessions);
    }

    useEffect(() => {
        getSessions();
    }, []);

    const eventChange = (dateOfEvent: Date) => {
        SetDateOfEvent(dateOfEvent);
    }

    const addSession = async (e: React.MouseEvent) => {
        e.preventDefault();
        let newSession = {
            name,
            details,
            dateOfEvent
        };
        try {
            let data = await json('/api/sessions/', 'POST', newSession)
            getSessions();
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if(!User || User.userid === null || User.role !== 'admin') {
            props.history.replace('/login');
        }
    }, []);

    return (
        <>
            <div className="container row d-flex">
                <div className="col-md-6 flex-column-reverse justify-content-end border-right border-dark">
                    <h3>Add a Session!</h3>
                    <form>
                        <section className="form-group">
                            <textarea className="form-control" cols={10} rows={1} placeholder="Name" onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => setName(event.target.value)}/>
                        </section>
                        <section className="form-group">
                            <textarea className="form-control" cols={10} rows={10} placeholder="Details" onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => setDetails(event.target.value)}/>
                        </section>
                        <section className="form-group">
                            Select a Date:
                            <Calendar onChange={eventChange} value={dateOfEvent} />
                        </section>
                        <button className="btn btn-primary" onClick={e => addSession(e)}>Submit Session</button>
                    </form>
                </div>
                <div className="col-md-6">
                    <SeshCard sessions={sessions} />
                </div>
            </div>
        </>
    );
}

export default Sessions;

