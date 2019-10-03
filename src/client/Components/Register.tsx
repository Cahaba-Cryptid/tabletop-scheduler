import * as React from 'react';
import { useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { json, SetToken } from '../utils/api';

const Register: React.SFC<IRegisterProps> = props => {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [name, setName] = useState<string>('');

    const handleRegister = async () => {
        event.preventDefault()
        let newRegRequest = {
            name,
            email
        }
        try {
            let result = await json('/auth/register', 'POST', newRegRequest);
            if (result) {
                props.history.push('/');
            }
        } catch (error) {
            throw (error);
        }

    }

    return (
        <>
            <div className="card row m-3 w-50 shadow">
                <div className="card-body p-1">
                    <div className="input-group">
                        <div className="input-group-prepend">
                        </div>
                        <p className="m-2">Welcome to DM Scheduler! In order to keep the integrity of the group I allow to use this site I have implemented registration requests. Insert your full name and email and I'll look all requests over ASAP! Looking forward to our next session!</p>
                        <input className="m-2" type="text" placeholder="Name" value={name} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setName(event.target.value)} />
                        <input className="m-2" type="email" placeholder="Email" value={email} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)} />
                    </div>
                    <div>
                        <button className="btn btn-primary mx-2" onClick={() => handleRegister()}>Register</button>
                    </div>
                </div>
            </div>
        </>
    )

}

export interface IRegisterProps extends RouteComponentProps {
    email: string,
    password: string
};

export default Register;