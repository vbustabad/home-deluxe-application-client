import React from 'react';

const Signup = () =>
    <div>
      <h2>Signup</h2> 
      <form>
        <div>
          <label htmlFor="username">Username </label>
          <input type="text" name="username" placeholder="Username" />
        </div>
        <div>
          <label htmlFor="password">Password </label>
          <input type="password" name="password" placeholder="Password" />
        </div>
          <br />
          <input type="submit" value="Signup" />
      </form>
    </div>

export default Signup;