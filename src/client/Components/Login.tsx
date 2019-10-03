import * as React from 'react';
import { useState } from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';
import { json, SetToken } from '../utils/api'

const Login: React.SFC<ILoginProps> = props => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('')
    const [loginStatus, setLoginStatus] = useState<any>()

    const handleLogin = async () => {
        event.preventDefault();

        try {
            let result = await json('/auth/login', 'POST', {
                email,
                password
            });

            if (result) {
                SetToken(result.token, { userid: result.userid, role: result.role });
                props.history.push('/');
            } else {
                console.log('Problems!');
            }

        } catch (error) {
            throw (error)
        }
    }

    return (
        <>
            <section className="row m-2 card shadow">
                <p className="ml-4 mt-2">Login to view and add a session!</p>
                <div className="col-md-12 card-body">
                    <div className="input-group">
                        <input className="ml-2" type="email" placeholder="Email" value={email} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)} />
                        <input className="ml-2" type="password" placeholder="Password" value={password} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)} />
                    </div>
                    <div>
                        <button className="btn btn-primary m-2" onClick={() => handleLogin()}>Login</button>
                    </div>
                </div>
            </section>
            <section className="row m-2 card shadow">
                <p className="ml-4 mt-2">You must request to register for an account. Click the button to go to registration form!</p>
                <div className="m-2">
                    <Link className="btn btn-primary ml-2" to={`/register`}>Register!</Link>
                </div>
            </section>
        </>
    )
}

export interface ILoginProps extends RouteComponentProps {
    email: string,
    password: string
};

export default Login;