import React from 'react'
import './Login.css'

function Signup() {
  return (
    <>
    <div id='box_l'>
        <div class='section' id='gif'>
            <img src="src/assets/istockphoto-849292906-612x612.jpg" alt="gif" />
        </div>
        <div class='section' id='card'>
            <form action="">
                <div className="text-blue-200">
                  <p>Sign Up</p>
                </div>
                <br />
                <div class="f_items m">
                  <label htmlFor="name">Name:</label>
                  <input class="input_v" type="text" id='name' name='name'/>
                </div>
                <br />
                <div class="f_items m">
                  <label htmlFor="email">Email:</label>
                  <input class="input_v" type="email" id='email' name='email'/>
                </div>
                <br />
                <div class="f_items m">
                  <label htmlFor="password">Password:</label>
                  <input class="input_v" type="password" id='password' name='password' />
                </div>
                <br />
                <div class="f_items m">
                  <label htmlFor="c_pwd">Confirm Password:</label>
                  <input class="input_v" type="password" id='c_pwd' name='c_pwd'/>
                </div>
                <div id='bottom_login'>
                  <div>
                    <input type="checkbox" id='show_pwd' name='show_pwd'/>
                    <label className="text-blue-200 text-xs ps-1" htmlFor="show_pwd">I agree with <a href="#" class="links_color">Privacy and Policy</a></label>
                  </div>
                </div>
                <br />
                <input type="submit" id='submit' class='submit_b' name='Submit' />

                <p className="text-xs text-blue-200">or continued with</p>

                <div className="min-h-7 max-h-7 text-blue-200">
                <a class='an' className="mr-5 p-0.5 text-center rounded-2xl min-w-7 max-w-7 min-h-7 max-h-7 hover:bg-pink-500 hover:text-white" href="">Go</a>
                <a class='an' className="p-0.5 text-center text-blue-200 rounded-2xl min-w-7 hover:min-w-7 max-w-7 min-h-7 max-h-7 hover:bg-blue-500 hover:text-white" href="">Fa</a>
                </div>
                <p className="text-blue-200 text-xs">Already have an account? <a class="links_color" href="#">Log In</a></p>
            </form>
        </div>
    </div>
    </>
  )
}

export default Signup