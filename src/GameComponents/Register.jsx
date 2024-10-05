import React, { useContext } from 'react'
import { AuthContext } from './Context'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth/cordova'

export default function Register() {

    const {auth}=useContext(AuthContext)

    const handleRegiser = async(event) => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        const userName= form.userName.value

        const userData = {
            email, password
        }

        await createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                alert('register succesfull')
                // ...
                
                
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });

        
            await updateProfile(auth.currentUser, {
                displayName: userName
              }).then(() => {
                // Profile updated!
                // ...\
                console.log('updated',userName)
              }).catch((error) => {
                // An error occurred
                // ...
              });

    }



    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold w-[22vw]">Register now!</h1>

                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleRegiser} className="card-body">
                        <div className="form-control">
                                <label className="label">
                                    <span className="label-text">userName</span>
                                </label>
                                <input name='userName' type="text" placeholder="userName" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
