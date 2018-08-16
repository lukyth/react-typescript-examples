/**
 * 1. type-safe context usage
 * 2. Can't set/get invalid value
 */

import React from 'react'

export default React.createContext<'200px' | '400px'>('200px')
