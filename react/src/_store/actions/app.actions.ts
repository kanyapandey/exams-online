/*
 * action types
 */

export const USER_SELECTED = 'user selected'


export const userSelected =(payload: any)=>{
  console.log('suer selected')
  return {type: USER_SELECTED, payload}
}

export const appActions = userSelected;
