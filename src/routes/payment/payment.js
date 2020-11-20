/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import useStyles from 'isomorphic-style-loader/useStyles';
import React from 'react';
import PropTypes from 'prop-types';


export default function Contact({ title }) {

  return (
    <>

        <h1>{title}</h1>
        <p>...</p>
        <form action="/charge" method="POST" class="flex flex-col w-1/3">
             <input class="bg-transparent text-white p-2 h-10 mb-4" type="text" name="name" placeholder="Name"/>
             <input type="email" class="bg-transparent text-white p-2 h-10 mb-4" name="email" placeholder="Email"/>
             <input class="bg-transparent text-white p-2 h-10 mb-4" type="text" name="amount" placeholder="Amount"/>

             <div id="card-element" class="bg-transparent text-white p-2 h-10 mb-4"></div>
             <div id="card-errors" role="alert"></div>
             <button class="text-white bg-purple-900 p-4 rounded">Submit Payment</button>
           </form>

    </>
  );
}

Contact.propTypes = {
  title: PropTypes.string.isRequired,
};
