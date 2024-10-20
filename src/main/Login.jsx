"use client"
import React from 'react'
import './Login.css'


function Login() {
  return (
    <>
    <div id='box_l'>
        <div class='section' id='gif'>
            <img src="src/assets/istockphoto-849292906-612x612.jpg" alt="gif" />
        </div>
        <div class='section' id='card'>
            <form action="">
                <div class="lite_color">
                  <p>Log In</p>
                </div>
                <br />
                <div class="f_items m">
                  <label htmlFor="email">Email:</label>
                  <input className="text-black" class="input_v" type="email" id='email' name='email'/>
                </div>
                <br />
                <div class="f_items m">
                  <label htmlFor="password">Password:</label>
                  <input className="text-black" class="input_v" type="password" id='password' name='password' />
                </div>
                <br />
                <div id='bottom_login'>
                  <div>
                    <input type="checkbox" id='show_pwd' name='show_pwd'/>
                    <label className="text-blue-200 text-xs ps-1" htmlFor="show_pwd">Show Password</label>
                  </div>
                  <div>
                    <a className="text-blue-200 text-xs" href="#">Forgot Password?</a>
                  </div>
                </div>
                <br />
                <input type="submit" id='submit' class='submit_b' name='Submit' />

                <p className="text-xs text-blue-200">or continued with</p>

                <div className="min-h-7 max-h-7 text-blue-200">
                <a class='an' className="mr-5 p-0.5 text-center rounded-2xl min-w-7 max-w-7 min-h-7 max-h-7 hover:bg-pink-500 hover:text-white" href="">Go</a>
                <a class='an' className="p-0.5 text-center text-blue-200 rounded-2xl min-w-7 hover:min-w-7 max-w-7 min-h-7 max-h-7 hover:bg-blue-500 hover:text-white" href="">Fa</a>
                </div>
                <p className="text-blue-200 text-xs">Don't have an account? <a class="links_color" href="#">Sign up</a></p>
                
                
            </form>
        </div>
    </div>
    </>
  )
}

export default Login