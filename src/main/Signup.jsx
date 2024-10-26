import React from 'react'
import './Login.css'

function Signup() {
  return (
    <>
    <div id='box_l'>
        <div className='flex justify-center item-center mx-1 my-0.5 w-3/4 px-3 h-full min-h-fit'>
            <img className="h-full rounded-2xl" width="90%" src="src/assets/giphy (5).webp" alt="gif" />
        </div>
        <div className="w-1/4 border-2 border-pink-600 h-fit p-2.5 rounded-xl hover:bg-gradient-to-br from-pink-600 to-blue-500 mx-5px my-2px">
            <form className="p-5" action="">
                <div>
                  <p className="text-blue-200">Sign Up</p>
                </div>
                <br />
                <div className="text-sm" class="f_items">
                  <label htmlFor="name">Name:</label>
                  <input className="text-black" class="input_v" type="email" id='name' name='name'/>
                </div>
                <br />
                <div className="text-sm" class="f_items">
                  <label htmlFor="email">Email:</label>
                  <input className="text-black" class="input_v" type="email" id='email' name='email'/>
                </div>
                <br />
                <div className="text-sm" class="f_items">
                  <label htmlFor="password">Password:</label>
                  <input className="text-black" class="input_v" type="password" id='password' name='password' />
                </div>
                <br />
                <div className="text-sm" class="f_items">
                  <label htmlFor="c_password">Confirm Password:</label>
                  <input className="text-black" class="input_v" type="password" id='c_password' name='c_password' />
                </div>
                <br />
                <div id='bottom_login'>
                  <div>
                    <input type="checkbox" id='show_pwd' name='show_pwd'/>
                    <label className="text-blue-200 text-xs ps-1" htmlFor="show_pwd">I agree with <a href="#" class="links_color">Privacy and Policy</a></label>
                  </div>
                </div>
                <br />
                <input className="rounded-md bg-slate-600 w-full text-blue-200 p-1 hover:bg-slate-500 hover:text-white  "type="submit" id='submit' name='Submit' />

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